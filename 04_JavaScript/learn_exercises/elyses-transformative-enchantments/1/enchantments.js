// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const doubledDeck = deck.map(card => card * 2);
  return doubledDeck;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const newDeck = deck.reduce(
    (repeatDeck, card) => {
      if (card === 3) {
        repeatDeck.push(card, card, card);
      } else {
        repeatDeck.push(card);
      }
      return repeatDeck;
    },
    [],
  );

  return newDeck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const index = deck.length/2-1;
  const middleTwoCards = deck.slice(index, index+2);
  return middleTwoCards;
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const firstCard = deck.shift();
  const lastCard = deck.pop();
  const index = deck.length/2;
  deck.splice(index, 0, lastCard, firstCard);
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  const specialTwo = deck.filter(card => card === 2);
  return specialTwo;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  deck.sort((card1, card2) => {
  if (card1 < card2) {
    return -1;
  }
  if (card1 > card2) {
    return 1;
  }
  return 0;
  });

  return deck;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
