function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}


var primeNumbers = [];

for (var number = 1; number <= 1000; number++){
  if(isPrime(number)){
    primeNumbers.push(number);
  }
}
console.log(primeNumbers);