# alfeus.dev Portfolio - Vite React

Frontend-only portfolio landing page built with:

- Vite
- React.js JSX
- Bootstrap
- React Icons
- No database / backend

## Cara install di local

```bash
npm install --registry=https://registry.npmjs.org/
npm run dev
```

Lalu buka URL yang muncul di terminal, biasanya:

```bash
http://localhost:5173
```

## Cara build untuk deploy

```bash
npm run build
```

Hasil build akan masuk ke folder `dist`.

## File penting

- `src/App.jsx` — struktur semua section landing page
- `src/styles.css` — styling utama dan responsive design
- `src/data/profile.js` — data profile, kontak, journey, dan link
- `public/images/profile-hero.png` — foto hero utama
- `public/images/glow-green-hero.png` — glow hijau hero
- `public/resume-placeholder.html` — placeholder resume
- `public/design-references/` — screenshot design sebagai referensi

## Font Stretch Pro

CSS sudah disiapkan untuk membaca font dari:

```bash
public/fonts/StretchPro.otf
```

Font file tidak disertakan di ZIP. Kalau kamu punya file font `Stretch Pro`, copy manual ke path tersebut. Kalau belum ada, browser akan fallback ke `Archivo Black`.

Kalau file kamu format `.ttf`, ubah bagian `@font-face` di `src/styles.css` dari:

```css
src: url('/fonts/StretchPro.otf') format('opentype');
```

menjadi:

```css
src: url('/fonts/StretchPro.ttf') format('truetype');
```

## Yang perlu kamu update

Buka file:

```bash
src/data/profile.js
```

Lalu ganti link berikut:

```js
behance: 'https://www.behance.net/',
github: 'https://github.com/',
medium: 'https://medium.com/',
linkedin: '...',
resume: '/resume-placeholder.html',
```

Kalau sudah punya file CV/resume PDF:

1. Taruh file ke `public/resume.pdf`
2. Ubah link resume di `src/data/profile.js` menjadi:

```js
resume: '/resume.pdf'
```

## Notes update visual

Versi ini sudah dirapikan di bagian:

- hero desktop dan mobile
- foto hero agar tidak terlihat mengambang di mobile
- glow hero dari asset image
- spacing antar section
- heading section
- tech stack icon sizing
- project card sizing
- contact pills spacing
- navbar desktop/mobile
