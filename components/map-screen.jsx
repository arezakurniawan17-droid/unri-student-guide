const { useState, useEffect, useRef } = React;

// Map Screen Component
function MapScreen({ t, onBack }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [showDirections, setShowDirections] = useState(false);
    
    const categories = [
        { id: 'all', icon: '📍', label: t.allLocations || 'Semua' },
        { id: 'faculty', icon: '🏫', label: t.faculties || 'Fakultas' },
        { id: 'facility', icon: '🏢', label: t.facilities || 'Fasilitas' },
        { id: 'service', icon: '🏛️', label: t.services || 'Layanan' },
        { id: 'dining', icon: '🍽️', label: t.dining || 'Makan' },
        { id: 'parking', icon: '🅿️', label: t.parking || 'Parkir' },
    ];
    
    const locations = [
        {
            id: 1,
            name: 'Fakultas Teknik',
            nameEn: 'Faculty of Engineering',
            category: 'faculty',
            coords: { x: 35, y: 40 },
            icon: '🏫',
            description: 'Gedung Fakultas Teknik - 5 Lantai',
            descriptionEn: 'Engineering Faculty Building - 5 Floors',
            facilities: ['Lab Komputer', 'Ruang Dosen', 'Auditorium'],
            color: 'var(--color-primary)',
        },
        {
            id: 2,
            name: 'Fakultas Ekonomi',
            nameEn: 'Faculty of Economics',
            category: 'faculty',
            coords: { x: 60, y: 35 },
            icon: '🏫',
            description: 'Gedung Fakultas Ekonomi dan Bisnis',
            descriptionEn: 'Faculty of Economics and Business Building',
            facilities: ['Lab Ekonomi', 'Ruang Kuliah', 'Perpustakaan'],
            color: 'var(--color-info)',
        },
        {
            id: 3,
            name: 'Perpustakaan Pusat',
            nameEn: 'Central Library',
            category: 'facility',
            coords: { x: 48, y: 55 },
            icon: '📚',
            description: 'Perpustakaan Universitas - Buka 08:00-20:00',
            descriptionEn: 'University Library - Open 08:00-20:00',
            facilities: ['Ruang Baca', 'Digital Library', 'Diskusi Group'],
            color: 'var(--color-accent)',
        },
        {
            id: 4,
            name: 'Rektorat',
            nameEn: 'Rectorate',
            category: 'service',
            coords: { x: 50, y: 25 },
            icon: '🏛️',
            description: 'Gedung Administrasi Pusat',
            descriptionEn: 'Central Administration Building',
            facilities: ['Biro Akademik', 'Biro Keuangan', 'BAK'],
            color: 'var(--color-warning)',
        },
        {
            id: 5,
            name: 'Kantin Mahasiswa',
            nameEn: 'Student Cafeteria',
            category: 'dining',
            coords: { x: 30, y: 65 },
            icon: '🍽️',
            description: 'Area Makan - Berbagai Pilihan Menu',
            descriptionEn: 'Dining Area - Various Menu Options',
            facilities: ['Kantin A', 'Kantin B', 'Food Court'],
            color: 'oklch(0.65 0.15 45)',
        },
        {
            id: 6,
            name: 'Gedung Olahraga',
            nameEn: 'Sports Center',
            category: 'facility',
            coords: { x: 70, y: 60 },
            icon: '⚽',
            description: 'Fasilitas Olahraga & Fitness',
            descriptionEn: 'Sports & Fitness Facilities',
            facilities: ['Lapangan Basket', 'Gym', 'Kolam Renang'],
            color: 'var(--color-success)',
        },
        {
            id: 7,
            name: 'Parkir Utama',
            nameEn: 'Main Parking',
            category: 'parking',
            coords: { x: 20, y: 50 },
            icon: '🅿️',
            description: 'Area Parkir - Kapasitas 500 kendaraan',
            descriptionEn: 'Parking Area - Capacity 500 vehicles',
            facilities: ['Motor', 'Mobil', '24/7'],
            color: 'var(--color-text-secondary)',
        },
        {
            id: 8,
            name: 'Masjid Kampus',
            nameEn: 'Campus Mosque',
            category: 'facility',
            coords: { x: 40, y: 70 },
            icon: '🕌',
            description: 'Tempat Ibadah - Buka 24 Jam',
            descriptionEn: 'Place of Worship - Open 24 Hours',
            facilities: ['Ruang Sholat', 'Wudhu', 'Kajian'],
            color: 'var(--color-primary-light)',
        },
    ];
    
    const filteredLocations = locations.filter(loc => {
        const matchesCategory = selectedCategory === 'all' || loc.category === selectedCategory;
        const matchesSearch = searchQuery === '' || 
            loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            loc.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    return (
        <div style={mapScreenStyles.container}>
            <div style={mapScreenStyles.header}>
                <button style={mapScreenStyles.backButton} onClick={onBack}>
                    ← Kembali
                </button>
                <h2 style={mapScreenStyles.headerTitle}>{t.campusMap}</h2>
                <div style={{width: '24px'}}></div>
            </div>
            
            <div style={mapScreenStyles.searchContainer}>
                <div style={mapScreenStyles.searchBar}>
                    <span style={mapScreenStyles.searchIcon}>🔍</span>
                    <input 
                        type="text"
                        placeholder={t.searchMapPlaceholder || 'Cari lokasi di kampus...'}
                        style={mapScreenStyles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button 
                            style={mapScreenStyles.clearButton}
                            onClick={() => setSearchQuery('')}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
            
            <div style={mapScreenStyles.categoryScroll}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        style={{
                            ...mapScreenStyles.categoryChip,
                            ...(selectedCategory === cat.id ? mapScreenStyles.categoryChipActive : {})
                        }}
                        onClick={() => setSelectedCategory(cat.id)}
                    >
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                    </button>
                ))}
            </div>
            
            <div style={mapScreenStyles.mapContainer}>
                <div style={mapScreenStyles.map}>
                    <svg viewBox="0 0 100 100" style={mapScreenStyles.mapSvg}>
                        {/* Campus boundary */}
                        <rect x="10" y="15" width="80" height="75" 
                            fill="oklch(0.97 0.02 145)" 
                            stroke="var(--color-border)" 
                            strokeWidth="0.5"
                            rx="2"
                        />
                        
                        {/* Roads */}
                        <line x1="10" y1="50" x2="90" y2="50" 
                            stroke="oklch(0.90 0.01 100)" 
                            strokeWidth="1.5"
                        />
                        <line x1="50" y1="15" x2="50" y2="90" 
                            stroke="oklch(0.90 0.01 100)" 
                            strokeWidth="1.5"
                        />
                        
                        {/* Green spaces */}
                        <circle cx="25" cy="30" r="8" fill="oklch(0.92 0.05 145)" opacity="0.6" />
                        <circle cx="75" cy="75" r="10" fill="oklch(0.92 0.05 145)" opacity="0.6" />
                        
                        {/* Location markers */}
                        {filteredLocations.map(loc => (
                            <g 
                                key={loc.id}
                                onClick={() => setSelectedLocation(loc)}
                                style={{cursor: 'pointer'}}
                            >
                                <circle 
                                    cx={loc.coords.x} 
                                    cy={loc.coords.y} 
                                    r={selectedLocation?.id === loc.id ? "3.5" : "2.5"}
                                    fill={loc.color}
                                    opacity={selectedLocation?.id === loc.id ? "1" : "0.9"}
                                    style={{transition: 'all 0.2s'}}
                                />
                                <circle 
                                    cx={loc.coords.x} 
                                    cy={loc.coords.y} 
                                    r={selectedLocation?.id === loc.id ? "6" : "4.5"}
                                    fill={loc.color}
                                    opacity="0.2"
                                />
                            </g>
                        ))}
                    </svg>
                    
                    {/* Location labels overlay */}
                    {filteredLocations.map(loc => (
                        <div
                            key={`label-${loc.id}`}
                            style={{
                                position: 'absolute',
                                left: `${loc.coords.x}%`,
                                top: `${loc.coords.y}%`,
                                transform: 'translate(-50%, -120%)',
                                pointerEvents: 'none',
                                opacity: selectedLocation?.id === loc.id ? 1 : 0.7,
                                transition: 'all 0.2s',
                            }}
                        >
                            <div style={{
                                background: 'white',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                fontSize: '10px',
                                fontWeight: '600',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                whiteSpace: 'nowrap',
                                border: selectedLocation?.id === loc.id ? `2px solid ${loc.color}` : '1px solid var(--color-border)',
                            }}>
                                <span style={{marginRight: '4px'}}>{loc.icon}</span>
                                {loc.name}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div style={mapScreenStyles.mapControls}>
                    <button style={mapScreenStyles.mapButton}>🔍 +</button>
                    <button style={mapScreenStyles.mapButton}>🔍 −</button>
                    <button style={mapScreenStyles.mapButton}>📍</button>
                </div>
            </div>
            
            {selectedLocation && (
                <div style={mapScreenStyles.locationCard}>
                    <div style={mapScreenStyles.locationCardHeader}>
                        <div style={{
                            ...mapScreenStyles.locationIcon,
                            background: `${selectedLocation.color}20`,
                            color: selectedLocation.color,
                        }}>
                            {selectedLocation.icon}
                        </div>
                        <div style={{flex: 1}}>
                            <h3 style={mapScreenStyles.locationName}>{selectedLocation.name}</h3>
                            <p style={mapScreenStyles.locationDesc}>{selectedLocation.description}</p>
                        </div>
                        <button 
                            style={mapScreenStyles.closeButton}
                            onClick={() => setSelectedLocation(null)}
                        >
                            ✕
                        </button>
                    </div>
                    
                    <div style={mapScreenStyles.facilitiesList}>
                        {selectedLocation.facilities.map((facility, idx) => (
                            <span key={idx} style={mapScreenStyles.facilityBadge}>
                                {facility}
                            </span>
                        ))}
                    </div>
                    
                    <div style={mapScreenStyles.locationActions}>
                        <button 
                            style={{
                                ...mapScreenStyles.actionButton,
                                ...mapScreenStyles.primaryButton,
                            }}
                            onClick={() => setShowDirections(!showDirections)}
                        >
                            🧭 Petunjuk Arah
                        </button>
                        <button style={mapScreenStyles.actionButton}>
                            ℹ️ Info Detail
                        </button>
                        <button style={mapScreenStyles.actionButton}>
                            ⭐ Simpan
                        </button>
                    </div>
                    
                    {showDirections && (
                        <div style={mapScreenStyles.directionsBox}>
                            <h4 style={mapScreenStyles.directionsTitle}>🧭 Cara Menuju Lokasi</h4>
                            <ol style={mapScreenStyles.directionsList}>
                                <li>Masuk dari Gerbang Utama kampus</li>
                                <li>Ikuti jalan utama sejauh 200m</li>
                                <li>Belok kanan di pertigaan</li>
                                <li>Gedung ada di sebelah kiri (±50m)</li>
                            </ol>
                            <p style={mapScreenStyles.distanceInfo}>
                                📏 Estimasi jarak: ~300m (5 menit berjalan kaki)
                            </p>
                        </div>
                    )}
                </div>
            )}
            
            <div style={mapScreenStyles.locationsList}>
                <div style={mapScreenStyles.locationsListHeader}>
                    <h3 style={mapScreenStyles.locationsListTitle}>
                        {filteredLocations.length} Lokasi Ditemukan
                    </h3>
                </div>
                <div style={mapScreenStyles.locationsScroll}>
                    {filteredLocations.map(loc => (
                        <div 
                            key={loc.id}
                            style={{
                                ...mapScreenStyles.locationListItem,
                                ...(selectedLocation?.id === loc.id ? mapScreenStyles.locationListItemActive : {})
                            }}
                            onClick={() => setSelectedLocation(loc)}
                        >
                            <div style={{
                                ...mapScreenStyles.locationListIcon,
                                background: `${loc.color}20`,
                                color: loc.color,
                            }}>
                                {loc.icon}
                            </div>
                            <div style={{flex: 1}}>
                                <h4 style={mapScreenStyles.locationListName}>{loc.name}</h4>
                                <p style={mapScreenStyles.locationListDesc}>{loc.description}</p>
                            </div>
                            <span style={mapScreenStyles.chevron}>›</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapScreenStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'var(--color-bg)',
        paddingTop: '54px',
    },
    
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-md) var(--space-lg)',
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
    },
    
    backButton: {
        border: 'none',
        background: 'transparent',
        fontSize: '16px',
        fontWeight: '600',
        color: 'var(--color-primary)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
    },
    
    headerTitle: {
        fontSize: '18px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
    },
    
    searchContainer: {
        padding: 'var(--space-md) var(--space-lg)',
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
    },
    
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        background: 'var(--color-surface-secondary)',
        padding: '10px 14px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
    },
    
    searchIcon: {
        fontSize: '18px',
        color: 'var(--color-text-secondary)',
    },
    
    searchInput: {
        flex: 1,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        fontSize: '15px',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-body)',
    },
    
    clearButton: {
        border: 'none',
        background: 'var(--color-text-tertiary)',
        color: 'white',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        fontSize: '12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    categoryScroll: {
        display: 'flex',
        gap: 'var(--space-sm)',
        padding: 'var(--space-md) var(--space-lg)',
        overflowX: 'auto',
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
    },
    
    categoryChip: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 16px',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-full)',
        background: 'var(--color-surface)',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all 0.2s',
    },
    
    categoryChipActive: {
        background: 'var(--color-primary)',
        color: 'white',
        borderColor: 'var(--color-primary)',
    },
    
    mapContainer: {
        position: 'relative',
        flex: 1,
        minHeight: '300px',
        background: 'var(--color-surface-secondary)',
        overflow: 'hidden',
    },
    
    map: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    
    mapSvg: {
        width: '100%',
        height: '100%',
        display: 'block',
    },
    
    mapControls: {
        position: 'absolute',
        right: 'var(--space-md)',
        top: 'var(--space-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
    },
    
    mapButton: {
        width: '40px',
        height: '40px',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        background: 'white',
        boxShadow: 'var(--shadow-md)',
        fontSize: '16px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
    },
    
    locationCard: {
        background: 'white',
        borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.1)',
        padding: 'var(--space-lg)',
        borderTop: '3px solid var(--color-primary)',
    },
    
    locationCardHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-md)',
        marginBottom: 'var(--space-md)',
    },
    
    locationIcon: {
        width: '48px',
        height: '48px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        flexShrink: 0,
    },
    
    locationName: {
        fontSize: '18px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: '4px',
    },
    
    locationDesc: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.4',
    },
    
    closeButton: {
        border: 'none',
        background: 'var(--color-surface-secondary)',
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        cursor: 'pointer',
        flexShrink: 0,
    },
    
    facilitiesList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-sm)',
        marginBottom: 'var(--space-md)',
    },
    
    facilityBadge: {
        padding: '4px 12px',
        background: 'var(--color-surface-secondary)',
        borderRadius: 'var(--radius-full)',
        fontSize: '12px',
        fontWeight: '600',
        color: 'var(--color-text-secondary)',
    },
    
    locationActions: {
        display: 'flex',
        gap: 'var(--space-sm)',
    },
    
    actionButton: {
        flex: 1,
        padding: '12px',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-surface)',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text)',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    
    primaryButton: {
        background: 'var(--color-primary)',
        color: 'white',
        borderColor: 'var(--color-primary)',
    },
    
    directionsBox: {
        marginTop: 'var(--space-md)',
        padding: 'var(--space-md)',
        background: 'var(--color-surface-secondary)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
    },
    
    directionsTitle: {
        fontSize: '15px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-sm)',
    },
    
    directionsList: {
        paddingLeft: '20px',
        marginBottom: 'var(--space-sm)',
    },
    
    distanceInfo: {
        fontSize: '13px',
        color: 'var(--color-text-secondary)',
        fontWeight: '600',
    },
    
    locationsList: {
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
    },
    
    locationsListHeader: {
        padding: 'var(--space-md) var(--space-lg)',
        borderBottom: '1px solid var(--color-border)',
    },
    
    locationsListTitle: {
        fontSize: '15px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
    },
    
    locationsScroll: {
        maxHeight: '200px',
        overflowY: 'auto',
    },
    
    locationListItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-md) var(--space-lg)',
        borderBottom: '1px solid var(--color-border)',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    
    locationListItemActive: {
        background: 'var(--color-surface-secondary)',
    },
    
    locationListIcon: {
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        flexShrink: 0,
    },
    
    locationListName: {
        fontSize: '15px',
        fontWeight: '600',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text)',
        marginBottom: '2px',
    },
    
    locationListDesc: {
        fontSize: '13px',
        color: 'var(--color-text-tertiary)',
    },
    
    chevron: {
        fontSize: '24px',
        color: 'var(--color-text-tertiary)',
    },
};

Object.assign(window, { MapScreen });
