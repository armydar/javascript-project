// var guessedWords = [];
// for (var guess = 0; guess <= 2; guess++) {
//   for (var childOneChance = 0; childOneChance <= 2; childOneChance++){
//     var childOneWords = prompt("type your word")
//       if(childOneWords === "smart") {
//         alert("correct");
//       }
//       else {
//         break;
//       }
//   }
//   for (var childTwoChance = 0; childTwoChance <= 2; childTwoChance++){
//     var childTwoWords = prompt("type your word")
//       if(childTwoWords === "smart") {
//         alert("correct");
//       }
//       else {
//        break;
//       }
//   }
//   for (var childThreeChance = 0; childThreeChance <= 2; childThreeChance++){
//     var childThreeWords = prompt("type your word")
//       if(childThreeWords === "smart") {
//         alert("correct");
//       }
//       else {
//         alert("wrong");
//       }
//   }
  
// }
// console.log(guessedWords);
    
var children = ["Tope", "Shade", "Tolu"];
var guessWords = [];
function getWords() {
 for (i = 0; i < children.length; i++) {
   for (x = 1; x <= 3; x++) {
     var chance = prompt("Enter word " + x + children[i]);
     if (chance === "secret") {
       guessWords.push({ name: children[i], word: chance, isGuessed: true });
       break;
     } else {
       guessWords.push({ name: children[i], word: chance, isGuessed: false });
     }
   }
 }
}
getWords();
console.log(guessWords);