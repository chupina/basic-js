const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
 if( !sampleActivity || typeof sampleActivity !== "string" ) return false; 
  let currentActivity = parseFloat(sampleActivity);
  if( currentActivity <= 0 || currentActivity > MODERN_ACTIVITY ) return false;
  if ( !isFinite(currentActivity)) return false;
  

  let time = Math.ceil(Math.log(MODERN_ACTIVITY /currentActivity )/(0.693/HALF_LIFE_PERIOD))
  return time
  
};
