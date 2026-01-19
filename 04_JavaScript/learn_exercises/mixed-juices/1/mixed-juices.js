// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0;
  let limeWedges = 0;
  while (limeWedges < wedgesNeeded && limesCut < limes.length) {
  switch (limes[limesCut]) {
    case "small":
      limeWedges += 6;
      break;
    case "medium":
      limeWedges += 8;
      break;
    case "large":
      limeWedges += 10;
      break;
  }
  limesCut++;
}

return limesCut;
  
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    switch (orders[0]) {
    case "Pure Strawberry Joy":
      orders.shift();
      timeLeft -= 0.5;
      console.log(orders, timeLeft);
      break;
    case "Energizer":
    case "Green Garden":
      orders.shift();
      timeLeft -= 1.5;
        console.log(orders, timeLeft);
      break;
    case "Tropical Island":
      orders.shift();
      timeLeft -= 3;
        console.log(orders, timeLeft);
      break;
    case "All or Nothing":
      orders.shift();
      timeLeft -= 5;
        console.log(orders, timeLeft);
      break;
    default:
      orders.shift();
      timeLeft -= 2.5;
        console.log(orders, timeLeft);
  }
  } while(timeLeft > 0 && orders.length > 0);
  return orders;
}
