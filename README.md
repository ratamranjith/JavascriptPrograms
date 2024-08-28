# Javascript Interview Question and Programs

## JavaScript Topics - Simplified

1. [Introduction](#introduction)
2. [Variables](#variables)
3. [Hoisting](#hoisting)
4. [Scope](#scope)
5. [Coercion](#coercion)
6. [Logical Operator Return Values](#logical-operator-return-values)
7. [Equality Operators](#equality-operators)
8. [Nullish Coalescing Operator](#nullish-coalescing-operator)
9. [String Datatype &amp; String Methods](String/README.md)
10. [Functions](#functions)
11. [Closure](#closure)
12. [Arrays](#arrays)
13. [Array forEach Method](#array-foreach-method)
14. [Array map Method](#array-map-method)
15. [Array filter Method](#array-filter-method)
16. [Array find Method](#array-find-method)
17. [Array some Method](#array-some-method)
18. [Object](#object)
19. [Object values Method](#object-values-method)
20. [Object keys Method](#object-keys-method)
21. [Object entries Method](#object-entries-method)
22. [Object freeze Method](#object-freeze-method)
23. [Object seal Method](#object-seal-method)
24. [this Keyword](#this-keyword)
25. [A New Keyword](#a-new-keyword)
26. [Prototypes](#prototypes)
27. [Class](#class)
28. [For...in Loop](#forin-loop)
29. [Try Catch Statement](#try-catch-statement)
30. [Try Catch Finally](#try-catch-finally)
31. [Understanding Promise](#understanding-promise)
32. [Promise Then Method](#promise-then-method)
33. [Promise Catch Method](#promise-catch-method)
34. [Why We Need Promise?](#why-we-need-promise)
35. [Async / Await](#async--await)
36. [JavaScript DOM](#javascript-dom)

## Introduction

- JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive

## History

- **Netscape Communications** hired **Brendan Eich** to develop Javascript

  - Mocha [Initial release]
  - LiveScript[Renamed]
  - Javascript[Finally]

## Variables (Interview Question)

| Feature                    | `var`                                                                            | `let`                                                                                              | `const`                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Scope**                  | Function scope                                                                   | Block scope                                                                                        | Block scope                                                                                        |
| **Hoisting**               | Hoisted to the top of the function or global scope; initialized with `undefined` | Hoisted to the top of the block but not initialized; ReferenceError if accessed before declaration | Hoisted to the top of the block but not initialized; ReferenceError if accessed before declaration |
| **Re-declaration**         | Allowed within the same scope                                                    | Not allowed within the same block                                                                  | Not allowed within the same block                                                                  |
| **Re-assignment**          | Allowed                                                                          | Allowed                                                                                            | Not allowed                                                                                        |
| **Block Scope Example**    | `if (true) { var x = 1; } console.log(x); // Outputs 1`                          | `if (true) { let x = 1; } console.log(x); // ReferenceError`                                       | `if (true) { const x = 1; } console.log(x); // ReferenceError`                                     |
| **Global Object Property** | Creates a property on the global object (e.g.,`window` in browsers)              | Does not create a property on the global object                                                    | Does not create a property on the global object                                                    |

- **Example Usage**

```
var name = 'Alice';
name = 'Bob';
console.log(name); // Outputs Bob

```

```
let age = 30;
age = 31;
console.log(age); // Outputs 31
```

```
const PI = 3.14;
PI = 3.1415; // Error: Assignment to constant variable
console.log(PI); // Outputs 3.14
```

## Hoisting (Interview Question)

- Hoisting in JavaScript is a behavior where variables and function declarations are moved ("hoisted") to the top of their
  containing scope before the code is executed.
- This means that we can use variables and functions before you declare them in the code.
- **Variable and Function** Hoisting are two different types of hoisting.

### Usage Examples:

##### 1. Variable Hoisting

```javascript
console.log(myVar); // Output: undefined
var myVar = 10;
```

##### 2. Function Hoisting

```javascript
greet(); // Output: "Hello, world!"

function greet() {
  console.log("Hello, world!");
}
```

## Scope

- Scope refers to the accessibility of variables, functions, and objects in certain parts of your code.
- It determines where values and expressions are visible or can be referenced.
- There are several types of scope in JavaScript:
  - Global scope
  - Local scope
  - Block scope
  - Function Scope vs. Block Scope (Interview questions)
  - Lexical Scope (Static Scope)
  - Global Object (Interview questions)
- | **Table Comparison** | **Scope Type**                                                               | **Declaration**                                                   | **Accessible Where**                                                                                    | **Example Variable Declaration**                                                 | **Notes** |
  | -------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------- |
  | **Global Scope**     | Variables declared outside any function or block                             | Anywhere in the code, including inside functions                  | `var globalVar = "I'm global!";`                                                                        | Global variables are properties of the `window` object in browsers.              |
  | **Local Scope**      | Variables declared inside a function                                         | Only within the function where they are declared                  | `function myFunc() { var localVar = "I'm local!"; }`                                                    | Local variables cannot be accessed outside the function.                         |
  | **Block Scope**      | Variables declared inside a block (e.g.,`if`, `for`), using `let` or `const` | Only within the block where they are declared                     | `if (true) { let blockVar = "I'm block-scoped!"; }`                                                     | Block-scoped variables are confined to the block they are declared in.           |
  | **Function Scope**   | Variables declared using `var` within a function                             | Accessible throughout the entire function                         | `function myFunc() { var funcScoped = "I'm function-scoped!"; }`                                        | `var` is not block-scoped; it is function-scoped, available across the function. |
  | **Lexical Scope**    | Nested functions within other functions                                      | Inner functions can access variables from their outer functions   | `function outerFunc() { var outerVar = "I'm outer!"; function innerFunc() { console.log(outerVar); } }` | Lexical scope determines how variable names are resolved in nested functions.    |
  | **Global Object**    | Variables declared in the global scope                                       | Anywhere in the code, globally as properties of the global object | `var globalVar = "Hello!"; console.log(window.globalVar);`                                              | In browsers, the global object is the `window` object.                           |

## Coercion

## What is Type Coercion?

Type coercion in JavaScript is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). JavaScript provides both implicit and explicit ways to perform type coercion.

1. [Implicit Coercion](#implicit-coercion)
   - [String Coercion](#string-coercion)
   - [Number Coercion](#number-coercion)
   - [Boolean Coercion](#boolean-coercion)
2. [Explicit Coercion](#explicit-coercion)
   - [`String()`](#string)
   - [`Number()`](#number)
   - [`Boolean()`](#boolean)
   - [`parseInt()`](#parseint)
   - [`parseFloat()`](#parsefloat)
   - [`toString()`](#tostring)
   - [`+` (Unary Plus)](#unary-plus)
   - [`!!` (Double Negation)](#double-negation)

#### Implicit Coercion

Implicit coercion happens automatically when JavaScript tries to perform an operation on mismatched types.

##### String Coercion

When using the `+` operator with a string, JavaScript converts the other operand to a string.

```javascript
const result = "The number is " + 10;
console.log(result); // "The number is 10"
```

**Number Coercion**

- When using mathematical operators (other than +), JavaScript converts strings to numbers.

```javascript
const result = "5" * "2";
console.log(result); // 10
```

**Boolean Coercion**

- Values in conditions are automatically coerced to booleans.

```javascript
const value = "Hello";
if (value) {
  console.log("This is true"); // "This is true"
}
```

### Explicit Coercion

- Explicit coercion is when you explicitly convert a value to another type using JavaScript functions or operators.

**String()**

- Converts a value to a string.

```javascript
const num = 10;
const str = String(num);
console.log(str); // "10"
```

**Number()**

- Converts a value to a number.

```javascript
const str = "123";
const num = Number(str);
console.log(num); // 123
```

**Boolean()**

- Converts a value to a boolean.

```javascript
const str = "Hello";
const bool = Boolean(str);
console.log(bool); // true
```

**parseInt()**

- Parses a string and returns an integer.

```javascript
const str = "10px";
const num = parseInt(str);
console.log(num); // 10
```

**parseFloat()**

- Parses a string and returns a floating-point number.

```javascript
const str = "10.5px";
const num = parseFloat(str);
console.log(num); // 10.5
```

**toString()**

- Converts and returns a string representation of the value.

```javascript
const num = 10;
const str = num.toString();
console.log(str); // "10"
```

**(Unary Plus)**
Converts a value to a number.

```javascript
const str = "123";
const num = +str;
console.log(num); // 123
```

**!! (Double Negation)**

- Converts a value to a boolean.

```javascript
const value = "Hello";
const bool = !!value;
console.log(bool); // true
```

## Logical Operator Return Values

## Equality Operators

## Nullish Coalescing Operator

## String Datatype & String Methods

## Functions

## Closure

## Arrays

## Array forEach Method

## Array map Method

## Array filter Method

## Array find Method

## Array some Method

## Object

## Object values Method

## Object keys Method

## Object entries Method

## Object freeze Method

## Object seal Method

## this Keyword

## A New Keyword

## Prototypes

## Class

## For...in Loop

## Try Catch Statement

## Try Catch Finally

## Understanding Promise

- A Promise contains both the producing code and calls to the consuming code

## Promise Then Method

## Promise Catch Method

## Why We Need Promise?

## List of Methods

1. [`Promise.resolve(value)`](#promiseresolvevalue)
2. [`Promise.reject(reason)`](#promiserejectreason)
3. [`Promise.all(iterable)`](#promisealliterable)
4. [`Promise.race(iterable)`](#promiseraceiterable)
5. [`Promise.any(iterable)`](#promiseanyiterable)
6. [`Promise.allSettled(iterable)`](#promiseallsettlediterable)
7. [`Promise.prototype.then(onFulfilled, onRejected)`](#promiseprototypethenonfulfilled-onrejected)
8. [`Promise.prototype.catch(onRejected)`](#promiseprototypecatchonrejected)
9. [`Promise.prototype.finally(onFinally)`](#promiseprototypefinallyonfinally)

## Method Usages

### `Promise.resolve(value)`

Returns a `Promise` object that is resolved with the given value.

```javascript
const promise = Promise.resolve(42);
promise.then((value) => {
  console.log(value); // 42
});
```

### `Promise.reject(reason)`

Returns a `Promise` object that is rejected with the given reason.

```javascript
const promise = Promise.reject(new Error("Something went wrong!"));
promise.catch((error) => {
  console.error(error); // Error: Something went wrong!
});
```

### `Promise.all(iterable)`

Returns a `Promise` that resolves when all of the promises in the iterable have resolved or rejects if any promise rejects.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
});
```

### `Promise.race(iterable)`

Returns a `Promise` that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // "two" - because it was the fastest
});
```

### `Promise.any(iterable)`

Returns a `Promise` that resolves as soon as any of the promises in the iterable resolves, or rejects if all of the promises reject.

```javascript
const promise1 = Promise.reject(new Error("fail1"));
const promise2 = Promise.reject(new Error("fail2"));
const promise3 = Promise.resolve(42);

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // 42
  })
  .catch((error) => {
    console.error(error); // AggregateError: All promises were rejected
  });
```

### `Promise.allSettled(iterable)`

Returns a `Promise` that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

```javascript
const promise1 = Promise.resolve(42);
const promise2 = Promise.reject(new Error("fail"));
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
  // [
  //   { status: 'fulfilled', value: 42 },
  //   { status: 'rejected', reason: Error: fail },
  //   { status: 'fulfilled', value: 'foo' }
  // ]
});
```

### `Promise.prototype.then(onFulfilled, onRejected)`

Attaches callbacks for the resolution and/or rejection of the Promise.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 300);
});

promise.then((value) => {
  console.log(value); // "foo"
});
```

### `Promise.prototype.catch(onRejected)`

Attaches a callback for only the rejection of the Promise.

```javascript
const promise = new Promise((resolve, reject) => {
  reject(new Error("Oops!"));
});

promise.catch((error) => {
  console.error(error); // Error: Oops!
});
```

### `Promise.prototype.finally(onFinally)`

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected), allowing you to run some code regardless of the outcome.

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("done");
});

promise
  .then((value) => {
    console.log(value); // "done"
  })
  .finally(() => {
    console.log("Promise has been settled.");
  });
```

### Additional Examples

- **Chaining Promises:**

```javascript
const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise
  .then((value) => {
    console.log(value); // 1
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 2
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 3
  });
```

- **Handling Errors in Promises:**

```javascript
const promise = new Promise((resolve, reject) => {
  reject(new Error("Failed"));
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error("Caught:", error.message); // "Caught: Failed"
  });
```

- **Using `async`/`await` with Promises: [refer next topic - Interview Question]**

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");
  await delay(1000);
  console.log("After 1 second");
}

asyncFunction();
```

- **Executing Multiple Promises Sequentially:**

```javascript
function asyncTask(value, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function executeSequentially() {
  const result1 = await asyncTask(1, 1000);
  console.log(result1); // 1

  const result2 = await asyncTask(2, 1000);
  console.log(result2); // 2

  const result3 = await asyncTask(3, 1000);
  console.log(result3); // 3
}

executeSequentially();
```

- **Promise Timeout Example:**

```javascript
function timeoutPromise(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );
  return Promise.race([promise, timeout]);
}

const delayedPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Success"), 5000)
);

timeoutPromise(delayedPromise, 2000)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error.message); // "Timeout"
  });
```

## Async / Await

## JavaScript DOM [Basic - Interview Question]

### Table of Contents

1. [Getting Element by Id](#getting-element-by-id)
2. [Getting Element by Name](#getting-element-by-name)
3. [Getting Elements by Class Name](#getting-elements-by-class-name)
4. [Getting Elements by Tag Name](#getting-elements-by-tag-name)
5. [Getting Child Elements](#getting-child-elements)
6. [Getting Parent Element](#getting-parent-element)
7. [Create Element](#create-element)
8. [Remove Element](#remove-element)
9. [Get Attribute of Element](#get-attribute-of-element)
10. [Create or Update Attribute](#create-or-update-attribute)
11. [Types of Event Handlers](#types-of-event-handlers)
12. [Handling Mouse Events](#handling-mouse-events)
13. [Handling Keyboard Events](#handling-keyboard-events)

## Getting Element by Id

The `getElementById()` method is used to access an HTML element by its unique `id` attribute.

### Example:

```javascript
const element = document.getElementById("myElementId");
console.log(element);
```

This will retrieve the element with the `id` of `myElementId` and allow you to manipulate it.

## Getting Element by Name

The `getElementsByName()` method returns a NodeList of all elements with a given `name` attribute.

### Example:

```javascript
const elements = document.getElementsByName("myElementName");
elements.forEach((element) => console.log(element));
```

This retrieves all elements with the `name` of `myElementName`.

## Getting Elements by Class Name

The `getElementsByClassName()` method returns a collection of elements with a specified class name.

### Example:

```javascript
const elements = document.getElementsByClassName("myClassName");
Array.from(elements).forEach((element) => console.log(element));
```

This retrieves all elements with the class name `myClassName`.

## Getting Elements by Tag Name

The `getElementsByTagName()` method returns a live HTMLCollection of elements with a given tag name.

### Example:

```javascript
const elements = document.getElementsByTagName("div");
Array.from(elements).forEach((element) => console.log(element));
```

This retrieves all `<div>` elements in the document.

## Getting Child Elements

The `children` property returns a live HTMLCollection of the child elements of a specified element.

### Example:

```javascript
const parentElement = document.getElementById("parent");
const childElements = parentElement.children;
Array.from(childElements).forEach((child) => console.log(child));
```

This retrieves all child elements of the element with `id` `parent`.

## Getting Parent Element

The `parentElement` property returns the parent element of a specified element.

### Example:

```javascript
const childElement = document.getElementById("child");
const parentElement = childElement.parentElement;
console.log(parentElement);
```

This retrieves the parent element of the element with `id` `child`.

## Create Element

The `createElement()` method creates an HTML element specified by tag name.

### Example:

```javascript
const newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
document.body.appendChild(newElement);
```

This creates a new `<div>` element with the text "Hello, World!" and appends it to the body.

## Remove Element

The `remove()` method removes the specified element from the DOM.

### Example:

```javascript
const elementToRemove = document.getElementById("myElement");
elementToRemove.remove();
```

This removes the element with `id` `myElement` from the DOM.

## Get Attribute of Element

The `getAttribute()` method returns the value of a specified attribute on an element.

### Example:

```javascript
const element = document.getElementById("myElement");
const attributeValue = element.getAttribute("data-value");
console.log(attributeValue);
```

This retrieves the value of the `data-value` attribute on the element with `id` `myElement`.

## Create or Update Attribute

The `setAttribute()` method adds a new attribute or changes the value of an existing attribute on an element.

### Example:

```javascript
const element = document.getElementById("myElement");
element.setAttribute("data-value", "newValue");
```

This sets the `data-value` attribute to `newValue` on the element with `id` `myElement`.

## Types of Event Handlers

Event handlers can be added to HTML elements to respond to user interactions. There are three common ways to add event handlers:

1. **Inline Event Handlers:** Specified directly within the HTML element.

   ```html
   <button onclick="alert('Button Clicked!')">Click Me</button>
   ```

2. **Property Event Handlers:** Assigned as properties of DOM elements.

   ```javascript
   const button = document.getElementById("myButton");
   button.onclick = () => alert("Button Clicked!");
   ```

3. **Event Listener Method:** Using `addEventListener()` to register an event handler.
   ```javascript
   const button = document.getElementById("myButton");
   button.addEventListener("click", () => alert("Button Clicked!"));
   ```

## Handling Mouse Events

Mouse events are fired when the user interacts with the mouse, such as clicking or moving the cursor.

### Common Mouse Events:

- `click`: Fired when the user clicks on an element.
- `dblclick`: Fired when the user double-clicks on an element.
- `mouseover`: Fired when the user moves the mouse over an element.
- `mouseout`: Fired when the user moves the mouse out of an element.

### Example:

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", () => alert("Button Clicked!"));
```

## Handling Keyboard Events

Keyboard events are fired when the user interacts with the keyboard, such as pressing a key.

### Common Keyboard Events:

- `keydown`: Fired when a key is pressed.
- `keyup`: Fired when a key is released.
- `keypress`: Fired when a key that produces a character value is pressed down.

### Example:

```javascript
document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});
```

This logs the key that was pressed.
