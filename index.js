var ramdomNumber1=Math.floor(Math.random() *6)+1;

var randomImgDicee="dice"+ramdomNumber1+".png";

var ramdomImgSrc="images/"+randomImgDicee;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",ramdomImgSrc);

var ramdomNumber2=Math.floor(Math.random() *6)+1;

var ramdomImgSrc2="images/"+"dice"+ramdomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", ramdomImgSrc2 );
  
if(ramdomNumber1>ramdomNumber2 ){
    document.querySelector("h1").innerHTML="๐Player 1 wins!";
   
}
else if(ramdomNumber1<ramdomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins!๐";
   
}
else{
    document.querySelector("h1").innerHTML="๐ซ Draw!";
    document.body.style.backgroundColor = "#595260";
   
}

// function makesound(){
// if( document.querySelector("h1").innerHTML=="๐ซ Draw!"){
//     var crash=new Audio('sounds/crash.mp3');
//     crash.play();
// }
// else {
//     var tom1=new Audio('sounds/tom-1.mp3');
//     tom1.play();
// }
// } 

// document.querySelector("button").addEventListener("click", function () {
// makesound();
// });
