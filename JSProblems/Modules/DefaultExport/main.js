import {names, objectNames} from './DefaultExport.js'

// Since the user provided as array. We need to iterate using array methods
names.forEach(element => {
    let namesData = document.getElementsByClassName("names");
    namesData.innerHTML += `   ${element}`;
    console.log(namesData.innerHTML);
});

// Since the user provided as object. We need to iterate using object methods
console.log(objectNames['uname']);