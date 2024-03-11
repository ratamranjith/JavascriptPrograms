class Student
{
    display(name){
        return name;
    }
}

class Teacher extends Student
{
    displayBoth(name){
        return (this.display(name) + name);
    }
}


//Basic
stu = new Student();
console.log(stu.display("Truder"));

//Basic Extends
tea = new Teacher();
console.log(tea.displayBoth("Truder Coder"));
