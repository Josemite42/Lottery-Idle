

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

    gameLoadedFunc();

    return true;
}

//
// gameLoadedFunc
//
// Stuff to do after loading/importing a game
function gameLoadedFunc(){
    for (var i=0; i < 3; i++){
        updatePowerupLabel(player.ballPowerupOptions[i], i);
    }

    for (var i=0; i<=5; i++){
        document.getElementById(htmLabels.dropdowns[i]).value=player.winningNums[i];
    }

    if (player.level>0) unlockBallRemoval();
    if (player.powerupsUnlocked){
        document.getElementById("mainMenuPowerups").onclick=Function("changeMainTab('Powerups')");
        document.getElementById("mainMenuPowerups").innerHTML="Powerups";
    }

    var d = new Date();
    var awayTime = d.getTime()-player.time;
    var timeString = timeText(awayTime);

    alert("Welcome back!  You were away for "+timeString);

    player.timeBank += Math.pow(awayTime/1000, 0.7);  // TODO: Use a non-arbitrary number
    if (player.timeBank > 7200000) player.timeBank=7200000;
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
            initializeGame();

            document.getElementById("mainMenuPowerups").onclick=null;
            document.getElementById("mainMenuPowerups").innerHTML="???";
            document.getElementById("mainMenuExperience").onclick=null;
            document.getElementById("mainMenuExperience").innerHTML="???";

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
    if (!confirm("Are you sure you want to import?  THIS WILL REPLACE YOUR CURRENT SAVE!")) return;
    var saveString = document.getElementById("importBox").value;
    if (!saveString) {
        alert("Please enter a save string.");
        return;
    }
    //debugger;
    var saveGame = JSON.parse(atob(saveString));

    // Check for save validity here

    player = saveGame;
    initializeGame();
    gameLoadedFunc();
}

//
// exportGame
//
// Exports the game to a string, for transferring between computers etc.
function exportGame(){
    var out = btoa(JSON.stringify(player));
    document.getElementById("exportBox").innerHTML=out;
}
