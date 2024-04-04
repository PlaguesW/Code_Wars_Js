function multiply(number){
    if (number === 0) return 0;
    const numDigits = Math.abs(number).toString().length;
    const result = number * Math.pow(5, numDigits);
    return number * Math.pow(5, numDigits)
  }