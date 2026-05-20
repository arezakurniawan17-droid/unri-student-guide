# 📱 Aplikasi Panduan Informasi untuk Mahasiswa Baru Universitas Riau

Aplikasi berbasis mobile yang menyediakan panduan lengkap bagi mahasiswa baru Universitas Riau (UNRI). Dibangun sebagai prototype interaktif menggunakan React.

![UNRI Guide](uploads/logo_assets-1779260556580.png)

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🗺️ **Peta Interaktif Kampus** | Navigasi lokasi kampus dengan filter kategori, pencarian, dan petunjuk arah |
| 👥 **Direktori Dosen & Kontak** | Daftar dosen dan kontak penting universitas dengan detail lengkap |
| 📅 **Jadwal PKKMB** | Timeline dan agenda kegiatan PKKMB dengan countdown dan notifikasi |
| 📋 **Panduan Administrasi** | Step-by-step guide untuk prosedur administrasi kampus |
| 🏛️ **Layanan Kampus** | Informasi fasilitas dan layanan yang tersedia untuk mahasiswa |
| 🚨 **Kontak Darurat** | Nomor penting untuk keadaan darurat |
| 👤 **Profil Mahasiswa** | Data akademik dan pengaturan akun |

## 🌐 Fitur Tambahan

- **Bilingual** — Bahasa Indonesia & English
- **Responsive** — Tampilan optimal di berbagai ukuran layar
- **iOS Device Frame** — Prototype dalam frame iPhone realistis
- **Tweaks Panel** — Kontrol untuk mengubah warna, bahasa, dan navigasi secara live
- **State Persistence** — Posisi navigasi tersimpan di localStorage

## 🛠️ Tech Stack

- **React 18** — UI Library
- **Babel Standalone** — JSX transpilation
- **CSS Custom Properties** — Design tokens & theming
- **Plus Jakarta Sans & Inter** — Typography
- **oklch Color Space** — Modern color system

## 📁 Struktur Project

```
├── index.html                  # Entry point utama
├── components/
│   ├── app.jsx                 # Main App component + routing + translations
│   ├── map-screen.jsx          # Peta interaktif kampus
│   ├── directory-screen.jsx    # Direktori dosen & kontak
│   ├── schedule-screen.jsx     # Jadwal PKKMB
│   ├── admin-screen.jsx        # Panduan administrasi
│   ├── services-screen.jsx     # Layanan kampus
│   ├── profile-emergency.jsx   # Profil & kontak darurat
│   ├── tweaks.jsx              # Tweaks panel configuration
│   ├── ios-frame.jsx           # iOS device frame component
│   └── tweaks-panel.jsx        # Tweaks panel UI components
├── uploads/
│   └── logo_assets-*.png       # Logo Universitas Riau
└── README.md                   # Dokumentasi project
```

## 🚀 Cara Menjalankan

### Opsi 1: Langsung Buka di Browser
1. Clone repository ini
2. Buka `index.html` di browser modern (Chrome, Firefox, Safari, Edge)

### Opsi 2: Menggunakan Live Server
1. Clone repository ini
2. Install extension **Live Server** di VS Code
3. Klik kanan pada `index.html` → **Open with Live Server**

### Opsi 3: Menggunakan HTTP Server
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx serve .
```
Lalu buka `http://localhost:8000` di browser.

## 🎨 Design System

### Warna
| Token | Nilai | Keterangan |
|-------|-------|------------|
| `--color-primary` | `oklch(0.55 0.15 145)` | Hijau UNRI |
| `--color-primary-dark` | `oklch(0.45 0.17 145)` | Hijau gelap |
| `--color-accent` | `oklch(0.75 0.15 85)` | Kuning-hijau |
| `--color-info` | `oklch(0.60 0.15 240)` | Biru informasi |
| `--color-error` | `oklch(0.55 0.22 25)` | Merah error |
| `--color-warning` | `oklch(0.65 0.15 75)` | Kuning warning |
| `--color-success` | `oklch(0.60 0.15 145)` | Hijau sukses |

### Typography
- **Display:** Plus Jakarta Sans (700, 800)
- **Body:** Inter (400, 500, 600, 700)

### Spacing
- `xs: 4px` | `sm: 8px` | `md: 16px` | `lg: 24px` | `xl: 32px` | `2xl: 48px`

### Border Radius
- `sm: 8px` | `md: 12px` | `lg: 16px` | `xl: 20px` | `full: 9999px`

## 📱 Screenshots

Jalankan aplikasi dan navigasi melalui menu untuk melihat semua fitur:
1. **Welcome Screen** — Halaman selamat datang dengan pilihan bahasa
2. **Home** — Dashboard utama dengan akses cepat
3. **Peta Kampus** — Peta interaktif dengan marker lokasi
4. **Direktori** — Daftar kontak dengan filter dan pencarian
5. **Jadwal PKKMB** — Timeline 5 hari dengan detail acara
6. **Panduan Admin** — Step-by-step guide administrasi
7. **Layanan** — Informasi fasilitas kampus
8. **Kontak Darurat** — Nomor darurat dengan quick-call

## 👨‍💻 Dibuat Untuk

**Tugas Akhir Kuliah**
Universitas Riau — Aplikasi Panduan Informasi untuk Mahasiswa Baru Berbasis Mobile

## 📄 Lisensi

Project ini dibuat untuk keperluan akademik.
