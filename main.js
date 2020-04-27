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

    powerupsUnlocked: false,
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
    removedBalls: 0,
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
    version: "0.1",

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
    powerupBoxCount: 0,

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
    winMultiFixed: .25,
    winExpo: .25,
    superMulti: 1.3,
    tickSpeed: .85,

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
    xpNeedExpo: 3,

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

    powerupBoxBaseCost: 1e5,
    powerupBoxCostMulti: 10,

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

tempVals = {
    winnings: 0,
    xp: 0
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

    
    var winnings=(3+consts.winMultiFixed*vals.winMulti)*Math.pow(2+consts.winExpo*vals.winExpo,matches)*Math.pow(consts.winMulti,vals.winMulti);
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
    tempVals.winnings = winnings;

    return winarr;
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
// calcTickSpeed
//
// Calculates the base current tickspeed
function calcTickSpeed(){
    return 3000 * Math.pow(consts.tickSpeed,player.tickSpeed);
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

    if (!player.powerupsUnlocked && player.money > consts.powerupBaseCost) {
        document.getElementById("mainMenuPowerups").onclick=Function("changeMainTab('Powerups')");
        document.getElementById("mainMenuPowerups").innerHTML="Powerups";
    }

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

    var d = new Date();
    var time = d.getTime();

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

    }

    coreLoop();


    //Delay autosave so we don't overwrite immediately
    window.setTimeout(function(){autoSave();}, 60000)
    
}
