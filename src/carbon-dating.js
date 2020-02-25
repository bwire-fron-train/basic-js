const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    const nActivity = Number.parseFloat(sampleActivity);
    return (nActivity >= 0  && !isNaN(nActivity) && nActivity > 0 && MODERN_ACTIVITY > nActivity) 
      ? Math.ceil(Math.log(MODERN_ACTIVITY / nActivity) / (Math.LN2.toPrecision(3) / HALF_LIFE_PERIOD)) : false; 
  } else {
    return false;
  }
};
