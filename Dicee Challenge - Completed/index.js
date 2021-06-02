// change for first image
var randomNum1 = Math.floor(Math.random() * 6 ) + 1;

var  image1 = "dice" + randomNum1 + ".png";
var finalImage1 = "images/" + image1;

var changeImage1 = document.querySelectorAll("img")[0];
changeImage1.setAttribute("src" , finalImage1);

// change for second image
var randomNum2 = Math.floor(Math.random() * 6 ) + 1;

var finalImage2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", finalImage2);

if(randomNum1 === randomNum2)
{
    document.querySelector("h1").innerHTML = "draw";
}
else if(randomNum1 > randomNum2)
{
    document.querySelector("h1").innerHTML = "player 1 win";
}
else 
{
    document.querySelector("h1").innerHTML = "player 2 win";
}

