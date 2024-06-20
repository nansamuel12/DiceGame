var randomNumber1 = Math.floor(Math.random() *6 )+1;
var randomSourseImage1 = "dice"+ randomNumber1 + ".png";
var randomImage1 ="images/" + randomSourseImage1;
var imag1 = document.querySelectorAll("img")[0];
imag1.setAttribute("src",randomImage1);


//for the second one 
var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomSourceImag2 ="images/dice"+randomNumber2 +".png";
var img2 =document.querySelectorAll("img")[1];
img2.setAttribute("src",randomSourceImag2);


if(randomNumber1 > randomNumber2){
    document.querySelector ("h1").innerHTML= "🚩 Play 1 Wins!";

}
else if (randomNumber1 < randomNumber2){
    document.querySelector ("h1").innerHTML= "🚩 Play 2 Wins!";

}
else {
    document.querySelector("h1").innerHTML = "Draw!";
  }