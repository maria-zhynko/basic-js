const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity) {return false;}

  const sampleActivityNumber = parseFloat(sampleActivity);
  if (isNaN(sampleActivityNumber) || sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY) {return false;}

  const rate = Math.LN2 / HALF_LIFE_PERIOD;
  const years = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivityNumber)) / rate;
  return Math.ceil(years);
};

