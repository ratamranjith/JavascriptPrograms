/* Function Expressions: If the first word is variable or operator
Function Expressions Types:
    - Named Function Expressions
    - Anonymous Function Expressions
*/

// Named function expressions
var palindrome = function palindrome(stringData){
    if(stringData != undefined || stringData.length > 0){
        len = stringData.length - 1;
        for(let i=0; i<=len; i++){
            if(stringData[i] !== stringData[len - i]){
                console.log("Not a Palindrome");
                return;
            }
        }
        console.log("Palindrome")
    }else{
        console.log("Try to enter the string")
    }
}

palindrome("madam")
palindrome("madaM")

// Anonymous Function Expressions
var formTriangle = function(number){
    if(number > 0){
        for (let i=0; i<number; i++){
            console.log("");
        }
    }
}
