# 🗓️ WallCal — Interactive Wall Calendar

A polished, responsive React wall calendar component inspired by a physical wall calendar aesthetic. Built as a frontend engineering challenge submission.

🔗 **Live Demo:** [Still trying] 
📹 **Video Demo:** [https://drive.google.com/file/d/13cdzE7iuctTF-Wh5pRlP30ryNqrlgNb2/view?usp=drive_link]

---

## 📸 Preview

![WallCal Preview](./preview.png)

---

## ✨ Features

### Core Requirements
- **Wall Calendar Aesthetic** — Hero image per month, spiral binding decoration, diagonal image overlay matching the reference design
- **Day Range Selector** — Click a start date, hover to preview range, click end date to confirm. Clear visual states for start, end, and in-between days
- **Integrated Notes Section** — Two-tab notes panel: per-month notes and per-range notes, both auto-saved to `localStorage`
- **Fully Responsive** — Desktop: side-by-side calendar + notes panel. Mobile: fully stacked, touch-friendly

### Bonus Features
- 🌙 **Dark / Light Theme** — Toggle button on the hero image, preference persisted to `localStorage`
- 📸 **Month-specific Hero Images** — Unique Unsplash landscape photo for each month of the year
- 🟠 **Holiday Markers** — Orange dot indicators on public holidays with tooltip on hover
- ⬅️➡️ **Slide Animation** — Directional slide transition when navigating between months
- 🔵 **Today Indicator** — Current date highlighted with a dot pip
- 📋 **Saved Notes Preview** — Compact list of all stored notes at the bottom of the notes panel
- 🔢 **Day Count Badge** — Shows the number of days in your selected range
- ♿ **Accessible** — `aria-label` on all interactive controls, keyboard-friendly

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| **React 18** | UI framework (Create React App) |
| **CSS Modules** | Scoped component styles, zero runtime cost |
| **localStorage** | Client-side persistence for notes and theme |
| **Google Fonts** | Playfair Display + DM Sans |
| **Unsplash CDN** | Month hero images (no API key needed) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm ≥ 8

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/wall-calendar.git

# Navigate into the project
cd wall-calendar/wall-calendar

# Install dependencies
npm install

# Start the dev server
npm start
```

Opens at http://localhost:3000

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure
