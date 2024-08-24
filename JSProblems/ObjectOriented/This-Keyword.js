// This keyword
// It is a reference variable, it refers to a current object
function askMe(question){
    console.log(this.teacher, question);
}
function printMe(){
    //Object 
    let sampOnj = {
        teacher: "Truder"
    };
    askMe.call(sampOnj, ", How are you?");
}
printMe();