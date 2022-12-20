
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