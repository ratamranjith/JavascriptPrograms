function declaration() {
  console.log("This is a sample function declaration");
}
// declaration();

//Basic Fibonacci program - Without Recursion
function fibonacci(number) {
  let [first, second] = [0, 1];
  let sum = first + second;
  if (number < 0) {
    console.log("Enter the correct value");
  }
  for (let i = 0; i < number; i++) {
    if (i >= 2) {
       sum     = first + second;
       first   = second;
       second  = sum ;
       console.log(sum);
    }else if (i <= 2){
        console.log((i == 1)? 1 : 0)
      }
  }
}

// Fibonacci Recursion without 0 and 1
let [first, second, third] = [0,1, null];
function fibonacciWithRecursion(number){
    if(number == 0){
        return 0
    }
    else if (number == 1){
        return 1
    }else if(number >= 2){
    third = first + second;
    first = second;
    second = third;
    console.log(third);
    return fibonacciWithRecursion(number - 1);
    }
}
// fibonacci(8);
fibonacciWithRecursion(8);