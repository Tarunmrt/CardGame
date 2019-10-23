const request = require('request');

 let getDeckID = () =>{
        let getValues = {
            method: 'GET',
            url : 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
        };

    request(getValues, function (error, response, body)
    {
        if (error) throw new Error(error);
        let data = JSON.parse(body);
        cardDraw(data.deck_id);

    });
}

let cardDraw = (id) => {
     console.log('https://deckofcardsapi.com/api/deck/'+id+'/draw/?count=5');
    let cards= [];
    let getValues = {
        method: 'GET',
        url: 'https://deckofcardsapi.com/api/deck/'+id+'/draw/?count=5',
        json:true
    };
    request(getValues, function (error, response, body) {
        console.log(error);
        // if(error) throw new Error(error);
        let cardObj = body.cards;
        cardObj.forEach( card  => {
        cards.push(card.code);
        })
    console.log("Cards: ", cards);
    })

}

module.exports = {
    getDeckID: getDeckID,
}
// exports default getDeckID