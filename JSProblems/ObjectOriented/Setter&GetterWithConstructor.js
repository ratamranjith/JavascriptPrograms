class Employee{

    #name = "no data";
    constructor(){
        let dob = "3/7/1898"
        console.log(dob);
    }

    set employeeName(name){
        this.#name = name;
    }

    get employeeName(){
        return this.#name;
    }
}

emp = new Employee();
emp.employeeName = "truder";