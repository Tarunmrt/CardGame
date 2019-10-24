
import request from 'request'
import Pokerhand from "./Pokerhand";

const getDeckID = () =>{
        let getValues = {
            method: 'GET',
            url : 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
        };
    request(getValues, function (error, response, body) {
        if (error) throw new Error(error);
        let data = JSON.parse(body);
        cardDraw(data.deck_id);
    });
}

const cardDraw = (id) => {
    let cards= [];
    let value= [];
    let suits= [];
    let getValues = {
        method: 'GET',
        url: 'https://deckofcardsapi.com/api/deck/'+id+'/draw/?count=5',
        json:true
    };
    request(getValues, function (error, response, body) {
        if(error) throw new Error(error);
        let cardObj = body.cards;

        cardObj.forEach( card  => {
            value.push(card.value);
            suits.push(card.suit);
            cards.push(card.code);
        })
    console.log("Cards in hand : ", cards);
        const result = winningHand(suits, value);
        console.log('### WINNING HAND IS: ###', result, "###");
    })

}

const winningHand = (suits, values) => {
    console.log(values);
    const pokerHand = new Pokerhand(suits, values);

    let fourOfAKind = pokerHand.isFourOfAKind();
    let flush = pokerHand.isFlush();
    let straight = pokerHand.isStraight();
    let threeOfAKind = pokerHand.isThreeOfAKind();
    let twoPair = pokerHand.isHaveTwoPair();
    let onePair = pokerHand.isOnePair();

    if(flush && straight){
       return('STRAIGHT FLUSH');
    } else if (fourOfAKind){
        return('FOUR OF A KIND')
    } else if (threeOfAKind && twoPair){
        return('FULL HOUSE')
    } else if (flush && !straight){
        return("FLUSH")
    } else if (!flush && straight){
        return('STRAIGHT')
    } else if (threeOfAKind){
        return('THREE OF A KIND')
    } else if (twoPair){
        return('TWO PAIR')
    } else if ( onePair){
        return('ONE PAIR')
    } else {
        return('HIGH CARD')
    }
}

//Let the game begin
getDeckID();