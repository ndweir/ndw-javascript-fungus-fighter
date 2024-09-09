// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
 let fungusHP = 100;
 let yourAP = 100;

let arcaneAP = 12;
let arcaneHP = 14;

let entangleAP = 23;
let entangleHP = 9;

let dragonAP = 38;
let dragonHP = 47;

let starAP = 33;
let starHP = 25;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    render()
}

onReady()

function render(){
    let currentAP = document.getElementById('currentAPtext').innerText
    let enemyHP = document.getElementById("currentEnemyHPtext").innerText


}



function updateAPandHP(HPvalue, APvalue){
    let apMeter = document.getElementById('ap-meter').value

    apMeter -= APvalue;

    let hpMeter = document.getElementById("hp-meter").value

    hpMeter -= HPvalue;

    console.log(apMeter, hpMeter);


    fungusHP = hpMeter;
    yourAP = apMeter;
    render()
}