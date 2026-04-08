export const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

export const DAYS_SHORT = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

export const HOLIDAYS = {
  '1-1': "New Year's Day",
  '1-26': 'Republic Day',
  '3-25': 'Holi',
  '4-14': 'Ambedkar Jayanti',
  '4-18': 'Good Friday',
  '5-1': 'Labour Day',
  '8-15': 'Independence Day',
  '10-2': 'Gandhi Jayanti',
  '10-20': 'Dussehra',
  '10-31': 'Halloween',
  '11-1': 'Diwali',
  '12-25': 'Christmas',
  '12-31': "New Year's Eve",
};

export function getHoliday(month, day) {
  return HOLIDAYS[`${month + 1}-${day}`] || null;
}

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year, month) {
  // Returns 0=Mon ... 6=Sun
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export function isSameDay(a, b) {
  if (!a || !b) return false;
  return a.year === b.year && a.month === b.month && a.day === b.day;
}

export function isInRange(date, start, end) {
  if (!start || !end || !date) return false;
  const d = date.year * 10000 + date.month * 100 + date.day;
  const s = start.year * 10000 + start.month * 100 + start.day;
  const e = end.year * 10000 + end.month * 100 + end.day;
  const [lo, hi] = s < e ? [s, e] : [e, s];
  return d > lo && d < hi;
}

export function isRangeEdge(date, start, end) {
  if (!start || !date) return false;
  if (isSameDay(date, start)) return 'start';
  if (end && isSameDay(date, end)) return 'end';
  return false;
}

export function formatDate(dateObj) {
  if (!dateObj) return '';
  const { year, month, day } = dateObj;
  return `${MONTHS[month].slice(0,3)} ${String(day).padStart(2,'0')}, ${year}`;
}

export function dateToKey(dateObj) {
  if (!dateObj) return '';
  return `${dateObj.year}-${dateObj.month}-${dateObj.day}`;
}

export function isWeekend(dayIndex) {
  // dayIndex: 0=Mon ... 6=Sun
  return dayIndex === 5 || dayIndex === 6;
}

export function isToday(year, month, day) {
  const t = new Date();
  return t.getFullYear() === year && t.getMonth() === month && t.getDate() === day;
}

// Unsplash nature/landscape images by month theme
export const MONTH_IMAGES = [
  'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80', // Jan - snowy mountain
  'https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80', // Feb - cat (cute)
  'https://images.unsplash.com/photo-1490750967868-88df5691cc08?w=800&q=80', // Mar - spring flowers
  'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80', // Apr - tulips
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', // May - portrait
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', // Jun - beach
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // Jul - mountains
  'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80', // Aug - sunflower
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', // Sep - forest
  'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80', // Oct - autumn
  'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80', // Nov - fog forest
  'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80', // Dec - snow
];
