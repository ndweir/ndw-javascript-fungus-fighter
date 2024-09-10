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
    let fungusWalk = document.getElementById('freaky-fungus walk');
    let HpText = document.getElementById('hp-text');
    let ApText = document.getElementById('ap-text');
    let HpMeter = document.getElementById('hp-meter');
    let ApMeter = document.getElementById('ap-meter');


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    function render(){
        HpText.innerHTML = `${fungusHP} HP`;
        ApText.innerHTML = `${yourAP} AP`;

        HpMeter.value = fungusHP;
        ApMeter.value = yourAP;
    }

    function attackNow(attackPts, HealthPts){
        fungusHP -= HealthPts;
        yourAP -= attackPts;

        return (attackPts, HealthPts);

        if(fungusHP === 0){
            fungusWalk.classList.remove('walk')
            fungusWalk.classList.add('dead')
            stopAttacks();
            return "the monster is dead and humanity is saved!";
        }

        if(yourAP === 0){
            fungusWalk.classList.remove('walk')
            fungusWalk.classList.add('jump')
            return 'the monster wins and humanity is doomed 😢';
        }
    }
}

function stopAttacks(){
    document.querySelectorAll('attack-btn').setAttribute('disabled')
    return
}



onReady()
