class Employee{

    #name = "no name";
    #salary = 100;
    set employeeName(name){
        this.#name = name;
    }

    get employeeName(){
        return this.#name;
    }
    #calculatedsalary(){
        this.namelength = ((this.#name.length % 2 == 0)? 3 : 5)
        return (this.#salary * this.namelength)
    }
    calculateSalary(){
        return this.#salary = 100 + this.#calculatedsalary();
    }
}

emp = new Employee()
emp.employeeName = "Truders";
console.log(emp.calculateSalary());