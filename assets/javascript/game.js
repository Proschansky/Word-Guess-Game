var pirateWords = ["abandon","adventure","ahoy","anchor","armada","arms","seashore","assault","attack"];
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var tries = [];
function gameReset(){guessesLeft = 6; tries = []; losses = 0; wins = 0};
var word = document.getElementById('word');

let stats = {
    PirateWords: ["abandon","adventure","ahoy","anchor","armada","arms","seashore","assault","attack"],
    Wins: 0,
    Losses: 0,
    GuessesLeft: 6,
    Tries: [],
    gameReset(){guessesLeft = 6; tries = []; losses = 0; wins = 0}
};

document.onkeyup = function (start){
    gameWord = Math.floor(Math.random() * stats.PirateWords.length)
    stats.gameReset;
    var a = (pirateWords[gameWord]);
    var b = a.split('');
    console.log(b);
    word.innerHTML=" "

    for (i=0;i<b.length;i++){
        word.innerHTML += ' _ '
    }
    
    //else alert("Press ; to walk the plank, yarr!");

};

// for (var i = 0;i<pirateWords.length,i++;){
    // var a = gameWord.split(""); var letters=[]; letters.push(a);console.log(letters)
// }



