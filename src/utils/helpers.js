// Library for formatting ISO dates
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
  const dayOnly = date.split(' ')[0];
  const dayOfWeek = DateTime.fromISO(dayOnly);
  return dayOfWeek.weekdayLong;
};