const { useState } = React;

// Profile Screen Component
function ProfileScreen({ t, onBack, onLogout }) {
    const [isEditing, setIsEditing] = useState(false);
    
    const studentData = {
        name: 'Ahmad Rizki Pratama',
        nim: '2108107010001',
        faculty: 'Fakultas Teknik',
        program: 'Teknik Informatika',
        semester: '1',
        email: 'ahmad.rizki@student.unri.ac.id',
        phone: '+62 812 3456 7890',
        photo: '👤',
    };
    
    const menuItems = [
        { id: 'account', icon: '👤', label: 'Akun & Profil', color: 'var(--color-primary)' },
        { id: 'notifications', icon: '🔔', label: 'Notifikasi', color: 'var(--color-warning)' },
        { id: 'language', icon: '🌐', label: 'Bahasa', color: 'var(--color-info)' },
        { id: 'help', icon: '❓', label: 'Bantuan & FAQ', color: 'var(--color-accent)' },
        { id: 'about', icon: 'ℹ️', label: 'Tentang Aplikasi', color: 'var(--color-text-secondary)' },
        { id: 'logout', icon: '🚪', label: 'Keluar', color: 'var(--color-error)' },
    ];
    
    return (
        <div style={profileStyles.container}>
            <div style={profileStyles.header}>
                <button style={profileStyles.backButton} onClick={onBack}>
                    ← Kembali
                </button>
                <h2 style={profileStyles.headerTitle}>Profil</h2>
                <button style={profileStyles.editButton} onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? '✓' : '✏️'}
                </button>
            </div>
            
            <div style={profileStyles.content}>
                <div style={profileStyles.profileCard}>
                    <div style={profileStyles.photoContainer}>
                        <div style={profileStyles.photo}>
                            {studentData.photo}
                        </div>
                        <button style={profileStyles.photoEdit}>📷</button>
                    </div>
                    
                    <h2 style={profileStyles.studentName}>{studentData.name}</h2>
                    <p style={profileStyles.studentNim}>{studentData.nim}</p>
                    
                    <div style={profileStyles.badges}>
                        <span style={profileStyles.badge}>Mahasiswa Aktif</span>
                        <span style={profileStyles.badge}>Semester {studentData.semester}</span>
                    </div>
                </div>
                
                <div style={profileStyles.infoSection}>
                    <h3 style={profileStyles.sectionTitle}>Informasi Akademik</h3>
                    
                    <div style={profileStyles.infoItem}>
                        <span style={profileStyles.infoLabel}>Fakultas</span>
                        <span style={profileStyles.infoValue}>{studentData.faculty}</span>
                    </div>
                    
                    <div style={profileStyles.infoItem}>
                        <span style={profileStyles.infoLabel}>Program Studi</span>
                        <span style={profileStyles.infoValue}>{studentData.program}</span>
                    </div>
                    
                    <div style={profileStyles.infoItem}>
                        <span style={profileStyles.infoLabel}>Email</span>
                        <span style={profileStyles.infoValue}>{studentData.email}</span>
                    </div>
                    
                    <div style={profileStyles.infoItem}>
                        <span style={profileStyles.infoLabel}>Telepon</span>
                        <span style={profileStyles.infoValue}>{studentData.phone}</span>
                    </div>
                </div>
                
                <div style={profileStyles.menuSection}>
                    <h3 style={profileStyles.sectionTitle}>Pengaturan</h3>
                    
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            style={profileStyles.menuItem}
                            onClick={item.id === 'logout' ? onLogout : undefined}
                        >
                            <div style={{
                                ...profileStyles.menuIcon,
                                background: `${item.color}20`,
                                color: item.color,
                            }}>
                                {item.icon}
                            </div>
                            <span style={profileStyles.menuLabel}>{item.label}</span>
                            <span style={profileStyles.menuChevron}>›</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Emergency Screen Component
function EmergencyScreen({ t, onBack }) {
    const emergencyContacts = [
        {
            id: 1,
            title: 'Security Kampus',
            number: '+62 761 911',
            description: 'Keamanan & keadaan darurat kampus',
            icon: '🚨',
            color: 'var(--color-error)',
            available: '24 Jam',
        },
        {
            id: 2,
            title: 'Klinik Kesehatan',
            number: '+62 761 567890',
            description: 'Darurat medis & pertolongan pertama',
            icon: '⚕️',
            color: 'var(--color-success)',
            available: 'Sen-Jum 08:00-15:00',
        },
        {
            id: 3,
            title: 'Pemadam Kebakaran',
            number: '113',
            description: 'Kebakaran & evakuasi',
            icon: '🚒',
            color: 'var(--color-error)',
            available: '24 Jam',
        },
        {
            id: 4,
            title: 'Polisi',
            number: '110',
            description: 'Kepolisian & tindak kriminal',
            icon: '🚔',
            color: 'oklch(0.50 0.15 240)',
            available: '24 Jam',
        },
        {
            id: 5,
            title: 'Ambulans',
            number: '118 / 119',
            description: 'Gawat darurat medis',
            icon: '🚑',
            color: 'var(--color-error)',
            available: '24 Jam',
        },
        {
            id: 6,
            title: 'Konseling Krisis',
            number: '+62 761 456789',
            description: 'Dukungan psikologis & mental health',
            icon: '💚',
            color: 'var(--color-success)',
            available: 'Sen-Jum 09:00-16:00',
        },
    ];
    
    return (
        <div style={emergencyStyles.container}>
            <div style={emergencyStyles.header}>
                <button style={emergencyStyles.backButton} onClick={onBack}>
                    ← Kembali
                </button>
                <h2 style={emergencyStyles.headerTitle}>Kontak Darurat</h2>
                <div style={{width: '24px'}}></div>
            </div>
            
            <div style={emergencyStyles.banner}>
                <div style={emergencyStyles.bannerIcon}>⚠️</div>
                <div>
                    <h3 style={emergencyStyles.bannerTitle}>Dalam Keadaan Darurat</h3>
                    <p style={emergencyStyles.bannerDesc}>
                        Hubungi nomor di bawah untuk bantuan segera
                    </p>
                </div>
            </div>
            
            <div style={emergencyStyles.content}>
                {emergencyContacts.map(contact => (
                    <div key={contact.id} style={emergencyStyles.contactCard}>
                        <div style={{
                            ...emergencyStyles.contactIcon,
                            background: `${contact.color}20`,
                            color: contact.color,
                        }}>
                            {contact.icon}
                        </div>
                        
                        <div style={emergencyStyles.contactInfo}>
                            <h3 style={emergencyStyles.contactTitle}>{contact.title}</h3>
                            <p style={emergencyStyles.contactDesc}>{contact.description}</p>
                            <p style={emergencyStyles.contactAvailable}>
                                ⏰ {contact.available}
                            </p>
                        </div>
                        
                        <a 
                            href={`tel:${contact.number}`}
                            style={emergencyStyles.callButton}
                        >
                            📞
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

const profileStyles = {
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
    
    editButton: {
        border: 'none',
        background: 'var(--color-surface-secondary)',
        width: '36px',
        height: '36px',
        borderRadius: 'var(--radius-md)',
        fontSize: '16px',
        cursor: 'pointer',
    },
    
    content: {
        flex: 1,
        overflowY: 'auto',
        padding: 'var(--space-lg)',
    },
    
    profileCard: {
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        color: 'white',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)',
        textAlign: 'center',
        marginBottom: 'var(--space-lg)',
    },
    
    photoContainer: {
        position: 'relative',
        width: '100px',
        margin: '0 auto var(--space-lg)',
    },
    
    photo: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
        border: '4px solid rgba(255,255,255,0.3)',
    },
    
    photoEdit: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: 'none',
        background: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    },
    
    studentName: {
        fontSize: '22px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        marginBottom: 'var(--space-xs)',
    },
    
    studentNim: {
        fontSize: '15px',
        opacity: '0.9',
        marginBottom: 'var(--space-md)',
    },
    
    badges: {
        display: 'flex',
        gap: 'var(--space-sm)',
        justifyContent: 'center',
    },
    
    badge: {
        padding: '6px 12px',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: 'var(--radius-full)',
        fontSize: '12px',
        fontWeight: '600',
    },
    
    infoSection: {
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        marginBottom: 'var(--space-lg)',
        border: '1px solid var(--color-border)',
    },
    
    sectionTitle: {
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-md)',
    },
    
    infoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--space-md) 0',
        borderBottom: '1px solid var(--color-border)',
    },
    
    infoLabel: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        fontWeight: '600',
    },
    
    infoValue: {
        fontSize: '14px',
        color: 'var(--color-text)',
        textAlign: 'right',
    },
    
    menuSection: {
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        border: '1px solid var(--color-border)',
    },
    
    menuItem: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-md) 0',
        borderBottom: '1px solid var(--color-border)',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--color-border)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
    },
    
    menuIcon: {
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
    },
    
    menuLabel: {
        flex: 1,
        fontSize: '15px',
        fontWeight: '600',
        color: 'var(--color-text)',
        textAlign: 'left',
    },
    
    menuChevron: {
        fontSize: '20px',
        color: 'var(--color-text-tertiary)',
    },
};

const emergencyStyles = {
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
    
    banner: {
        background: 'var(--color-error)',
        color: 'white',
        padding: 'var(--space-lg)',
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'center',
    },
    
    bannerIcon: {
        fontSize: '32px',
        flexShrink: 0,
    },
    
    bannerTitle: {
        fontSize: '17px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        marginBottom: '4px',
    },
    
    bannerDesc: {
        fontSize: '14px',
        opacity: '0.9',
    },
    
    content: {
        flex: 1,
        overflowY: 'auto',
        padding: 'var(--space-lg)',
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
    },
    
    contactIcon: {
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
    
    contactTitle: {
        fontSize: '17px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: '4px',
    },
    
    contactDesc: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        marginBottom: '4px',
        lineHeight: '1.3',
    },
    
    contactAvailable: {
        fontSize: '12px',
        color: 'var(--color-text-tertiary)',
    },
    
    callButton: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'var(--color-primary)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        textDecoration: 'none',
        flexShrink: 0,
        boxShadow: 'var(--shadow-md)',
    },
};

Object.assign(window, { ProfileScreen, EmergencyScreen });
