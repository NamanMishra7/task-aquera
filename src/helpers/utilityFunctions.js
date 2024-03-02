export function shortenNumber (num, decimalPlaces) {
  var str,
      suffix = '';

  decimalPlaces = decimalPlaces || 0;
  num = +num;

  var factor = Math.pow(10, decimalPlaces);


  //99999 -> 99.9K

  if (num < 1000) {
      str = num;
  } else if (num < 1000000) {
      str = Math.floor(num / (1000 / factor)) / factor;
      suffix = 'K';
  } else if (num < 1000000000) {
      str = Math.floor(num / (1000000 / factor)) / factor;
      suffix = 'M';
  } else if (num < 1000000000000) {
      str = Math.floor(num / (1000000000 / factor)) / factor;
      suffix = 'B';
  } else if (num < 1000000000000000) {
      str = Math.floor(num / (1000000000000 / factor)) / factor;
      suffix = 'T';
  }
  return str + suffix;
}