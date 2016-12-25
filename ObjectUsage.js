function callThisMethod(){
	return this.name.toUpperCase();
}

function displayValues(){
	var name = "Hello my name is "+callThisMethod.call(this);
	console.log(name);
}

var values = {
	name: 'Ratam'
};
var numbers = { 
	name: 'Ranju'
	};

	callThisMethod.call(values);
	displayValues.call(numbers);


// Using Methods Call
function useThis(num){
	console.log("Value:"+ num);
	data.count++;
}
var data = {
	count: 0
};

var i =0;
for (i=0; i < 10; i++){
	console.log(i);
}

console.log(data.count);

