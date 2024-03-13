function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
}

var deepJs = new Workshop("Truder");
console.log(deepJs.prototype); // Undefined
console.log(deepJs.constructor); // [function: Workshop]
console.log(deepJs.__proto__); //{ ask: [Function (anonymous)] } using Dunder Prototypes
console.log(Workshop.prototype); //{ ask: [Function (anonymous)] }
console.log(Object.getPrototypeOf(deepJs)); //{ ask: [Function (anonymous)] }