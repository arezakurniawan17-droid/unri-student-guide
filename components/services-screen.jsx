const { useState } = React;

// Services Screen Component  
function ServicesScreen({ t, onBack }) {
    const [selectedService, setSelectedService] = useState(null);
    
    const services = [
        {
            id: 1,
            icon: '📚',
            title: 'Perpustakaan',
            titleEn: 'Library',
            description: 'Akses koleksi buku, jurnal, dan database digital',
            descriptionEn: 'Access book collections, journals, and digital databases',
            color: 'var(--color-accent)',
            hours: 'Sen-Jum: 08:00-20:00, Sab: 08:00-16:00',
            location: 'Gedung Perpustakaan Pusat',
            contact: '+62 761 678901',
            facilities: ['Ruang Baca', 'Digital Library', 'Ruang Diskusi', 'Fotokopi', 'Printing'],
            services: [
                'Peminjaman buku (max 3 buku, 7 hari)',
                'Akses jurnal online dan e-book',
                'Ruang diskusi kelompok (booking)',
                'Layanan referensi dan penelusuran',
                'Workshop literasi informasi',
            ],
        },
        {
            id: 2,
            icon: '⚕️',
            title: 'Klinik Kesehatan',
            titleEn: 'Health Clinic',
            description: 'Layanan kesehatan gratis untuk mahasiswa',
            descriptionEn: 'Free health services for students',
            color: 'var(--color-success)',
            hours: 'Sen-Jum: 08:00-15:00',
            location: 'Gedung Klinik (dekat Kantin)',
            contact: '+62 761 567890',
            facilities: ['Ruang Pemeriksaan', 'Apotek', 'Ruang Istirahat', 'Ambulans'],
            services: [
                'Pemeriksaan kesehatan umum',
                'Pengobatan gratis (obat dasar)',
                'Rujukan ke RS jika diperlukan',
                'Konsultasi kesehatan mental',
                'Vaksinasi dan imunisasi',
            ],
        },
        {
            id: 3,
            icon: '💻',
            title: 'UPT Teknologi Informasi',
            titleEn: 'IT Center',
            description: 'Dukungan teknis IT dan akses internet',
            descriptionEn: 'IT technical support and internet access',
            color: 'oklch(0.60 0.15 280)',
            hours: 'Sen-Jum: 08:00-17:00',
            location: 'Gedung UPT TI',
            contact: '+62 761 789012',
            facilities: ['Lab Komputer', 'Helpdesk', 'Server Room', 'WiFi Zone'],
            services: [
                'Akses WiFi kampus (UNRI-Student)',
                'Email mahasiswa (@student.unri.ac.id)',
                'Troubleshooting IT',
                'Layanan hosting website',
                'Pelatihan software & digital skills',
            ],
        },
        {
            id: 4,
            icon: '🤝',
            title: 'Bimbingan Konseling',
            titleEn: 'Counseling Service',
            description: 'Konsultasi akademik, karir, dan personal',
            descriptionEn: 'Academic, career, and personal consultation',
            color: 'var(--color-info)',
            hours: 'Sen-Jum: 09:00-16:00 (by appointment)',
            location: 'Gedung Kemahasiswaan Lt. 2',
            contact: '+62 761 456789',
            facilities: ['Ruang Konseling Privat', 'Ruang Group', 'Waiting Room'],
            services: [
                'Konseling akademik (belajar, motivasi)',
                'Konseling karir dan prospek kerja',
                'Konseling personal & mental health',
                'Workshop pengembangan diri',
                'Asesmen psikologi',
            ],
        },
        {
            id: 5,
            icon: '💼',
            title: 'Career Development Center',
            titleEn: 'Career Development Center',
            description: 'Persiapan karir dan job placement',
            descriptionEn: 'Career preparation and job placement',
            color: 'var(--color-warning)',
            hours: 'Sen-Jum: 08:00-16:00',
            location: 'Gedung Rektorat Lt. 3',
            contact: '+62 761 234567',
            facilities: ['Ruang Konsultasi', 'Interview Room', 'Job Fair Space'],
            services: [
                'Job fair dan career expo',
                'CV review dan interview preparation',
                'Koneksi dengan alumni dan perusahaan',
                'Magang dan internship',
                'Workshop soft skills & professional',
            ],
        },
        {
            id: 6,
            icon: '🏃',
            title: 'Fasilitas Olahraga',
            titleEn: 'Sports Facilities',
            description: 'Berbagai fasilitas olahraga dan fitness',
            descriptionEn: 'Various sports and fitness facilities',
            color: 'var(--color-success)',
            hours: 'Sen-Jum: 06:00-20:00, Sab-Min: 07:00-18:00',
            location: 'Gedung Olahraga',
            contact: '+62 761 345678',
            facilities: ['Gym', 'Lapangan Basket', 'Lapangan Futsal', 'Kolam Renang', 'Track'],
            services: [
                'Akses gym (membership murah)',
                'Booking lapangan olahraga',
                'Kelas senam dan yoga',
                'Rental equipment olahraga',
                'Turnamen dan kompetisi',
            ],
        },
        {
            id: 7,
            icon: '🍽️',
            title: 'Kantin & Kafetaria',
            titleEn: 'Canteen & Cafeteria',
            description: 'Beragam pilihan makanan dan minuman',
            descriptionEn: 'Various food and beverage options',
            color: 'oklch(0.65 0.15 45)',
            hours: 'Sen-Jum: 07:00-18:00, Sab: 07:00-15:00',
            location: 'Area Kantin Mahasiswa',
            contact: '-',
            facilities: ['Kantin A', 'Kantin B', 'Food Court', 'Cafe', 'Musholla'],
            services: [
                'Menu makanan lokal & nusantara',
                'Snack dan minuman',
                'Paket hemat mahasiswa',
                'Katering untuk acara',
                'Free WiFi area',
            ],
        },
        {
            id: 8,
            icon: '💰',
            title: 'Beasiswa & Bantuan',
            titleEn: 'Scholarships & Financial Aid',
            description: 'Informasi dan pengurusan beasiswa',
            descriptionEn: 'Scholarship information and processing',
            color: 'var(--color-primary)',
            hours: 'Sen-Jum: 08:00-15:00',
            location: 'Bagian Kemahasiswaan',
            contact: '+62 761 456789',
            facilities: ['Ruang Informasi', 'Service Counter'],
            services: [
                'Beasiswa PPA & BBM',
                'Beasiswa prestasi akademik/non-akademik',
                'KIP Kuliah',
                'Beasiswa dari pihak eksternal',
                'Bantuan dana darurat',
            ],
        },
    ];
    
    return (
        <div style={servicesStyles.container}>
            <div style={servicesStyles.header}>
                <button style={servicesStyles.backButton} onClick={onBack}>
                    ← Kembali
                </button>
                <h2 style={servicesStyles.headerTitle}>Layanan Kampus</h2>
                <div style={{width: '24px'}}></div>
            </div>
            
            <div style={servicesStyles.content}>
                {services.map(service => (
                    <div 
                        key={service.id}
                        style={servicesStyles.serviceCard}
                        onClick={() => setSelectedService(service)}
                    >
                        <div style={{
                            ...servicesStyles.serviceIcon,
                            background: `${service.color}20`,
                            color: service.color,
                        }}>
                            {service.icon}
                        </div>
                        
                        <div style={servicesStyles.serviceInfo}>
                            <h3 style={servicesStyles.serviceTitle}>{service.title}</h3>
                            <p style={servicesStyles.serviceDesc}>{service.description}</p>
                            <div style={servicesStyles.serviceMeta}>
                                <span style={servicesStyles.metaItem}>
                                    ⏰ {service.hours.split(',')[0]}
                                </span>
                            </div>
                        </div>
                        
                        <span style={servicesStyles.chevron}>›</span>
                    </div>
                ))}
            </div>
            
            {selectedService && (
                <div 
                    style={servicesStyles.modal}
                    onClick={() => setSelectedService(null)}
                >
                    <div 
                        style={servicesStyles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            style={servicesStyles.modalClose}
                            onClick={() => setSelectedService(null)}
                        >
                            ✕
                        </button>
                        
                        <div style={{
                            ...servicesStyles.modalIcon,
                            background: `${selectedService.color}20`,
                            color: selectedService.color,
                        }}>
                            {selectedService.icon}
                        </div>
                        
                        <h2 style={servicesStyles.modalTitle}>{selectedService.title}</h2>
                        <p style={servicesStyles.modalDesc}>{selectedService.description}</p>
                        
                        <div style={servicesStyles.infoSection}>
                            <div style={servicesStyles.infoItem}>
                                <span style={servicesStyles.infoIcon}>⏰</span>
                                <div>
                                    <div style={servicesStyles.infoLabel}>Jam Operasional</div>
                                    <div style={servicesStyles.infoValue}>{selectedService.hours}</div>
                                </div>
                            </div>
                            
                            <div style={servicesStyles.infoItem}>
                                <span style={servicesStyles.infoIcon}>📍</span>
                                <div>
                                    <div style={servicesStyles.infoLabel}>Lokasi</div>
                                    <div style={servicesStyles.infoValue}>{selectedService.location}</div>
                                </div>
                            </div>
                            
                            {selectedService.contact !== '-' && (
                                <div style={servicesStyles.infoItem}>
                                    <span style={servicesStyles.infoIcon}>📞</span>
                                    <div>
                                        <div style={servicesStyles.infoLabel}>Kontak</div>
                                        <div style={servicesStyles.infoValue}>{selectedService.contact}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div style={servicesStyles.section}>
                            <h4 style={servicesStyles.sectionTitle}>Fasilitas</h4>
                            <div style={servicesStyles.facilitiesList}>
                                {selectedService.facilities.map((facility, idx) => (
                                    <span key={idx} style={servicesStyles.facilityBadge}>
                                        {facility}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div style={servicesStyles.section}>
                            <h4 style={servicesStyles.sectionTitle}>Layanan</h4>
                            <ul style={servicesStyles.servicesList}>
                                {selectedService.services.map((svc, idx) => (
                                    <li key={idx} style={servicesStyles.serviceListItem}>
                                        {svc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div style={servicesStyles.modalActions}>
                            <button style={servicesStyles.actionButtonPrimary}>
                                🗺️ Lihat di Peta
                            </button>
                            {selectedService.contact !== '-' && (
                                <button style={servicesStyles.actionButtonSecondary}>
                                    📞 Hubungi
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const servicesStyles = {
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
    
    content: {
        flex: 1,
        overflowY: 'auto',
        padding: 'var(--space-lg)',
    },
    
    serviceCard: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        marginBottom: 'var(--space-md)',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    
    serviceIcon: {
        width: '56px',
        height: '56px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        flexShrink: 0,
    },
    
    serviceInfo: {
        flex: 1,
        minWidth: 0,
    },
    
    serviceTitle: {
        fontSize: '17px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: '4px',
    },
    
    serviceDesc: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        marginBottom: '6px',
        lineHeight: '1.3',
    },
    
    serviceMeta: {
        display: 'flex',
        gap: 'var(--space-sm)',
    },
    
    metaItem: {
        fontSize: '12px',
        color: 'var(--color-text-tertiary)',
    },
    
    chevron: {
        fontSize: '24px',
        color: 'var(--color-text-tertiary)',
    },
    
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
        padding: 'var(--space-xl) var(--space-lg) var(--space-lg)',
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
        margin: '0 auto var(--space-md)',
    },
    
    modalTitle: {
        fontSize: '22px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        textAlign: 'center',
        marginBottom: 'var(--space-xs)',
    },
    
    modalDesc: {
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        textAlign: 'center',
        marginBottom: 'var(--space-xl)',
    },
    
    infoSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        background: 'var(--color-surface-secondary)',
        borderRadius: 'var(--radius-lg)',
        marginBottom: 'var(--space-xl)',
    },
    
    infoItem: {
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'flex-start',
    },
    
    infoIcon: {
        fontSize: '20px',
        flexShrink: 0,
    },
    
    infoLabel: {
        fontSize: '12px',
        color: 'var(--color-text-tertiary)',
        fontWeight: '600',
        marginBottom: '4px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    
    infoValue: {
        fontSize: '15px',
        color: 'var(--color-text)',
        lineHeight: '1.4',
    },
    
    section: {
        marginBottom: 'var(--space-xl)',
    },
    
    sectionTitle: {
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-md)',
    },
    
    facilitiesList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-sm)',
    },
    
    facilityBadge: {
        padding: '6px 14px',
        background: 'var(--color-surface-secondary)',
        borderRadius: 'var(--radius-full)',
        fontSize: '13px',
        fontWeight: '600',
        color: 'var(--color-text)',
    },
    
    servicesList: {
        paddingLeft: '20px',
    },
    
    serviceListItem: {
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--space-sm)',
    },
    
    modalActions: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
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

Object.assign(window, { ServicesScreen });
