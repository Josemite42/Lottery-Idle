
player = {
    money: 10,
    pool: [
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
        [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
        [76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
    ],
    curpool: [
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
        [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
        [76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
    ],
    odds: {
        p1: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        p2: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        p3: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        p4: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        p5: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        psb: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    },

    ballSoloPowerups: [[],[],[],[]],
    ballMultiPowerups: [[],[],[],[]],
    ballPowerupOptions: [[],[],[]],
    powerupCount: 0,

    winningNums: [1,16,31,46,61,76],
    pulled: [[0], [0], [0], [0], [0], [0]],
    matchArr: [false, false, false, false, false, false],
    matchCount: 0,

    //buffs
    bonusBalls: [0, 0, 0, 0, 0, 0],
    //xp stuff
    xp: 0,
    level: 0,
    remCharges: 0,
    lvlUpgrades: 0,
    ballRemCosts: [1e9, 1e9, 1e9, 1e9, 1e9, 1e10],

    abilityPoints: 0,
    abilityLevels: [0, 0, 0, 0, 0, 0],
    abilityCharges: [[0,0,0], 0, 0, 0, 0, 0],
    ability5Bonus: 0,
    

    //upgrades
    winMulti: 0,
    winExpo: 0,
    superMulti: 0,
    tickSpeed: 0,
    xpGain: 0,
    ticketDiscount: 0,
    
    stats: {
        overall: {
            startTime: 0,
            money: 0, //
            xp: 0, //
            pulls: 0, //
            ballMatches: [0,0,0,0,0,0], //
            matchCount: [[0,0,0,0,0],[0,0,0,0,0]], //
            powerups: 0, //
            ballsRemoved: 0, //
            abilityMatches: [0,0,0,0,0,0]
        },

        session: {
            startTime: 0,
            money: 0,
            xp: 0,
            pulls: 0,
            ballMatches: [0,0,0,0,0,0],
            matchCount: [[0,0,0,0,0],[0,0,0,0,0]],
            powerups: 0,
            ballsRemoved: 0,
            abilityMatches: [0,0,0,0,0,0]
        }
    },


    //Settings
    notation: "Mixed scientific",
    autosaveInterval: 30,
    buyAmount: 1,

    time: 0,
    timeBank: 0
}


// ********MAKE SURE THIS MATCHES PLAYER*********
basePlayer = {
    money: 10,
    pool: [
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
        [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
        [76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
    ],
    curpool: [
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
        [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
        [76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
    ],
    odds: {
        p1: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        p2: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        p3: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        p4: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        p5: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        psb: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    },

    ballSoloPowerups: [[],[],[],[]],
    ballMultiPowerups: [[],[],[],[]],
    ballPowerupOptions: [[],[],[]],
    powerupCount: 0,

    winningNums: [1,16,31,46,61,76],
    pulled: [[0], [0], [0], [0], [0], [0]],
    matchArr: [false, false, false, false, false, false],
    matchCount: 0,

    //buffs
    bonusBalls: [0, 0, 0, 0, 0, 0],
    //xp stuff
    xp: 0,
    level: 0,
    remCharges: 0,
    lvlUpgrades: 0,
    ballRemCosts: [1e9, 1e9, 1e9, 1e9, 1e9, 1e10],

    abilityPoints: 0,
    abilityLevels: [0, 0, 0, 0, 0, 0],
    abilityCharges: [[0,0,0], 0, 0, 0, 0, 0],
    ability5Bonus: 0,
    

    //upgrades
    winMulti: 0,
    winExpo: 0,
    superMulti: 0,
    tickSpeed: 0,
    xpGain: 0,
    ticketDiscount: 0,
    
    stats: {
        overall: {
            startTime: 0,
            money: 0, //
            xp: 0, //
            pulls: 0, //
            ballMatches: [0,0,0,0,0,0], //
            matchCount: [[0,0,0,0,0],[0,0,0,0,0]], //
            powerups: 0, //
            ballsRemoved: 0, //
            abilityMatches: [0,0,0,0,0,0]
        },

        session: {
            startTime: 0,
            money: 0,
            xp: 0,
            pulls: 0,
            ballMatches: [0,0,0,0,0,0],
            matchCount: [[0,0,0,0,0],[0,0,0,0,0]],
            powerups: 0,
            ballsRemoved: 0,
            abilityMatches: [0,0,0,0,0,0]
        }
    },


    //Settings
    notation: "Mixed scientific",
    autosaveInterval: 30,
    buyAmount: 1,

    time: 0,
    timeBank: 0
}

consts = {

    winMulti: 1.1,
    winMultiFixed: 1,
    winExpo: .5,
    superMulti: 1.3,
    tickSpeed: .9,

    baseCost: {
        winMulti: 10,
        winExpo: 100,
        superMulti: 200,
        tickSpeed: 1000,
        xpGain: 1e9,
        ticketDiscount: 0
    },

    costMulti: {
        winMulti: 1.3,
        winExpo: 2,
        superMulti: 5,
        tickSpeed: 100,
        xpGain: 50
        //ticketDiscount: 0
    },

    xpGain: 1,
    xpNeedExpo: 2,

    abilityBaseCosts: [1e9, 1e10], //normal, superball slot
    abilityCostScaling: [1e4, 5e5], //normal, superball slot

    abilityMultis: [1,      //b1: increased payout
                    1,      //b2: increased tickspeed
                    1,      //b3: extra ball (slots) drawn
                    .5,     //b4: counting as extra balls
                    .75,    //b5: stacking payout buff
                    1,      //sb: bonus draws
                    ],
    
    ability5Decay: .5,
    ability5DecayLvl5: .3,
    abilityPBpower: 1.5,

    powerupMultis:  [
                    [2, .5],    // Increased likelihood
                    [.3, .1],  // Money multi when pulled
                    [.5, .2],  // Money multi when matched
                    [1, .3]     // XP when matched
                    ],

    powerupBaseCost: 1e5,
    powerupcostMulti: 2,

    cashObj: null,
    ballLabelObjs: [null, null, null, null, null, null]

}

previewPlayer = {
    winMulti: 0,
    winExpo: 0,
    superMulti: 0,
    tickSpeed: 0,
    //ticketDiscount: 0
}

htmLabels = {
    dropdowns: ["ball1dropdown","ball2dropdown","ball3dropdown","ball4dropdown","ball5dropdown","ball6dropdown"],
    ballLabels: ["ball1","ball2","ball3","ball4","ball5","ball6"],
    removeDropdowns: ["remBall1dropdown","remBall2dropdown","remBall3dropdown","remBall4dropdown","remBall5dropdown","remBall6dropdown"]
}

var FormatList = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QaDc', 'QtDc', 'SxDc', 'SpDc', 'ODc', 'NDc', 'Vg', 'UVg', 'DVg', 'TVg', 'QaVg', 'QtVg', 'SxVg', 'SpVg', 'OVg', 'NVg', 'Tg', 'UTg', 'DTg', 'TTg', 'QaTg', 'QtTg', 'SxTg', 'SpTg', 'OTg', 'NTg', 'Qd', 'UQd', 'DQd', 'TQd', 'QaQd', 'QtQd', 'SxQd', 'SpQd', 'OQd', 'NQd', 'Qi', 'UQi', 'DQi', 'TQi', 'QaQi', 'QtQi', 'SxQi', 'SpQi', 'OQi', 'NQi', 'Se', 'USe', 'DSe', 'TSe', 'QaSe', 'QtSe', 'SxSe', 'SpSe', 'OSe', 'NSe', 'St', 'USt', 'DSt', 'TSt', 'QaSt', 'QtSt', 'SxSt', 'SpSt', 'OSt', 'NSt', 'Og', 'UOg', 'DOg', 'TOg', 'QaOg', 'QtOg', 'SxOg', 'SpOg', 'OOg', 'NOg', 'Nn', 'UNn', 'DNn', 'TNn', 'QaNn', 'QtNn', 'SxNn', 'SpNn', 'ONn', 'NNn', 'Ce',];











//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
//By Ivark/Hevipelle, with some tweaks
function letter(power,str) {
    const len = str.length;
    function lN(n) {
        let result = 1;
        for (var j = 0; j < n; ++j) result = len*result+1;
        return result;
    }
    if (power <= 5) return str[0];
    power = Math.floor(power / 3);
    let i=0;
    while (power >= lN(++i));
    if (i==1) return str[power-1];
    power -= lN(i-1);
    let ret = '';
    while (i>0) ret += str[Math.floor(power/Math.pow(len,--i))%len]
    return ret;
}

function getAbbreviation(e) {
    const prefixes = [
    ['', 'U', 'D', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'O', 'N'],
    ['', 'Dc', 'Vg', 'Tg', 'Qd', 'Qi', 'Se', 'St', 'Og', 'Nn'],
    ['', 'Ce', 'Dn', 'Tc', 'Qe', 'Qu', 'Sc', 'Si', 'Oe', 'Ne']]
    const prefixes2 = ['', 'MI-', 'MC-', 'NA-', 'PC-', 'FM-']
    e = Math.floor(e/3)-1;
    let index2 = 0;
    let prefix = [prefixes[0][e%10]];
    while (e >= 10) {
        e = Math.floor(e/10);
        prefix.push(prefixes[(++index2)%3][e%10])
    }
    index2 = Math.floor(index2/3)
    while (prefix.length%3 != 0) prefix.push("");
    let ret = "";
    while (index2 >= 0) ret += prefix[index2*3] + prefix[index2*3+1] + prefix[index2*3+2] + prefixes2[index2--];
    if (ret.endsWith("-")) ret = ret.slice(0,ret.length-1)
    return ret.replace("UM","M").replace("UNA","NA").replace("UPC","PC").replace("UFM","FM")
}

function formatValue(value, places, placesUnder1000) {
    if ((value <= Number.MAX_VALUE) && (value >= 10000)) {
        var matissa = value / Math.pow(10, Math.floor(Math.log10(value)));
        var power = Math.floor(Math.log10(value));
        if ((player.notation === "Mixed scientific" && power >= 33) || player.notation === "Scientific") {
            matissa = matissa.toFixed(places)
            if (matissa >= 10) {
                matissa /= 10;
                power++;
            }
            if (power > 100000  && !player.options.commas) return (matissa + "e" + formatValue(notation, power, 3, 3))
            if (power > 100000  && player.options.commas) return (matissa + "e" + power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            return (matissa + "e" + power);
        }

        if (player.notation.includes("engineering") || player.notation.includes("Engineering")) pow = power - (power % 3)
        else pow = power
        if (power > 100000  && !player.options.commas) pow = formatValue(notation, pow, 3, 3)
        if (power > 100000  && player.options.commas) pow = pow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        /*
        if (notation === "Logarithm") {
            if (power > 100000  && !player.options.commas) return "ee"+Math.log10(Math.log10(value)).toFixed(3)
            if (power > 100000  && player.options.commas) return "e"+Math.log10(value).toFixed(places).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            else return "e"+Math.log10(value).toFixed(places)
        }
        */
        matissa = (matissa * Math.pow(10, power % 3)).toFixed(places)
        if (matissa >= 1000) {
            matissa /= 1000;
            power++;
        }

        if (player.notation === "Standard" || player.notation === "Mixed scientific") {
            if (power <= 303) return matissa + " " + FormatList[(power - (power % 3)) / 3];
            else return matissa + " " + getAbbreviation(power);
        } else if (player.notation === "Mixed engineering") {
            if (power <= 33) return matissa + " " + FormatList[(power - (power % 3)) / 3];
            else return (matissa + "ᴇ" + pow);
        } else if (player.notation === "Engineering") {
            return (matissa + "ᴇ" + pow);
        } else if (player.notation === "Letters") {
            return matissa + letter(power,'abcdefghijklmnopqrstuvwxyz');
        }
    } else if (value < 10000) {
        return (value).toFixed(placesUnder1000);
    } else {
        return "Infinite";
    }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



//
// timeText
//
// Converts a given number of milliseconds to days, hours, minutes, seconds
function timeText (time){
    time /= 1000;    
    


    var days = Math.floor(time/86400);
    var hours = Math.floor((time % 86400)/3600);
    var minutes = Math.floor((time % 3600)/60);
    var seconds = Math.floor(time % 60);

    return days+" days, "+hours+" hours, "+minutes+" minutes, "+seconds+" seconds.";
}


//
// saveGame
//
// Saves the game to localstorage
function saveGame(){
    var d = new Date();
    player.time=d.getTime();
    localStorage.setItem("save",JSON.stringify(player));
}

//
// autoSave
//
// Simple function to repeatedly call the save function
function autoSave(){
    if (player.autosaveInterval > 0){
        saveGame();
        window.setTimeout(function(){autoSave();},player.autosaveInterval*1000);
    }
}

//
// changeAutoSave
//
// Changes the autosave rate
function changeAutoSave(rate){
    var restar = false;
    if (player.autosaveInterval < 0) restar = true;
        
    player.autosaveInterval = rate;

    if (restar) autoSave();
}

//
// loadGame
//
// loads a save from local storage
function loadGame(){
    var saveGame = JSON.parse(localStorage.getItem("save"));
    if (!saveGame) return false;
    player = saveGame;

    initializeGame();

    for (var i=0; i < 3; i++){
        updatePowerupLabel(player.ballPowerupOptions[i], i);
    }

    for (var i=0; i<=5; i++){
        document.getElementById(htmLabels.dropdowns[i]).value=player.winningNums[i];
    }

    var d = new Date();
    var awayTime = d.getTime()-player.time;
    var timeString = timeText(awayTime);

    alert("Welcome back!  You were away for "+timeString);

    player.timeBank += Math.pow(awayTime/1000, 0.7);  // TODO: Use a non-arbitrary number
    if (player.timeBank > 7200000) player.timeBank=7200000;

    coreLoop();

    return true;
}

//
// wipeGame
//
// Loads the basePlayer object and saves it, effectively hard resetting the game.
function wipeGame(){
    if (confirm("Are you sure you want to wipe your save?")){
        if (confirm("Are you REALLY sure you want to wipe it???")){
            player=basePlayer;
            saveGame();

            for (var i = 0; i <= 3; i++){
                player.ballSoloPowerups[i]=Array.apply(null, Array(101)).map(Number.prototype.valueOf,0);
                player.ballMultiPowerups[i]=Array.apply(null, Array(101)).map(Number.prototype.valueOf,0);
            }
        
            populatePowerupChoices();
            
            coreLoop();

            return;
        }
    }
    alert("Phew, that was a close one!");


}

//
// importGame
//
// Imports a game from a given text string
function importGame(){
    var saveString = window.prompt("Enter your save below: \n WARNING: THIS WILL OVERWRITE YOUR CURRENT SAVE!");
    if (!saveString) {
        alert("Please enter a save string.");
        return;
    }

    var saveGame = JSON.parse(atob(saveString));

    // Check for save validity here

    player = saveGame;
    initializeGame();

}

//
// exportGame
//
// Exports the game to a string, for transferring between computers etc.
function exportGame(){
    var out = btoa(JSON.stringify(player));
    window.prompt("Your save string:",out);
}

//
// changeNumberFormat
//
// Updates the current number format being used
function changeNumberFormat(val){
    player.notation=val;

    updateCash();
    updateAllPowerupTableLabels();
    generatePayoutTable(false);
    updateRemoveLabels();
    updateAbilityLabels();

    updateUpgradeLabels("winMulti");
    updateUpgradeLabels("winExpo");
    updateUpgradeLabels("superMulti");
    updateUpgradeLabels("tickSpeed");
    updateUpgradeLabels("xpGain");
}

//
// dropDownChanged
//
// updates the current "match" number to be the number in the dropdown
function dropDownChanged(elem,val){
    player.winningNums[htmLabels.dropdowns.findIndex(function (element){return element===elem;})]=parseInt(val);

}


//
// updateDropdowns
// 
// populate the dropdowns to match the current pool
function updateDropdowns(){

    for (var i=0; i < htmLabels.dropdowns.length; i++){
        var pool = player.pool[i];
        var item = document.getElementById(htmLabels.dropdowns[i]);
        var remItem = document.getElementById(htmLabels.removeDropdowns[i]);

        if (item.selectedIndex >= 0) var exVal = item.options[item.selectedIndex].text;


        // Easy approach is to just wipe the old dropdown and recreate it.
        while (item.lastChild) {
            item.removeChild(item.lastChild);
        }
        while (remItem.lastChild) {
            remItem.removeChild(remItem.lastChild);
        }

        for (var j=0; j < pool.length; j++){
            item.appendChild(new Option(pool[j],pool[j]));
            remItem.appendChild(new Option(pool[j],pool[j]));
            if (item.lastChild.text === exVal) item.selectedIndex = j;
        }

    }
}

//
// drawBall
//
// Draws a single ball from the provided slot and removes it from the active pool
function drawBall(slot){
    var lst=player.curpool[slot];
    var oddsList = [];
    var sum = 0;
    var x = 0;
    var count = 0;
    var PBAbilityExpo = 1;

    if (player.abilityLevels[5]>=5 && player.abilityCharges[5] > 0) PBAbilityExpo = consts.abilityPBpower;

    for (var i=0; i<lst.length; i++){
        var str = Math.pow(calcPowerupStrength(lst[i],0,false,0),PBAbilityExpo);
        oddsList=oddsList.concat(str);
        sum += str;
    }
    
    var n = Math.random()*sum;

    while (x < n){
        x += oddsList[count];
        count++;
    }
    count--;
    return player.curpool[slot].splice(count,1)[0];
}

//
// pullBalls
//
// Runs drawBall on all slots with any buff changes as necessary and populates the match array
function pullBalls(){
    player.matchArr = [false,false,false,false,false,false];
    player.matchCount = 0;
    
    for (var i = 0; i <= 5; i++){
        for (var j = 0; j <= player.bonusBalls[i]; j++){
            player.pulled[i][j]=drawBall(i);

            if (player.pulled[i][j]===player.winningNums[i]) {
                player.matchArr[i]=true;
                if (i <5) player.matchCount++;
            }
        }
        player.bonusBalls[i]=0;
    }
}

//
// calcBaseWinnings
//
// Calculates the winnings before buffs for a given number of matches and whether the superball is matched or not
function calcBaseWinnings(matches, superball, preview){
    if (preview){
        var vals = previewPlayer;
    } else {
        var vals = player;
    }
    if (matches===0 && !superball) return 0; //short circuit or the math gets weird

    
    var winnings=(5+consts.winMultiFixed*vals.winMulti)*Math.pow(3+consts.winExpo*vals.winExpo,matches)*Math.pow(consts.winMulti,vals.winMulti);
    if (superball) winnings *= (5+consts.winExpo*vals.winExpo)*Math.pow(consts.superMulti,vals.superMulti);

    return winnings;
}

//
// collecWinnings
//
// Calculate money based on the match array and any buffs
function collectWinnings(){
    var matches = 0;
    var superball = false;
    var winnings = 0;
    var winarr = player.matchArr;
    var PBAbilityExpo = 1;

    //debugger;

    if (player.abilityLevels[5]>=5 && player.abilityCharges[5] > 0) PBAbilityExpo = consts.abilityPBpower;

    for (var i = 0; i < 5; i++){
        if (winarr[i]) matches += 1;
    }
    if (winarr[5]) superball=true;

    if (matches === 0 && !superball) return 0;
    
    if (winarr[3] && player.abilityLevels[3] > 0) matches += getAbilityStrength(3,false); //Ball 4 bonus

    winnings = calcBaseWinnings(matches,superball, false);

    //powerup bonuses
    for (var i=0; i<=5; i++){
        winnings *= Math.pow(1 + calcPowerupStrength(player.winningNums[i],1,false,0),PBAbilityExpo);
        if (winarr[i]) winnings *= Math.pow(1 + calcPowerupStrength(player.winningNums[i],2,false,0),PBAbilityExpo);
    }

    //Multiply for each active ability 1
    for (var i=0; i<3; i++){
        if (player.abilityCharges[0][i] > 0){
            winnings *= 1 + getAbilityStrength(0,false);
        }
    }
    
    winnings *= 1 + player.ability5Bonus;
    if (player.timeBank > 0) winnings *= 2;
    return winnings;
}

//
// runLottery
//
// Executes the lottery ticket process
function runLottery (){
    var winarr = pullBalls();
    var winnings = collectWinnings();

    player.money += winnings;

    player.stats.overall.money += winnings;
    player.stats.session.money += winnings;

    return winarr;
}


//
// generatePayoutTable
//
// Generate a table displaying payouts based on the number of matches.  Does not include buffs
function generatePayoutTable(preview){
    if (preview){
        var aff = "newpay";
    }else{
        var aff = "pay";
    }
    for (var i = 0; i < 2; i++){
        for (var j = 0; j < 6; j++){
            var calc = calcBaseWinnings(j,(i===1), preview);
            document.getElementById(aff+i+"-"+j).innerHTML=formatValue(calc,2,2);
        }
    }
}


//
// getUpgradeCost
//
// Get the price of upgrades
function getUpgradeCost(upg, amt){
    var cost = 0;
    var num = 0;
    if (amt === -1){
        var temp = consts.baseCost[upg]*Math.pow(consts.costMulti[upg],player[upg]);
        while (cost + temp <= player.money){
            cost += temp;
            num++;
            temp = consts.baseCost[upg]*Math.pow(consts.costMulti[upg],player[upg]+num);
        }
        if (num === 0){
            num=1;
            cost = consts.baseCost[upg]*Math.pow(consts.costMulti[upg],player[upg]);
        }
    }else{
        for (var i = 0; i < amt; i++){
            cost += consts.baseCost[upg]*Math.pow(consts.costMulti[upg],player[upg]+i);
        }
        num=amt;
    }
    return [cost, num];
}

//
// updateUpgradeLabels
//
// Update the count and cost labels for a given upgrade 
function updateUpgradeLabels(upg){
    var cst = getUpgradeCost(upg, player.buyAmount);
    document.getElementById(upg+"Span").innerHTML = player[upg];
    document.getElementById(upg+"Btn").innerHTML = "Cost: " + formatValue(cst[0],2,0) + "(+" + cst[1] +")";
    if (player.money < cst[0]){
        document.getElementById(upg+"Btn").style.color="gray";
    } else {
        document.getElementById(upg+"Btn").style.color="black";
    }
}

//
// changeBuyAmount
// 
// Changes the number of upgrades to buy in one go
function changeBuyAmount(amt, btn){
    player.buyAmount = amt;

    document.getElementById("buyUpgradeOne").removeAttribute("style");
    document.getElementById("buyUpgradeTen").removeAttribute("style");
    document.getElementById("buyUpgradeHundred").removeAttribute("style");
    document.getElementById("buyUpgradeMax").removeAttribute("style");

    btn.style.color="black";
    btn.style.border="2px solid black";

    updateUpgradeLabels("winMulti");
    updateUpgradeLabels("winExpo");
    updateUpgradeLabels("superMulti");
    updateUpgradeLabels("tickSpeed");
    updateUpgradeLabels("xpGain");
}


//
// buyUpgrade
//
// Purchase a basic upgrade
function buyUpgrade(btn){
    var upg = btn.id.substring(0, btn.id.length - 3);
    var ct = getUpgradeCost(upg, player.buyAmount);
    var cost = ct[0];
    var amt = ct[1];

    if (player.money < cost) return;

    player.money -= cost;
    player[upg] += amt;
    

    updateUpgradeLabels(upg);

    if (upg==="tickSpeed"){
        document.getElementById("tick").innerHTML = formatValue(calcTickSpeed(),0,0);
    }else if(upg==="xpGain"){
        document.getElementById("xpRateSpan").innerHTML = formatValue(calcBaseXP(false),2,0);
    } else { 
        generatePayoutTable(false);
    }
    updateCash();
    previewUpgrade(btn);
}

//
// previewUpgrade
//
// Preview the upgrade to see how stats will change before purchasing
function previewUpgrade(btn){
    var upg = btn.id.substring(0, btn.id.length - 3);
    previewPlayer.winMulti = player.winMulti;
    previewPlayer.winExpo = player.winExpo;
    previewPlayer.superMulti = player.superMulti;
    previewPlayer.tickSpeed = player.tickSpeed;
    previewPlayer[upg]++;

    if (upg==="tickSpeed"){
        document.getElementById("tick").innerHTML= formatValue(calcTickSpeed()*consts.tickSpeed,0,0);
        document.getElementById("tick").style.color = "red";
    } else if(upg==="xpGain"){
        document.getElementById("xpRateSpan").innerHTML= formatValue(calcXPRate(true),2,0);
        document.getElementById("xpRateSpan").style.color = "red";
    } else {
        generatePayoutTable(true);
        document.getElementById("payoutPreviewDiv").style.display = 'block';
    }
}

//
// endPreview
//
// Ends the previewing of upgrades
function endPreview(btn){

    var upg = btn.id.substring(0, btn.id.length - 3);

    if (upg==="tickSpeed"){
        document.getElementById("tick").innerHTML= formatValue(calcTickSpeed(),0,0);
        document.getElementById("tick").style.color = "black";
    } else if(upg==="xpGain"){
        document.getElementById("xpRateSpan").innerHTML= formatValue(calcXPRate(false),2,0);
        document.getElementById("xpRateSpan").style.color = "black";
    } else {
        document.getElementById("payoutPreviewDiv").style.display = 'none';
    }
}

//
// refreshPool
//
// Resets the pool to draw from.  "put the balls back in the hopper"
function refreshPool(){
    for (var i=0; i<=5; i++){
        player.curpool[i]=player.pool[i].slice();
        player.pulled[i]=[0];
    }
}

//
// updateCash
//
// Updates the current cash amount display. 
function updateCash(){
    consts.cashObj.innerHTML = formatValue(player.money,2,2);

    // This is a little arbitrary being in here, but we'll want to call it everytime we update cash anyways...
    updateUpgradeLabels("winMulti");
    updateUpgradeLabels("winExpo");
    updateUpgradeLabels("superMulti");
    updateUpgradeLabels("tickSpeed");
    updateUpgradeLabels("xpGain");

    updateRemoveLabels();
    updateAbilityLabels();

    if (player.money < consts.powerupBaseCost*Math.pow(consts.powerupcostMulti,player.powerupCount)){
        for (var i = 0; i < 3; i++){
            document.getElementById(i+"selectPowerupBtn").style.color="gray";
        }
    }else{
        for (var i = 0; i < 3; i++){
            document.getElementById(i+"selectPowerupBtn").style.color="black";
        }
    }

}

//
// updateBallLabels
//
// Updates the labels displaying the balls pulled this round
function updateBallLabels(){

    //TODO: multiple draws

    for (var i=0; i<htmLabels.ballLabels.length; i++){
        consts.ballLabelObjs[i].innerHTML = player.pulled[i];
        if (player.matchArr[i]){
            consts.ballLabelObjs[i].style.color = "red";
        } else {
            consts.ballLabelObjs[i].style.color = "black";
        }
    }
}


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
        else if (rnd < 0.167) {type = 6;}

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
    } else {
        var arr = getPowerupChoices(abl);

        for (var i=0; i<arr.length; i++){
            var val = calcPowerupStrength(arr[i], abl[2], true, 1);
            var item = document.getElementById(arr[i]+"_"+abl[2]+"powerupStats");

            updatePowerupTableLabel(arr[i], abl[2], val);
            document.getElementById("powerupTableRow"+arr[i]).style.backgroundColor="#DDDDDD";
            item.style.color="#FF0000";
        }
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
// changeStatsTab
//
// Changes the current stats tab
function changeStatsTab(tab){
    
    if (tab === "Overall"){
        document.getElementById("statsMenuOverall").classList.add("selected");
        document.getElementById("statsOverallDiv").style.display="block";

        document.getElementById("statsMenuSession").classList.remove("selected");
        document.getElementById("statsSessionDiv").style.display="none";
    }else{
        document.getElementById("statsMenuSession").classList.add("selected");
        document.getElementById("statsSessionDiv").style.display="block";

        document.getElementById("statsMenuOverall").classList.remove("selected");
        document.getElementById("statsOverallDiv").style.display="none";
    }

}

//
// changeMainTab
//
// changes the tab currently being displayed
function changeMainTab(tab){
    var names = ["Upgrades","Powerups","Experience","Stats","Settings"];

    for (var i=0; i < names.length; i++){
        document.getElementById("mainTab"+names[i]).style.display="none";
        document.getElementById("mainMenu"+names[i]).classList.remove("selected");
    }
    document.getElementById("mainTab"+tab).style.display="block";
    document.getElementById("mainMenu"+tab).classList.add("selected");

    if (tab === "Stats") updateStats(false);

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

//
// calcXPRate
//
// Calculates the base per-match XP
function calcXPRate(preview){
    if (preview){
        return (player.xpGain+1);
    }
    return player.xpGain;
}

//
// calcBaseXP
//
// Calculates the base XP to be gained from the current pull, before any buffs
function calcBaseXP(){

    if (player.xpGain===0) return 0;

    var matches = player.matchCount;

    if (player.matchArr[5]) matches++;

    if (player.abilityLevels[3] > 0 && player.matchArr[3]) matches += getAbilityStrength(3,false);

    return matches*calcXPRate(false);
}

//
//updateXPLabels
//
// Updates the XP progress bar and current XP amounts
function updateXPLabels(cur,target){
    if (cur > target) {
        alert("Current greater than max!!");
        return true;
    }
    var pct = Math.round(100*cur/target);
    document.getElementById("xpSpan").innerHTML=formatValue(cur,2,0) + " / " + formatValue(target,2,0);
    document.getElementById("xpForeground").style.width = pct + "%";

}

//
// getXPNeeded
//
// Returns the XP needed to level up
function getXPNeeded(){
    return Math.pow(player.level,consts.xpNeedExpo)*20;
}

//
// generateXP
//
// Generates XP as part of the normal draw

function generateXP(){
    var xpGained = calcBaseXP();
    var PBAbilityExpo = 1;

    if (player.abilityLevels[5]>=5 && player.abilityCharges[5] > 0) PBAbilityExpo = consts.abilityPBpower;
    // adding xp for powerups
    for (var i=0; i<=5; i++){
        for (var j=0; j<player.pulled[i].length; j++){
            xpGained += Math.pow(calcPowerupStrength(player.pulled[i][j],3,false,0),PBAbilityExpo);
        }
    }

    // Ability bonuses
    if (player.abilityLevels[1] >= 5 && player.abilityCharges[1] > 0) xpGained*=1.5;
    player.xp += xpGained;

    player.stats.overall.xp += xpGained;
    player.stats.session.xp += xpGained;

    // keep levelling until we run out of XP
    while (player.xp >= getXPNeeded()){
        player.xp -= getXPNeeded();
        player.level++;

        // Gain ability charges
        if (player.level % 5 === 0){
            player.abilityPoints++;
            updateAbilityLabels();
        }
        player.remCharges++;
        unlockBallRemoval();
    }

    document.getElementById("levelSpan").innerHTML=formatValue(player.level,2,0);

    updateXPLabels(player.xp, getXPNeeded());
}


//
// unlockBallRemoval
//
// Shows the ball removal box and populates the elements in it
function unlockBallRemoval(){
    document.getElementById("ballRemCharges").innerHTML= formatValue(player.remCharges,2,0);
    document.getElementById("ballRemoveBox").style.display = 'block';
    updateRemoveLabels();
}


//
// getBallRemovalCost
//
// Gives the cost for the removing a ball from the given slot
function getBallRemovalCost(slot){

    if (slot === 5){
        return 2e9*Math.pow(4,Math.pow(25-player.pool[slot].length,1.4));
    } else {
        return 1e9*Math.pow(4,Math.pow(15-player.pool[slot].length,1.5));
    }
}


//
// updateRemoveLabels
//
// Update the remove ball cost labels
function updateRemoveLabels(){
    var cost = 0;

    for (var i = 0; i <= 5; i++){
        cost = getBallRemovalCost(i);
        var item = document.getElementById(i+"remBall")
        item.innerHTML = "Cost: " + formatValue(cost,2,0);
        if (cost > player.money || player.remCharges < 1){
            item.style.color = "gray";
        }else{
            item.style.color = "black";
        }
    }
}





//
// removeBall
//
// Called to remove a ball from the pool
function removeBall(btn){
    if (player.remCharges <= 0) return;

    var slot = parseInt(btn.id.substring(0, 1));
    var ball = parseInt(document.getElementById(htmLabels.removeDropdowns[slot]).value);
    var pool = player.pool[slot];
    var cost = getBallRemovalCost(slot);

    if (!confirm("Are you sure you want to remove ball "+ball+"? It has the following powerups:\n\nLikelihood: "+formatValue(calcPowerupStrength(ball,0,false,0),2,1)+"\n% Money When Pulled: "+formatValue(100*calcPowerupStrength(ball,1,false,0),2,0)+"\n% Money When Matched: "+formatValue(100*calcPowerupStrength(ball,2,false,0),2,0)+"\nXP when pulled: "+formatValue(calcPowerupStrength(ball,3,false,0),2,2))){
        return;
    }
    if (player.money>=cost){
        player.money -= cost;
        updateCash();
        
    } else {
        return;
    }

    //Find the appropriate ball to remove
    for (var i = pool.length - 1; i >= 0; i--){
        if (pool[i] === ball){
            pool.splice(i,1);
        }
    }

    updateDropdowns();
    updateRemoveLabels();
    hideRemovedBall(ball);

    player.stats.overall.ballsRemoved++;
    player.stats.session.ballsRemoved++;

    //Update the dropdown in case removing a ball changed the default
    var dd = document.getElementById(htmLabels.dropdowns[slot]);
    dropDownChanged(dd.id, dd.value);

    player.remCharges--;
    document.getElementById("ballRemCharges").innerHTML= formatValue(player.remCharges,2,0);

    // Hide the removal box once we can't buy anymore?
    //if (player.remCharges <= 0) document.getElementById("ballRemoveBox").style.display = 'none';
}

//
// hideRemovedBall
//
// Hides the given ball from the powerup table.  A negative value refreshes the table
function hideRemovedBall(ball){
    if (ball < 0){
        for (var i=1; i <= 100; i++){
            document.getElementById("powerupTableRow"+i).style.display="none";
        }

        for (var i=0; i <= 5; i++){
            var arr = player.pool[i];
            for (var j=0; j < arr.length; j++){
                document.getElementById("powerupTableRow"+arr[j]).style.display="";
            }
        }
    }else{
        document.getElementById("powerupTableRow"+ball).style.display="none";
    }
}


//
// updateAbilityLabels
//
// Update the ability cost and level labels
function updateAbilityLabels(){
    var nocharges = (player.abilityPoints < 1)
    for (var i = 0; i <= 5; i++){
        if (player.abilityLevels[i]>=5){
            document.getElementById(i+"abilityBtn").style.display="none";
            document.getElementById(i+"abilityMaxed").style.display="";
            continue;
        }
        var cost = getAbilityCost(i);

        document.getElementById(i+"abilityBtn").innerHTML = "Cost: " + formatValue(cost,2,0);
        document.getElementById(i+"abilitySpan").innerHTML = formatValue(player.abilityLevels[i],2,0);
        if (nocharges || player.money < cost){
            document.getElementById(i+"abilityBtn").style.color = "gray";
        } else {
            document.getElementById(i+"abilityBtn").style.color = "black";
        }
    }
    document.getElementById("abilityPoints").innerHTML = formatValue(player.abilityPoints,2,0);
}


//
// getAbilityStrength
//
// Returns the multipler for the given ability based on its current level
function getAbilityStrength(ability, preview){
    var lvl = player.abilityLevels[ability];
    if (preview) lvl++;
    return consts.abilityMultis[ability]*lvl;
}

//
// getAbilityCost
//
// Returns the cost of the given ability
function getAbilityCost(slot){
    var expo = ((slot === 5) ? consts.abilityCostScaling[1] : consts.abilityCostScaling[0]);
    var base = ((slot === 5) ? consts.abilityBaseCosts[1] : consts.abilityBaseCosts[0]);
    return Math.pow(expo, player.abilityLevels[slot])*base;
}

//
// buyAbility
//
// Buy a ability based on the btn ID passed in
function buyAbility(btn){
    if (player.abilityPoints <= 0) return;

    var slot = parseInt(btn.id.substring(0,1));
    var cost = getAbilityCost(slot);

    if (player.money < cost) return;

    player.money -= cost;

    player.abilityLevels[slot]++;
    if (player.abilityLevels[slot] > 5){
        player.abilityLevels[slot]=5;
        alert("Cheater.");
    }
    player.abilityPoints--;
    
    updateAbilityLabels();
}

//
// previewAbility
//
// Preview the ability and its benefits before unlocking
function previewAbility(btn){
    var slot = parseInt(btn.id.substring(0,1));
    var txt;
    var str = getAbilityStrength(slot, true);

    switch(slot){
        case 0:
            txt="Whenever Slot 1 matches, the next 2 draws give "+formatValue(str*100,0,0)+"% more payout. <br /> <br />Level 5 Bonus: Last 3 draws and can stack.";
            break;
        case 1:
            txt="Whenever Slot 2 matches, gain "+formatValue(str*100,0,0)+"% faster tickspeed for the next 2 draws. <br /> <br />Level 5 Bonus: Gain 50% more XP while active.";
            break;
        case 2:
            txt="Whenever Slot 3 matches, "+formatValue(str,0,0)+" random slot(s) draw 2 balls next draw (both of which can match). <br /> <br />Level 5 Bonus: Draw 3 balls from each slot instead.";
            break;
        case 3:
            txt="Slot 4 counts as "+formatValue(str,0,0)+" additional matched balls when determining payouts. <br /> <br />Level 5 Bonus: This bonus also applies to XP gain.";
            break;
        case 4:
            txt="Whenever Slot 5 matches, gain a "+formatValue(str*100,0,0)+"% increase in payouts.  This bonus decrease by "+formatValue(consts.ability5Decay*100,0,0)+"% each draw, but additional matches add to the current bonus. <br /> <br />Level 5 Bonus: Decays by "+formatValue(consts.ability5DecayLvl5*100,0,0)+"% instead";
            break;
        case 5:
            txt="Whenever the SuperBall! matches, "+formatValue(str,0,0)+" draws are (almost) immediately made. <br /> <br />Level 5 Bonus: All powerup bonuses are raised to a power of"+consts.abilityPBpower+".";
            break;
        default:
            alert("Error: Unexpected slot "+slot);
    }

    document.getElementById("abilityPreview").innerHTML=txt;
}

//
// endAbilityPreview
//
// Clear the preview description
function endAbilityPreview(){
    document.getElementById("abilityPreview").innerHTML = "";
}

//
// calcTickSpeed
//
// Calculates the base current tickspeed
function calcTickSpeed(){
    return 3000 * Math.pow(consts.tickSpeed,player.tickSpeed);
}

//
// populateBonusBalls
//
// Randomly select extra slots to draw extra balls
function populateBonusBalls() {
    var pool = [0, 1, 2, 3, 4, 5];
    var extras = (player.abilityLevels[2] >= 5 ? 2 : 1);
    for (var i = getAbilityStrength(2,false); i > 0; i--){
        var rnd = Math.floor(Math.random()*pool.length);
        player.bonusBalls[pool.splice(rnd,1)[0]]=extras;
    }
}


//
// updateStats
//
// Updates the stats labels and values
function updateStats(calc){
    if (calc){
        var count = 0;
        var sb = 0;

        player.stats.overall.pulls++;
        player.stats.session.pulls++;
        
        for (var i=0; i<=5; i++){
            if (player.matchArr[i]){
                player.stats.overall.ballMatches[i]++;
                player.stats.session.ballMatches[i]++;
                if (player.matchArr[i]){
                    if (i === 5){
                        sb=1;
                    } else {
                        count++;
                    }
                }
                
                if (player.abilityLevels[i] > 0){
                    player.stats.overall.abilityMatches[i]++;
                    player.stats.session.abilityMatches[i]++;
                }
            }
        }

        player.stats.overall.matchCount[sb][count]++;
        player.stats.session.matchCount[sb][count]++;

    }

    if (document.getElementById("mainTabStats").display != "none"){
        var ovAbil="";
        var seAbil="";
        var ovMatch="";
        var seMatch="";
                
        var d = new Date();
        var time = d.getTime();

        
        for (var i=0; i<=5; i++){
            ovAbil += formatValue(player.stats.overall.abilityMatches[i],2,0);
            seAbil += formatValue(player.stats.session.abilityMatches[i],2,0);

            ovMatch += formatValue(player.stats.overall.ballMatches[i],2,0);
            seMatch += formatValue(player.stats.session.ballMatches[i],2,0);

            if (i < 5) {
                ovAbil += " | ";
                seAbil += " | ";

                ovMatch += " | ";
                seMatch += " | ";

                for (var j=0; j<=1; j++){
                    document.getElementById("statsOverallMatchTable"+j+"-"+i).innerHTML=formatValue(player.stats.overall.matchCount[j][i],2,0);
                    document.getElementById("statsSessionMatchTable"+j+"-"+i).innerHTML=formatValue(player.stats.session.matchCount[j][i],2,0);
                }
            }
            
        }

        // update labels
        document.getElementById("statsOverallTime").innerHTML=timeText(time-player.stats.overall.startTime);

        document.getElementById("statsOverallMoney").innerHTML=formatValue(player.stats.overall.money,2,0);
        document.getElementById("statsOverallXP").innerHTML=formatValue(player.stats.overall.xp,2,0);
        document.getElementById("statsOverallPulled").innerHTML=formatValue(player.stats.overall.pulls,2,0);
        document.getElementById("statsOverallMatches").innerHTML=ovMatch;
        document.getElementById("statsOverallPowerups").innerHTML=formatValue(player.stats.overall.powerups,2,0);
        document.getElementById("statsOverallRemoved").innerHTML=formatValue(player.stats.overall.ballsRemoved,2,0);
        document.getElementById("statsOverallAbilities").innerHTML=ovAbil;

        // session labels
        document.getElementById("statsSessionTime").innerHTML=timeText(time-player.stats.session.startTime);

        document.getElementById("statsSessionMoney").innerHTML=formatValue(player.stats.session.money,2,0);
        document.getElementById("statsSessionXP").innerHTML=formatValue(player.stats.session.xp,2,0);
        document.getElementById("statsSessionPulled").innerHTML=formatValue(player.stats.session.pulls,2,0);
        document.getElementById("statsSessionMatches").innerHTML=seMatch;
        document.getElementById("statsSessionPowerups").innerHTML=formatValue(player.stats.session.powerups,2,0);
        document.getElementById("statsSessionRemoved").innerHTML=formatValue(player.stats.session.ballsRemoved,2,0);
        document.getElementById("statsSessionAbilities").innerHTML=seAbil;
    }
}


//
// coreLoop
//
// The core function to automatically run the lottery
function coreLoop(){
    if (player.abilityCharges[2] > 0) populateBonusBalls();
    refreshPool();
    //buyTicket();
    runLottery();
    updateBallLabels();
    updateCash();
    generateXP();
    updateStats(true);

    // Use up ability charges
    for (var i=0; i<3; i++){
        if (player.abilityCharges[0][i] > 0) player.abilityCharges[0][i]--;
    }
    if (player.abilityCharges[1] > 0) player.abilityCharges[1]--;
    if (player.abilityCharges[2] > 0) player.abilityCharges[2]--;
    if (player.abilityCharges[5] > 0) player.abilityCharges[5]--;
    // Decay ability 5 bonuses
    if (player.ability5Bonus > 0){
        player.ability5Bonus *= 1-(player.abilityLevels[4] >= 5 ? consts.ability5DecayLvl5 : consts.ability5Decay);
        if (player.ability5Bonus < .01) player.ability5Bonus = 0;
    }

    // Turn on abilities
    if (player.matchArr[0] && player.abilityLevels[0] > 0){
        if (player.abilityLevels[0] >= 5){
            player.abilityCharges[0][2] = player.abilityCharges[0][1];
            player.abilityCharges[0][1] = player.abilityCharges[0][0];
            player.abilityCharges[0][0] = 3;
        } else {
            player.abilityCharges[0][0] = 2;
        }
    } 
    if (player.matchArr[1] && player.abilityLevels[1] > 0) player.abilityCharges[1] = 2;
    if (player.matchArr[2] && player.abilityLevels[2] > 0) player.abilityCharges[2] = 1;
    if (player.matchArr[4] && player.abilityLevels[4] > 0) player.ability5Bonus += getAbilityStrength(4,false);
    if (player.matchArr[5] && player.abilityLevels[5] > 0) player.abilityCharges[5] = getAbilityStrength(5,false);

    // Update ability status labels
    if (player.abilityLevels[0] >= 5){
        document.getElementById("0abilityChargeSpan").innerHTML = formatValue(player.abilityCharges[0][0],2,0)+"-"+formatValue(player.abilityCharges[0][1],2,0)+"-"+formatValue(player.abilityCharges[0][2],2,0);
    }else{
        document.getElementById("0abilityChargeSpan").innerHTML = formatValue(player.abilityCharges[0][0],2,0);
    }
    document.getElementById("1abilityChargeSpan").innerHTML = formatValue(player.abilityCharges[1],2,0);
    document.getElementById("2abilityChargeSpan").innerHTML = formatValue(player.abilityCharges[2],2,0);
    document.getElementById("4abilityChargeSpan").innerHTML = formatValue(player.ability5Bonus*100,2,2);
    document.getElementById("5abilityChargeSpan").innerHTML = formatValue(player.abilityCharges[5],2,0);

    // Calculate the time until next draw and call it
    var ts = calcTickSpeed();

    // Speed it up for abilities 2 and PB
    if (player.abilityCharges[1] > 0){
        ts=ts/(1+getAbilityStrength(1,false));
    }
    if (player.abilityCharges[5] > 0){
        ts=ts/10;
    }
    player.timeBank-=ts;

    if (player.timeBank < 0) player.timeBank=0;
    window.setTimeout(function(){coreLoop();}, ts);
    
    document.getElementById("bonusTimeSpan").innerHTML=Math.floor(player.timeBank/1000);
}

//
// initializeGame
//
// Sets labels, starts core loop, other functions to get the game "running"
function initializeGame(){
    updateDropdowns();
    updateAbilityLabels();
    updateRemoveLabels();
    hideRemovedBall(-1);

    consts.cashObj = document.getElementById('cash');
    for (var i = 0; i < htmLabels.ballLabels.length; i++){
        consts.ballLabelObjs[i] = document.getElementById(htmLabels.ballLabels[i]);
    }
    updateCash();
    generatePayoutTable(false);

    updateAllPowerupTableLabels();

    updateUpgradeLabels("winMulti");
    updateUpgradeLabels("winExpo");
    updateUpgradeLabels("superMulti");
    updateUpgradeLabels("tickSpeed");
    updateUpgradeLabels("xpGain");
    document.getElementById("tick").innerHTML = formatValue(calcTickSpeed(),0,0);

    document.getElementById("powerupCostSpan").innerHTML=formatValue(consts.powerupBaseCost*Math.pow(consts.powerupcostMulti,player.powerupCount),2,0);

    document.getElementById("xpRateSpan").innerHTML = formatValue(calcBaseXP(false),2,0);
    document.getElementById("levelSpan").innerHTML=formatValue(player.level,2,0);
    changeBuyAmount(1,document.getElementById("buyUpgradeOne"));

    
}

//
// loadFunc
//
// Startup stuff to run when the document finishes loading
function loadFunc(){
    var d = new Date();
    var time = d.getTime();

    for (var i = 0; i <= 3; i++){
        basePlayer.ballSoloPowerups[i]=Array.apply(null, Array(101)).map(Number.prototype.valueOf,0);
        basePlayer.ballMultiPowerups[i]=Array.apply(null, Array(101)).map(Number.prototype.valueOf,0);
    }

    player.stats.session= {
        startTime: 0,
        money: 0,
        xp: 0,
        pulls: 0,
        ballMatches: [0,0,0,0,0,0],
        matchCount: [[0,0,0,0,0],[0,0,0,0,0]],
        powerups: 0,
        ballsRemoved: 0,
        abilityMatches: [0,0,0,0,0,0]
    }
    
    player.stats.session.startTime=time;


    // Generate the ball powerup tables

    for (var k=0; k<=5; k++){
        var t = "<tbody><tr style='border: 1px solid black'><td class='powerupTableCell'>Ball</td><td class='powerupTableCell'>Likelihood</td><td class='powerupTableCell'>% Money When Pulled</td><td class='powerupTableCell'>% Money When Matched</td><td class='powerupTableCell'>Bonus XP</td>";
        var end = 15;

        if (k === 5) end = 25;

        for (var i=0; i < end; i++){
            t += "<tr id='powerupTableRow"+(15*k+i+1)+"'><td class='powerupTableCell'>"+(15*k+i+1)+"</td>";
            for (var j=0; j <= 3; j++){
                t+="<td class='powerupTableCell'><span id="+(15*k+i+1)+"_"+j+"powerupStats>0</span></td>";
            }
            t+="</tr>";
        }
        t+="</tbody>";

        document.getElementById(k+"powerupTable").innerHTML=t;
    }

    //if (true){
    if (!loadGame()){
        for (var i = 0; i <= 3; i++){
            player.ballSoloPowerups[i]=Array.apply(null, Array(101)).map(Number.prototype.valueOf,0);
            player.ballMultiPowerups[i]=Array.apply(null, Array(101)).map(Number.prototype.valueOf,0);
        }

        player.stats.overall.startTime=time;

        populatePowerupChoices();

        initializeGame();

        coreLoop();
    }

    //Delay autosave so we don't overwrite immediately
    window.setTimeout(function(){autoSave();}, 60000)
    
}
