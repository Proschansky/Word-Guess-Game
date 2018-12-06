var pirateWords = ["abandon","adventure","ahoy","anchor","armada","arms","seashore","assault","attack"];
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var tries = [];
function gameReset(){guessesLeft = 6; tries = []; losses = 0; wins = 0};

let stats = {
    PirateWords: ["abandon","adventure","ahoy","anchor","armada","arms","seashore","assault","attack"],
    Wins: 0,
    Losses: 0,
    GuessesLeft: 6,
    Tries: [],
    gameReset(){guessesLeft = 6; tries = []; losses = 0; wins = 0}
};

document.onkeyup = function (start){
    stats.gameReset;
    
    if (start.key == ";"){
        gameWord = Math.floor(Math.random() * stats.PirateWords.length);
        for (var i=0;i<pirateWords.length;i++){var a = (pirateWords[gameWord]);var b = [];var c = a.split('').join(',');b.push(c);for (i = 0;i<b.length;i++){c.push("_");console.log(c)}}}
    
    else alert("Press ; to walk the plank, yarr!");

};

for (var i = 0;i<pirateWords.length,i++;){
    var a = gameWord.split(""); var letters=[]; letters.push(a);console.log(letters)
}



