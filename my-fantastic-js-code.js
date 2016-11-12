let numMatches;
//creating variables
let numChoosenCards = 0;
//the first card choosen
let one;
//the second card choosen
let two;
let hit = 0;
//if the cards doesn't match back will show
let back = "images/back.png";

//array of all the possible images
let imgArray = [
"images/1.png",
"images/2.png",
"images/3.png",
"images/4.png",
"images/5.png",
"images/6.png",
"images/7.png",
"images/8.png",

//twice for the matching pare
"images/1.png",
"images/2.png",
"images/3.png",
"images/4.png",
"images/5.png",
"images/6.png",
"images/7.png",
"images/8.png",
];

//created a variabel
let s;

//function for when the first card if showed
function startTimer()
{
  //500ms=0.5seconds, called after control()
  s = setInterval(control, 500);
}

//function for when both the cards have been showed
function stopTimer()
{
  clearInterval(s);
}


// function for the clicks that the user makes
function clicks(index)
{
  if (numChoosenCards == 0)
  {
    //the first click is the first image
    one = index;
    //src to out array that contains the images
    document.images[index].src = imgArray[index];
    //choosen one image
    numChoosenCards = 1;
  }
  else
  {
    numChoosenCards = 2;
    //the second click is the second image
    two = index;
    //src to out array that contains the images
    document.images[index].src = imgArray[index];
    //start startTimer()
    startTimer();
  }
}

//check if the images matches
function control()
{
  stopTimer();
  // if one and two matches we have a pair
  if(imgArray[one] == imgArray[two])
  {
    hit++;
    numChoosenCards = 0;
  }
  else if(imgArray[one] !== imgArray[two])
  {
    //if one and two doesn't matches the back side shows
    document.images[one].src = back;
    document.images[two].src = back;
    numChoosenCards = 0;
  }

  //if all the images is paired up
  if(hit == imgArray.length/2)
  {
    //output a winning statement
    document.getElementById("win").innerHTML = "You win!";


  }
}

//randomize all the cards before we begin with help with fisher - yates
// see: http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
function fisherYates()
{
  for(let flips = 0; flips < 100; flips++)
  {
    let i = Math.floor(Math.random() * imgArray.length);
    let j = Math.floor(Math.random() * imgArray.length);
    let temp = imgArray[i];
    imgArray[i] = imgArray[j];
    imgArray[j] = temp;
  }
}

// function that resets the game
function resetGame(){
  fisherYates();
  numMatches = 0;

	document.images[one].src = back;
  document.images[two].src = back;

}
