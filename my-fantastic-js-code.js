function showCard() {
  let card1 = Math.floor(Math.random()*8 + 1); // random visar en bild av 8
	let img=document.getElementById("card1");
		img.src="images/"+card1+".png";
}
