for (var number = 0; number <= 200; number++) {
    if ((number % 3 === 0) && (number % 5 !== 0)) {
        console.log("fizz");
    }
    else if ((number % 5 === 0) && (number % 3 !== 0)) {
        console.log("buzz");
    }
    else if ((number % 3 === 0) && (number % 5 === 0)) {
        console.log("fizzbuzz");
    }
    else {
        console.log(number);
    }

}