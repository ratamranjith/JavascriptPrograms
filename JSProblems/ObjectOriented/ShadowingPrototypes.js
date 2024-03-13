function Employee(name){
    this.name = name;
}

Employee.prototype.ask = function(question){
    console.log(this.name, question);
}


emp = new Employee("Truder");

// Prototype Shadowing
emp.ask = function(question){
    this.__proto__.ask.call(this, question.toUpperCase());
}

emp.ask("Are you ok baby");