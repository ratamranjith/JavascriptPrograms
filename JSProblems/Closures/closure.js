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