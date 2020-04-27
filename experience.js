
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

    var pct = Math.round(100*(player.xp-xpPrevLevel())/(xpNextLevel()-xpPrevLevel()));
    document.getElementById("xpSpan").innerHTML=formatValue(player.xp-xpPrevLevel(),2,0) + " / " + formatValue(xpNextLevel()-xpPrevLevel(),2,0);
    document.getElementById("xpForeground").style.width = pct + "%";

}


//
// xpPrevLevel
//
// Gives the total XP needed to have reached the current level
function xpPrevLevel(){
    if (player.level === 0) return 0;
    return Math.pow(consts.xpNeedExpo,player.level)*20;
}


//
// getLevel
//
// Returns the current level based on accumlated XP
function getLevel(){
    return Math.floor(Math.log(player.xp/20)/Math.log(consts.xpNeedExpo));
}


//
// xpNextLevel
//
// Gives the total XP needed for the next level
function xpNextLevel(){
    return Math.pow(consts.xpNeedExpo,player.level+1)*20;
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
    tempVals.xp = xpGained;

    var newLevel = getLevel();

    if (newLevel > player.level){
        player.remCharges = player.level;
        unlockBallRemoval();

        var abilDif = Math.floor(newLevel/5) - Math.floor(player.level/5);
        if (abilDif > 0) {
            player.abilityPoints += abilDif;
            updateAbilityLabels;
        }

        player.level=newLevel;

        document.getElementById("levelSpan").innerHTML=formatValue(player.level,2,0);
    }
    /*
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
    */

    //updateXPLabels(player.xp, xpNextLevel);
    updateXPLabels();
}


//
// unlockBallRemoval
//
// Shows the ball removal box and populates the elements in it
function unlockBallRemoval(){
    document.getElementById("mainMenuExperience").onclick=Function("changeMainTab('Experience')");
    document.getElementById("mainMenuExperience").innerHTML="Experience";
    document.getElementById("ballRemCharges").innerHTML= formatValue(player.remCharges,2,0);
    //document.getElementById("ballRemoveBox").style.display = 'block';
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
    if (player.removedBalls >= player.remCharges) return;

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

    player.removedBalls++;
    document.getElementById("ballRemCharges").innerHTML= formatValue(player.remCharges - player.removedBalls,2,0);

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