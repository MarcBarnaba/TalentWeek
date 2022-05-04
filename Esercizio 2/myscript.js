var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var colors = ["red", "yellow", "green", "purple", "blue", "brown", "black"];
var canvasX;
var canvasY;
var counter = 1;

canvas.addEventListener("mousemove", function(e) { 
    var cRect = canvas.getBoundingClientRect();
    canvasX = Math.round(e.clientX - cRect.left);
    canvasY = Math.round(e.clientY - cRect.top);   
});

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawRect(){
    ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
    let width = getRandomInt(50,400);
    let height = getRandomInt(50,400);
    ctx.fillRect(canvasX,canvasY, width, height);

    ctx.font = '25px Georgia';
    ctx.fillText(counter, canvasX +1, canvasY -5);
    counter = counter + 1;
}

