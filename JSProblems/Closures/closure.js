/*
Closures:
    When a function remembers it's Lexical Scope even when the function is executed outside the
    LexicalScope
    */

// Example 1
function outerMethod() {
  let outerVar = "Hi";
  try {
    console.log(outerVar);
    return function innerMethod() {
      let innerVar = "Truder";
      console.log(innerVar);
    };
  } catch (error) {
    console.log("Something went wrong dude");
  }
}

let innerMethodData = outerMethod();
innerMethodData();

// Example 2 - With Arguments - with function asynchronous expressions with arrow functions
let outer = (inputData1) => {
  let outerVar1 = `Hi ${inputData1} Dude`;
  console.log(outerVar1);
  try{
  return (inputData2) => {
    let innerVar1 = "Truder";
    console.log(`Hi ${inputData2}, Secondary Dude.`);
  }
}
catch(error){
  console.log("Something went wrong in the method");
}
}

let innerMethodData1 = outer("Sample");
innerMethodData1("Vanakkam");