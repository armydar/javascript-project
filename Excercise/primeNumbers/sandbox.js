// for (var number = 0; number <= 10; number++){
//     console.log(number);
// }

// var oddNumberArray = [];
// for( var oddNumber = 1; oddNumber <= 10; oddNumber+=2){ 
//     oddNumberArray.push(oddNumber);
//   }
// console.log(oddNumberArray);

var oddNumbers = [];
for( var oddNumber = 1; oddNumber <= 10; oddNumber+=2){ 
    oddNumbers.push(oddNumber);
}

transformedOddNumbers = [];
for(var i = 0; i<oddNumbers.length; i++){
  var result = oddNumbers[i] + (oddNumbers[i] / 2);
  transformedOddNumbers.push(result);  
}
console.log(transformedOddNumbers);

// function rangeOfNumbers(firstNumber, secondNumber){
//     var range = [];
//     for (var i = firstNumber; i <=secondNumber; i++){
//         if(i % 2 === 0){
//             range.push(i);
//         }
//     }
//     return range;
// }

// console.log(rangeOfNumbers(2,15));

function rangeOfNumbers(firstNumber, secondNumber){
    var range = [];
   var i = firstNumber;
    while (i < secondNumber){
        if(i % 2 !== 0){
            range.push(i);
        }
    i++
    }
return range;
}
console.log(rangeOfNumbers(1,15));

var oddNumbers = [];