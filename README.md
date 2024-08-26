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
37. [Getting Element by Id](#getting-element-by-id)
38. [Getting Element by Name](#getting-element-by-name)
39. [Getting Elements by Class Name](#getting-elements-by-class-name)
40. [Getting Elements by Tag Name](#getting-elements-by-tag-name)
41. [Getting Child Elements](#getting-child-elements)
42. [Getting Parent Element](#getting-parent-element)
43. [Create Element](#create-element)
44. [Remove Element](#remove-element)
45. [Get Attribute of Element](#get-attribute-of-element)
46. [Create or Update Attribute](#create-or-update-attribute)
47. [Types of Event Handlers](#types-of-event-handlers)
48. [Handling Mouse Events](#handling-mouse-events)
49. [Handling Keyboard Events](#handling-keyboard-events)

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
- **Table Comparison**
  | **Scope Type** | **Declaration** | **Accessible Where** | **Example Variable Declaration** | **Notes** |
  |----------------------|-----------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------|
  | **Global Scope** | Variables declared outside any function or block | Anywhere in the code, including inside functions | `var globalVar = "I'm global!";` | Global variables are properties of the `window` object in browsers. |
  | **Local Scope** | Variables declared inside a function | Only within the function where they are declared | `function myFunc() { var localVar = "I'm local!"; }` | Local variables cannot be accessed outside the function. |
  | **Block Scope** | Variables declared inside a block (e.g., `if`, `for`), using `let` or `const` | Only within the block where they are declared | `if (true) { let blockVar = "I'm block-scoped!"; }` | Block-scoped variables are confined to the block they are declared in. |
  | **Function Scope** | Variables declared using `var` within a function | Accessible throughout the entire function | `function myFunc() { var funcScoped = "I'm function-scoped!"; }` | `var` is not block-scoped; it is function-scoped, available across the function. |
  | **Lexical Scope** | Nested functions within other functions | Inner functions can access variables from their outer functions | `function outerFunc() { var outerVar = "I'm outer!"; function innerFunc() { console.log(outerVar); } }` | Lexical scope determines how variable names are resolved in nested functions. |
  | **Global Object** | Variables declared in the global scope | Anywhere in the code, globally as properties of the global object | `var globalVar = "Hello!"; console.log(window.globalVar);` | In browsers, the global object is the `window` object. |

## Coercion

## What is Type Coercion?

Type coercion in JavaScript is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). JavaScript provides both implicit and explicit ways to perform type coercion.

## Table of Contents

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

String()
Converts a value to a string.

```javascript
const num = 10;
const str = String(num);
console.log(str); // "10"

Number()
Converts a value to a number.
const str = "123";
const num = Number(str);
console.log(num); // 123
Boolean()
Converts a value to a boolean.

javascript

const str = "Hello";
const bool = Boolean(str);
console.log(bool); // true
parseInt()
Parses a string and returns an integer.

javascript

const str = "10px";
const num = parseInt(str);
console.log(num); // 10
parseFloat()
Parses a string and returns a floating-point number.

javascript

const str = "10.5px";
const num = parseFloat(str);
console.log(num); // 10.5
toString()
Converts and returns a string representation of the value.

javascript

const num = 10;
const str = num.toString();
console.log(str); // "10"

- (Unary Plus)
  Converts a value to a number.

javascript

const str = "123";
const num = +str;
console.log(num); // 123
!! (Double Negation)
Converts a value to a boolean.

javascript

const value = "Hello";
const bool = !!value;
console.log(bool); // true

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

## Promise Then Method

## Promise Catch Method

## Why We Need Promise?

## Async / Await

## JavaScript DOM

## Getting Element by Id

## Getting Element by Name

## Getting Elements by Class Name

## Getting Elements by Tag Name

## Getting Child Elements

## Getting Parent Element

## Create Element

## Remove Element

## Get Attribute of Element

## Create or Update Attribute

## Types of Event Handlers

## Handling Mouse Events

## Handling Keyboard Events

```

```

```
