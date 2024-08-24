function sample(question){
    console.log(this.name, question);
}

let dataObj1 = {
    name : "Intruder1",
    sample : sample
};

let dataObj2 = {
    name : "Intruder2",
    sample : sample
};

dataObj1.sample("How are you today");
dataObj2.sample("How are you today");