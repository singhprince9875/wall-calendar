import React, { useState } from 'react';
import { MONTHS, MONTH_IMAGES } from '../utils/calendar';
import styles from './CalendarHeader.module.css';

export default function CalendarHeader({ year, month, onPrev, onNext, theme, onToggleTheme }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgSrc = MONTH_IMAGES[month];

  return (
    <div className={styles.header}>
      {/* Hero image */}
      <div className={styles.imageWrap}>
        <div className={`${styles.imgSkeleton} ${imgLoaded ? styles.hidden : ''}`} />
        <img
          key={imgSrc}
          src={imgSrc}
          alt={MONTHS[month]}
          className={`${styles.heroImg} ${imgLoaded ? styles.loaded : ''}`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Diagonal overlay */}
        <div className={styles.diagonalOverlay} />

        {/* Month/Year badge */}
        <div className={styles.monthBadge}>
          <span className={styles.yearLabel}>{year}</span>
          <span className={styles.monthLabel}>{MONTHS[month].toUpperCase()}</span>
        </div>

        {/* Top controls */}
        <div className={styles.topControls}>
          <button
            className={styles.themeBtn}
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>

      {/* Navigation strip */}
      <div className={styles.navStrip}>
        <button className={styles.navBtn} onClick={onPrev} aria-label="Previous month">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div className={styles.navTitle}>
          <span className={styles.navMonth}>{MONTHS[month]}</span>
          <span className={styles.navYear}>{year}</span>
        </div>
        <button className={styles.navBtn} onClick={onNext} aria-label="Next month">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
