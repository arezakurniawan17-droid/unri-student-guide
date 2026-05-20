const { useState } = React;

// Tweaks Component
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "colorScheme": "green",
    "accentColor": "yellow-green",
    "darkMode": false,
    "language": "id",
    "navigationStyle": "bottom"
}/*EDITMODE-END*/;

function AppTweaks() {
    const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
    
    const colorSchemes = {
        'green': { primary: 'oklch(0.55 0.15 145)', accent: 'oklch(0.75 0.15 85)', name: '🟢 Hijau UNRI' },
        'blue': { primary: 'oklch(0.55 0.18 240)', accent: 'oklch(0.70 0.15 220)', name: '🔵 Biru Akademis' },
        'teal': { primary: 'oklch(0.55 0.15 180)', accent: 'oklch(0.70 0.15 160)', name: '🟦 Teal Modern' },
    };
    
    const applyColorScheme = (scheme) => {
        const colors = colorSchemes[scheme];
        document.documentElement.style.setProperty('--color-primary', colors.primary);
        document.documentElement.style.setProperty('--color-accent', colors.accent);
    };
    
    React.useEffect(() => {
        applyColorScheme(tweaks.colorScheme);
    }, [tweaks.colorScheme]);
    
    return (
        <TweaksPanel title="Tweaks">
            <TweakSection title="🎨 Warna">
                <TweakRadio
                    label="Skema Warna"
                    value={tweaks.colorScheme}
                    options={Object.entries(colorSchemes).map(([key, val]) => ({ value: key, label: val.name }))}
                    onChange={(val) => setTweak('colorScheme', val)}
                />
            </TweakSection>
            
            <TweakSection title="🌐 Bahasa">
                <TweakRadio
                    label="Bahasa Default"
                    value={tweaks.language}
                    options={[
                        { value: 'id', label: '🇮🇩 Indonesia' },
                        { value: 'en', label: '🇬🇧 English' },
                    ]}
                    onChange={(val) => setTweak('language', val)}
                />
            </TweakSection>
            
            <TweakSection title="📱 Navigasi">
                <TweakRadio
                    label="Posisi Navigasi"
                    value={tweaks.navigationStyle}
                    options={[
                        { value: 'bottom', label: 'Bottom Bar' },
                        { value: 'top', label: 'Top Tabs' },
                    ]}
                    onChange={(val) => setTweak('navigationStyle', val)}
                />
            </TweakSection>
            
            <TweakSection title="ℹ️ Info">
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                    <p style={{ marginBottom: '8px' }}>
                        Prototype interaktif aplikasi panduan mahasiswa baru UNRI dengan 5 fitur utama:
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                        <li>🗺️ Peta Interaktif Kampus</li>
                        <li>👥 Direktori Dosen & Kontak</li>
                        <li>📅 Jadwal PKKMB</li>
                        <li>📋 Panduan Administrasi</li>
                        <li>🏛️ Layanan Kampus</li>
                    </ul>
                </div>
            </TweakSection>
        </TweaksPanel>
    );
}

Object.assign(window, { AppTweaks });
