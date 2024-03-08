let a1 = (a,b) => { return (a + b)};
console.log(a1(4,5));

//Create a higher-order function using arrow functions
let high = (name1) => (name2) => {
    console.log(name1, name2);
}
let first = high("Hello");
first("Truder");