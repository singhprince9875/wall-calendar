import React from 'react';
import {
  DAYS_SHORT, getDaysInMonth, getFirstDayOfMonth,
  isSameDay, isInRange, isRangeEdge, isWeekend, isToday, getHoliday
} from '../utils/calendar';
import styles from './CalendarGrid.module.css';

export default function CalendarGrid({
  year, month,
  rangeStart, rangeEnd, hoverDate,
  onDayClick, onDayHover, onDayLeave,
  isAnimating, animDir
}) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInPrev = getDaysInMonth(year, month === 0 ? 11 : month - 1);

  // Effective end for hover preview
  const effectiveEnd = rangeStart && !rangeEnd ? hoverDate : rangeEnd;

  const cells = [];

  // Prev month trailing days
  for (let i = 0; i < firstDay; i++) {
    cells.push({ day: daysInPrev - firstDay + 1 + i, isOther: true, month: month === 0 ? 11 : month - 1, year: month === 0 ? year - 1 : year });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, isOther: false, month, year });
  }

  // Next month leading days
  const remaining = 42 - cells.length;
  for (let i = 1; i <= remaining; i++) {
    cells.push({ day: i, isOther: true, month: month === 11 ? 0 : month + 1, year: month === 11 ? year + 1 : year });
  }

  return (
    <div className={`${styles.gridWrap} ${isAnimating ? (animDir === 'next' ? styles.slideLeft : styles.slideRight) : ''}`}>
      {/* Day headers */}
      <div className={styles.dayHeaders}>
        {DAYS_SHORT.map((d, i) => (
          <div key={d} className={`${styles.dayHeader} ${isWeekend(i) ? styles.weekend : ''}`}>{d}</div>
        ))}
      </div>

      {/* Day cells */}
      <div className={styles.grid}>
        {cells.map((cell, idx) => {
          const dateObj = { year: cell.year, month: cell.month, day: cell.day };
          const today = isToday(cell.year, cell.month, cell.day) && !cell.isOther;
          const edge = !cell.isOther ? isRangeEdge(dateObj, rangeStart, effectiveEnd) : false;
          const inRange = !cell.isOther ? isInRange(dateObj, rangeStart, effectiveEnd) : false;
          const isStart = edge === 'start';
          const isEnd = edge === 'end';
          const holiday = !cell.isOther ? getHoliday(cell.month, cell.day) : null;
          const weekend = isWeekend(idx % 7);

          return (
            <div
              key={idx}
              className={[
                styles.cell,
                cell.isOther ? styles.other : '',
                today ? styles.today : '',
                isStart ? styles.rangeStart : '',
                isEnd ? styles.rangeEnd : '',
                inRange ? styles.inRange : '',
                weekend && !cell.isOther ? styles.weekend : '',
                holiday ? styles.holiday : '',
              ].join(' ')}
              onClick={() => !cell.isOther && onDayClick(dateObj)}
              onMouseEnter={() => !cell.isOther && onDayHover(dateObj)}
              onMouseLeave={() => onDayLeave()}
              title={holiday || undefined}
            >
              <span className={styles.dayNum}>{cell.day}</span>
              {holiday && <span className={styles.holidayDot} title={holiday} />}
              {today && <span className={styles.todayPip} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
