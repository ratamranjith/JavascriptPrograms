// Explicit Binding
function sample(question){
    console.log(this.name, question);
}

let dataObj1 = {
    name : "Intruder1",
};

let dataObj2 = {
    name : "Intruder2",
};

sample.call(dataObj1, "How are you today");
sample.call(dataObj2, "How are you today");