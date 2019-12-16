class FooBarQuix {
  constructor () {
    this.result;
  }
  isFooBarQuix (number) {
    if (number < 1 || number > 100) {
      this.result = 'Number out of bounds! Try with number between 1-100.'
    } else {
      for (let i = 1; i <= number; i++) {
        this.isFooRemainder(i);
        this.isBarRemainder(i);
        this.isQuixRemainder(i);
        this.isNumberRepeated(i);
        if (this.result == undefined ||
            typeof this.result === typeof i) {
          this.result = i;
          console.log(this.result);
        } else {
          console.log(this.result);
        }
        this.result = undefined;
        // return console.log(this.result);
      }
    }
    
  }
  isFooRemainder(i) {
    if (i % 3 === 0) {
      this.result = 'Foo';
      // console.log(this.result);
    } else if (this.result == undefined) {
      // this.result = '';
    }

    // return console.log(this.result);
  }
  isBarRemainder(i) {
    if (i % 5 === 0) {
      this.result = 'Bar';
    } else {
      // this.result = '';
    }

    // return console.log(this.result);
  }
  isQuixRemainder(i) {
    if (i % 7 === 0) {
      this.result = 'Quix';
    } else {
      // this.result = '';
    }
    
    // return console.log(this.result);
  }
  isNumberRepeated(i) {
    const numArray = i.toString().split('');
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
    // return this.result;
  }

}
const primeraKata = new FooBarQuix();
primeraKata.isFooBarQuix(10);
