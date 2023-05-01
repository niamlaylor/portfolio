export function removeDecimals(value) {
  if (typeof value === 'number') {
    const wholeValue = Math.floor(value);
    return wholeValue;
  } else {
    return 'N/A';
  }
};