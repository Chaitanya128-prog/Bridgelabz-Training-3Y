"use strict";

/*
  1. Explaining Hoisting:
  - 'var score' is hoisted to the top, initialized as undefined. Calling console.log(score) before initialization yields 'undefined'.
  - 'function announce()' is fully hoisted (declaration and definition). It runs properly.
  - 'let status' is hoisted but uninitialized (Temporal Dead Zone). Calling it before declaration throws a ReferenceError.
  - 'function startGame()' is fully hoisted.
*/

// 2. Fixed Code:
var score = 50; 
let status = "ready"; 

console.log(score); // 50
announce();         // Game started
startGame();        // ready

function announce() { console.log("Game started"); }
function startGame() { console.log(status); }

// 3. Rewrite using Arrow Functions:
// Arrow functions are NOT hoisted like function declarations. They behave like variables.
const announceArrow = () => console.log("Game started (Arrow)");
const startGameArrow = () => console.log(status + " (Arrow)");

announceArrow();
startGameArrow();