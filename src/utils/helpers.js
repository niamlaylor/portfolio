import { DateTime } from 'luxon';

export function removeDecimals(value) {
  if (typeof value === 'number') {
    const wholeValue = Math.floor(value);
    return wholeValue;
  } else {
    return 'N/A';
  }
};

export function getDayOfWeek(date) {
  const dayOfWeek = DateTime.fromISO(date);
  return dayOfWeek.weekdayLong;
};