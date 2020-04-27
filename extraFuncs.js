//
//
// Basic helper functions, including formatting
//
//

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


        // Update the results log
        var tbl = document.getElementById("logTable");
        var row = tbl.insertRow(2);

        var cell;

        for (var i=0; i<= 5; i++){
            var str = "";

            cell = row.insertCell();
            
            for (var j=0; j < player.pulled[i].length; j++){
                str += player.pulled[i][j] +",";
            } 
            str = str.slice(0,-1);
            cell.innerHTML = str;
            if (player.matchArr[i]) cell.style.color="red";
        }
        cell = row.insertCell();
        if (tempVals.winnings === 0){
            cell.innerHTML = "-";
        }else{
            cell.innerHTML = "$" + formatValue(tempVals.winnings,2,0);
        }
        cell = row.insertCell();
        cell.innerHTML = formatValue(tempVals.xp,2,1);

        if (tbl.rows.length > 32) tbl.deleteRow(-1);
    }


    // Label updating
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
// changeStatsTab
//
// Changes the current stats tab
function changeStatsTab(tab){
    var names = ["Overall","Session","Log"]
    
    for (var i=0; i < names.length; i++){
        document.getElementById("statsDiv"+names[i]).style.display="none";
        document.getElementById("statsMenu"+names[i]).classList.remove("selected");
    }
    document.getElementById("statsDiv"+tab).style.display="block";
    document.getElementById("statsMenu"+tab).classList.add("selected");
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