let card = function (x,y) {
  this.x = x;
  this.y = y;
  this.width = 70;
}

// Define card constructor function

let cards = [];

// Initializing an empty array

let NUM_COLS = 4;
let NUM_ROWS = 4;

// Defines how many columns/rows we want

for (let i = 0; i < NUM_COLS; i++) {
  for (let a = 0; a < NUM_ROWS; a++) {
    cards.push(new card(i * 78 + 10, a * 78 + 10));
  }
}

// Two for loops that iterates how many columns/rows we want

card.prototype.cardFaceDown = function () {
  fill (214, 247, 202);
  strokeWeight(2);
  rect(this.x, this.y, this.width, this.width, 10);
  image(getImage("images/china-wall.png"), this.x, this.y, this.width, this.width);
};

for (let i = 0 ; i < cards.length; i++) {
  cards[i].cardFaceDown();
};
