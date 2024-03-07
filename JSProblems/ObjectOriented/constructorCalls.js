/*
Constructor Calls:
    1. Create a brand new empty object
    2. *Link that object to another object
    3. Call function with this set to the new object (call or apply)
    4. If function doesn't return an object, assume return of this
*/
function dataSample(){
    console.log("Hello there");
}

let ConstructorCall = new dataSample();
