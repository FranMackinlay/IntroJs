class FooBarQuix {
  constructor () {
    this.result;
  }
  isFooBarQuix (number) {
    if (number < 1 || number > 100) {
      this.result = 'Number out of bounds! Try with number between 1-100.'
    } else {
      this.isFooRemainder(number);
      this.isBarRemainder(number);
      this.isQuixRemainder(number);
      this.isNumberRepeated(number);
      if (this.result == undefined) {
        this.result = number;
      }
    }
    return this.result;
  }
  isFooRemainder(number) {
    if (number % 3 === 0) {
      this.result = 'Foo';
    } else if (this.result == undefined) {
      this.result = '';
    }

    return this.result;
  }
  isBarRemainder(number) {
    if (number % 5 === 0) {
      this.result = this.result + 'Bar';
    } else {
      this.result += '';
    }

    return this.result;
  }
  isQuixRemainder(number) {
    if (number % 7 === 0) {
      this.result = this.result.concat('Quix');
    } else {
      this.result += '';
    }
    
    return this.result;
  }
  isNumberRepeated(number) {
    const numArray = number.toString().split('');
    const numFinal = numArray.map(Number);
    numFinal.forEach(element => {
      if (element === 3) {
        this.result += 'Foo';
      } else if (element === 5) {
        this.result += 'Bar';
      } else if (element === 7) {
        this.result += 'Quix';
      }
    });
    return this.result;
  }
}
const primeraKata = new FooBarQuix();
console.log(primeraKata.isFooBarQuix(75));
