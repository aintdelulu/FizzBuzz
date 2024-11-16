


for (let e = 1; e <= 100; e++) {
    if (e % 3 === 0 && e % 5 === 0) {
      console.log("FizzBuzz");
    } else if (e % 3 === 0) {
      console.log("Fizz");
    } else if (e % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(e);
    }
  }
  