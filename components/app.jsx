const { useState, useEffect } = React;

// Design system values from root CSS variables
const appStyles = {
    app: {
        width: '100%',
        height: '100%',
        background: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
    },
    
    // Screens
    screen: {
        flex: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        WebkitOverflowScrolling: 'touch',
    },
    
    // Onboarding
    onboarding: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-xl)',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        color: 'white',
        textAlign: 'center',
    },
    
    logoContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-lg)',
    },
    
    logo: {
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        background: 'white',
        padding: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    },
    
    logoImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    
    welcomeTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '32px',
        fontWeight: '800',
        lineHeight: '1.2',
        marginBottom: 'var(--space-sm)',
    },
    
    welcomeSubtitle: {
        fontSize: '16px',
        lineHeight: '1.5',
        opacity: '0.9',
        maxWidth: '280px',
    },
    
    languageSelector: {
        display: 'flex',
        gap: 'var(--space-md)',
        marginTop: 'var(--space-xl)',
    },
    
    langButton: {
        padding: '12px 28px',
        border: '2px solid rgba(255,255,255,0.3)',
        borderRadius: 'var(--radius-full)',
        background: 'transparent',
        color: 'white',
        fontSize: '15px',
        fontWeight: '600',
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    
    langButtonActive: {
        background: 'white',
        color: 'var(--color-primary)',
        borderColor: 'white',
    },
    
    getStartedButton: {
        width: '100%',
        padding: '16px',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        background: 'white',
        color: 'var(--color-primary)',
        fontSize: '17px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        transition: 'transform 0.2s',
    },
    
    // Home Screen
    homeHeader: {
        background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        color: 'white',
        padding: 'var(--space-xl) var(--space-lg) var(--space-lg)',
        paddingTop: '70px',
        borderRadius: '0 0 var(--radius-xl) var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
    },
    
    headerTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--space-lg)',
    },
    
    headerLogo: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
    },
    
    headerLogoImg: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'white',
        padding: '4px',
    },
    
    headerTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '18px',
        fontWeight: '700',
    },
    
    langSwitch: {
        padding: '6px 12px',
        border: '1.5px solid rgba(255,255,255,0.4)',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(255,255,255,0.15)',
        color: 'white',
        fontSize: '13px',
        fontWeight: '600',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
    },
    
    greeting: {
        fontSize: '28px',
        fontWeight: '800',
        fontFamily: 'var(--font-display)',
        marginBottom: 'var(--space-xs)',
        lineHeight: '1.2',
    },
    
    subGreeting: {
        fontSize: '15px',
        opacity: '0.9',
    },
    
    searchBar: {
        marginTop: 'var(--space-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        background: 'rgba(255,255,255,0.95)',
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    
    searchIcon: {
        fontSize: '20px',
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
    
    quickActions: {
        padding: 'var(--space-lg)',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'var(--space-md)',
    },
    
    quickActionCard: {
        background: 'var(--color-surface)',
        padding: 'var(--space-lg)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-border)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
    },
    
    quickActionIcon: {
        width: '48px',
        height: '48px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        marginBottom: 'var(--space-xs)',
    },
    
    quickActionTitle: {
        fontSize: '15px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        lineHeight: '1.3',
    },
    
    quickActionDesc: {
        fontSize: '12px',
        color: 'var(--color-text-tertiary)',
        lineHeight: '1.4',
    },
    
    // Bottom Navigation
    bottomNav: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-sm) 0',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
    },
    
    navItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: 'var(--space-sm)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-body)',
        flex: 1,
    },
    
    navIcon: {
        fontSize: '24px',
        transition: 'all 0.2s',
    },
    
    navLabel: {
        fontSize: '11px',
        fontWeight: '600',
        transition: 'all 0.2s',
    },
    
    // Common content styles
    contentPadding: {
        padding: 'var(--space-lg)',
    },
    
    sectionTitle: {
        fontSize: '20px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-md)',
    },
    
    card: {
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-border)',
        marginBottom: 'var(--space-md)',
    },
    
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)',
        fontSize: '12px',
        fontWeight: '600',
        gap: '4px',
    },
};

// Main App Component
function App() {
    const [currentScreen, setCurrentScreen] = useState('onboarding');
    const [language, setLanguage] = useState('id');
    const [searchQuery, setSearchQuery] = useState('');
    
    const t = translations[language];
    
    useEffect(() => {
        // Load saved screen from localStorage
        const savedScreen = localStorage.getItem('unri_current_screen');
        if (savedScreen) {
            setCurrentScreen(savedScreen);
        }
        
        // Load saved language
        const savedLang = localStorage.getItem('unri_language');
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('unri_current_screen', currentScreen);
        localStorage.setItem('unri_language', language);
    }, [currentScreen, language]);
    
    const handleGetStarted = () => {
        setCurrentScreen('home');
    };
    
    const toggleLanguage = () => {
        setLanguage(language === 'id' ? 'en' : 'id');
    };
    
    return (
        <div style={appStyles.app}>
            {currentScreen === 'onboarding' && (
                <OnboardingScreen 
                    language={language}
                    onLanguageChange={setLanguage}
                    onGetStarted={handleGetStarted}
                    t={t}
                />
            )}
            
            {currentScreen !== 'onboarding' && (
                <>
                    <div style={appStyles.screen}>
                        {currentScreen === 'home' && (
                            <HomeScreen 
                                t={t}
                                language={language}
                                onLanguageToggle={toggleLanguage}
                                onNavigate={setCurrentScreen}
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                            />
                        )}
                        {currentScreen === 'map' && (
                            <MapScreen 
                                t={t}
                                onBack={() => setCurrentScreen('home')}
                            />
                        )}
                        {currentScreen === 'directory' && (
                            <DirectoryScreen 
                                t={t}
                                onBack={() => setCurrentScreen('home')}
                            />
                        )}
                        {currentScreen === 'schedule' && (
                            <ScheduleScreen 
                                t={t}
                                onBack={() => setCurrentScreen('home')}
                            />
                        )}
                        {currentScreen === 'admin' && (
                            <AdminGuideScreen 
                                t={t}
                                onBack={() => setCurrentScreen('home')}
                            />
                        )}
                        {currentScreen === 'services' && (
                            <ServicesScreen 
                                t={t}
                                onBack={() => setCurrentScreen('home')}
                            />
                        )}
                        {currentScreen === 'profile' && (
                            <ProfileScreen 
                                t={t}
                                onBack={() => setCurrentScreen('home')}
                            />
                        )}
                        {currentScreen === 'emergency' && (
                            <EmergencyScreen 
                                t={t}
                                onBack={() => setCurrentScreen('home')}
                            />
                        )}
                    </div>
                    
                    <BottomNavigation 
                        currentScreen={currentScreen}
                        onNavigate={setCurrentScreen}
                        t={t}
                    />
                </>
            )}
        </div>
    );
}

// Onboarding Screen Component
function OnboardingScreen({ language, onLanguageChange, onGetStarted, t }) {
    return (
        <div style={appStyles.onboarding}>
            <div style={appStyles.logoContainer}>
                <div style={appStyles.logo}>
                    <img src="uploads/logo_assets-1779260556580.png" alt="UNRI Logo" style={appStyles.logoImg} />
                </div>
                <div>
                    <h1 style={appStyles.welcomeTitle}>{t.welcome}</h1>
                    <p style={appStyles.welcomeSubtitle}>{t.welcomeDesc}</p>
                </div>
                
                <div style={appStyles.languageSelector}>
                    <button 
                        style={{
                            ...appStyles.langButton,
                            ...(language === 'id' ? appStyles.langButtonActive : {})
                        }}
                        onClick={() => onLanguageChange('id')}
                    >
                        🇮🇩 Indonesia
                    </button>
                    <button 
                        style={{
                            ...appStyles.langButton,
                            ...(language === 'en' ? appStyles.langButtonActive : {})
                        }}
                        onClick={() => onLanguageChange('en')}
                    >
                        🇬🇧 English
                    </button>
                </div>
            </div>
            
            <button 
                style={appStyles.getStartedButton}
                onClick={onGetStarted}
                onMouseEnter={(e) => e.target.style.transform = 'scale(0.98)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
                {t.getStarted}
            </button>
        </div>
    );
}

// Home Screen Component
function HomeScreen({ t, language, onLanguageToggle, onNavigate, searchQuery, onSearchChange }) {
    const quickActions = [
        { 
            id: 'map',
            icon: '🗺️', 
            title: t.campusMap, 
            desc: t.campusMapDesc,
            color: 'var(--color-primary)',
            bgColor: 'oklch(0.95 0.03 145)',
        },
        { 
            id: 'directory',
            icon: '👥', 
            title: t.directory, 
            desc: t.directoryDesc,
            color: 'var(--color-info)',
            bgColor: 'oklch(0.95 0.03 240)',
        },
        { 
            id: 'schedule',
            icon: '📅', 
            title: t.pkkmbSchedule, 
            desc: t.pkkmbScheduleDesc,
            color: 'var(--color-accent)',
            bgColor: 'oklch(0.95 0.03 85)',
        },
        { 
            id: 'admin',
            icon: '📋', 
            title: t.adminGuide, 
            desc: t.adminGuideDesc,
            color: 'var(--color-warning)',
            bgColor: 'oklch(0.95 0.03 75)',
        },
        { 
            id: 'services',
            icon: '🏛️', 
            title: t.campusServices, 
            desc: t.campusServicesDesc,
            color: 'oklch(0.55 0.15 320)',
            bgColor: 'oklch(0.95 0.03 320)',
        },
        { 
            id: 'emergency',
            icon: '🚨', 
            title: t.emergency, 
            desc: t.emergencyDesc,
            color: 'var(--color-error)',
            bgColor: 'oklch(0.95 0.03 25)',
        },
    ];
    
    return (
        <>
            <div style={appStyles.homeHeader}>
                <div style={appStyles.headerTop}>
                    <div style={appStyles.headerLogo}>
                        <img src="uploads/logo_assets-1779260556580.png" alt="UNRI" style={appStyles.headerLogoImg} />
                        <span style={appStyles.headerTitle}>UNRI Guide</span>
                    </div>
                    <button style={appStyles.langSwitch} onClick={onLanguageToggle}>
                        {language === 'id' ? '🇬🇧 EN' : '🇮🇩 ID'}
                    </button>
                </div>
                
                <h2 style={appStyles.greeting}>{t.greeting}</h2>
                <p style={appStyles.subGreeting}>{t.subGreeting}</p>
                
                <div style={appStyles.searchBar}>
                    <span style={appStyles.searchIcon}>🔍</span>
                    <input 
                        type="text"
                        placeholder={t.searchPlaceholder}
                        style={appStyles.searchInput}
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>
            
            <div style={appStyles.quickActions}>
                {quickActions.map(action => (
                    <div 
                        key={action.id}
                        style={appStyles.quickActionCard}
                        onClick={() => onNavigate(action.id)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                        }}
                    >
                        <div style={{
                            ...appStyles.quickActionIcon,
                            background: action.bgColor,
                            color: action.color,
                        }}>
                            {action.icon}
                        </div>
                        <h3 style={appStyles.quickActionTitle}>{action.title}</h3>
                        <p style={appStyles.quickActionDesc}>{action.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

// Bottom Navigation Component
function BottomNavigation({ currentScreen, onNavigate, t }) {
    const navItems = [
        { id: 'home', icon: '🏠', label: t.navHome },
        { id: 'map', icon: '🗺️', label: t.navMap },
        { id: 'schedule', icon: '📅', label: t.navSchedule },
        { id: 'services', icon: '🏛️', label: t.navServices },
        { id: 'profile', icon: '👤', label: t.navProfile },
    ];
    
    return (
        <nav style={appStyles.bottomNav}>
            {navItems.map(item => {
                const isActive = currentScreen === item.id;
                return (
                    <button
                        key={item.id}
                        style={appStyles.navItem}
                        onClick={() => onNavigate(item.id)}
                    >
                        <span style={{
                            ...appStyles.navIcon,
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                        }}>
                            {item.icon}
                        </span>
                        <span style={{
                            ...appStyles.navLabel,
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                        }}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}

// Placeholder screens (will be loaded from separate files)
// MapScreen loaded from map-screen.jsx
// Other screens will be built next

// Translations
const translations = {
    id: {
        welcome: 'Selamat Datang di UNRI',
        welcomeDesc: 'Panduan lengkap untuk mahasiswa baru Universitas Riau',
        getStarted: 'Mulai Sekarang',
        greeting: 'Halo, Mahasiswa!',
        subGreeting: 'Jelajahi kampus dengan mudah',
        searchPlaceholder: 'Cari lokasi, dosen, atau layanan...',
        searchMapPlaceholder: 'Cari lokasi di kampus...',
        campusMap: 'Peta Kampus',
        campusMapDesc: 'Navigasi interaktif seluruh area kampus',
        directory: 'Direktori Dosen',
        directoryDesc: 'Daftar dosen dan kontak penting',
        pkkmbSchedule: 'Jadwal PKKMB',
        pkkmbScheduleDesc: 'Timeline dan agenda kegiatan',
        adminGuide: 'Panduan Admin',
        adminGuideDesc: 'Prosedur administrasi kampus',
        campusServices: 'Layanan Kampus',
        campusServicesDesc: 'Fasilitas dan layanan mahasiswa',
        emergency: 'Kontak Darurat',
        emergencyDesc: 'Nomor penting untuk keadaan darurat',
        navHome: 'Beranda',
        navMap: 'Peta',
        navSchedule: 'Jadwal',
        navServices: 'Layanan',
        navProfile: 'Profil',
        allLocations: 'Semua',
        faculties: 'Fakultas',
        facilities: 'Fasilitas',
        services: 'Layanan',
        dining: 'Makan',
        parking: 'Parkir',
    },
    en: {
        welcome: 'Welcome to UNRI',
        welcomeDesc: 'Complete guide for new students at Universitas Riau',
        getStarted: 'Get Started',
        greeting: 'Hello, Student!',
        subGreeting: 'Explore the campus with ease',
        searchPlaceholder: 'Search location, lecturer, or service...',
        searchMapPlaceholder: 'Search campus location...',
        campusMap: 'Campus Map',
        campusMapDesc: 'Interactive navigation of campus area',
        directory: 'Faculty Directory',
        directoryDesc: 'List of lecturers and important contacts',
        pkkmbSchedule: 'PKKMB Schedule',
        pkkmbScheduleDesc: 'Timeline and event agenda',
        adminGuide: 'Admin Guide',
        adminGuideDesc: 'Campus administration procedures',
        campusServices: 'Campus Services',
        campusServicesDesc: 'Student facilities and services',
        emergency: 'Emergency Contact',
        emergencyDesc: 'Important numbers for emergencies',
        navHome: 'Home',
        navMap: 'Map',
        navSchedule: 'Schedule',
        navServices: 'Services',
        navProfile: 'Profile',
        allLocations: 'All',
        faculties: 'Faculties',
        facilities: 'Facilities',
        services: 'Services',
        dining: 'Dining',
        parking: 'Parking',
    },
};

// Export to window
Object.assign(window, { App });
