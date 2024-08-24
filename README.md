# Javascript Interview Question and Programs

## JavaScript Topics - Simplified

1. [Introduction](#introduction)
2. [Variables](#variables)
3. [Hosting](#hosting)
4. [Scope](#scope)
5. [Variable Keyword Scope](#variable-keyword-scope)
6. [Coercion](#coercion)
7. [Logical Operator Return Values](#logical-operator-return-values)
8. [Equality Operators](#equality-operators)
9. [Nullish Coalescing Operator](#nullish-coalescing-operator)
10. [String Datatype &amp; String Methods](#string-datatype--string-methods)
11. [Functions](#functions)
12. [Closure](#closure)
13. [Arrays](#arrays)
14. [Array forEach Method](#array-foreach-method)
15. [Array map Method](#array-map-method)
16. [Array filter Method](#array-filter-method)
17. [Array find Method](#array-find-method)
18. [Array some Method](#array-some-method)
19. [Object](#object)
20. [Object values Method](#object-values-method)
21. [Object keys Method](#object-keys-method)
22. [Object entries Method](#object-entries-method)
23. [Object freeze Method](#object-freeze-method)
24. [Object seal Method](#object-seal-method)
25. [this Keyword](#this-keyword)
26. [A New Keyword](#a-new-keyword)
27. [Prototypes](#prototypes)
28. [Class](#class)
29. [For...in Loop](#forin-loop)
30. [Try Catch Statement](#try-catch-statement)
31. [Try Catch Finally](#try-catch-finally)
32. [Understanding Promise](#understanding-promise)
33. [Promise Then Method](#promise-then-method)
34. [Promise Catch Method](#promise-catch-method)
35. [Why We Need Promise?](#why-we-need-promise)
36. [Async / Await](#async--await)
37. [JavaScript DOM](#javascript-dom)
38. [Getting Element by Id](#getting-element-by-id)
39. [Getting Element by Name](#getting-element-by-name)
40. [Getting Elements by Class Name](#getting-elements-by-class-name)
41. [Getting Elements by Tag Name](#getting-elements-by-tag-name)
42. [Getting Child Elements](#getting-child-elements)
43. [Getting Parent Element](#getting-parent-element)
44. [Create Element](#create-element)
45. [Remove Element](#remove-element)
46. [Get Attribute of Element](#get-attribute-of-element)
47. [Create or Update Attribute](#create-or-update-attribute)
48. [Types of Event Handlers](#types-of-event-handlers)
49. [Handling Mouse Events](#handling-mouse-events)
50. [Handling Keyboard Events](#handling-keyboard-events)

## Introduction

- JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive

## History

- **Netscape Communications** hired **Brendan Eich** to develop Javascript

  - Mocha [Initial release]
  - LiveScript[Renamed]
  - Javascript[Finally]

## Variables

| Feature                          | `var`                                                                            | `let`                                                                                            | `const`                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Scope**                  | Function scope                                                                     | Block scope                                                                                        | Block scope                                                                                        |
| **Hoisting**               | Hoisted to the top of the function or global scope; initialized with `undefined` | Hoisted to the top of the block but not initialized; ReferenceError if accessed before declaration | Hoisted to the top of the block but not initialized; ReferenceError if accessed before declaration |
| **Re-declaration**         | Allowed within the same scope                                                      | Not allowed within the same block                                                                  | Not allowed within the same block                                                                  |
| **Re-assignment**          | Allowed                                                                            | Allowed                                                                                            | Not allowed                                                                                        |
| **Block Scope Example**    | `if (true) { var x = 1; } console.log(x); // Outputs 1`                          | `if (true) { let x = 1; } console.log(x); // ReferenceError`                                     | `if (true) { const x = 1; } console.log(x); // ReferenceError`                                   |
| **Global Object Property** | Creates a property on the global object (e.g.,`window` in browsers)              | Does not create a property on the global object                                                    | Does not create a property on the global object                                                    |

## Hosting

## Scope

## Variable Keyword Scope

## Coercion

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
