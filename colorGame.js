var i;
var level = 6;
var colorDisplay = document.querySelector("#colorDisplay");
var squares;
var colors; 
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var button = document.querySelector("#button");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var squareDivs;
var container = document.querySelector("#squares");

all();

easyBtn.addEventListener("click", function(){
  level = 3;  
  easyBtn.className = "selected";  
  hardBtn.className = ""; 
  all();
})
hardBtn.addEventListener("click", function(){
  level = 6;
  easyBtn.className = "";  
  hardBtn.className = "selected"; 
  all();
})

button.addEventListener("click", function(){
  button.textContent = "New Colors";
  h1.style.backgroundColor = "";
  message.textContent = "";
  all();
})

function all(){
  squareDivs = "";
  for (i = 0; i < level; i++){
    squareDivs += "<div class='square'></div>";
  }
  container.innerHTML = squareDivs;
  
  squares = document.querySelectorAll(".square"); 
  
  colors = [];
  for (i = 0; i < level; i++){
      colors.push( rgbRnd() );
  }
  
  var pick = colors[pickColor()];
  
  colorDisplay.textContent = pick;

  for (i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];

      squares[i].addEventListener("click", function(){
        if (this.style.backgroundColor == pick){
            colorChanger(pick);
            message.textContent = "Correct!";
            h1.style.backgroundColor = pick;
            button.textContent = "Play Again?";
        } else {
            this.className = "square hide";
            message.textContent = "Try Again!";
        }
      }) 
  }
}

/*******FUNCIONES********/
function pickColor () {
  return Math.floor(Math.random() * colors.length);
}

function rgbRnd (){
  return "rgb(" + rnd() + ", " + rnd() + ", " + rnd() + ")";
}

function rnd (){
  return Math.floor(Math.random() * 256);
}

function colorChanger (color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color; 
    squares[i].className = "square";
  } 
}
