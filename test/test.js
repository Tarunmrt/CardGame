import Pokerhand from "../Pokerhand";
import { expect } from 'chai'

const mockDataRoyalStrFlush = {suits: ['HEARTS', 'HEARTS','HEARTS','HEARTS','HEARTS'], value: [ 'ACE', 'KING', 'QUEEN', 'JACK', '10' ]};
const mockDataStrFlush = {suits: ['SPADES','SPADES','SPADES', 'SPADES', 'SPADES'], value: [ '10', '9', '8', '7', '6' ]};
const mockDataFourOfAKind = {suits: ['CLUBS', 'CLUBS', 'DIAMONDS', 'SPADES', 'HEARTS'], value: [ '8', '8', '8', '8', 'KING' ]};
const mockDataFullHouse = {suits: ['DIAMONDS', 'SPADES', 'DIAMONDS', 'SPADES', 'CLUBS'], value: [ '10', '10', '10', 'JACK', 'JACK' ]};
const mockDataFlush = {suits: ['HEARTS', 'HEARTS', 'HEARTS', 'HEARTS', 'HEARTS' ], value: [ '2', '5', '7', 'JACK', '4' ]};
const mockDataStraight = {suits: ['HEARTS', 'CLUBS', 'HEARTS', 'SPADES', 'SPADES'], value: [ 'JACK', '10', '9', '8', '7' ]};
const mockDataThreeOfAKind = {suits: ['HEARTS', 'DIAMONDS', 'DIAMONDS', 'SPADES', 'SPADES'], value: [ '3', '3', '3', 'JACK', '10' ]};
const mockDataTwoPair = {suits: ['SPADES', 'CLUBS', 'DIAMONDS', 'CLUBS', 'SPADES'], value: [ 'ACE', 'ACE', '5', '5', '10' ]};
const mockDataOnePair = {suits: ['HEARTS', 'CLUBS', 'HEARTS', 'CLUBS', 'DIAMONDS'], value: [ '10', '10', 'QUEEN', 'JACK', '2' ]};
const mockDataHighCard = {suits: ['SPADES', 'CLUBS', 'DIAMONDS', 'SPADES', 'CLUBS'], value: [ 'ACE', '10', '5', 'JACK', '6' ]};

//SPADES  CLUBS DIAMONDS

describe('Array', function() {
    it('Test for royal flush', () =>{
        const pokerHand = new Pokerhand(mockDataRoyalStrFlush.suits, mockDataRoyalStrFlush.value);
        expect(pokerHand.isRoyalFlush()).to.be.true;
    });
    it('Should return true for StrFlush', function() {
        const pokerHand = new Pokerhand(mockDataStrFlush.suits, mockDataStrFlush.value);
        expect(pokerHand.isFlush_Hand() && pokerHand.isStraight_Hand()).to.be.true;
    });
    it('Should return true for Four of a kind', function() {
        const pokerHand = new Pokerhand(mockDataFourOfAKind.suits, mockDataFourOfAKind.value);
        expect(pokerHand.isFourOfAKind_Hand()).to.be.true;
    });
    it('Should return true for Full House', function() {
        const pokerHand = new Pokerhand(mockDataFullHouse.suits, mockDataFullHouse.value);
        expect(pokerHand.isThreeOfAKind_Hand() && pokerHand.isOnePair_Hand()).to.be.true;
    });
    it('Should return true for Flush', function() {
        const pokerHand = new Pokerhand(mockDataFlush.suits, mockDataFlush.value);
        expect(pokerHand.isFlush_Hand()).to.be.true;
    });
    it('Should return true for Straight', function() {
        const pokerHand = new Pokerhand(mockDataStraight.suits, mockDataStraight.value);
        expect(pokerHand.isStraight_Hand()).to.be.true;
    });
    it('Should return true for Three of a kind', function() {
        const pokerHand = new Pokerhand(mockDataThreeOfAKind.suits, mockDataThreeOfAKind.value);
        expect(pokerHand.isThreeOfAKind_Hand()).to.be.true;
    });
    it('Should return true for Two Pair', function() {
        const pokerHand = new Pokerhand(mockDataTwoPair.suits, mockDataTwoPair.value);
        expect(pokerHand.isHaveTwoPair_Hand()).to.be.true;
    });
    it('Should return true for one Pair', function() {
        const pokerHand = new Pokerhand(mockDataOnePair.suits, mockDataOnePair.value);
        expect(pokerHand.isOnePair_Hand()).to.be.true;
    });
    it('Should return true for High Card', function() {
        const pokerHand = new Pokerhand(mockDataHighCard.suits, mockDataHighCard.value);
        expect(pokerHand.isOnePair_Hand()).to.be.false;
        expect(pokerHand.isHaveTwoPair_Hand()).to.be.false;
        expect(pokerHand.isThreeOfAKind_Hand()).to.be.false;
        expect(pokerHand.isStraight_Hand()).to.be.false;
        expect(pokerHand.isFlush_Hand()).to.be.false;
        expect(pokerHand.isFourOfAKind_Hand()).to.be.false;
    });

});