const Card = require('./Card.js');

exports.CardsFaceVale = (card) => {

        for(let i=0;i<5;i++){
        if(card.numbers[i]== 'ACE'){
            card.numbers='14';
        }
    }

}

