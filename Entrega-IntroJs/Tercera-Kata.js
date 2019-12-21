class PokerGame {
  constructor(hand1, hand2) {
    this.hand1 = [];
    this.hand2 = [];
    this.result = '';
  }
  play() {
    const deck = this.deck();
    const shuffledDeck1 = this.shuffle(deck);
    // console.log(shuffledDeck1);
    for (let i = 1; i <= 5; i++) {
      this.hand1.push(shuffledDeck1[i]);
    }
    console.log(`Cartas del Jugador 1: ${this.hand1}.`);
    const shuffledDeck2 = this.shuffle(deck);
    console.log();
    for (let i = 1; i <= 5; i++) {
      this.hand2.push(shuffledDeck2[i]);
    }
    console.log(`Cartas del Jugador 2: ${this.hand2}.`);
    this.whoWins(this.hand1, this.hand2);
    console.log();
    console.log('==========================')
    console.log();
    console.log(this.result);
    console.log();
  }

  deck() {
    const suits = ['S', 'D', 'C', 'H'];
    const values = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A'
    ];
    const deck = [];

    for (let i = 0; i < suits.length; i++) {
  	  for (let x = 0; x < values.length; x++) {
  		  let card = values[x] + suits[i];
  		  deck.push(card);
  	  }
    }
    return deck;
  }
  shuffle(deck) {
    for (var i = 0; i < 1000; i++) {
      const location1 = Math.floor((Math.random() * deck.length));
      const location2 = Math.floor((Math.random() * deck.length));
      const temp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = temp;
    }
    return deck;
  }
  whoWins(hand1, hand2) {
    this.hasStraightFlush(hand1, hand2);
    if (this.result != '') {
      return this.result;
    }
    this.hasFlush(hand1, hand2);
    if (this.result != '') {
      return this.result;
    }
    this.hasStraight(hand1, hand2);
    if (this.result != '') {
      return this.result;
    }
    this.hasPoker(hand1, hand2);
    if (this.result != '') {
      return this.result;
    }
    this.hasFullHouse(hand1, hand2);
    if (this.result != '') {
      return this.result;
    }
    this.hasThreeOfKind(hand1, hand2);
    if (this.result != '') {
      return this.result;
    }
    this.hasPairs(hand1, hand2);
    if (this.result != '') {
      return this.result;
    }
    this.hasHighCard(hand1, hand2);

    return this.result;
  }
  hasHighCard(hand1, hand2) {
    const hand1Array = hand1.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand2Array = hand2.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand1Max = Math.max.apply(Math, hand1Array);
    const hand2Max = Math.max.apply(Math, hand2Array);

    if (hand1Max > hand2Max) {
      return (this.result = 'Jugador 1 Gana: carta más alta');
    } else if (hand1Max < hand2Max) {
      return (this.result = 'Jugador 2 Gana: carta más alta');
    } else if (hand1Max == hand2Max) {
      return (this.result = 'Hay un empate');
    }
  }

  hasPairs(hand1, hand2) {
    const hand1Array = hand1.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand2Array = hand2.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });

    const findPairs = array => {
      let object = {};
      let pairs = [];
      let pairWinner;

      array.forEach(function(item) {
        if (!object[item]) object[item] = 0;
        object[item] += 1;
      });

      for (let prop in object) {
        if (object[prop] == 2) {
          pairs.push(prop);
        }
      }
      if (pairs.length == 1) {
        pairWinner = 'Un par de ${pairs}!';
      } else if (pairs.length == 2) {
        pairWinner = 'Doble par de ${pairs}!';
      } else pairWinner = '0';

      return pairWinner;
    };

    let hasHand1Pairs = findPairs(hand1Array);
    let hasHand2Pairs = findPairs(hand2Array);
    hasHand1Pairs = this.convertNumberToLetter(hasHand1Pairs);
    hasHand2Pairs = this.convertNumberToLetter(hasHand2Pairs);

    if (hasHand1Pairs.includes('Un') && hasHand2Pairs == '0') {
      return (this.result = 'Jugador 1 Gana: Par!');
    } else if (hasHand1Pairs.includes('Doble') && hasHand2Pairs == '0') {
      return (this.result = 'Jugador 1 Gana: Doble Par!');
    } else if (hasHand2Pairs.includes('Un') && hasHand1Pairs == '0') {
      return (this.result = 'Jugador 2 Gana: Par!');
    } else if (hasHand2Pairs.includes('Doble') && hasHand1Pairs == '0') {
      return (this.result = 'Jugador 2 Gana: Doble Par');
    } else if (hasHand1Pairs.includes('Un') && hasHand2Pairs.includes('Un')) {
      const numHand1Array = hand1Array.map(Number);
      const numHand2Array = hand2Array.map(Number);

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumHand1 = numHand1Array.reduce(reducer);
      let sumHand2 = numHand2Array.reduce(reducer);

      if (sumHand1 > sumHand2) {
        return (this.result = 'Jugador 1 Gana: Par!');
      } else if (sumHand1 < sumHand2) {
        return (this.result = 'Jugador 2 Gana: Par!');
      }

      // return (this.result = 'Hay un empate de par.');
    } else if (
      hasHand1Pairs.includes('Doble') &&
      hasHand2Pairs.includes('Doble')
    ) {
      const numHand1Array = hand1Array.map(Number);
      const numHand2Array = hand2Array.map(Number);

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumHand1 = numHand1Array.reduce(reducer);
      let sumHand2 = numHand2Array.reduce(reducer);

      if (sumHand1 > sumHand2) {
        return (this.result = 'Jugador 1 Gana: Doble Par!');
      } else if (sumHand1 < sumHand2) {
        return (this.result = 'Jugador 2 Gana: Doble Par!');
      }
      // return (this.result = 'Hay un empate de doble par.');
    } else if (
      hasHand1Pairs.includes('Doble') &&
      hasHand2Pairs.includes('Un')
    ) {
      return (this.result = 'Jugador 1 Gana: Doble Par!');
    } else if (
      hasHand2Pairs.includes('Doble') &&
      hasHand1Pairs.includes('Un')
    ) {
      return (this.result = 'Jugador 2 Gana: Doble Par!');
    }
  }
  convertNumberToLetter(str) {
    if (str.includes('11')) {
      return (str = str.replace('11', 'J'));
    } else if (str.includes('12')) {
      return (str = str.replace('12', 'Q'));
    } else if (str.includes('13')) {
      return (str = str.replace('13', 'K'));
    } else if (str.includes('14')) {
      return (str = str.replace('14', 'A'));
    } else return str;
  }
  hasThreeOfKind(hand1, hand2) {
    const hand1Array = hand1.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand2Array = hand2.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });

    const findToak = array => {
      let object = {};
      let toak = [];
      let toakWinner;

      array.forEach(function(item) {
        if (!object[item]) object[item] = 0;
        object[item] += 1;
      });

      for (let prop in object) {
        if (object[prop] == 3) {
          toak.push(prop);
          toak.push(prop);
          toak.push(prop);
        }
      }
      if (toak.length == 3) {
        toakWinner = 'Trio de ${toak[0]}!';
      } else toakWinner = '0';

      return toakWinner;
    };

    let hasHand1Toak = findToak(hand1Array);
    let hasHand2Toak = findToak(hand2Array);
    hasHand1Toak = this.convertNumberToLetter(hasHand1Toak);
    hasHand2Toak = this.convertNumberToLetter(hasHand2Toak);

    if (hasHand1Toak.includes('Trio') && hasHand2Toak == '0') {
      return (this.result = 'Jugador 1 Gana: Trio!');
    } else if (hasHand2Toak.includes('Trio') && hasHand1Toak == '0') {
      return (this.result = 'Jugador 2 Gana: Trio!');
    } else if (hasHand1Toak.includes('Trio') && hasHand2Toak.includes('Trio')) {
      const numHand1Array = hand1Array.map(Number);
      const numHand2Array = hand2Array.map(Number);

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumHand1 = numHand1Array.reduce(reducer);
      let sumHand2 = numHand2Array.reduce(reducer);

      if (sumHand1 > sumHand2) {
        return (this.result = 'Jugador 1 Gana: Trio!');
      } else if (sumHand1 < sumHand2) {
        return (this.result = 'Jugador 2 Gana: Trio!');
      }

      // return (this.result = 'Hay un empate de Trio.');
    }
  }

  hasStraight(hand1, hand2) {
    const hand1Array = hand1.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand2Array = hand2.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const sortedHand1Array = hand1Array.sort((a, b) => a - b);
    const sortedHand2Array = hand2Array.sort((a, b) => a - b);

    let counterHand1 = 0;
    let counterHand2 = 0;

    const numHand1Array = sortedHand1Array.map(Number);
    const numHand2Array = sortedHand2Array.map(Number);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sumHand1 = numHand1Array.reduce(reducer);
    let sumHand2 = numHand2Array.reduce(reducer);

    for (let i = 0; i < 5; i++) {
      if (
        numHand1Array[i] + 1 == numHand1Array[i + 1] &&
        numHand2Array[i] + 1 == numHand2Array[i + 1]
      ) {
        counterHand1++;
        counterHand2++;
      } else if (numHand1Array[i] + 1 == numHand1Array[i + 1]) {
        counterHand1++;
      } else if (numHand2Array[i] + 1 == numHand2Array[i + 1]) {
        counterHand2++;
      }
    }

    if (counterHand1 == 4 && counterHand2 == 4) {
      if (sumHand1 > sumHand2) {
        return (this.result = 'Jugador 1 Gana: Escalera!');
      } else if (sumHand1 < sumHand2) {
        return (this.result = 'Jugador 2 Gana: Escalera!');
      }
    } else if (counterHand1 == 4) {
      return (this.result = 'Jugador 1 Gana: Escalera!');
    } else if (counterHand2 == 4) {
      return (this.result = 'Jugador 2 Gana: Escalera!');
    }
  }

  hasFlush(hand1, hand2) {
    const hand1Array = hand1.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand2Array = hand2.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand1Suits = hand1.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(2);
      } else return char[1];
    });
    const hand2Suits = hand2.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(2);
      } else return char[1];
    });

    const findFlush = array => {
      let object = {};
      let flush = [];
      let flushWinner;

      array.forEach(function(item) {
        if (!object[item]) object[item] = 0;
        object[item] += 1;
      });

      for (let prop in object) {
        if (object[prop] == 4) {
          flush.push(prop);
          flush.push(prop);
          flush.push(prop);
          flush.push(prop);
        }
      }
      if (flush.length == 4) {
        flushWinner = 'Flush de ${flush[0]}!';
      } else flushWinner = '0';

      return flushWinner;
    };
    let hasHand1Flush = findFlush(hand1Suits);
    let hasHand2Flush = findFlush(hand2Suits);

    if (hasHand1Flush.includes('Flush') && hasHand2Flush == '0') {
      return (this.result = 'Jugador 1 Gana: Flush!');
    } else if (hasHand2Flush.includes('Flush') && hasHand1Flush == '0') {
      return (this.result = 'Jugador 2 Gana: Flush!');
    } else if (
      hasHand1Flush.includes('Flush') &&
      hasHand2Flush.includes('Flush')
    ) {
      const numHand1Array = hand1Array.map(Number);
      const numHand2Array = hand2Array.map(Number);

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumHand1 = numHand1Array.reduce(reducer);
      let sumHand2 = numHand2Array.reduce(reducer);

      if (sumHand1 > sumHand2) {
        return (this.result = 'Jugador 1 Gana: Flush!');
      } else if (sumHand1 < sumHand2) {
        return (this.result = 'Jugador 2 Gana: Flush!');
      }
    }
  }

  hasFullHouse(hand1, hand2) {
    let counterPlayer1 = 0;
    let counterPlayer2 = 0;
    this.hasPairs(hand1, hand2);
    if (this.result.includes('Jugador 1')) {
      counterPlayer1++;
    } else if (this.result.includes('Jugador 2')) {
      counterPlayer2++;
    } else if (this.result.includes('empate')) {
      counterPlayer1++;
      counterPlayer2++;
    }
    this.hasThreeOfKind(hand1, hand2);
    if (this.result.includes('Jugador 1 Gana: Trio!')) {
      counterPlayer1++;
    } else if (this.result.includes('Jugador 2 Gana: Trio!')) {
      counterPlayer2++;
    } else if (this.result.includes('empate')) {
      counterPlayer1++;
      counterPlayer2++;
    }
    if (counterPlayer1 == 2 && counterPlayer2 == 2) {
      const numHand1Array = hand1Array.map(Number);
      const numHand2Array = hand2Array.map(Number);

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumHand1 = numHand1Array.reduce(reducer);
      let sumHand2 = numHand2Array.reduce(reducer);

      if (sumHand1 > sumHand2) {
        return (this.result = 'Jugador 1 Gana: Full House!');
      } else if (sumHand1 < sumHand2) {
        return (this.result = 'Jugador 2 Gana: Full House!');
      }
    } else if (counterPlayer1 == 2) {
      return (this.result = 'Jugador 1 Gana: Full House');
    } else if (counterPlayer2 == 2) {
      return (this.result = 'Jugador 2 Gana: Full House');
    }
  }

  hasPoker(hand1, hand2) {
    const hand1Array = hand1.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand2Array = hand2.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });

    const findPoker = array => {
      let object = {};
      let poker = [];
      let pokerWinner;

      array.forEach(function(item) {
        if (!object[item]) object[item] = 0;
        object[item] += 1;
      });

      for (let prop in object) {
        if (object[prop] == 4) {
          poker.push(prop);
          poker.push(prop);
          poker.push(prop);
          poker.push(prop);
        }
      }
      if (poker.length == 4) {
        pokerWinner = 'Poker de ${poker[0]}!';
      } else pokerWinner = '0';

      return pokerWinner;
    };

    let hasHand1Poker = findPoker(hand1Array);
    let hasHand2Poker = findPoker(hand2Array);
    hasHand1Poker = this.convertNumberToLetter(hasHand1Poker);
    hasHand2Poker = this.convertNumberToLetter(hasHand2Poker);

    if (hasHand1Poker.includes('Poker') && hasHand2Poker == '0') {
      return (this.result = 'Jugador 1 Gana: Poker!');
    } else if (hasHand2Poker.includes('Poker') && hasHand1Poker == '0') {
      return (this.result = 'Jugador 2 Gana: Poker!');
    } else if (
      hasHand1Poker.includes('Poker') &&
      hasHand2Poker.includes('Poker')
    ) {
      const numHand1Array = hand1Array.map(Number);
      const numHand2Array = hand2Array.map(Number);

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumHand1 = numHand1Array.reduce(reducer);
      let sumHand2 = numHand2Array.reduce(reducer);

      if (sumHand1 > sumHand2) {
        return (this.result = 'Jugador 1 Gana: Poker!');
      } else if (sumHand1 < sumHand2) {
        return (this.result = 'Jugador 2 Gana: Poker!');
      }
    }
  }

  hasStraightFlush(hand1, hand2) {
    const hand1Array = hand1.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });
    const hand2Array = hand2.map(char => {
      if (char.charAt(1) == '0') {
        return char.charAt(0) + char.charAt(1);
      } else if (char.charAt(0) == 'J') {
        return (char = '11');
      } else if (char.charAt(0) == 'Q') {
        return (char = '12');
      } else if (char.charAt(0) == 'K') {
        return (char = '13');
      } else if (char.charAt(0) == 'A') {
        return (char = '14');
      }
      return char.charAt(0);
    });

    let counterPlayer1 = 0;
    let counterPlayer2 = 0;
    this.hasStraight(hand1, hand2);
    if (this.result.includes('Jugador 1')) {
      counterPlayer1++;
    } else if (this.result.includes('Jugador 2')) {
      counterPlayer2++;
    } 
    this.hasFlush(hand1, hand2);
    if (this.result.includes('Jugador 1 Gana: Flush!')) {
      counterPlayer1++;
    } else if (this.result.includes('Jugador 2 Gana: Flush!')) {
      counterPlayer2++;
    } 
    if (counterPlayer1 == 1 && counterPlayer2 == 1) {
      const numHand1Array = hand1Array.map(Number);
      const numHand2Array = hand2Array.map(Number);

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumHand1 = numHand1Array.reduce(reducer);
      let sumHand2 = numHand2Array.reduce(reducer);

      if (sumHand1 > sumHand2) {
        return (this.result = 'Jugador 1 Gana: Straight Flush!');
      } else if (sumHand1 < sumHand2) {
        return (this.result = 'Jugador 2 Gana: Straight Flush!');
      }
    } else if (counterPlayer1 == 2) {
      return (this.result = 'Jugador 1 Gana: Straight Flush!');
    } else if (counterPlayer2 == 2) {
      return (this.result = 'Jugador 2 Gana: Straight Flush!');
    }
  }
}

let game = new PokerGame();
game.play();
