// ============================================
// STATE MANAGEMENT
// ============================================
let map;
let activeMarkerId = null;
let currentFilter = 'all';
const markers = {};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
    initializeMarkers();
    renderList('all');
    initializeURLHandling();
});

// ============================================
// MAP INITIALIZATION
// ============================================
function initializeMap() {
    // Check if mobile
    const isMobile = window.innerWidth < 768;

    // Performance-optimized map options
    map = L.map('map', {
        zoomControl: false,
        preferCanvas: true,
        updateWhenZooming: false,
        updateWhenIdle: true,
        // Mobile-specific performance
        tap: isMobile,
        tapTolerance: 15,
        touchZoom: 'center',
        bounceAtZoomLimits: false,
        // Reduce animations on mobile
        fadeAnimation: !isMobile,
        zoomAnimation: !isMobile,
        markerZoomAnimation: !isMobile,
        // Wheel/scroll optimization
        wheelDebounceTime: 100,
        wheelPxPerZoomLevel: 120
    }).setView([43.604, 1.444], 8);

    // Add zoom control to bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Define base layers
    const standardLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    });

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri &copy; Maxar',
        maxZoom: 19
    });

    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenTopoMap (CC-BY-SA)',
        maxZoom: 17
    });

    // Add default layer
    standardLayer.addTo(map);

    // Create layer control
    const baseLayers = {
        "🗺️ Standard": standardLayer,
        "🛰️ Satellit": satelliteLayer,
        "⛰️ Höhenprofil": topoLayer
    };

    L.control.layers(baseLayers, null, {
        position: 'topright',
        collapsed: isMobile
    }).addTo(map);
}

// ============================================
// MARKER CREATION
// ============================================
function getIcon(type) {
    let colorClass = 'type-schlucht';
    let iconClass = 'fa-person-hiking'; // Schluchten = Wanderungen

    if (type === 'hoehle') {
        colorClass = 'type-hoehle';
        iconClass = 'fa-dungeon'; // Grotten = Höhle/Dungeon
    } else if (type === 'panorama') {
        colorClass = 'type-panorama';
        iconClass = 'fa-mountain-sun'; // Natur = Berg mit Sonne
    } else if (type === 'stadt') {
        colorClass = 'type-stadt';
        iconClass = 'fa-city';
    } else if (type === 'fossil') {
        colorClass = 'type-fossil';
        iconClass = 'fa-dragon'; // Fossilien = Drache (Dino-ähnlich)
    }

    return L.divIcon({
        className: `custom-div-icon ${colorClass}`,
        html: `<div class='marker-pin'></div><i class='fa-solid ${iconClass} marker-icon'></i>`,
        iconSize: [40, 42],
        iconAnchor: [20, 42]
    });
}

function createPopupContent(loc) {
    return `
        <div class="min-w-[240px] font-sans">
            <div class="flex items-center gap-2 mb-2 border-b border-stone-100 pb-2">
                <h3 class="font-bold text-stone-800 serif-font text-lg">${loc.title}</h3>
                ${loc.type === 'wild' ? '<i class="fa-solid fa-triangle-exclamation text-red-500 animate-pulse" title="Achtung: Wild!"></i>' : ''}
            </div>
            <p class="text-sm text-stone-700 mb-2 font-medium">${loc.shortDesc}</p>
            <p class="text-xs text-stone-500 mb-3 leading-relaxed">${loc.details}</p>
            ${loc.type === 'wild' ? '<p class="text-[10px] text-red-600 font-bold mb-3 flex items-center bg-red-50 p-1.5 rounded"><i class="fa-solid fa-skull-crossbones mr-2"></i>Keine Erschließung/Licht!</p>' : ''}
            ${loc.routeLink ? `
            <a href="${loc.routeLink}" target="_blank" class="block w-full text-center text-xs font-bold text-white ${loc.type === 'wild' ? 'bg-red-700 hover:bg-red-800' : 'bg-emerald-700 hover:bg-emerald-800'} px-3 py-2 rounded transition-colors uppercase tracking-wide">
                Route öffnen <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
            </a>
            ` : ''}
        </div>
    `;
}

// ============================================
// MARKER INITIALIZATION
// ============================================
function initializeMarkers() {
    locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], { icon: getIcon(loc.type) }).addTo(map);

        marker.bindPopup(createPopupContent(loc));

        marker.on('click', () => {
            focusLocation(loc.id, false);
        });

        markers[loc.id] = marker;
    });
}

// ============================================
// LIST RENDERING
// ============================================
function renderList(filter = 'all') {
    const listContainer = document.getElementById('location-list');
    const countDisplay = document.getElementById('count-display');

    if (!listContainer) return;

    listContainer.innerHTML = '';
    let count = 0;

    locations.forEach((loc, index) => {
        if (filter !== 'all' && loc.type !== filter) return;
        count++;

        const card = document.createElement('div');
        card.className = `location-card ${activeMarkerId === loc.id ? 'active' : ''}`;
        card.style.animationDelay = `${index * 30}ms`;
        card.classList.add('fade-in');

        card.onclick = (e) => {
            // Prevent map flyTo if clicking the route button
            if (e.target.closest('a')) return;
            focusLocation(loc.id);
        };

        const typeLabel = loc.type === 'wild' ? 'WILD / INSIDER' : loc.type.toUpperCase();
        const typeColor = loc.type === 'wild' ? 'bg-red-100 text-red-700' : 'bg-stone-100 text-stone-500';

        card.innerHTML = `
            <div class="flex gap-4">
                <div class="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-stone-200 relative shadow-inner">
                    <img src="${loc.image}" 
                         loading="lazy" 
                         class="w-full h-full object-cover" 
                         alt="${loc.title}"
                         onload="this.classList.add('loaded')">
                    ${loc.type === 'wild' ? '<div class="absolute top-0 right-0 bg-red-600 text-white text-[10px] px-1.5 py-0.5 font-bold shadow-sm">WILD</div>' : ''}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-stone-800 text-sm md:text-base truncate pr-2 serif-font">${loc.title}</h3>
                    </div>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded ${typeColor} border border-transparent tracking-wide inline-block mb-1.5">${typeLabel}</span>
                    
                    <p class="text-xs text-amber-700 font-medium mb-1 truncate">${loc.shortDesc}</p>
                    <p class="text-[11px] text-stone-500 leading-snug line-clamp-2 mb-2.5">${loc.description}</p>
                    
                    ${loc.routeLink ? `
                    <a href="${loc.routeLink}" target="_blank" class="inline-flex items-center text-[10px] font-bold text-white ${loc.type === 'wild' ? 'bg-red-700 hover:bg-red-800' : 'bg-stone-800 hover:bg-stone-900'} px-3 py-1.5 rounded-full transition-colors z-20 relative shadow-sm">
                        ROUTE <i class="fa-solid fa-arrow-up-right-from-square ml-1.5"></i>
                    </a>
                    ` : ''}
                </div>
            </div>
        `;

        listContainer.appendChild(card);
    });

    if (countDisplay) {
        countDisplay.innerText = `${count} Orte gefunden`;
    }
}

// ============================================
// LOCATION FOCUS
// ============================================
function focusLocation(id, fly = true) {
    activeMarkerId = id;
    const loc = locations.find(l => l.id === id);

    if (!loc) return;

    if (fly) {
        map.flyTo([loc.lat, loc.lng], 13, { duration: 1.2 });
        setTimeout(() => {
            markers[id].openPopup();
        }, 600);
    } else {
        markers[id].openPopup();
    }

    // Update URL
    updateURL(id);

    // Re-render list to update active state
    renderList(currentFilter);

    // Scroll to active card
    scrollToActiveCard(id);
}

// ============================================
// SCROLL TO ACTIVE CARD
// ============================================
function scrollToActiveCard(id) {
    setTimeout(() => {
        const activeCard = document.querySelector('.location-card.active');
        if (activeCard) {
            activeCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, 100);
}

// ============================================
// FILTER MANAGEMENT
// ============================================
function filterMap(type) {
    currentFilter = type;

    // Update filter buttons
    updateFilterButtons(type);

    // Update marker visibility
    updateMarkerVisibility(type);

    // Re-render list
    renderList(type);

    // Update URL
    updateURL(null, type);
}

function updateFilterButtons(type) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        // Reset to base class
        btn.className = "filter-btn snap-start px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all whitespace-nowrap";

        const btnText = btn.innerText.toLowerCase();

        // Determine if this button should be active
        let isActive = false;
        if (type === 'all' && btnText === 'alle') isActive = true;
        else if (type === 'hoehle' && btnText.includes('höhlen')) isActive = true;
        else if (type === 'schlucht' && btnText.includes('schluchten')) isActive = true;
        else if (type === 'panorama' && btnText.includes('natur')) isActive = true;
        else if (type === 'fossil' && btnText.includes('fossil')) isActive = true;

        if (isActive) {
            btn.classList.add(`active-${type}`);
        } else {
            btn.classList.add('bg-white', 'text-stone-600', 'border', 'border-stone-200');
            btn.classList.add('hover:border-stone-400', 'hover:bg-stone-100');
        }
    });
}

function updateMarkerVisibility(type) {
    locations.forEach(loc => {
        const marker = markers[loc.id];
        if (type === 'all' || loc.type === type) {
            if (!map.hasLayer(marker)) map.addLayer(marker);
        } else {
            if (map.hasLayer(marker)) map.removeLayer(marker);
        }
    });
}

// ============================================
// MODAL TOGGLE
// ============================================
function toggleGuide() {
    const guide = document.getElementById('tech-guide');
    if (guide) {
        guide.classList.toggle('translate-y-full');
    }
}

// ============================================
// URL HANDLING (for sharing)
// ============================================
function initializeURLHandling() {
    // Read URL parameters on load
    const params = new URLSearchParams(window.location.search);
    const locationId = params.get('loc');
    const filter = params.get('filter');

    if (filter && filter !== 'all') {
        filterMap(filter);
    }

    if (locationId) {
        const id = parseInt(locationId);
        setTimeout(() => {
            focusLocation(id, true);
        }, 500);
    }
}

function updateURL(locationId = null, filter = null) {
    const params = new URLSearchParams();

    if (filter || currentFilter !== 'all') {
        params.set('filter', filter || currentFilter);
    }

    if (locationId) {
        params.set('loc', locationId);
    }

    const newURL = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', newURL);
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    // Escape key closes guide
    if (e.key === 'Escape') {
        const guide = document.getElementById('tech-guide');
        if (guide && !guide.classList.contains('translate-y-full')) {
            toggleGuide();
        }
    }
});

// ============================================
// EXPOSE FUNCTIONS GLOBALLY
// ============================================
// ============================================
// MOBILE FILTER TOGGLE
// ============================================
function toggleMobileFilters() {
    const filterBar = document.getElementById('filter-bar');
    const chevron = document.getElementById('filter-chevron');

    if (filterBar.classList.contains('hidden')) {
        filterBar.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
    } else {
        filterBar.classList.add('hidden');
        chevron.style.transform = 'rotate(0deg)';
    }
}

window.filterMap = filterMap;
window.focusLocation = focusLocation;
window.toggleGuide = toggleGuide;
window.toggleMobileFilters = toggleMobileFilters;
