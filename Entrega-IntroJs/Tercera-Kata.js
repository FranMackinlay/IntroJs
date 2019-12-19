class PokerGame {
  constructor(hand1, hand2) {
    this.hand1 = hand1;
    this.hand2 = hand2;
    this.result;
  }
  play(hand1, hand2) {
    // const deck = this.deck();
    // const shuffledDeck1 = this.shuffle(deck);
    // console.log(shuffledDeck1);
    // for (let i = 1; i <= 5; i++) {
    //   this.player1.hand.push(shuffledDeck1[i]);
    // }
    // console.log(this.player1.hand);
    // const shuffledDeck2 = this.shuffle(deck);
    // // console.log('==========================')
    // for (let i = 1; i <= 5; i++) {
    //   this.player2.hand.push(shuffledDeck2[i]);
    // }
    // console.log(this.player2.hand);
    // // this.whoWins(this.player1, this.player2);
    this.whoWins(this.hand1, this.hand2);
    console.log(this.result);
  }

  // deck() {
  //   const suits = ['S', 'D', 'C', 'H'];
  //   const values = [
  //     '2',
  //     '3',
  //     '4',
  //     '5',
  //     '6',
  //     '7',
  //     '8',
  //     '9',
  //     '10',
  //     'J',
  //     'Q',
  //     'K',
  //     'A'
  //   ];
  //   const deck = [];

  //   for (let i = 0; i < suits.length; i++) {
  // 	  for (let x = 0; x < values.length; x++) {
  // 		  let card = {Value: values[x], Suit: suits[i]};
  // 		  deck.push(card);
  // 	  }
  //   }
  //   return deck;
  // }
  // shuffle(deck) {
  //   for (var i = 0; i < 1000; i++) {
  //     const location1 = Math.floor((Math.random() * deck.length));
  //     const location2 = Math.floor((Math.random() * deck.length));
  //     const temp = deck[location1];

  //     deck[location1] = deck[location2];
  //     deck[location2] = temp;
  //   }
  //   return deck;
  // }
  whoWins(hand1, hand2) {
    this.hasPair(hand1, hand2);
    if (this.result != undefined) {
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
    // console.log(hand1Max);
    // console.log(hand2Max);

    // console.log(hand1Array);
    // console.log(hand2Array);

    if (hand1Max > hand2Max) {
      return (this.result = 'Jugador 1 Gana: carta más alta');
    } else if (hand1Max < hand2Max) {
      return (this.result = 'Jugador 2 Gana: carta más alta');
    } else if (hand1Max == hand2Max) {
      return (this.result = 'Hay un empate');
    }
  }

  hasPair(hand1, hand2) {
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
        pairWinner = `Un par de ${pairs}!`;
      } else if (pairs.length == 2) {
        pairWinner = `Doble par de ${pairs}!`;
      } else pairWinner = '0';

      return pairWinner;
    };

    let hasHand1Pairs = findPairs(hand1Array);
    let hasHand2Pairs = findPairs(hand2Array);
    hasHand1Pairs = this.convertNumberToLetter(hasHand1Pairs);
    hasHand2Pairs = this.convertNumberToLetter(hasHand2Pairs);

    if (hasHand1Pairs.includes('Un') && hasHand2Pairs == '0') {
      return (this.result = `Jugador 1 Gana: ${hasHand1Pairs}`);
    } else if (hasHand1Pairs.includes('Doble') && hasHand2Pairs == '0') {
      return (this.result = `Jugador 1 Gana: ${hasHand1Pairs}`);
    } else if (hasHand2Pairs.includes('Un') && hasHand1Pairs == '0') {
      return (this.result = `Jugador 2 Gana: ${hasHand2Pairs}`);
    } else if (hasHand2Pairs.includes('Doble') && hasHand1Pairs == '0') {
      return (this.result = `Jugador 2 Gana: ${hasHand2Pairs}`);
    } else if (hasHand1Pairs.includes('Un') && hasHand2Pairs.includes('Un')) {
      return (this.result = 'Hay un empate de par.');
    } else if (
      hasHand1Pairs.includes('Doble') &&
      hasHand2Pairs.includes('Doble')
    ) {
      return (this.result = 'Hay un empate de doble par.');
    } else if (
      hasHand1Pairs.includes('Doble') &&
      hasHand2Pairs.includes('Un')
    ) {
      return (this.result = `Jugador 1 Gana: ${hasHand1Pairs}`);
    } else if (
      hasHand2Pairs.includes('Doble') &&
      hasHand1Pairs.includes('Un')
    ) {
      return (this.result = `Jugador 2 Gana: ${hasHand2Pairs}`);
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


  hasThreeOfKind(hand1, hand2) {}

  hasStraight(hand1, hand2) {}

  hasFlush(hand1, hand2) {}

  hasFullHouse(hand1, hand2) {}

  hasPoker(hand1, hand2) {}

  hasStraightFlush(hand1, hand2) {}
}

let game = new PokerGame(
  ['9H', 'JS', 'QS', 'KC', '6C'],
  ['10S', '4S', '3D', 'AC', '9D']
);
game.play();
