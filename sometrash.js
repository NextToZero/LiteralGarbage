
window.setInterval(function(){
    addElement();

    
}, 1000);



function addElement(){

    const newDiv = document.createElement("div");

    const newContent = document.createTextNode("LiTeRaL GaRbAgE");

    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);

    


}

//Every 5 seconds play a loud fart sound
window.setInterval(function(){
    fart();
}  , 5000);

function fart(){
    var audio = new Audio('lib/fart.mp3');
    audio.play();
}