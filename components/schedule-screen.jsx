const { useState } = React;

// Schedule Screen Component
function ScheduleScreen({ t, onBack }) {
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [viewMode, setViewMode] = useState('timeline'); // timeline or calendar
    
    const days = [
        { id: 0, date: '20 Agu', day: 'Senin', dayEn: 'Monday' },
        { id: 1, date: '21 Agu', day: 'Selasa', dayEn: 'Tuesday' },
        { id: 2, date: '22 Agu', day: 'Rabu', dayEn: 'Wednesday' },
        { id: 3, date: '23 Agu', day: 'Kamis', dayEn: 'Thursday' },
        { id: 4, date: '24 Agu', day: 'Jumat', dayEn: 'Friday' },
    ];
    
    const events = [
        {
            id: 1,
            day: 0,
            time: '08:00 - 09:30',
            title: 'Upacara Pembukaan PKKMB',
            titleEn: 'PKKMB Opening Ceremony',
            location: 'Auditorium Utama',
            locationEn: 'Main Auditorium',
            type: 'ceremony',
            description: 'Pembukaan resmi PKKMB 2026 dengan sambutan Rektor dan pejabat terkait',
            descriptionEn: 'Official opening of PKKMB 2026 with speeches from the Rector and officials',
            icon: '🎉',
            color: 'var(--color-primary)',
            mandatory: true,
            attendees: 'Semua Mahasiswa Baru',
        },
        {
            id: 2,
            day: 0,
            time: '10:00 - 12:00',
            title: 'Pengenalan Visi Misi UNRI',
            titleEn: 'Introduction to UNRI Vision & Mission',
            location: 'Auditorium Utama',
            locationEn: 'Main Auditorium',
            type: 'session',
            description: 'Pemaparan visi, misi, dan nilai-nilai Universitas Riau',
            descriptionEn: 'Presentation of Universitas Riau vision, mission, and values',
            icon: '🎯',
            color: 'var(--color-info)',
            mandatory: true,
            attendees: 'Semua Mahasiswa Baru',
        },
        {
            id: 3,
            day: 0,
            time: '13:00 - 15:00',
            title: 'Pengenalan Fakultas',
            titleEn: 'Faculty Introduction',
            location: 'Per Fakultas',
            locationEn: 'Per Faculty',
            type: 'session',
            description: 'Perkenalan dengan dekan, dosen, dan fasilitas fakultas masing-masing',
            descriptionEn: 'Meet the dean, lecturers, and faculty facilities',
            icon: '🏫',
            color: 'var(--color-accent)',
            mandatory: true,
            attendees: 'Per Fakultas',
        },
        {
            id: 4,
            day: 1,
            time: '08:00 - 10:00',
            title: 'Workshop Soft Skills',
            titleEn: 'Soft Skills Workshop',
            location: 'Ruang Seminar A',
            locationEn: 'Seminar Room A',
            type: 'workshop',
            description: 'Pelatihan komunikasi, kepemimpinan, dan kerja tim',
            descriptionEn: 'Training on communication, leadership, and teamwork',
            icon: '💡',
            color: 'var(--color-warning)',
            mandatory: false,
            attendees: 'Batch 1 (100 orang)',
        },
        {
            id: 5,
            day: 1,
            time: '10:30 - 12:30',
            title: 'Campus Tour',
            titleEn: 'Campus Tour',
            location: 'Seluruh Area Kampus',
            locationEn: 'Entire Campus Area',
            type: 'tour',
            description: 'Tur keliling kampus untuk mengenal berbagai fasilitas',
            descriptionEn: 'Tour around campus to explore various facilities',
            icon: '🗺️',
            color: 'var(--color-success)',
            mandatory: true,
            attendees: 'Semua Mahasiswa Baru',
        },
        {
            id: 6,
            day: 1,
            time: '13:30 - 15:30',
            title: 'Sistem Akademik & Registrasi',
            titleEn: 'Academic System & Registration',
            location: 'Auditorium Utama',
            locationEn: 'Main Auditorium',
            type: 'session',
            description: 'Panduan penggunaan sistem akademik online dan proses registrasi',
            descriptionEn: 'Guide to online academic system and registration process',
            icon: '📝',
            color: 'var(--color-info)',
            mandatory: true,
            attendees: 'Semua Mahasiswa Baru',
        },
        {
            id: 7,
            day: 2,
            time: '08:00 - 10:00',
            title: 'Motivasi & Karakter Building',
            titleEn: 'Motivation & Character Building',
            location: 'Auditorium Utama',
            locationEn: 'Main Auditorium',
            type: 'session',
            description: 'Sesi motivasi dengan pembicara inspiratif',
            descriptionEn: 'Motivational session with inspiring speakers',
            icon: '⭐',
            color: 'var(--color-warning)',
            mandatory: true,
            attendees: 'Semua Mahasiswa Baru',
        },
        {
            id: 8,
            day: 2,
            time: '10:30 - 12:00',
            title: 'Pengenalan UKM & Organisasi',
            titleEn: 'Introduction to Student Organizations',
            location: 'Lapangan Utama',
            locationEn: 'Main Field',
            type: 'expo',
            description: 'Expo dan pengenalan berbagai UKM dan organisasi mahasiswa',
            descriptionEn: 'Expo and introduction to various student clubs and organizations',
            icon: '🎭',
            color: 'oklch(0.65 0.15 320)',
            mandatory: false,
            attendees: 'Semua Mahasiswa Baru',
        },
        {
            id: 9,
            day: 2,
            time: '13:00 - 15:00',
            title: 'Workshop Perpustakaan Digital',
            titleEn: 'Digital Library Workshop',
            location: 'Perpustakaan Pusat',
            locationEn: 'Central Library',
            type: 'workshop',
            description: 'Cara mengakses dan memanfaatkan perpustakaan digital',
            descriptionEn: 'How to access and utilize digital library',
            icon: '📚',
            color: 'var(--color-accent)',
            mandatory: false,
            attendees: 'Batch 2 (100 orang)',
        },
        {
            id: 10,
            day: 3,
            time: '08:00 - 12:00',
            title: 'Games & Team Building',
            titleEn: 'Games & Team Building',
            location: 'Lapangan Olahraga',
            locationEn: 'Sports Field',
            type: 'activity',
            description: 'Kegiatan permainan dan team building untuk membangun kebersamaan',
            descriptionEn: 'Games and team building activities to build camaraderie',
            icon: '🎮',
            color: 'var(--color-success)',
            mandatory: true,
            attendees: 'Semua Mahasiswa Baru',
        },
        {
            id: 11,
            day: 3,
            time: '13:00 - 15:00',
            title: 'Bimbingan Konseling',
            titleEn: 'Counseling Guidance',
            location: 'Ruang Konseling',
            locationEn: 'Counseling Room',
            type: 'session',
            description: 'Pengenalan layanan bimbingan konseling kampus',
            descriptionEn: 'Introduction to campus counseling services',
            icon: '🤝',
            color: 'var(--color-info)',
            mandatory: false,
            attendees: 'Per Kelompok',
        },
        {
            id: 12,
            day: 4,
            time: '08:00 - 10:00',
            title: 'Deklarasi Mahasiswa',
            titleEn: 'Student Declaration',
            location: 'Auditorium Utama',
            locationEn: 'Main Auditorium',
            type: 'ceremony',
            description: 'Deklarasi komitmen sebagai mahasiswa UNRI',
            descriptionEn: 'Declaration of commitment as UNRI students',
            icon: '📜',
            color: 'var(--color-primary)',
            mandatory: true,
            attendees: 'Semua Mahasiswa Baru',
        },
        {
            id: 13,
            day: 4,
            time: '10:30 - 12:00',
            title: 'Penutupan PKKMB',
            titleEn: 'PKKMB Closing Ceremony',
            location: 'Auditorium Utama',
            locationEn: 'Main Auditorium',
            type: 'ceremony',
            description: 'Penutupan resmi PKKMB 2026 dan pengumuman pemenang',
            descriptionEn: 'Official closing of PKKMB 2026 and winner announcements',
            icon: '🏆',
            color: 'var(--color-warning)',
            mandatory: true,
            attendees: 'Semua Mahasiswa Baru',
        },
    ];
    
    const dayEvents = events.filter(e => e.day === selectedDay);
    
    const getTimeRemaining = (timeStr) => {
        // Mock countdown
        return '2 hari 5 jam';
    };
    
    return (
        <div style={scheduleStyles.container}>
            <div style={scheduleStyles.header}>
                <button style={scheduleStyles.backButton} onClick={onBack}>
                    ← Kembali
                </button>
                <h2 style={scheduleStyles.headerTitle}>Jadwal PKKMB</h2>
                <button 
                    style={scheduleStyles.viewToggle}
                    onClick={() => setViewMode(viewMode === 'timeline' ? 'calendar' : 'timeline')}
                >
                    {viewMode === 'timeline' ? '📅' : '📋'}
                </button>
            </div>
            
            <div style={scheduleStyles.banner}>
                <div style={scheduleStyles.bannerContent}>
                    <h3 style={scheduleStyles.bannerTitle}>PKKMB 2026</h3>
                    <p style={scheduleStyles.bannerDate}>20 - 24 Agustus 2026</p>
                </div>
                <div style={scheduleStyles.countdown}>
                    <div style={scheduleStyles.countdownLabel}>Dimulai dalam</div>
                    <div style={scheduleStyles.countdownValue}>⏱️ {getTimeRemaining()}</div>
                </div>
            </div>
            
            <div style={scheduleStyles.daysScroll}>
                {days.map(day => {
                    const dayEventCount = events.filter(e => e.day === day.id).length;
                    return (
                        <button
                            key={day.id}
                            style={{
                                ...scheduleStyles.dayChip,
                                ...(selectedDay === day.id ? scheduleStyles.dayChipActive : {})
                            }}
                            onClick={() => setSelectedDay(day.id)}
                        >
                            <div style={scheduleStyles.dayDate}>{day.date}</div>
                            <div style={scheduleStyles.dayName}>{day.day}</div>
                            <div style={scheduleStyles.dayCount}>{dayEventCount} acara</div>
                        </button>
                    );
                })}
            </div>
            
            <div style={scheduleStyles.content}>
                {dayEvents.map((event, idx) => (
                    <div 
                        key={event.id}
                        style={scheduleStyles.eventCard}
                        onClick={() => setSelectedEvent(event)}
                    >
                        <div style={scheduleStyles.eventTime}>
                            <div style={scheduleStyles.timeText}>{event.time}</div>
                            {idx < dayEvents.length - 1 && (
                                <div style={scheduleStyles.timeline}></div>
                            )}
                        </div>
                        
                        <div style={scheduleStyles.eventContent}>
                            <div style={{
                                ...scheduleStyles.eventIcon,
                                background: `${event.color}20`,
                                color: event.color,
                            }}>
                                {event.icon}
                            </div>
                            
                            <div style={scheduleStyles.eventInfo}>
                                <div style={scheduleStyles.eventHeader}>
                                    <h3 style={scheduleStyles.eventTitle}>{event.title}</h3>
                                    {event.mandatory && (
                                        <span style={scheduleStyles.mandatoryBadge}>Wajib</span>
                                    )}
                                </div>
                                <p style={scheduleStyles.eventLocation}>📍 {event.location}</p>
                                <p style={scheduleStyles.eventAttendees}>👥 {event.attendees}</p>
                            </div>
                            
                            <span style={scheduleStyles.chevron}>›</span>
                        </div>
                    </div>
                ))}
            </div>
            
            {selectedEvent && (
                <div 
                    style={scheduleStyles.modal}
                    onClick={() => setSelectedEvent(null)}
                >
                    <div 
                        style={scheduleStyles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            style={scheduleStyles.modalClose}
                            onClick={() => setSelectedEvent(null)}
                        >
                            ✕
                        </button>
                        
                        <div style={{
                            ...scheduleStyles.modalIcon,
                            background: `${selectedEvent.color}20`,
                            color: selectedEvent.color,
                        }}>
                            {selectedEvent.icon}
                        </div>
                        
                        <h2 style={scheduleStyles.modalTitle}>{selectedEvent.title}</h2>
                        
                        <div style={scheduleStyles.modalMeta}>
                            <div style={scheduleStyles.metaBadge}>
                                ⏰ {selectedEvent.time}
                            </div>
                            <div style={scheduleStyles.metaBadge}>
                                📍 {selectedEvent.location}
                            </div>
                            {selectedEvent.mandatory && (
                                <div style={{
                                    ...scheduleStyles.metaBadge,
                                    background: 'var(--color-error)',
                                    color: 'white',
                                }}>
                                    ⚠️ Wajib Hadir
                                </div>
                            )}
                        </div>
                        
                        <div style={scheduleStyles.modalSection}>
                            <h4 style={scheduleStyles.sectionTitle}>Deskripsi</h4>
                            <p style={scheduleStyles.sectionText}>{selectedEvent.description}</p>
                        </div>
                        
                        <div style={scheduleStyles.modalSection}>
                            <h4 style={scheduleStyles.sectionTitle}>Peserta</h4>
                            <p style={scheduleStyles.sectionText}>👥 {selectedEvent.attendees}</p>
                        </div>
                        
                        <div style={scheduleStyles.modalActions}>
                            <button style={scheduleStyles.actionButtonPrimary}>
                                🔔 Ingatkan Saya
                            </button>
                            <button style={scheduleStyles.actionButtonSecondary}>
                                📅 Tambah ke Kalender
                            </button>
                            <button style={scheduleStyles.actionButtonSecondary}>
                                🗺️ Lihat Lokasi di Peta
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const scheduleStyles = {
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
    
    viewToggle: {
        border: 'none',
        background: 'var(--color-surface-secondary)',
        width: '36px',
        height: '36px',
        borderRadius: 'var(--radius-md)',
        fontSize: '18px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    banner: {
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        color: 'white',
        padding: 'var(--space-lg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    bannerContent: {
        flex: 1,
    },
    
    bannerTitle: {
        fontSize: '24px',
        fontWeight: '800',
        fontFamily: 'var(--font-display)',
        marginBottom: '4px',
    },
    
    bannerDate: {
        fontSize: '14px',
        opacity: '0.9',
    },
    
    countdown: {
        textAlign: 'right',
    },
    
    countdownLabel: {
        fontSize: '11px',
        opacity: '0.8',
        marginBottom: '4px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    
    countdownValue: {
        fontSize: '14px',
        fontWeight: '700',
    },
    
    daysScroll: {
        display: 'flex',
        gap: 'var(--space-sm)',
        padding: 'var(--space-md) var(--space-lg)',
        overflowX: 'auto',
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
    },
    
    dayChip: {
        padding: 'var(--space-md)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-surface)',
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        minWidth: '80px',
        transition: 'all 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
    },
    
    dayChipActive: {
        background: 'var(--color-primary)',
        color: 'white',
        borderColor: 'var(--color-primary)',
    },
    
    dayDate: {
        fontSize: '13px',
        fontWeight: '600',
    },
    
    dayName: {
        fontSize: '15px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
    },
    
    dayCount: {
        fontSize: '11px',
        opacity: '0.7',
    },
    
    content: {
        flex: 1,
        overflowY: 'auto',
        padding: 'var(--space-lg)',
    },
    
    eventCard: {
        display: 'flex',
        gap: 'var(--space-md)',
        marginBottom: 'var(--space-lg)',
    },
    
    eventTime: {
        width: '70px',
        flexShrink: 0,
        position: 'relative',
    },
    
    timeText: {
        fontSize: '13px',
        fontWeight: '600',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.3',
    },
    
    timeline: {
        position: 'absolute',
        left: '24px',
        top: '28px',
        bottom: '-24px',
        width: '2px',
        background: 'var(--color-border)',
    },
    
    eventContent: {
        flex: 1,
        display: 'flex',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    
    eventIcon: {
        width: '48px',
        height: '48px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        flexShrink: 0,
    },
    
    eventInfo: {
        flex: 1,
        minWidth: 0,
    },
    
    eventHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-sm)',
        marginBottom: '6px',
    },
    
    eventTitle: {
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        flex: 1,
        lineHeight: '1.3',
    },
    
    mandatoryBadge: {
        padding: '2px 8px',
        background: 'var(--color-error)',
        color: 'white',
        fontSize: '11px',
        fontWeight: '700',
        borderRadius: 'var(--radius-full)',
        flexShrink: 0,
    },
    
    eventLocation: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        marginBottom: '4px',
    },
    
    eventAttendees: {
        fontSize: '13px',
        color: 'var(--color-text-tertiary)',
    },
    
    chevron: {
        fontSize: '24px',
        color: 'var(--color-text-tertiary)',
        flexShrink: 0,
    },
    
    // Modal (reuse from directory)
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'flex-end',
        zIndex: 1000,
        backdropFilter: 'blur(4px)',
    },
    
    modalContent: {
        width: '100%',
        background: 'white',
        borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
        padding: 'var(--space-xl) var(--space-lg)',
        maxHeight: '85vh',
        overflowY: 'auto',
    },
    
    modalClose: {
        position: 'absolute',
        top: 'var(--space-md)',
        right: 'var(--space-md)',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: 'none',
        background: 'var(--color-surface-secondary)',
        fontSize: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-secondary)',
    },
    
    modalIcon: {
        width: '80px',
        height: '80px',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        margin: '0 auto var(--space-lg)',
    },
    
    modalTitle: {
        fontSize: '22px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        textAlign: 'center',
        marginBottom: 'var(--space-lg)',
        lineHeight: '1.3',
    },
    
    modalMeta: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-sm)',
        marginBottom: 'var(--space-xl)',
        justifyContent: 'center',
    },
    
    metaBadge: {
        padding: '8px 14px',
        background: 'var(--color-surface-secondary)',
        borderRadius: 'var(--radius-full)',
        fontSize: '13px',
        fontWeight: '600',
        color: 'var(--color-text)',
    },
    
    modalSection: {
        marginBottom: 'var(--space-lg)',
    },
    
    sectionTitle: {
        fontSize: '14px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-sm)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    
    sectionText: {
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.5',
    },
    
    modalActions: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
        marginTop: 'var(--space-xl)',
    },
    
    actionButtonPrimary: {
        width: '100%',
        padding: '16px',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-primary)',
        color: 'white',
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        cursor: 'pointer',
    },
    
    actionButtonSecondary: {
        width: '100%',
        padding: '14px',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-surface)',
        color: 'var(--color-text)',
        fontSize: '15px',
        fontWeight: '600',
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
    },
};

Object.assign(window, { ScheduleScreen });
