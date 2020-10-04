// Arabic to Roman numerals

const inputArabic = document.getElementById('input-arabic');
const resultRoman = document.getElementById('result-roman');

inputArabic.addEventListener('change', function(){ inputArabicChange(this.value); });
inputArabic.addEventListener('keyup', function() { inputArabicChange(this.value); });

const inputArabicChange = (val) => {
  let tempVal = convRoman(val);
  resultRoman.innerHTML = tempVal;
}

const convRoman = (str) => {
  if (parseInt(str) < 1 || parseInt(str) > 3000) {
    return str;
  }

  if (str.length === 1) {
    return units(parseInt(str));
  } else if(str.length === 2) {
    return tens(parseInt(str[0])) + units(parseInt(str[1])) + ' ';
  } else if(str.length === 3) {
    return hundreds(parseInt(str[0])) + tens(parseInt(str[1])) + units(parseInt(str[2])) + ' ';
  } else if(str.length === 4) {
    return thousands(parseInt(str[0])) + hundreds(parseInt(str[1])) + tens(parseInt(str[2])) + units(parseInt(str[3])) + ' ';
  } else {
    return str;
  }
}

const units = (n) => {
  switch (n) {
    case 0:
      return "";
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
  }
}

const tens = (n) => {
  switch (n) {
    case 0:
      return "";
    case 1:
      return "X";
    case 2:
      return "XX";
    case 3:
      return "XXX";
    case 4:
      return "XL";
    case 5:
      return "L";
    case 6:
      return "LX";
    case 7:
      return "LXX";
    case 8:
      return "LXXX";
    case 9:
      return "XC";
  }
}

const hundreds = (n) => {
  switch (n) {
    case 0:
      return "";
    case 1:
      return "C";
    case 2:
      return "CC";
    case 3:
      return "CCC";
    case 4:
      return "CD";
    case 5:
      return "D";
    case 6:
      return "DC";
    case 7:
      return "DCC";
    case 8:
      return "DCCC";
    case 9:
      return "CM";
  }
}

const thousands = (n) => {
  switch (n) {
    case 0:
      return "";
    case 1:
      return "M";
    case 2:
      return "MM";
    case 3:
      return "MMM";
  }
}

