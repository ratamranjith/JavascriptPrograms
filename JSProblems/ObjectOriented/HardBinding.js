// Hard Binding - Variation of explicit binding is Hard Binding
var workshop = {
    name : "Truder",
    askMe(question){
        console.log(this.name, question);
    }
}

setTimeout(workshop.askMe, 10, "Lost here"); //undefined Lost Here
setTimeout(workshop.askMe.bind(workshop), 10, "Hard Binding"); //Truder Hard Binding