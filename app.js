'use strict'


class Card {
    constructor(suit, value, faceUp=false) {
        this.suit;
        this.value;
        this.faceUp;
    }

    static SUITS = ['spades', 'hearts', 'diamonds', 'clubs'];

    static VALUE = ['ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
}


class Stack {
    constructor (cards) {
        this.pile = [...cards];
    };

    addCard(card) {
         this.pile.push(card)
    };

    removeCard(card) {
        this.pile.pop(card)
    };

    shuffleCards() {
        let currentIndex = this.pile.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);

            temporaryValue = this.pile[randomIndex];
            this.pile[currentIndex] = this.pile[randomIndex];
            this.pile[randomIndex] = temporaryValue;
        };

        return this.pile;
    };

}

class Draw extends Stack {
    constructor() {
        super.shuffleCards(pile);
    };

};


