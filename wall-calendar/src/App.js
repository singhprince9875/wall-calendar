import React from 'react';
import WallCalendar from './components/WallCalendar';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="appLogo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          WallCal
        </div>
        <div className="appSubtitle">Interactive Wall Calendar</div>
      </header>

      <main className="appMain">
        <WallCalendar />
      </main>

      <footer className="appFooter">
        <span>Click a date to start · Click another to finish range · Notes auto-save</span>
      </footer>
    </div>
  );
}
