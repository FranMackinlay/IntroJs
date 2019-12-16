class PokerGame {
  constructor(player1, player2) {
    this.player1 = {name: player1, hand: []};
    this.player2 = {name: player2, hand: []};
  }
  play() {
    const deck = this.deck();
    const shuffledDeck1 = this.shuffle(deck);
    console.log(shuffledDeck1);
    for (let i = 1; i <= 5; i++) {
      this.player1.hand.push(shuffledDeck1[i]);
    }
    // console.log(this.player1.hand);
    const shuffledDeck2 = this.shuffle(deck);
    // console.log('==========================')
    for (let i = 1; i <= 5; i++) {
      this.player2.hand.push(shuffledDeck2[i]);
    }
    // console.log(this.player2.hand);
    // this.whoWins(this.player1, this.player2);
    this.whoWins(player1, player2);
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
			  let card = {Value: values[x], Suit: suits[i]};
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
  whoWins(player1, player2) {

    return console.log(`${winner} wins!`);
  }
  
}

let game = new PokerGame('Fran', 'Carla');
game.play();
