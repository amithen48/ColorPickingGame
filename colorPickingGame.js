var squares = document.getElementsByClassName("square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var span = document.querySelector("span");
var reset = document.querySelector("#reset");
var difficulty = document.querySelector("#difficulty")

newColors(6);

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        if(this.style.backgroundColor.toUpperCase()===span.textContent){
            messageDisplay.textContent = "Correct!";
            changeColors(span.textContent);
            reset.textContent = "Play Again?"
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

var num = 6;

difficulty.addEventListener("click",function () {
    if (difficulty.textContent === "Easy"){
        difficulty.textContent = "Hard"
        num = 3;
        for (var i = num; i < 6; i ++){
            squares[i].style.display = "none";
        }
        newColors(num);
        difficulty.textContent = "Hard";
    }
    else {
        difficulty.textContent = "Easy"
        num = 6;
        for (var i = 0; i < 6; i ++){
            squares[i].style.display = "block";
        }
        newColors(num);
    }
});

reset.addEventListener("click",function () {
    newColors(num);
});

// - when you are correct - //
function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

// - generate colors - //
function newColors(num) {
    colors = [];
    for (var i = 0; i < num; i++){
        colors[i] = "RGB(" + random() + ", " + random() + ", " + random() + ")";
        span.textContent = colors[Math.floor(Math.random() * num)];
        h1.style.backgroundColor = "#17a2b8";
        reset.textContent = "New Colors"
        squares[i].style.backgroundColor = colors[i];
        messageDisplay.textContent = "";
    }
}

// - random numbers for rgb - //
function random() {
    return Math.floor(Math.random() * 256);
}



