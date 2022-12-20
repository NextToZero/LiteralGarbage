var hackermode = false;

function colorcycle(){ 
    if(document.getElementById("garbage").style.color == "red"){
        document.getElementById("garbage").style.color = "blue"; 
    }
    else{
        document.getElementById("garbage").style.color = "red" 
    }


}

function HackerMode(){

    document.body.style.color = "limegreen";
    hackermode = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "72px Arial";



}
var characters = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]
    
    
function letterspam(){
    var randomchar = characters[Math.floor(Math.random()*characters.length)];    
    ctx.fillStyle = "#"+Math.floor(Math.random()*16777215).toString(16);
    ctx.rotate(Math.random()*2*Math.PI);
    ctx.fillText(randomchar,Math.random()*canvasB.width,Math.random()*canvasB.height);

}


document.getElementById("garbage").onclick = function(){ colorcycle()}

//the onclick function for the button
function addTrash(){
    //create a new paragraph
    var newP = document.createElement("p");
    //set the text of the paragraph to "more trash"
    newP.innerHTML = "more trash";
    //add the paragraph to the body
    document.body.appendChild(newP);
}

//the onclick function for the addQuote button
function addQuote(){
    //create a new paragraph
    var newP = document.createElement("p");
    //set the text of the paragraph to the quote
    newP.innerHTML = "The Dude abides.";
    //add the paragraph to the body
    document.body.appendChild(newP);
}



var audio = new Audio('lib/fart.mp3');

//Every 5 seconds play a loud fart sound
window.setInterval(function(){
    audio.play();
}  , 5000);

//Adjusts the volume of the fart sounds according to the slider
function updateVolume(){
    audio.volume = document.getElementById("volume").value;
}

var canvasB = document.getElementById("canvasBackground");
canvasB.width = window.innerWidth;
canvasB.height = window.innerHeight;
var ctx = canvasB.getContext("2d");

function writeRandomText(){
    ctx.font = "30px Arial";
    ctx.fillStyle = "#"+Math.floor(Math.random()*16777215).toString(16);
    ctx.rotate(Math.random()*2*Math.PI);
    ctx.fillText("LiTeRaL GaRbAgE",Math.random()*canvasB.width,Math.random()*canvasB.height);
}

//write random words to the canvas every .5 seconds
window.setInterval(function(){
    if( hackermode == false){
    writeRandomText();
    }
    if( hackermode == true){
        
        letterspam();


    }
} , 100);

function createCanvas(){
    if(document.getElementById("canvasGame"))
    {
        return
    }
    else{
        var newCanvas = document.createElement("canvas");
        newCanvas.id = "canvasGame"
        newCanvas.width = window.innerWidth-15;
        newCanvas.height = window.innerHeight*.75;
        newCanvas.style.position = "absolute";
        newCanvas.style.top = window.innerHeight/2;
        newCanvas.style.opacity = "0.5";
        newCanvas.style.backgroundColor = "darkblue";
        document.body.appendChild(newCanvas);
        startGame();
    }
}

//add a ball to the canvasGame that bounces around. Add a paddle that can be moved with the left and right arrow keys which the ball bounces off of.
function startGame(){
    canvasB.width = canvasB.width;
    var canvas = document.getElementById("canvasGame");
    var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-200;
    var dx = 2;
    var dy = -2;
    var score = 0;
    var ballRadius = 10;
    var paddleHeight = 30;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;
    var rightPressed = false;
    var leftPressed = false;
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }
    }
    function drawPaddle(){
        //the paddle is a banana
        var img = new Image();
        img.src = "lib/banana.png";
        ctx.drawImage(img, paddleX, canvas.height-paddleHeight-20, paddleWidth, paddleHeight);
    }
    function drawBall(){
        //the ball is an egg
        var img = new Image();
        img.src = "lib/egg.png";
        ctx.drawImage(img, x-ballRadius, y-ballRadius, ballRadius*2, ballRadius*2);
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.closePath();
    }
    //draw a score counter
    function drawScore(){
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+score, 8, 20);
    }

    //if the ball is within 2 pixels of the paddle, reverse the direction of the ball
    function collisionDetection(){
        if(x > paddleX-2 && x < paddleX + paddleWidth+2 && y > canvas.height-paddleHeight-20-2 && y < canvas.height-paddleHeight-20+2) {
            dy = -dy;
        }
        for(c=0; c<brickColumnCount; c++) {
            for(r=0; r<brickRowCount; r++) {
                var b = bricks[c][r];
                if(b.status == 1) {
                    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        score+= 10;
                        if(score >= brickRowCount*brickColumnCount*10) {
                            document.body.removeChild(canvas);
                            win();
                        }
                    }
                }
            }
        }
    }

    //fill the top of the canvas with bricks, when the ball touches a brick, remove the brick, reverse the direction of the ball, and add 10 to the score
    var brickRowCount = 3;
    var brickColumnCount = 10;
    var brickWidth = 75;
    var brickHeight = 20;
    var brickPadding = 10;
    var brickOffsetTop = 30;
    var brickOffsetLeft = 30;
    var bricks = [];
    for(c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }
    function drawBricks() {
        for(c=0; c<brickColumnCount; c++) {
            for(r=0; r<brickRowCount; r++) {
                if(bricks[c][r].status == 1) {
                    var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                    var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawScore();
        drawBall();
        drawBricks();
        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        }
        //if the ball touches the bottom of the canvas, remove the canvas
        if(y + dy > canvas.height-ballRadius) {
            document.body.removeChild(canvas);
            lose();
        }
        collisionDetection();
        x += dx;
        y += dy;
        drawPaddle();
        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= 7;
        }
    }
    setInterval(draw, 10);
}

function win(){
    var canvas = document.getElementById("canvasBackground");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    ctx.rotate(0);
    ctx.font = "80px Arial";
    ctx.fillStyle = "Green";
    ctx.fillText("YOU WIN",canvas.width/2,canvas.height/2);
}

//clear canvasBackground, reset text rotation, and write "YOU LOSE" in large red text to the center of canvasBackground
function lose(){
    var canvas = document.getElementById("canvasBackground");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    ctx.rotate(0);
    ctx.font = "80px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("YOU LOSE",canvas.width/2,canvas.height/2);
}