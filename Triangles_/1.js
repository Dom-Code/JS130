class Series {
    constructor(str) {
      this.numberString = str;
    }
  
    slices(length) {
      this.validateSeries(length);
  
      let digits = this.numberString.split('')
                                    .map(digit => Number(digit));
      let maxStart = this.numberString.length - length;

      let seriesList = [];
  
      for (let idx = 0; idx <= maxStart; idx++) {
        let series = digits.slice(idx, idx+length);
        console.log(series)
        seriesList.push(series);
      }
  
      return seriesList;
    }
  
    validateSeries(length) {
      if (length > this.numberString.length) {
        throw new Error("Series length can't be greater than string length");
      }
    }
  }
  

  let number = new Series('012343434');
  console.log(number.slices(3))