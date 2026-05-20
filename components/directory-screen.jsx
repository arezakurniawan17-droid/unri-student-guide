const { useState } = React;

// Directory Screen Component
function DirectoryScreen({ t, onBack }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    
    const categories = [
        { id: 'all', icon: '👥', label: 'Semua' },
        { id: 'faculty', icon: '👨‍🏫', label: 'Dosen' },
        { id: 'admin', icon: '🏛️', label: 'Administrasi' },
        { id: 'emergency', icon: '🚨', label: 'Darurat' },
        { id: 'service', icon: '📞', label: 'Layanan' },
    ];
    
    const contacts = [
        {
            id: 1,
            name: 'Prof. Dr. Ahmad Hidayat, M.Sc.',
            position: 'Dekan Fakultas Teknik',
            category: 'faculty',
            faculty: 'Fakultas Teknik',
            phone: '+62 761 123456',
            email: 'ahmad.hidayat@unri.ac.id',
            office: 'Gedung Teknik Lt. 3, Ruang Dekan',
            hours: 'Senin-Jumat, 08:00-16:00',
            photo: '👨‍🏫',
            color: 'var(--color-primary)',
        },
        {
            id: 2,
            name: 'Dr. Siti Nurhaliza, M.M.',
            position: 'Dekan Fakultas Ekonomi',
            category: 'faculty',
            faculty: 'Fakultas Ekonomi',
            phone: '+62 761 234567',
            email: 'siti.nurhaliza@unri.ac.id',
            office: 'Gedung Ekonomi Lt. 2, Ruang Dekan',
            hours: 'Senin-Jumat, 08:00-16:00',
            photo: '👩‍🏫',
            color: 'var(--color-info)',
        },
        {
            id: 3,
            name: 'Biro Administrasi Akademik (BAA)',
            position: 'Pelayanan Akademik Mahasiswa',
            category: 'admin',
            faculty: 'Rektorat',
            phone: '+62 761 345678',
            email: 'baa@unri.ac.id',
            office: 'Gedung Rektorat Lt. 1',
            hours: 'Senin-Jumat, 07:30-16:00',
            photo: '🏛️',
            color: 'var(--color-warning)',
        },
        {
            id: 4,
            name: 'Bagian Kemahasiswaan (BAK)',
            position: 'Urusan Kemahasiswaan',
            category: 'admin',
            faculty: 'Rektorat',
            phone: '+62 761 456789',
            email: 'bak@unri.ac.id',
            office: 'Gedung Rektorat Lt. 2',
            hours: 'Senin-Jumat, 07:30-16:00',
            photo: '🎓',
            color: 'var(--color-accent)',
        },
        {
            id: 5,
            name: 'Security & Keamanan Kampus',
            position: 'Keamanan 24 Jam',
            category: 'emergency',
            faculty: 'Kampus UNRI',
            phone: '+62 761 911',
            email: 'security@unri.ac.id',
            office: 'Pos Keamanan Gerbang Utama',
            hours: '24 Jam',
            photo: '🚨',
            color: 'var(--color-error)',
        },
        {
            id: 6,
            name: 'Klinik Kesehatan Mahasiswa',
            position: 'Pelayanan Kesehatan',
            category: 'emergency',
            faculty: 'Kampus UNRI',
            phone: '+62 761 567890',
            email: 'klinik@unri.ac.id',
            office: 'Gedung Klinik (dekat Kantin)',
            hours: 'Senin-Jumat, 08:00-15:00',
            photo: '⚕️',
            color: 'var(--color-success)',
        },
        {
            id: 7,
            name: 'Perpustakaan Pusat',
            position: 'Layanan Perpustakaan',
            category: 'service',
            faculty: 'Kampus UNRI',
            phone: '+62 761 678901',
            email: 'library@unri.ac.id',
            office: 'Gedung Perpustakaan',
            hours: 'Senin-Jumat, 08:00-20:00; Sabtu, 08:00-16:00',
            photo: '📚',
            color: 'var(--color-accent)',
        },
        {
            id: 8,
            name: 'IT Support & Helpdesk',
            position: 'Bantuan Teknis IT',
            category: 'service',
            faculty: 'UPT Teknologi Informasi',
            phone: '+62 761 789012',
            email: 'ithelp@unri.ac.id',
            office: 'Gedung UPT TI',
            hours: 'Senin-Jumat, 08:00-17:00',
            photo: '💻',
            color: 'oklch(0.60 0.15 280)',
        },
        {
            id: 9,
            name: 'Dr. Budi Santoso, S.T., M.T.',
            position: 'Koordinator Prodi Teknik Informatika',
            category: 'faculty',
            faculty: 'Fakultas Teknik',
            phone: '+62 761 890123',
            email: 'budi.santoso@unri.ac.id',
            office: 'Gedung Teknik Lt. 2, Ruang Prodi',
            hours: 'Senin-Kamis, 09:00-15:00',
            photo: '👨‍💼',
            color: 'var(--color-primary)',
        },
        {
            id: 10,
            name: 'Biro Keuangan',
            position: 'Pembayaran & Keuangan Mahasiswa',
            category: 'admin',
            faculty: 'Rektorat',
            phone: '+62 761 901234',
            email: 'keuangan@unri.ac.id',
            office: 'Gedung Rektorat Lt. 1',
            hours: 'Senin-Jumat, 08:00-15:00',
            photo: '💰',
            color: 'var(--color-warning)',
        },
    ];
    
    const filteredContacts = contacts.filter(contact => {
        const matchesCategory = selectedCategory === 'all' || contact.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.faculty.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    return (
        <div style={directoryStyles.container}>
            <div style={directoryStyles.header}>
                <button style={directoryStyles.backButton} onClick={onBack}>
                    ← Kembali
                </button>
                <h2 style={directoryStyles.headerTitle}>Direktori & Kontak</h2>
                <div style={{width: '24px'}}></div>
            </div>
            
            <div style={directoryStyles.searchContainer}>
                <div style={directoryStyles.searchBar}>
                    <span style={directoryStyles.searchIcon}>🔍</span>
                    <input 
                        type="text"
                        placeholder="Cari nama, jabatan, atau fakultas..."
                        style={directoryStyles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button 
                            style={directoryStyles.clearButton}
                            onClick={() => setSearchQuery('')}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
            
            <div style={directoryStyles.categoryScroll}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        style={{
                            ...directoryStyles.categoryChip,
                            ...(selectedCategory === cat.id ? directoryStyles.categoryChipActive : {})
                        }}
                        onClick={() => setSelectedCategory(cat.id)}
                    >
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                    </button>
                ))}
            </div>
            
            <div style={directoryStyles.content}>
                <div style={directoryStyles.resultHeader}>
                    <span style={directoryStyles.resultCount}>
                        {filteredContacts.length} Kontak Ditemukan
                    </span>
                </div>
                
                {filteredContacts.map(contact => (
                    <div 
                        key={contact.id}
                        style={directoryStyles.contactCard}
                        onClick={() => setSelectedContact(contact)}
                    >
                        <div style={{
                            ...directoryStyles.contactPhoto,
                            background: `${contact.color}20`,
                            color: contact.color,
                        }}>
                            {contact.photo}
                        </div>
                        
                        <div style={directoryStyles.contactInfo}>
                            <h3 style={directoryStyles.contactName}>{contact.name}</h3>
                            <p style={directoryStyles.contactPosition}>{contact.position}</p>
                            <div style={directoryStyles.contactMeta}>
                                <span style={directoryStyles.metaItem}>
                                    🏛️ {contact.faculty}
                                </span>
                            </div>
                        </div>
                        
                        <span style={directoryStyles.chevron}>›</span>
                    </div>
                ))}
                
                {filteredContacts.length === 0 && (
                    <div style={directoryStyles.emptyState}>
                        <div style={directoryStyles.emptyIcon}>🔍</div>
                        <h3 style={directoryStyles.emptyTitle}>Tidak Ada Hasil</h3>
                        <p style={directoryStyles.emptyDesc}>
                            Coba ubah kata kunci pencarian atau filter kategori
                        </p>
                    </div>
                )}
            </div>
            
            {selectedContact && (
                <div 
                    style={directoryStyles.modal}
                    onClick={() => setSelectedContact(null)}
                >
                    <div 
                        style={directoryStyles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            style={directoryStyles.modalClose}
                            onClick={() => setSelectedContact(null)}
                        >
                            ✕
                        </button>
                        
                        <div style={{
                            ...directoryStyles.modalPhoto,
                            background: `${selectedContact.color}20`,
                            color: selectedContact.color,
                        }}>
                            {selectedContact.photo}
                        </div>
                        
                        <h2 style={directoryStyles.modalName}>{selectedContact.name}</h2>
                        <p style={directoryStyles.modalPosition}>{selectedContact.position}</p>
                        
                        <div style={directoryStyles.modalDetails}>
                            <div style={directoryStyles.detailItem}>
                                <span style={directoryStyles.detailIcon}>🏛️</span>
                                <div>
                                    <div style={directoryStyles.detailLabel}>Fakultas/Unit</div>
                                    <div style={directoryStyles.detailValue}>{selectedContact.faculty}</div>
                                </div>
                            </div>
                            
                            <div style={directoryStyles.detailItem}>
                                <span style={directoryStyles.detailIcon}>📍</span>
                                <div>
                                    <div style={directoryStyles.detailLabel}>Lokasi Kantor</div>
                                    <div style={directoryStyles.detailValue}>{selectedContact.office}</div>
                                </div>
                            </div>
                            
                            <div style={directoryStyles.detailItem}>
                                <span style={directoryStyles.detailIcon}>⏰</span>
                                <div>
                                    <div style={directoryStyles.detailLabel}>Jam Layanan</div>
                                    <div style={directoryStyles.detailValue}>{selectedContact.hours}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style={directoryStyles.modalActions}>
                            <a 
                                href={`tel:${selectedContact.phone}`}
                                style={directoryStyles.actionButtonPrimary}
                            >
                                📞 {selectedContact.phone}
                            </a>
                            <a 
                                href={`mailto:${selectedContact.email}`}
                                style={directoryStyles.actionButtonSecondary}
                            >
                                ✉️ Email
                            </a>
                            <button style={directoryStyles.actionButtonSecondary}>
                                💬 WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const directoryStyles = {
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
    
    content: {
        flex: 1,
        overflowY: 'auto',
        padding: 'var(--space-lg)',
    },
    
    resultHeader: {
        marginBottom: 'var(--space-md)',
    },
    
    resultCount: {
        fontSize: '14px',
        fontWeight: '600',
        color: 'var(--color-text-secondary)',
    },
    
    contactCard: {
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
    
    contactPhoto: {
        width: '56px',
        height: '56px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        flexShrink: 0,
    },
    
    contactInfo: {
        flex: 1,
        minWidth: 0,
    },
    
    contactName: {
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    
    contactPosition: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        marginBottom: '6px',
        lineHeight: '1.3',
    },
    
    contactMeta: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-sm)',
    },
    
    metaItem: {
        fontSize: '12px',
        color: 'var(--color-text-tertiary)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
    
    chevron: {
        fontSize: '24px',
        color: 'var(--color-text-tertiary)',
        flexShrink: 0,
    },
    
    emptyState: {
        textAlign: 'center',
        padding: 'var(--space-2xl) var(--space-lg)',
    },
    
    emptyIcon: {
        fontSize: '64px',
        marginBottom: 'var(--space-md)',
        opacity: '0.5',
    },
    
    emptyTitle: {
        fontSize: '18px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-sm)',
    },
    
    emptyDesc: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.5',
    },
    
    // Modal
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
        position: 'relative',
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
    
    modalPhoto: {
        width: '80px',
        height: '80px',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        margin: '0 auto var(--space-lg)',
    },
    
    modalName: {
        fontSize: '20px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        textAlign: 'center',
        marginBottom: 'var(--space-xs)',
    },
    
    modalPosition: {
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        textAlign: 'center',
        marginBottom: 'var(--space-xl)',
    },
    
    modalDetails: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
        marginBottom: 'var(--space-xl)',
        padding: 'var(--space-lg)',
        background: 'var(--color-surface-secondary)',
        borderRadius: 'var(--radius-lg)',
    },
    
    detailItem: {
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'flex-start',
    },
    
    detailIcon: {
        fontSize: '20px',
        flexShrink: 0,
    },
    
    detailLabel: {
        fontSize: '12px',
        color: 'var(--color-text-tertiary)',
        fontWeight: '600',
        marginBottom: '4px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    
    detailValue: {
        fontSize: '15px',
        color: 'var(--color-text)',
        lineHeight: '1.4',
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
        textAlign: 'center',
        textDecoration: 'none',
        display: 'block',
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
        textAlign: 'center',
        textDecoration: 'none',
        display: 'block',
    },
};

Object.assign(window, { DirectoryScreen });
