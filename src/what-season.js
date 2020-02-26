module.exports = function getSeason(date) {
  if (date) {
    const month = date.getUTCMonth();
    return ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'][month];
  } else {
    return 'Unable to determine the time of year!';
  }
};
