//Setter
class Student{
    set studentName(name){
        this.name = name;
    }
    printValue(){
        console.log("Setter Function - ", this.name);
    }
}

//Getter
class Teacher{ 
    name = "Truder coder";
    get teacherName(){
        return this.name;
    }
}

// Setter
stu = new Student()
stu.studentName = "Truder";
stu.printValue();

//getter
tea = new Teacher();
console.log(tea.teacherName);