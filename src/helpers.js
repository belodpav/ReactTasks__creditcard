/**
 * Returns true if str is valid THRU
 * @param {String} str
 * @returns {Bool} 
 */
function isValidTHRU(str) {
  var parseTHRU,
      month,
      year;
  
  if (str.length !== 5 && str[2] !== '/') {
    return false;
  }
 
  parseTHRU = str.split('/'),
  month = +parseTHRU[0],
  year = +parseTHRU[1];
  
  if (!withinRange(month, 0, 12) || !withinRange(year, 0, 99)) {
    return false;
  }

  return true;
}

/**
 * Returns true if number within ranges [min, max]
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @return {Bool}
 */
function withinRange(value, min, max) {
  if (value >= min && value <= max ) {
    return true;
  }

  return false;
}



export { isValidTHRU, withinRange };