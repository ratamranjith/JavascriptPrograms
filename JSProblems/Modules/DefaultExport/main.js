import {names} from './DefaultExport.js'

// Since the user provided as array. We need to iterate using array methods
// console.log(namesData);
names.forEach(element => {
    let namesData = document.getElementsByClassName("names");
    namesData.innerHTML += `   ${element}`;
    console.log(namesData.innerHTML);
});