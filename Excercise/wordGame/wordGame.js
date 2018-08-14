var guessedWords = [];
for (var guess = 0; guess <= 2; guess++) {
    var guessedWord = prompt("enter your word");
    if(guessedWord === "secret") {
        alert("correct");
    }
    else {
        alert("wrong");
    }
    guessedWords.push(guessedWord);
}
console.log(guessedWords);

  