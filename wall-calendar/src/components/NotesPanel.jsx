import React, { useState, useEffect } from 'react';
import { formatDate, dateToKey, MONTHS } from '../utils/calendar';
import styles from './NotesPanel.module.css';

export default function NotesPanel({
  year, month,
  rangeStart, rangeEnd,
  notes, setNote,
  getMonthKey, onClearSelection
}) {
  const monthKey = getMonthKey(year, month);
  const rangeKey = rangeStart
    ? `range-${dateToKey(rangeStart)}${rangeEnd ? `-to-${dateToKey(rangeEnd)}` : ''}`
    : null;

  const [tab, setTab] = useState('month'); // 'month' | 'range'
  const [text, setText] = useState('');

  // Sync text when tab or keys change
  useEffect(() => {
    if (tab === 'month') setText(notes[monthKey] || '');
    else if (tab === 'range' && rangeKey) setText(notes[rangeKey] || '');
    else setText('');
  }, [tab, monthKey, rangeKey, notes]);

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);
    const key = tab === 'month' ? monthKey : rangeKey;
    if (key) setNote(key, val);
  };

  const hasRangeNote = rangeKey && notes[rangeKey];
  const hasMonthNote = notes[monthKey];

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <span className={styles.panelTitle}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          Notes
        </span>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'month' ? styles.active : ''}`}
            onClick={() => setTab('month')}
          >
            {MONTHS[month].slice(0,3)}
            {hasMonthNote && <span className={styles.dot} />}
          </button>
          <button
            className={`${styles.tab} ${tab === 'range' ? styles.active : ''} ${!rangeStart ? styles.disabled : ''}`}
            onClick={() => rangeStart && setTab('range')}
            disabled={!rangeStart}
            title={!rangeStart ? 'Select a date range first' : ''}
          >
            Range
            {hasRangeNote && <span className={styles.dot} />}
          </button>
        </div>
      </div>

      {/* Range summary */}
      {tab === 'range' && rangeStart && (
        <div className={styles.rangeInfo}>
          <div className={styles.rangeTag}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {formatDate(rangeStart)}
            {rangeEnd && <> → {formatDate(rangeEnd)}</>}
          </div>
          <button className={styles.clearBtn} onClick={onClearSelection} title="Clear selection">✕</button>
        </div>
      )}

      {/* Textarea */}
      <textarea
        className={styles.noteArea}
        value={text}
        onChange={handleChange}
        placeholder={
          tab === 'month'
            ? `Add notes for ${MONTHS[month]} ${year}…`
            : rangeStart
              ? `Notes for your selected range…`
              : 'Select a date range to add notes…'
        }
        disabled={tab === 'range' && !rangeStart}
        rows={5}
      />

      {/* All notes list */}
      <NotesList notes={notes} />
    </div>
  );
}

function NotesList({ notes }) {
  const entries = Object.entries(notes).filter(([, v]) => v.trim());
  if (!entries.length) return null;

  return (
    <div className={styles.notesList}>
      <div className={styles.notesListTitle}>Saved Notes</div>
      {entries.slice(0, 4).map(([key, val]) => (
        <div key={key} className={styles.noteEntry}>
          <div className={styles.noteKey}>{key.replace('range-', '').replace(/-to-/g, ' → ').replace(/-/g, ' ')}</div>
          <div className={styles.noteVal}>{val.slice(0, 60)}{val.length > 60 ? '…' : ''}</div>
        </div>
      ))}
    </div>
  );
}
