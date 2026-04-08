import { useState, useCallback, useEffect } from 'react';
import { dateToKey } from '../utils/calendar';

const STORAGE_KEY = 'wall-calendar-notes';
const THEME_KEY = 'wall-calendar-theme';

export function useCalendar() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch { return {}; }
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'light';
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [animDir, setAnimDir] = useState('next');

  // Persist notes
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(notes)); } catch {}
  }, [notes]);

  // Persist & apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }, [theme]);

  const navigate = useCallback((dir) => {
    setAnimDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      if (dir === 'next') {
        setCurrentMonth(m => {
          if (m === 11) { setCurrentYear(y => y + 1); return 0; }
          return m + 1;
        });
      } else {
        setCurrentMonth(m => {
          if (m === 0) { setCurrentYear(y => y - 1); return 11; }
          return m - 1;
        });
      }
      setIsAnimating(false);
    }, 200);
  }, []);

  const handleDayClick = useCallback((day) => {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(day);
      setRangeEnd(null);
    } else {
      // Check order
      const s = rangeStart.year * 10000 + rangeStart.month * 100 + rangeStart.day;
      const d = day.year * 10000 + day.month * 100 + day.day;
      if (d < s) {
        setRangeEnd(rangeStart);
        setRangeStart(day);
      } else if (d === s) {
        setRangeStart(null);
        setRangeEnd(null);
      } else {
        setRangeEnd(day);
      }
    }
  }, [rangeStart, rangeEnd]);

  const clearSelection = useCallback(() => {
    setRangeStart(null);
    setRangeEnd(null);
  }, []);

  const setNote = useCallback((key, text) => {
    setNotes(prev => {
      if (!text.trim()) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: text };
    });
  }, []);

  const getMonthKey = useCallback((year, month) => `${year}-${month}`, []);

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  }, []);

  return {
    currentYear, currentMonth,
    rangeStart, rangeEnd, hoverDate, setHoverDate,
    notes, setNote, getMonthKey,
    navigate, handleDayClick, clearSelection,
    theme, toggleTheme,
    isAnimating, animDir,
  };
}
