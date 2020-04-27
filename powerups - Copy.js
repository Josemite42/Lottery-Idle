
//
// generateBallPowerup
//
// Generates a random ball powerup
// Returns list of [slot type, specific slot, upgrade type]
function generateBallPowerup(){
    /*
    Powerups:
    0: likelihood
    1: money when pulled
    2: money when matched
    3: xp when pulled

    Ball types:
    0: Single Ball
    1: Slot Evens
    2: Slot Odds
    3: Slot multiples of 3
    4: All Primes
    5: All multiples of 5
    6: All multiples of 6

    */

   var specific = 0;

   if (player.xpGain > 0){
       var upg = Math.floor(Math.random()*4);
   }else{
        var upg = Math.floor(Math.random()*3);
   }
   

   if (Math.random() < .7){
       var type = 0; // single ball
   } else {
       var type = 1; // multi-ball
   }

   if (type === 0){
       var ballArr = [];
       for (var i = 0; i <=5; i++){
           ballArr = ballArr.concat(player.pool[i]);
       }
       specific = ballArr[Math.floor(Math.random()*ballArr.length)];
   } else {
        var rnd = Math.random();

        // Setup to allow for future odds tweaks
             if (rnd < 0.167) {type = 1;}
        else if (rnd < 0.333) {type = 2;}
        else if (rnd < 0.500) {type = 3;}
        else if (rnd < 0.667) {type = 4;}
        else if (rnd < 0.833) {type = 5;}
        else                  {type = 6;}

        if (type <=3 ) {
            specific = Math.floor(Math.random()*6);
        }
   }

   return [type, specific, upg];
}

//
// updatePowerupLabel
//
// Updates the purchase label for a given powerup
function updatePowerupLabel(abl, num){

    var str = "";

    if (abl[0] === 0) {
        str += "Ball " + abl[1];

    // Labels for specific slots
    } else if (abl[0] <= 3){
        
        if (abl[0] === 1){str += "All even balls in ";} 
        else if (abl[0] === 2){str += "All odd balls in ";} 
        else if (abl[0] === 3){str += "All multiples of 3 in ";}

        if (abl[1] === 5){str += "the Superball! slot ";} 
        else {str += "Slot " + (abl[1]+1);}

    } else {
        if (abl[0] === 4){str += "All prime-numbered balls ";}
        else if (abl[0] === 5){str += "All multiples of 5 ";}
        else if (abl[0] === 6){str += "All multiples of 6 ";}
    }

    // Powerup labels
    if (abl[0] === 0) {
        switch (abl[2]) {
            case 0:
                str += " gains " + consts.powerupMultis[0][0] + " likelihood of being drawn.";
                break;
            case 1:
                str += " increases any winnings by " + formatValue(consts.powerupMultis[1][0]*100,2,0) + "%, regardless of it being a match.";
                break;
            case 2:
                str += " increases winnings by " + formatValue(consts.powerupMultis[2][0]*100,2,0) + "% when matched.";
                break;
            case 3:
                str += " gives " + consts.powerupMultis[3][0] + " extra XP when pulled, regardless of it being a match.";
                break;
            default:
                str += " ERROR: ABILITY NOT FOUND.";
        }
    } else {
        switch (abl[2]) {
        case 0:
            str += " gain " + consts.powerupMultis[0][1] + " likelihood of being drawn.";
            break;
        case 1:
            str += " increase any winnings by " + formatValue(consts.powerupMultis[1][1]*100,2,0) + "%, regardless of if they are a match.";
            break;
        case 2:
            str += " increase winnings by " + formatValue(consts.powerupMultis[2][1]*100,2,0) + "% when matched.";
            break;
        case 3:
            str += " give " + consts.powerupMultis[3][1] + " extra XP when pulled, regardless of if they are a match.";
            break;
        default:
            str += " ERROR: POWERUP NOT FOUND.";
        }
    }

    // Update the buttons and spans
    document.getElementById(num+"selectPowerupSpan").innerHTML = str;

    //document.getElementById("selectPowerupDiv").style.display = "block";

}

//
// populatePowerupChoices
//
// Generates powerups
function populatePowerupChoices(){
    for (var i = 0; i < 3; i++){
        let abl = generateBallPowerup();
        player.ballPowerupOptions[i]=abl;
        updatePowerupLabel(abl, i);
    }
}

//
// previewPowerup
//
// Generates a preview of the powerup and highlights the benefits
function previewPowerup(opt){
    var abl = player.ballPowerupOptions[opt];
    //debugger;
    if (abl[0]===0){ // EZ
        var item = document.getElementById(abl[1]+"_"+abl[2]+"powerupStats");
        var val = calcPowerupStrength(abl[1], abl[2], true, 0);

        updatePowerupTableLabel(abl[1], abl[2], val);
        document.getElementById("powerupTableRow"+abl[1]).style.backgroundColor="#DDDDDD";
        item.style.color="#FF0000";
        changePowerupTable(Math.min(Math.floor(abl[1]/15-.00001), 5));
    } else {
        var arr = getPowerupChoices(abl);

        for (var i=0; i<arr.length; i++){
            var val = calcPowerupStrength(arr[i], abl[2], true, 1);
            var item = document.getElementById(arr[i]+"_"+abl[2]+"powerupStats");

            updatePowerupTableLabel(arr[i], abl[2], val);
            document.getElementById("powerupTableRow"+arr[i]).style.backgroundColor="#DDDDDD";
            item.style.color="#FF0000";
        }

        if (abl[1] > 0) {changePowerupTable(abl[1])};
    }
}

//
// endPowerupPreview
//
// Reverts the powerup table to non-preview mode
function endPowerupPreview(opt){
    var abl = player.ballPowerupOptions[opt];
    //debugger;
    if (abl[0]===0){ // EZ
        document.getElementById("powerupTableRow"+abl[1]).removeAttribute("Style");
        document.getElementById(abl[1]+"_"+abl[2]+"powerupStats").removeAttribute("Style");
    } else {
        var arr = getPowerupChoices(abl);

        for (var i=0; i<arr.length; i++){          
            document.getElementById("powerupTableRow"+arr[i]).removeAttribute("Style");
            document.getElementById(arr[i]+"_"+abl[2]+"powerupStats").removeAttribute("Style");
        }
    }

    // This is pretty overkill, but screw it, it's not going to be called much.
    updateAllPowerupTableLabels();
}

//
// getPowerupChoices
//
// Returns an array of powerups 
function getPowerupChoices(abl){
    var type = abl[0];
    var specific = abl[1];
    var ret = [];

    if (type === 0){
        ret.push(specific);
    }else if (type === 1){ // Slot evens
        var start = 1+15*specific;
        var end = 15+15*specific;
 
        if (specific === 5) end = 100;
        for (var i = start; i <= end; i++){
            if (i % 2 == 0) ret.push(i);
        }
    }else if (type === 2){ // Slot odds
        var start = 1+15*specific;
        var end = 15+15*specific;
 
        if (specific === 5) end = 100;
        for (var i = start; i <= end; i++){
            if (i % 2 == 1) ret.push(i);
        }
    }else if (type === 3){ // Slot multiples of 3
        var start = 1+15*specific;
        var end = 15+15*specific;
 
        if (specific === 5) end = 100;
        for (var i = start; i <= end; i++){
            if (i % 3 == 0) ret.push(i);
        }

    // Multiple slot powerups

    }else if (type === 4){ // All primes
        // Let's just cut to the chase on this one
        ret = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

    }else if (type === 5){ // All multipes of 5
        for (var i = 1; i <= 100; i++){
            if (i % 5 == 0) ret.push(i);
        }
    }else if (type === 6){ // All multiples of 6
        for (var i = 1; i <= 100; i++){
            if (i % 6 == 0) ret.push(i);
        }
    }

    return ret;
}

//
// gainPowerup
//
// Updates the powerup tables for the given powerup
function gainPowerup(pow){

    var cost = consts.powerupBaseCost*Math.pow(consts.powerupcostMulti,player.powerupCount);

    if (player.money < cost) return;

    player.money -= cost;
    player.powerupCount++;

    updateCash();
    document.getElementById("powerupCostSpan").innerHTML=formatValue(cost*consts.powerupcostMulti,2,0);

    var arr = getPowerupChoices(player.ballPowerupOptions[pow]);
    var upg = player.ballPowerupOptions[pow][2];

    if (player.ballPowerupOptions[pow][0] === 0){
        player.ballSoloPowerups[upg][arr[0]]++;
    }else{
        for (var i=0; i<arr.length; i++){
            player.ballMultiPowerups[upg][arr[i]]++;
        }
    }

    endPowerupPreview(pow);
    populatePowerupChoices();
    updateAllPowerupTableLabels();

    player.stats.overall.powerups++;
    player.stats.session.powerups++;
}

//
// calcPowerupStrength
//
// Determines the strength of a given powerup for a given slot
function calcPowerupStrength(ball, powerup, preview, previewType){
    var ret = player.ballSoloPowerups[powerup][ball]*consts.powerupMultis[powerup][0]+player.ballMultiPowerups[powerup][ball]*consts.powerupMultis[powerup][1];
    
    if (preview) ret += consts.powerupMultis[powerup][previewType];
    
    if (powerup === 0) ret++;
    return ret;
}

//
// changePowerupTable
//
// Changes the actively viewed powerup table
function changePowerupTable(slot){
    // Hide all the divs
    for (var i = 0; i <= 5; i++){
        // Remove all special highlighting so it reverts to grayed out with a thin border
        document.getElementById(i+"powerupTableMenu").removeAttribute("style");
        document.getElementById(i+"powerupTableDiv").style.display="none";
    }
    // Unhide and highlight the one we actually want
    document.getElementById(slot+"powerupTableMenu").style.border="2px solid black";
    document.getElementById(slot+"powerupTableMenu").style.color="black";
    document.getElementById(slot+"powerupTableDiv").style.display="block";
}


//
// updatePowerupTableLabel
//
// Updates the given label in the powerup table
function updatePowerupTableLabel(ball, type, val){
    //debugger;
    var item = document.getElementById(ball+"_"+type+"powerupStats");
    if (type===0){
        item.innerHTML=formatValue(val,2,1);
    }else if (type===3){
        item.innerHTML=formatValue(val,2,2);
    }else{
        item.innerHTML=formatValue(val*100,2,0);
    }
}

//
//updateAllPowerupTableLabels
//
// Updates the labels in the powerup table
function updateAllPowerupTableLabels(){
    for (var i=1; i<=100; i++){
        for (var j=0; j<=3; j++){
            updatePowerupTableLabel(i,j,calcPowerupStrength(i,j,false,0));
        }
    }
}