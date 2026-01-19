/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if(remainingTime === undefined) {
    return "You forgot to set the timer.";
  } else if(remainingTime > 0) {
    return "Not done, please wait.";
  } else {
    return "Lasagna is done.";
  }
}

export function preparationTime(layers, preparationTime = 2) {
  return layers.length * preparationTime;
}

export function quantities (layers) {
  let noodlesQuantity = 0;
  let sauceQuantity = 0.0;
  for (let layer in layers) {
    if (layers[layer] === "noodles") {
      noodlesQuantity += 50;
    } else if (layers[layer] === "sauce") {
      sauceQuantity += 0.2;
    } 
  }
  return {
    noodles: noodlesQuantity,
    sauce: sauceQuantity
  }
}

export function addSecretIngredient (friendsList, myList) {
  let lastItem = friendsList[friendsList.length-1];
  myList.push(lastItem);
  console.log(myList);
}

export function scaleRecipe (recipe, portion) {
  const newRecipe = {};
  for (let ingredient in recipe) {
    newRecipe[ingredient] = recipe[ingredient] * portion / 2;
  }
  return newRecipe;
}
