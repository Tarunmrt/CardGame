class Pokerhand {
    constructor(cardSuits, cardsValues) {
        this.cardSuits = cardSuits;
        this.cardValues = [];
        this.symbolToNum(cardsValues);
    }

    symbolToNum(cardsValues){
        cardsValues.forEach(value => {
            this.cardValues.push(value == 'ACE' ? '1' : value == 'JACK' ? '11' : value == 'QUEEN' ? '12' : value == 'KING' ? '13' : value);
        })
        this.cardValues.sort(function(a,b){return b-a });
    }

    isStraight(){
        let cards = this.cardValues;
        for(let i = 0; i < 4; i++) {
            if(parseInt(cards[i]) + 1 != parseInt(cards[i + 1])) {
                return false;
            }
        }
        return true;
    }

    isFlush(){
        let suits = this.cardSuits;
        for(let i = 0; i < 4; i++) {
            if(suits[0] + 1 != suits[i + 1]) {
                return false;
            }
        }
        return true;
    }

    isFourOfAKind(){
        let cards = this.cardValues;
        for(let i = 0; i < 5; i++){
            let cardCount = 0;
            cards.forEach(value => {
                if(value == cards[i]){ cardCount++ }
            });
            if(cardCount === 4) { return true }
        }
        return false;
    }

    isThreeOfAKind(){
        let cards = this.cardValues;
        for (let i = 0; i < 5; i++){
            let count = 0;
            cards.forEach((value) => {
                if (value == cards[i] ) { count++; }
            });
            if (count == 3) { return true }
        }
        return false;
    }

    isHaveTwoPair() {
        let cards = this.cardValues;
        let pairsFound = 0;
        for (let i = 0; i < 5; i++){
            let count = 0;
            cards.forEach((value) => {
                if (value == cards[i] ) {
                    count++;
                }
            });
            if (count == 2) {
                pairsFound++;
            }
        }
        if (pairsFound == 4) {
            return true;
        }
        return false;
    };
    isOnePair(){
        let cards = this.cardValues
        for (let i = 0; i < 5; i++){
            let count = 0;
            cards.forEach((value) => {
                if (value == cards[i] ) {
                    count++;
                }
            });
            if (count == 2) {
                return true;
            }
        }
        return false;
    }
}

export default Pokerhand;