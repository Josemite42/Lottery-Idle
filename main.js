/*
Slot Upgrades:
- more gold or x seconds/draws
- increased speed for x seconds/draws
- Bonus XP???
- Extra draw on random slot(s) next pull

Passive Upgrades
- Gold
- Reward Scaling
- Tickspeed
- Remove Balls



*/

player = {
    money: 10,
    pool: {
        p1: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        p2: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        p3: [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        p4: [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
        p5: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
        psb: [76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
    },
    curpool: {
        p1: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        p2: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        p3: [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        p4: [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
        p5: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
        psb: [76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
    },
    winningNums: [1,16,31,46,61,76],
    pulled: [0, 0, 0, 0, 0, 0],
    matchArr: [false, false, false, false, false, false],

    //upgrades
    winMulti: 0,
    winExpo: 0,
    superMulti: 0,
    tickSpeed: 0,
    ticketDiscount: 0
}

consts = {

    pools: ["p1","p2","p3","p4","p5","psb"],
    winMulti: 1.1,
    winExpo: 1.25,
    superMulti: 1.3,
    tickSpeed: .9,
    cashObj: null,
    ballLabelObjs: [null, null, null, null, null, null],

    baseCost: {
        winMulti: 10,
        winExpo: 100,
        superMulti: 200,
        tickSpeed: 1000,
        ticketDiscount: 0
    },

    costMulti: {
        winMulti: 1.5,
        winExpo: 10,
        superMulti: 5,
        tickSpeed: 20,
        //ticketDiscount: 0
    }

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
    ballLabels: ["ball1","ball2","ball3","ball4","ball5","ball6"]
}

var FormatList = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QaDc', 'QtDc', 'SxDc', 'SpDc', 'ODc', 'NDc', 'Vg', 'UVg', 'DVg', 'TVg', 'QaVg', 'QtVg', 'SxVg', 'SpVg', 'OVg', 'NVg', 'Tg', 'UTg', 'DTg', 'TTg', 'QaTg', 'QtTg', 'SxTg', 'SpTg', 'OTg', 'NTg', 'Qd', 'UQd', 'DQd', 'TQd', 'QaQd', 'QtQd', 'SxQd', 'SpQd', 'OQd', 'NQd', 'Qi', 'UQi', 'DQi', 'TQi', 'QaQi', 'QtQi', 'SxQi', 'SpQi', 'OQi', 'NQi', 'Se', 'USe', 'DSe', 'TSe', 'QaSe', 'QtSe', 'SxSe', 'SpSe', 'OSe', 'NSe', 'St', 'USt', 'DSt', 'TSt', 'QaSt', 'QtSt', 'SxSt', 'SpSt', 'OSt', 'NSt', 'Og', 'UOg', 'DOg', 'TOg', 'QaOg', 'QtOg', 'SxOg', 'SpOg', 'OOg', 'NOg', 'Nn', 'UNn', 'DNn', 'TNn', 'QaNn', 'QtNn', 'SxNn', 'SpNn', 'ONn', 'NNn', 'Ce',];

var notation = "Mixed scientific";











//By Ivark/Hevipelle
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
    //debugger;
    if ((value <= Number.MAX_VALUE) && (value >= 10000)) {
        var matissa = value / Math.pow(10, Math.floor(Math.log10(value)));
        var power = Math.floor(Math.log10(value));
        if ((notation === "Mixed scientific" && power >= 33) || notation === "Scientific") {
            matissa = matissa.toFixed(places)
            if (matissa >= 10) {
                matissa /= 10;
                power++;
            }
            if (power > 100000  && !player.options.commas) return (matissa + "e" + formatValue(notation, power, 3, 3))
            if (power > 100000  && player.options.commas) return (matissa + "e" + power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            return (matissa + "e" + power);
        }
        if (notation === "Infinity") {
            const inflog = Math.log10(Number.MAX_VALUE)
            const pow = Math.log10(value)
            if (pow / inflog < 1000) var infPlaces = 4
            else var infPlaces = 3
            if (player.options.commas) return (pow / inflog).toFixed(Math.max(infPlaces, places)).toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"."+(pow / inflog).toFixed(Math.max(infPlaces, places)).toString().split(".")[1]+"∞"
            else return (pow / inflog).toFixed(Math.max(infPlaces, places))+"∞"
        }
        if (notation.includes("engineering") || notation.includes("Engineering")) pow = power - (power % 3)
        else pow = power
        if (power > 100000  && !player.options.commas) pow = formatValue(notation, pow, 3, 3)
        if (power > 100000  && player.options.commas) pow = pow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        if (notation === "Logarithm") {
            if (power > 100000  && !player.options.commas) return "ee"+Math.log10(Math.log10(value)).toFixed(3)
            if (power > 100000  && player.options.commas) return "e"+Math.log10(value).toFixed(places).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            else return "e"+Math.log10(value).toFixed(places)
        }

        matissa = (matissa * Math.pow(10, power % 3)).toFixed(places)
        if (matissa >= 1000) {
            matissa /= 1000;
            power++;
        }

        if (notation === "Standard" || notation === "Mixed scientific") {
            if (power <= 303) return matissa + " " + FormatList[(power - (power % 3)) / 3];
            else return matissa + " " + getAbbreviation(power);
        } else if (notation === "Mixed engineering") {
            if (power <= 33) return matissa + " " + FormatList[(power - (power % 3)) / 3];
            else return (matissa + "ᴇ" + pow);
        } else if (notation === "Engineering") {
            return (matissa + "ᴇ" + pow);
        } else if (notation === "Letters") {
            return matissa + letter(power,'abcdefghijklmnopqrstuvwxyz');
        }
    } else if (value < 10000) {
        return (value).toFixed(placesUnder1000);
    } else {
        return "Infinite";
    }
}

function dropDownChanged(elem,val){
    player.winningNums[htmLabels.dropdowns.findIndex(function (element){return element===elem;})]=parseInt(val);

}

function updateDropdowns(){

    for (var i=0; i < htmLabels.dropdowns.length; i++){
        var pool =  player.pool[consts.pools[i]];
        var item =  document.getElementById(htmLabels.dropdowns[i]);

        while (item.lastChild) {
            item.removeChild(item.lastChild);
        }

        for (var j=0; j < pool.length; j++){
            item.appendChild(new Option(pool[j],pool[j]));
        }
    }
}

function drawBall(slot){
    var lst=player.curpool[slot];
    var n = Math.floor(Math.random()*lst.length);
    return player.curpool[slot].splice(n,1)[0];
}

function pullBalls(){
    player.matchArr = [false,false,false,false,false,false];
    
    player.pulled[0]=drawBall(consts.pools[0]);
    player.pulled[1]=drawBall(consts.pools[1]);
    player.pulled[2]=drawBall(consts.pools[2]);
    player.pulled[3]=drawBall(consts.pools[3]);
    player.pulled[4]=drawBall(consts.pools[4]);
    player.pulled[5]=drawBall(consts.pools[5]);

    for (var i = 0; i <= 5; i++){
        if (player.pulled[i]===player.winningNums[i]) player.matchArr[i]=true;
    }
}

function calcBaseWinnings(matches, superball,preview){
    if (preview){
        //debugger;
        var vals = previewPlayer;
    } else {
        var vals = player;
    }
    if (matches===0 && !superball) return 0;
    var winnings=5*Math.pow(3*Math.pow(consts.winExpo,vals.winExpo),Math.max(matches-1,0))*Math.pow(consts.winMulti,vals.winMulti);
    if (superball) winnings *= 5*Math.pow(consts.superMulti,vals.superMulti);

    return winnings;
}

function collectWinnings(){
    var matches = 0;
    var superball = false;
    var winnings = 0;
    var winarr = player.matchArr;

    for (var i = 0; i <= 5; i++){
        if (winarr[i]) matches += 1;
    }
    if (matches === 0) return 0;
    if (winarr[5]) superball=true;

    winnings = calcBaseWinnings(matches,superball);

    return winnings;
}

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

function runLottery (){
    var winarr = pullBalls();
    var winnings = collectWinnings();

    player.money += winnings;

    refreshPool();

    return winarr;
}

function getUpgradeCost(upg){
    return consts.baseCost[upg]*Math.pow(consts.costMulti[upg],player[upg]);
}

function updateUpgradeLabels(upg){
    document.getElementById(upg+"Span").innerHTML = player[upg];
    document.getElementById(upg+"Btn").innerHTML = "Cost: " + formatValue(getUpgradeCost(upg),2,0);
}

function buyUpgrade(btn){
    var upg = btn.id.substring(0, btn.id.length - 3);
    var cost = getUpgradeCost(upg);
    if (player.money>=cost){
        player.money -= cost;
        player[upg]++;
    }
    updateUpgradeLabels(upg);
    if (upg==="tickSpeed"){
        document.getElementById("tick").innerHTML= formatValue(calcTickSpeed(),0,0);
    } else { 
        generatePayoutTable(false);
    }
    updateCash();
    previewUpgrade(btn);
}

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
    } else {
        generatePayoutTable(true);
        document.getElementById("payoutPreviewDiv").style.display = 'block';
    }
}

function endPreview(btn){

    var upg = btn.id.substring(0, btn.id.length - 3);

    if (upg==="tickSpeed"){
        document.getElementById("tick").innerHTML= formatValue(calcTickSpeed(),0,0);
        document.getElementById("tick").style.color = "black";
    } else {
        document.getElementById("payoutPreviewDiv").style.display = 'none';
    }
}
function refreshPool(){
    for (var i=0; i<=5; i++){
        player.curpool[consts.pools[i]]=player.pool[consts.pools[i]].slice();
    }
}

function updateCash(){
    consts.cashObj.innerHTML = formatValue(player.money,2,2);
}

function updateBallLabels(){
    for (var i=0; i<htmLabels.ballLabels.length; i++){
        consts.ballLabelObjs[i].innerHTML = player.pulled[i];
        if (player.matchArr[i]){
            consts.ballLabelObjs[i].style.color = "red";
        } else {
            consts.ballLabelObjs[i].style.color = "black";
        }
    }
}

/*
function getTicketCost(){
    var cost=1/(1+Math.pow(player.ticketDiscount/2,1.5));
    return cost;
}


function manualTicket(){
    buyTicket();
}

function getCash(){
    player.money +=1;
    updateCash();
}

function buyTicket(){
    var cost = getTicketCost();
    if (player.money >= cost) {
        player.money -= cost;
        runLottery();
        updateBallLabels();
        updateCash();
        return true;
    }
    return false;

}*/

function calcTickSpeed(){
    return 2000 * Math.pow(consts.tickSpeed,player.tickSpeed);
}

function coreLoop(){
    //buyTicket();
    runLottery();
    updateBallLabels();
    updateCash();
    window.setTimeout(function(){coreLoop();}, calcTickSpeed());
}

function loadFunc(){

    updateDropdowns();
    consts.cashObj = document.getElementById('cash');
    for (var i = 0; i < htmLabels.ballLabels.length; i++){
        consts.ballLabelObjs[i] = document.getElementById(htmLabels.ballLabels[i]);
    }
    updateCash();
    generatePayoutTable(false);

    updateUpgradeLabels("winMulti");
    updateUpgradeLabels("winExpo");
    updateUpgradeLabels("superMulti");
    updateUpgradeLabels("tickSpeed");

    coreLoop();
}
