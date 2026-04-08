import React from 'react';
import { formatDate } from '../utils/calendar';
import styles from './RangeDisplay.module.css';

export default function RangeDisplay({ rangeStart, rangeEnd, onClear }) {
  if (!rangeStart) return (
    <div className={styles.hint}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      Click a day to start selecting a range
    </div>
  );

  // Calculate days in range
  let dayCount = null;
  if (rangeStart && rangeEnd) {
    const a = new Date(rangeStart.year, rangeStart.month, rangeStart.day);
    const b = new Date(rangeEnd.year, rangeEnd.month, rangeEnd.day);
    dayCount = Math.round(Math.abs(b - a) / 86400000) + 1;
  }

  return (
    <div className={styles.bar}>
      <div className={styles.dates}>
        <div className={styles.dateChip}>
          <span className={styles.label}>FROM</span>
          <span className={styles.date}>{formatDate(rangeStart)}</span>
        </div>
        {rangeEnd ? (
          <>
            <div className={styles.arrow}>→</div>
            <div className={styles.dateChip}>
              <span className={styles.label}>TO</span>
              <span className={styles.date}>{formatDate(rangeEnd)}</span>
            </div>
            <div className={styles.countChip}>{dayCount}d</div>
          </>
        ) : (
          <div className={styles.pending}>
            <span className={styles.pendingDot} />
            Click end date
          </div>
        )}
      </div>
      <button className={styles.clearBtn} onClick={onClear} aria-label="Clear selection">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}
