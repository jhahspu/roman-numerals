// Roman to Arabic numerals
const inputRoman = document.getElementById('input-roman');
const resultArabic = document.getElementById('result-arabic');

inputRoman.addEventListener('change', () => { 
  // resultArabic.innerHTML = inputRoman.value;
  resultArabic.innerHTML = convArabic(inputRoman.value.toUpperCase());
 });

const convArabic = (str) => {
  // Extract unique sets
  // IV(4), IX(9), XL(40), XC(90), CD(400) and CM(900)
  let tempStr = str, totalVal = 0;
  if (tempStr.includes("IV")) {
    tempStr = tempStr.replace("IV", '');
    totalVal += 4;
  } 
  if (tempStr.includes("IX")) {
    tempStr = tempStr.replace("IX", '');
    totalVal += 9;
  } 
  if (tempStr.includes("XL")) {
    tempStr = tempStr.replace("XL", '');
    totalVal += 40;
  } 
  if (tempStr.includes("XC")) {
    tempStr = tempStr.replace("XC", '');
    totalVal += 90;
  } 
  if (tempStr.includes("CD")) {
    tempStr = tempStr.replace("CD", '');
    totalVal += 400;
  } 
  if (tempStr.includes("CM")) {
    tempStr = tempStr.replace("CM", '');
    totalVal += 900;
  }
  // console.log("remainder: ", tempStr);
  for (let i = 0; i < tempStr.length; i++) {
    totalVal += checkRemainder(tempStr.charAt(i));
  }
  return totalVal;
}

const checkRemainder = (str) => {
  switch (str) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
}
