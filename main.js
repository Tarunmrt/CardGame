
import request from 'request'
import Pokerhand from "./Pokerhand";

//getting the Deck_ID 
const getDeckID = () => {
    let getValues = {
        method: 'GET',
        url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
    };
    request(getValues, function (error, response, body) {
        if (error) throw new Error(error);
        let data = JSON.parse(body);
        cardDraw(data.deck_id);
    });
}

// using the Deck_ID, drawing five cards
const cardDraw = (id) => {
    let cards = [];
    let value = [];
    let suits = [];
    let getValues = {
        method: 'GET',
        url: 'https://deckofcardsapi.com/api/deck/' + id + '/draw/?count=5',
        json: true
    };
    request(getValues, function (error, response, body) {
        if (error) throw new Error(error);
        let cardObj = body.cards;

        cardObj.forEach(card => {
            value.push(card.value);
            suits.push(card.suit);
            cards.push(card.value + ' ' + card.suit);
        })
        console.log("#### Cards in hand ==> ", cards.join(' || '), '####');
        const result = winningHand(suits, value);
        console.log(`#### POKER WINNING HAND IS ==> ${result} ####`);
    })

}

//Calculating the PokerHand
const winningHand = (suits, values) => {
    const pokerHand = new Pokerhand(suits, values);

    let royalFlush = pokerHand.isRoyalFlush();
    let fourOfAKind = pokerHand.isFourOfAKind_Hand();
    let flush = pokerHand.isFlush_Hand();
    let straight = pokerHand.isStraight_Hand();
    let threeOfAKind = pokerHand.isThreeOfAKind_Hand();
    let twoPair = pokerHand.isHaveTwoPair_Hand();
    let onePair = pokerHand.isOnePair_Hand();

    if (royalFlush) {
        return ('ROYAL FLUSH');
    } else if (flush && straight) {
        return ('STRAIGHT FLUSH');
    } else if (fourOfAKind) {
        return ('FOUR OF A KIND')
    } else if (threeOfAKind && twoPair) {
        return ('FULL HOUSE')
    } else if (flush && !straight) {
        return ('FLUSH')
    } else if (!flush && straight) {
        return ('STRAIGHT')
    } else if (threeOfAKind) {
        return ('THREE OF A KIND')
    } else if (twoPair) {
        return ('TWO PAIR')
    } else if (onePair) {
        return ('ONE PAIR')
    } else {
        return ('HIGH CARD')
    }
}

//Let the game begins
getDeckID();