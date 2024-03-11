class Student{
    #name = "Truder";
    set print(name){
        this.#name = "My name is "+ name;
    }
    get print(){
        return this.#name;
    }
}

stu = new Student();
stu.print = "Trude";
console.log(stu.print);