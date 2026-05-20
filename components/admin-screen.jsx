const { useState } = React;

// Admin Guide Screen Component
function AdminGuideScreen({ t, onBack }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedItem, setExpandedItem] = useState(null);
    
    const categories = [
        {
            id: 'registration',
            icon: '📝',
            title: 'Registrasi & KRS',
            titleEn: 'Registration & Course Selection',
            color: 'var(--color-primary)',
            items: [
                {
                    id: 'reg1',
                    title: 'Cara Registrasi Online',
                    steps: [
                        'Buka portal akademik di https://akademik.unri.ac.id',
                        'Login dengan NIM dan password yang diberikan',
                        'Pilih menu "Registrasi Semester"',
                        'Verifikasi data dan lakukan pembayaran',
                        'Download bukti registrasi',
                    ],
                    tips: 'Lakukan registrasi sebelum batas waktu agar tidak terkena denda keterlambatan',
                },
                {
                    id: 'reg2',
                    title: 'Pengisian KRS',
                    steps: [
                        'Login ke portal akademik',
                        'Pilih menu "KRS" atau "Pengisian KRS"',
                        'Konsultasi dengan dosen wali terlebih dahulu',
                        'Pilih mata kuliah sesuai kurikulum',
                        'Submit dan cetak KRS untuk tanda tangan dosen wali',
                    ],
                    tips: 'Maksimal beban SKS: Semester 1-2 = 20 SKS, Semester 3+ = 24 SKS (jika IPK > 3.0)',
                },
                {
                    id: 'reg3',
                    title: 'Perubahan KRS',
                    steps: [
                        'Masa perubahan KRS: minggu ke-2 semester',
                        'Login ke portal akademik',
                        'Pilih menu "Perubahan KRS"',
                        'Tambah/drop mata kuliah yang diperlukan',
                        'Konsultasi dan minta persetujuan dosen wali',
                    ],
                    tips: 'Perhatikan batas waktu drop mata kuliah untuk menghindari nilai E',
                },
            ],
        },
        {
            id: 'payment',
            icon: '💰',
            title: 'Pembayaran',
            titleEn: 'Payment',
            color: 'var(--color-warning)',
            items: [
                {
                    id: 'pay1',
                    title: 'Cara Pembayaran UKT',
                    steps: [
                        'Login ke portal akademik',
                        'Pilih menu "Tagihan" atau "Pembayaran"',
                        'Download virtual account atau kode pembayaran',
                        'Bayar melalui bank/ATM/mobile banking',
                        'Tunggu konfirmasi otomatis (maksimal 1x24 jam)',
                    ],
                    tips: 'Simpan bukti pembayaran untuk keperluan verifikasi',
                },
                {
                    id: 'pay2',
                    title: 'Keringanan UKT',
                    steps: [
                        'Siapkan dokumen: KTP, KK, slip gaji orang tua, dll',
                        'Ajukan permohonan ke Biro Keuangan',
                        'Isi formulir keringanan UKT',
                        'Tunggu proses verifikasi (2-4 minggu)',
                        'Cek hasil di portal atau datang ke Biro Keuangan',
                    ],
                    tips: 'Periode pengajuan biasanya di awal semester',
                },
            ],
        },
        {
            id: 'documents',
            icon: '📄',
            title: 'Surat & Dokumen',
            titleEn: 'Letters & Documents',
            color: 'var(--color-info)',
            items: [
                {
                    id: 'doc1',
                    title: 'Surat Keterangan Mahasiswa Aktif',
                    steps: [
                        'Datang ke BAA (Biro Administrasi Akademik)',
                        'Bawa KTM dan bukti registrasi semester berjalan',
                        'Isi formulir permohonan',
                        'Tunggu proses 1-3 hari kerja',
                        'Ambil surat sesuai jadwal yang diberikan',
                    ],
                    tips: 'Beberapa keperluan bisa diurus online melalui portal',
                },
                {
                    id: 'doc2',
                    title: 'Transkrip Nilai Sementara',
                    steps: [
                        'Login ke portal akademik',
                        'Pilih menu "Transkrip" atau "Cetak Transkrip"',
                        'Download dan cetak transkrip PDF',
                        'Untuk yang resmi, datang ke BAA dengan membawa KTM',
                    ],
                    tips: 'Transkrip resmi memerlukan materai dan tanda tangan pejabat',
                },
                {
                    id: 'doc3',
                    title: 'Pembuatan KTM',
                    steps: [
                        'Datang ke BAK (Bagian Kemahasiswaan)',
                        'Bawa pas foto 3x4 (2 lembar) dan fotokopi KTP',
                        'Isi formulir pembuatan KTM',
                        'Bayar biaya administrasi jika diperlukan',
                        'KTM selesai dalam 1-2 minggu',
                    ],
                    tips: 'KTM baru otomatis diterbitkan untuk mahasiswa baru',
                },
            ],
        },
        {
            id: 'academic',
            icon: '🎓',
            title: 'Akademik',
            titleEn: 'Academic',
            color: 'var(--color-accent)',
            items: [
                {
                    id: 'aca1',
                    title: 'Cuti Akademik',
                    steps: [
                        'Siapkan alasan yang kuat (sakit, ekonomi, dll)',
                        'Ambil formulir cuti di fakultas',
                        'Minta persetujuan dosen wali',
                        'Submit ke BAA dengan lampiran dokumen pendukung',
                        'Tunggu persetujuan (1-2 minggu)',
                    ],
                    tips: 'Cuti maksimal 2 semester berturut-turut',
                },
                {
                    id: 'aca2',
                    title: 'Pindah Prodi/Transfer',
                    steps: [
                        'Cek syarat dan ketentuan transfer di prodi tujuan',
                        'Siapkan transkrip nilai dan surat rekomendasi',
                        'Ajukan permohonan ke prodi tujuan',
                        'Ikuti tes/wawancara jika diperlukan',
                        'Tunggu keputusan dan lakukan transfer nilai',
                    ],
                    tips: 'Transfer biasanya hanya dibuka di semester genap',
                },
            ],
        },
        {
            id: 'facilities',
            icon: '🏛️',
            title: 'Fasilitas',
            titleEn: 'Facilities',
            color: 'var(--color-success)',
            items: [
                {
                    id: 'fac1',
                    title: 'Akses WiFi Kampus',
                    steps: [
                        'Connect ke SSID "UNRI-Student"',
                        'Buka browser, akan muncul halaman login',
                        'Login dengan NIM dan password portal',
                        'Setujui terms & conditions',
                        'WiFi aktif dan bisa digunakan',
                    ],
                    tips: 'Satu akun bisa login maksimal 3 perangkat bersamaan',
                },
                {
                    id: 'fac2',
                    title: 'Peminjaman Buku Perpustakaan',
                    steps: [
                        'Cari buku di katalog online perpustakaan',
                        'Datang ke perpustakaan dengan KTM',
                        'Tunjukkan KTM ke petugas',
                        'Maksimal pinjam 3 buku selama 1 minggu',
                        'Perpanjangan bisa dilakukan via online',
                    ],
                    tips: 'Denda keterlambatan Rp 1.000/hari/buku',
                },
            ],
        },
    ];
    
    const allItems = categories.flatMap(cat => 
        cat.items.map(item => ({...item, category: cat.title, categoryId: cat.id, icon: cat.icon, color: cat.color}))
    );
    
    const filteredItems = searchQuery 
        ? allItems.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : selectedCategory 
            ? categories.find(c => c.id === selectedCategory)?.items.map(item => ({
                ...item, 
                categoryId: selectedCategory,
                icon: categories.find(c => c.id === selectedCategory).icon,
                color: categories.find(c => c.id === selectedCategory).color,
            })) || []
            : [];
    
    return (
        <div style={adminStyles.container}>
            <div style={adminStyles.header}>
                <button style={adminStyles.backButton} onClick={onBack}>
                    ← Kembali
                </button>
                <h2 style={adminStyles.headerTitle}>Panduan Administrasi</h2>
                <div style={{width: '24px'}}></div>
            </div>
            
            <div style={adminStyles.searchContainer}>
                <div style={adminStyles.searchBar}>
                    <span style={adminStyles.searchIcon}>🔍</span>
                    <input 
                        type="text"
                        placeholder="Cari panduan administrasi..."
                        style={adminStyles.searchInput}
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            if (e.target.value) setSelectedCategory(null);
                        }}
                    />
                    {searchQuery && (
                        <button 
                            style={adminStyles.clearButton}
                            onClick={() => setSearchQuery('')}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
            
            {!selectedCategory && !searchQuery && (
                <div style={adminStyles.categories}>
                    {categories.map(cat => (
                        <div
                            key={cat.id}
                            style={adminStyles.categoryCard}
                            onClick={() => setSelectedCategory(cat.id)}
                        >
                            <div style={{
                                ...adminStyles.categoryIcon,
                                background: `${cat.color}20`,
                                color: cat.color,
                            }}>
                                {cat.icon}
                            </div>
                            <div style={adminStyles.categoryInfo}>
                                <h3 style={adminStyles.categoryTitle}>{cat.title}</h3>
                                <p style={adminStyles.categoryCount}>
                                    {cat.items.length} panduan
                                </p>
                            </div>
                            <span style={adminStyles.chevron}>›</span>
                        </div>
                    ))}
                </div>
            )}
            
            {(selectedCategory || searchQuery) && (
                <div style={adminStyles.content}>
                    {selectedCategory && !searchQuery && (
                        <div style={adminStyles.breadcrumb}>
                            <button 
                                style={adminStyles.breadcrumbButton}
                                onClick={() => setSelectedCategory(null)}
                            >
                                Semua Kategori
                            </button>
                            <span style={adminStyles.breadcrumbSep}>›</span>
                            <span style={adminStyles.breadcrumbCurrent}>
                                {categories.find(c => c.id === selectedCategory)?.title}
                            </span>
                        </div>
                    )}
                    
                    {filteredItems.map(item => (
                        <div key={item.id} style={adminStyles.guideCard}>
                            <div 
                                style={adminStyles.guideHeader}
                                onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                            >
                                <div style={{
                                    ...adminStyles.guideIcon,
                                    background: `${item.color}20`,
                                    color: item.color,
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={adminStyles.guideTitle}>{item.title}</h3>
                                <span style={{
                                    ...adminStyles.expandIcon,
                                    transform: expandedItem === item.id ? 'rotate(180deg)' : 'rotate(0)',
                                }}>
                                    ▼
                                </span>
                            </div>
                            
                            {expandedItem === item.id && (
                                <div style={adminStyles.guideContent}>
                                    <h4 style={adminStyles.stepsTitle}>Langkah-langkah:</h4>
                                    <ol style={adminStyles.stepsList}>
                                        {item.steps.map((step, idx) => (
                                            <li key={idx} style={adminStyles.stepItem}>
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                    
                                    {item.tips && (
                                        <div style={adminStyles.tipsBox}>
                                            <div style={adminStyles.tipsHeader}>💡 Tips</div>
                                            <p style={adminStyles.tipsText}>{item.tips}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    {filteredItems.length === 0 && (
                        <div style={adminStyles.emptyState}>
                            <div style={adminStyles.emptyIcon}>🔍</div>
                            <h3 style={adminStyles.emptyTitle}>Tidak Ada Hasil</h3>
                            <p style={adminStyles.emptyDesc}>
                                Coba kata kunci lain atau pilih kategori
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

const adminStyles = {
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
    },
    
    categories: {
        flex: 1,
        overflowY: 'auto',
        padding: 'var(--space-lg)',
    },
    
    categoryCard: {
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
    
    categoryIcon: {
        width: '56px',
        height: '56px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        flexShrink: 0,
    },
    
    categoryInfo: {
        flex: 1,
    },
    
    categoryTitle: {
        fontSize: '17px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: '4px',
    },
    
    categoryCount: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
    },
    
    chevron: {
        fontSize: '24px',
        color: 'var(--color-text-tertiary)',
    },
    
    content: {
        flex: 1,
        overflowY: 'auto',
        padding: 'var(--space-lg)',
    },
    
    breadcrumb: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        marginBottom: 'var(--space-lg)',
        fontSize: '14px',
    },
    
    breadcrumbButton: {
        border: 'none',
        background: 'transparent',
        color: 'var(--color-primary)',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        padding: 0,
        fontSize: '14px',
    },
    
    breadcrumbSep: {
        color: 'var(--color-text-tertiary)',
    },
    
    breadcrumbCurrent: {
        color: 'var(--color-text-secondary)',
        fontWeight: '600',
    },
    
    guideCard: {
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        marginBottom: 'var(--space-md)',
        overflow: 'hidden',
    },
    
    guideHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        cursor: 'pointer',
    },
    
    guideIcon: {
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        flexShrink: 0,
    },
    
    guideTitle: {
        flex: 1,
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
    },
    
    expandIcon: {
        fontSize: '12px',
        color: 'var(--color-text-secondary)',
        transition: 'transform 0.2s',
    },
    
    guideContent: {
        padding: '0 var(--space-lg) var(--space-lg)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: 'var(--space-lg)',
    },
    
    stepsTitle: {
        fontSize: '14px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-md)',
    },
    
    stepsList: {
        paddingLeft: '20px',
        marginBottom: 'var(--space-lg)',
    },
    
    stepItem: {
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--space-sm)',
    },
    
    tipsBox: {
        background: 'oklch(0.97 0.03 85)',
        padding: 'var(--space-md)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid oklch(0.90 0.05 85)',
    },
    
    tipsHeader: {
        fontSize: '14px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-xs)',
    },
    
    tipsText: {
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.5',
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
    },
};

Object.assign(window, { AdminGuideScreen });
