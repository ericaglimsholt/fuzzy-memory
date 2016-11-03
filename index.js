let card = function (x,y) {
  this.x = x;
  this.y = y;
  this.width = 70;
}

// define card constructor function

let cards = [];

// initializing an empty array

let NUM_COLS = 4;
let NUM_ROWS = 4;

// defines how many columns/rows we want

for (let i = 0; i < NUM_COLS; i++) {
  for (let a = 0; a < NUM_ROWS; a++) {
    cards.push(new card(i * 78 + 10, a * 78 + 10));
  }
}

// outer loop iterates for as many columns as we want, our inner loop iterates for each of the rows
