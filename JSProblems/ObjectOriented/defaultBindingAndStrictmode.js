let names = "Truder";
function ask(question){
    console.log(this.names, question);
}

function askMe(question){
    "use strict"
    console.log(this.names, question);
}

ask(", This is non strict mode: default"); // undefined , This is non strict mode: default
askMe(", This is strict mode"); // TypeError: Cannot read properties of undefined (reading 'name')