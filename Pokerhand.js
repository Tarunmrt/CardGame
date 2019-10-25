class Pokerhand {
    constructor(cardSuits, cardsValues) {
        this.cardSuits = cardSuits;
        this.cardValues = [];
        this.symbolToNum(cardsValues);
    }

    //Cards faces convert to string integer number
    symbolToNum(cardsValues){
        cardsValues.forEach(value => {
            this.cardValues.push(value === 'KING' ? '13' : value === 'QUEEN' ? '12' : value === 'JACK' ? '11' : value === 'ACE' ? '14' : value);
        })
        this.cardValues.sort(function(a,b){return b-a });
    }

    isStraight_Hand(){
        let cards = this.cardValues;
        for(let i = 0; i < 4; i++) {
            if(parseInt(cards[i + 1]) + 1 !== parseInt(cards[i])) {
                return false;
            }
        }
        return true;
    }

    isFlush_Hand(){
        let suits = this.cardSuits;
        for(let i = 0; i < 4; i++) {
            if(suits[0] !== suits[i + 1]) {
                return false;
            }
        }
        return true;
    }

    isFourOfAKind_Hand(){
        let cards = this.cardValues;
        for(let i = 0; i < 5; i++){
            let cardCount = 0;
            cards.forEach(value => {
                if(value === cards[i]){ cardCount++ }
            });
            if(cardCount === 4) { return true }
        }
        return false;
    }

    isThreeOfAKind_Hand(){
        let cards = this.cardValues;
        for (let i = 0; i < 5; i++){
            let count = 0;
            cards.forEach((value) => {
                if (value === cards[i] ) { count++; }
            });
            if (count === 3) { return true }
        }
        return false;
    }

    isHaveTwoPair_Hand() {
        let cards = this.cardValues;
        let pairsFound = 0;
        for (let i = 0; i < 5; i++){
            let count = 0;
            cards.forEach((value) => {
                if (value === cards[i] ) {
                    count++;
                }
            });
            if (count === 2) {
                pairsFound++;
            }
        }
        if (pairsFound === 4) {
            return true;
        }
        return false;
    };

    isOnePair_Hand(){
        let cards = this.cardValues
        for (let i = 0; i < 5; i++){
            let count = 0;
            cards.forEach((value) => {
                if (value === cards[i] ) {
                    count++;
                }
            });
            if (count === 2) {
                return true;
            }
        }
        return false;
    }

    isRoyalFlush(){
        if(this.isStraight_Hand() && this.isFlush_Hand() && this.cardValues.find(ace => {return ace === '14' })){
            return true;
        }
        return false;
    }
}

export default Pokerhand;