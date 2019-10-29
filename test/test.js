import Pokerhand from "../Pokerhand";
import { expect } from 'chai'

const mockDataRoyalStrFlush = {suits: ['HEARTS', 'HEARTS','HEARTS','HEARTS','HEARTS'], value: [ 'ACE', 'KING', 'QUEEN', 'JACK', '10' ]};
const mockDataNotRoyalStraightFlush = {suits: ['HEARTS', 'HEARTS','HEARTS','HEARTS','SPADES'], value: [ 'KING', 'KING', 'QUEEN', 'JACK', '10' ]};
const mockDataStraightFlush = {suits: ['SPADES','SPADES','SPADES', 'SPADES', 'SPADES'], value: [ '10', '9', '8', '7', '6' ]};
const mockDataNotStraightFlush = {suits: ['SPADES','HEARTS','SPADES', 'DIAMONDS', 'SPADES'], value: [ '10', '5', '8', '4', '6' ]};
const mockDataFourOfAKind = {suits: ['CLUBS', 'CLUBS', 'DIAMONDS', 'SPADES', 'HEARTS'], value: [ '8', '8', '8', '8', 'KING' ]};
const mockDataNotFourOfAKind = {suits: ['CLUBS', 'CLUBS', 'DIAMONDS', 'SPADES', 'HEARTS'], value: [ '10', '6', '8', '3', 'KING' ]};
const mockDataFullHouse = {suits: ['DIAMONDS', 'SPADES', 'DIAMONDS', 'SPADES', 'CLUBS'], value: [ '10', '10', '10', 'JACK', 'JACK' ]};
const mockDataNotFullHouse = {suits: ['SPADES', 'HEARTS', 'DIAMONDS', 'SPADES', 'CLUBS'], value: [ '8', '10', '10', '2', 'JACK' ]};
const mockDataFlush = {suits: ['HEARTS', 'HEARTS', 'HEARTS', 'HEARTS', 'HEARTS' ], value: [ '2', '5', '7', 'JACK', '4' ]};
const mockDataNotFlush = {suits: ['HEARTS', 'HEARTS', 'HEARTS', 'SPADES', 'HEARTS' ], value: [ 'JACK', '5', '7', 'JACK', '4' ]};
const mockDataStraight = {suits: ['HEARTS', 'CLUBS', 'HEARTS', 'SPADES', 'SPADES'], value: [ 'JACK', '10', '9', '8', '7' ]};
const mockDataNotStraight = {suits: ['HEARTS', 'CLUBS', 'HEARTS', 'DIAMONDS', 'SPADES'], value: [ '10', '4', '9', '8', '6' ]};
const mockDataThreeOfAKind = {suits: ['HEARTS', 'DIAMONDS', 'DIAMONDS', 'SPADES', 'SPADES'], value: [ '3', '3', '3', 'JACK', '10' ]};
const mockDataNotThreeOfAKind = {suits: ['HEARTS', 'CLUBS', 'DIAMONDS', 'SPADES', 'SPADES'], value: [ '3', '6', '3', 'ACE', '10' ]};
const mockDataTwoPair = {suits: ['SPADES', 'CLUBS', 'DIAMONDS', 'CLUBS', 'SPADES'], value: [ 'ACE', 'ACE', '5', '5', '10' ]};
const mockDataNotTwoPair = {suits: ['SPADES', 'CLUBS', 'DIAMONDS', 'CLUBS', 'SPADES'], value: [ 'KING', 'ACE', '5', '5', '10' ]};
const mockDataOnePair = {suits: ['HEARTS', 'CLUBS', 'HEARTS', 'CLUBS', 'DIAMONDS'], value: [ '10', '10', 'QUEEN', 'JACK', '2' ]};
const mockDataNotOnePair = {suits: ['HEARTS', 'SPADES', 'HEARTS', 'CLUBS', 'DIAMONDS'], value: [ '4', '8', 'QUEEN', 'JACK', '2' ]};
const mockDataHighCard = {suits: ['SPADES', 'CLUBS', 'DIAMONDS', 'SPADES', 'CLUBS'], value: [ 'ACE', '10', '5', 'JACK', '6' ]};


describe('Winning Hand Evalutor', function() {
    it('should return true for Royal Flush', () =>{
        const pokerHand = new Pokerhand(mockDataRoyalStrFlush.suits, mockDataRoyalStrFlush.value);
        expect(pokerHand.isRoyalFlush()).to.be.true;
    });
    it('Should return false for Royal Flush', function() {
        const pokerHand = new Pokerhand(mockDataNotRoyalStraightFlush.suits, mockDataNotRoyalStraightFlush.value);
        expect(pokerHand.isRoyalFlush()).to.be.false;
    })
    it('Should return true for Straight Flush', function() {
        const pokerHand = new Pokerhand(mockDataStraightFlush.suits, mockDataStraightFlush.value);
        expect(pokerHand.isFlush_Hand() && pokerHand.isStraight_Hand()).to.be.true;
    });
    it('Should return false for Straight Flush', function() {
        const pokerHand = new Pokerhand(mockDataNotStraightFlush.suits, mockDataNotStraightFlush.value);
        expect(pokerHand.isStraight_Hand() && pokerHand.isFlush_Hand()).to.be.false;
    })
    it('Should return true for Four of a Kind', function() {
        const pokerHand = new Pokerhand(mockDataFourOfAKind.suits, mockDataFourOfAKind.value);
        expect(pokerHand.isFourOfAKind_Hand()).to.be.true;
    });
    it('Should return false for Four of a Kind', function() {
        const pokerHand = new Pokerhand(mockDataNotFourOfAKind.suits, mockDataNotFourOfAKind.value);
        expect(pokerHand.isFourOfAKind_Hand()).to.be.false;
    });
    it('Should return true for Full House', function() {
        const pokerHand = new Pokerhand(mockDataFullHouse.suits, mockDataFullHouse.value);
        expect(pokerHand.isThreeOfAKind_Hand() && pokerHand.isOnePair_Hand()).to.be.true;
    });
    it('Should return false for Full House', function() {
        const pokerHand = new Pokerhand(mockDataNotFullHouse.suits, mockDataNotFullHouse.value);
        expect(pokerHand.isThreeOfAKind_Hand() && pokerHand.isOnePair_Hand()).to.be.false;
    });
    it('Should return true for Flush', function() {
        const pokerHand = new Pokerhand(mockDataFlush.suits, mockDataFlush.value);
        expect(pokerHand.isFlush_Hand()).to.be.true;
    });
    it('Should return false for Flush', function() {
        const pokerHand = new Pokerhand(mockDataNotFlush.suits, mockDataNotFlush.value);
        expect(pokerHand.isFlush_Hand()).to.be.false;
    });
    it('Should return true for Straight', function() {
        const pokerHand = new Pokerhand(mockDataStraight.suits, mockDataStraight.value);
        expect(pokerHand.isStraight_Hand()).to.be.true;
    });
    it('Should return false for Straight', function() {
        const pokerHand = new Pokerhand(mockDataNotStraight.suits, mockDataNotStraight.value);
        expect(pokerHand.isStraight_Hand()).to.be.false;
    });
    it('Should return true for Three of a Kind', function() {
        const pokerHand = new Pokerhand(mockDataThreeOfAKind.suits, mockDataThreeOfAKind.value);
        expect(pokerHand.isThreeOfAKind_Hand()).to.be.true;
    });
    it('Should return false for Three of a Kind', function() {
        const pokerHand = new Pokerhand(mockDataNotThreeOfAKind.suits, mockDataNotThreeOfAKind.value);
        expect(pokerHand.isThreeOfAKind_Hand()).to.be.false;
    });
    it('Should return true for Two Pair', function() {
        const pokerHand = new Pokerhand(mockDataTwoPair.suits, mockDataTwoPair.value);
        expect(pokerHand.isHaveTwoPair_Hand()).to.be.true;
    });
    it('Should return false for Two Pair', function() {
        const pokerHand = new Pokerhand(mockDataNotTwoPair.suits, mockDataNotTwoPair.value);
        expect(pokerHand.isHaveTwoPair_Hand()).to.be.false;
    });
    it('Should return true for One Pair', function() {
        const pokerHand = new Pokerhand(mockDataOnePair.suits, mockDataOnePair.value);
        expect(pokerHand.isOnePair_Hand()).to.be.true;
    });
    it('Should return false for One Pair', function() {
        const pokerHand = new Pokerhand(mockDataNotOnePair.suits, mockDataNotOnePair.value);
        expect(pokerHand.isOnePair_Hand()).to.be.false;
    });
    it('Should return false for all methods', function() {
        const pokerHand = new Pokerhand(mockDataHighCard.suits, mockDataHighCard.value);
        expect(pokerHand.isOnePair_Hand()).to.be.false;
        expect(pokerHand.isHaveTwoPair_Hand()).to.be.false;
        expect(pokerHand.isThreeOfAKind_Hand()).to.be.false;
        expect(pokerHand.isStraight_Hand()).to.be.false;
        expect(pokerHand.isFlush_Hand()).to.be.false;
        expect(pokerHand.isFourOfAKind_Hand()).to.be.false;
    });

});