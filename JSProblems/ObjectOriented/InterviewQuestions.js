//Variable vs property
let infoMessage = {
        message : "Hello Truder",
    showMessage(){
        let message = "Hello Dude";
        console.log(this.message);
    }
}
// infoMessage.showMessage();


// Delayed greeting
const object = {
    message: 'Hello, World!',
  
    logMessage() {
      console.log(this.message); // What is logged?
    }
  };
// setTimeout(object.logMessage(), 1000); // "Hello, World"
// setTimeout(object.logMessage, 1000);  // => Undefined (i.e)  The "callback" argument must be of type function.


// Artificial Method
const object1 = {
    message: 'Hello, World!'
  };
  
  function logMessage() {
    console.log(this.message); // "Hello, World!"
  }

  logMessage.call(object1);
  logMessage.apply(object1);
  // logMessage.bind(object1)("Dude");
  let bindMessage = logMessage.bind(object1);
  bindMessage();

