import React from 'react';
import { useCalendar } from '../hooks/useCalendar';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import RangeDisplay from './RangeDisplay';
import NotesPanel from './NotesPanel';
import styles from './WallCalendar.module.css';

export default function WallCalendar() {
  const {
    currentYear, currentMonth,
    rangeStart, rangeEnd, hoverDate, setHoverDate,
    notes, setNote, getMonthKey,
    navigate, handleDayClick, clearSelection,
    theme, toggleTheme,
    isAnimating, animDir,
  } = useCalendar();

  return (
    <div className={styles.calendarCard}>
      {/* Binding holes decoration */}
      <div className={styles.bindingRow}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={styles.bindingHole} />
        ))}
      </div>

      <div className={styles.cardBody}>
        {/* Left: Calendar */}
        <div className={styles.calendarSide}>
          <CalendarHeader
            year={currentYear}
            month={currentMonth}
            onPrev={() => navigate('prev')}
            onNext={() => navigate('next')}
            theme={theme}
            onToggleTheme={toggleTheme}
          />

          <CalendarGrid
            year={currentYear}
            month={currentMonth}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            hoverDate={hoverDate}
            onDayClick={handleDayClick}
            onDayHover={setHoverDate}
            onDayLeave={() => setHoverDate(null)}
            isAnimating={isAnimating}
            animDir={animDir}
          />

          <RangeDisplay
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            onClear={clearSelection}
          />
        </div>

        {/* Right: Notes */}
        <div className={styles.notesSide}>
          <NotesPanel
            year={currentYear}
            month={currentMonth}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            notes={notes}
            setNote={setNote}
            getMonthKey={getMonthKey}
            onClearSelection={clearSelection}
          />
        </div>
      </div>
    </div>
  );
}
