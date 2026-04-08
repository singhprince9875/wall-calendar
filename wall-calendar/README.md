# 🗓️ WallCal — Interactive Wall Calendar

A polished, responsive React wall calendar component inspired by a physical wall calendar aesthetic. Features date range selection, integrated notes, theme switching, and holiday markers.

![WallCal Preview](./preview.png)

---

## ✨ Features

### Core
- **Wall Calendar Aesthetic** — Hero image per month, spiral binding decoration, diagonal image overlay
- **Day Range Selector** — Click start → click end; hover preview; animated pulse on selection; day count badge
- **Integrated Notes** — Per-month notes + per-range notes, auto-saved to `localStorage`; tabbed UI
- **Fully Responsive** — Side-by-side desktop layout collapses to stacked mobile layout

### Extras
- 🌙 **Dark / Light Theme** toggle (persisted)
- 📸 **Month-specific hero images** — Unique Unsplash photo per month
- 🟠 **Holiday markers** — Dot indicators with tooltips on public holidays (India + global)
- ⬅️➡️ **Month slide animation** — Smooth directional slide on navigation
- 🔵 **Today indicator** — Highlighted with dot pip
- 🗒️ **Saved Notes list** — Compact preview of all stored notes at the bottom of the panel
- ♿ **Accessible** — `aria-label` on all interactive controls

---

## 🛠 Tech Stack

- **React 18** (Create React App)
- **CSS Modules** — Scoped styles, zero CSS-in-JS dependency
- **localStorage** — Client-side persistence (no backend)
- **Google Fonts** — Playfair Display + DM Sans
- **Unsplash** — Month hero images (no API key needed, public CDN URLs)

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm ≥ 8

### Install & Run

```bash
git clone https://github.com/YOUR_USERNAME/wall-calendar.git
cd wall-calendar
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `build/`. Deploy to Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── WallCalendar.jsx       # Root layout (binding + grid + notes)
│   ├── WallCalendar.module.css
│   ├── CalendarHeader.jsx     # Hero image + month badge + nav
│   ├── CalendarHeader.module.css
│   ├── CalendarGrid.jsx       # 7×6 day grid with range logic
│   ├── CalendarGrid.module.css
│   ├── RangeDisplay.jsx       # Selected range bar (from/to + day count)
│   ├── RangeDisplay.module.css
│   ├── NotesPanel.jsx         # Month + range notes with tabs
│   └── NotesPanel.module.css
├── hooks/
│   └── useCalendar.js         # All state: navigation, range, notes, theme
├── utils/
│   └── calendar.js            # Pure helpers: grid math, holidays, formatting
├── App.js
├── App.css
└── index.css                  # CSS variables, global resets, animations
```

---

## 🎨 Design Decisions

| Decision | Rationale |
|---|---|
| **CSS Modules** | Zero runtime cost, no extra deps, scoped by default |
| **Playfair Display** | Gives the editorial / printed calendar feel |
| **Diagonal overlay** | Directly inspired by the blue chevron in the reference image |
| **Spiral binding** | Physical calendar detail — small but memorable |
| **Hover range preview** | UX clarity — you see the range before committing |
| **Tab-based notes** | Single panel, two contexts (month + range) without clutter |
| **No backend** | Scope is purely frontend; localStorage is sufficient |

---

## 🌐 Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.

---

## 📋 Evaluation Checklist

- [x] Wall calendar aesthetic (hero image, binding, diagonal overlay)
- [x] Day range selector with start/end/in-between visual states
- [x] Integrated notes section (month-level + range-level)
- [x] Responsive — desktop side-by-side, mobile stacked
- [x] Theme toggle (light/dark, persisted)
- [x] Holiday markers
- [x] Slide animation on month navigation
- [x] Notes auto-saved to localStorage
- [x] Today indicator
- [x] Accessible markup

---

## 📄 License

MIT
