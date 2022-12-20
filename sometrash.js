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
    ctx.fillText(randomchar,Math.random()*canvas.width,Math.random()*canvas.height);

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

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

function writeRandomText(){
    ctx.font = "30px Arial";
    ctx.fillStyle = "#"+Math.floor(Math.random()*16777215).toString(16);
    ctx.rotate(Math.random()*2*Math.PI);
    ctx.fillText("LiTeRaL GaRbAgE",Math.random()*canvas.width,Math.random()*canvas.height);
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

