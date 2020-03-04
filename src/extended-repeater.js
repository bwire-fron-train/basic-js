module.exports = function repeater(str, options, sep) {
  function getRepeated(s, times, sep) {
    if (s === undefined) {
      return '';
    }
    if (s === null) {
      s = 'null';
    }
    if (typeof s != 'string') {
       s = s.toString();
    }
    if (!times || times == 0) {
      return s;
    } 

    const a = Array(times);
    a.fill(s);
    return a.join(sep);
  }

  if (!options.separator || options.separator == '') {
    options.separator = '+';
  }
  if (!options.additionSeparator || options.additionSeparator == '') {
    options.additionSeparator = '|';
  }
  
  return getRepeated(
    str + getRepeated(options.addition, options.additionRepeatTimes, options.additionSeparator), 
    options.repeatTimes, 
    options.separator
  );
};
  