# JavaScript String Methods

This document provides a list of commonly used JavaScript string methods along with examples of how to use them.

## List of Methods

1. [`charAt(index)`](#charatindex)
2. [`charCodeAt(index)`](#charcodeatindex)
3. [`concat(...strings)`](#concatstrings)
4. [`includes(searchString, position)`](#includessearchstring-position)
5. [`indexOf(searchValue, fromIndex)`](#indexofsearchvalue-fromindex)
6. [`lastIndexOf(searchValue, fromIndex)`](#lastindexofsearchvalue-fromindex)
7. [`match(regexp)`](#matchregexp)
8. [`repeat(count)`](#repeatcount)
9. [`replace(searchValue, newValue)`](#replaceseachvalue-newvalue)
10. [`slice(beginIndex, endIndex)`](#slicebeginindex-endindex)
11. [`split(separator, limit)`](#splitseparator-limit)
12. [`substring(indexStart, indexEnd)`](#substringindexstart-indexend)
13. [`toLowerCase()`](#tolowercase)
14. [`toUpperCase()`](#touppercase)
15. [`trim()`](#trim)
16. [`startsWith(searchString, position)`](#startswithsearchstring-position)
17. [`endsWith(searchString, length)`](#endswithsearchstring-length)
18. [`padStart(targetLength, padString)`](#padstarttargetlength-padstring)
19. [`padEnd(targetLength, padString)`](#padendtargetlength-padstring)
20. [`fromCharCode(...codes)`](#fromcharcodecodes)
21. [`at(index)`](#atindex)
22. [`codePointAt(index)`](#codepointatindex)
23. [`normalize(form)`](#normalizeform)
24. [`trimStart()` or `trimLeft()`](#trimstart-or-trimleft)
25. [`trimEnd()` or `trimRight()`](#trimend-or-trimright)

## Method Usages

- **charAt(index)**

```javascript
const str = "Hello";
console.log(str.charAt(1)); // 'e'
```

- **charCodeAt(index)**

```javascript
  \\Returns the Unicode of the character at the specified index.
  const str = "Hello";
  console.log(str.charCodeAt(1)); // 101
```

- **concat(...strings)**

```javascript
  \\Combines two or more strings.
  const str1 = "Hello";
  const str2 = "World";
  console.log(str1.concat(" ", str2)); // "Hello World"
```

- **includes(searchString, position)**

```javascript
  \\Checks if a string contains a specified value.
  const str = "Hello World";
  console.log(str.includes("World")); // true
```

- **indexOf(searchValue, fromIndex)**

```javascript
  \\Returns the index of the first occurrence of a specified value.
  const str = "Hello World";
  console.log(str.indexOf("World")); // 6
```

- **lastIndexOf(searchValue, fromIndex)**

```javascript
  \\Returns the index of the last occurrence of a specified value.
  const str = "Hello World Hello";
  console.log(str.lastIndexOf("Hello")); // 12
```

- **match(regexp)**

```javascript
  \\Executes a search for a match between a regular expression and the string.
  const str = "The quick brown fox";
  const result = str.match(/quick/);
  console.log(result[0]); // "quick"
```

- **repeat(count)**

```javascript
  \\Returns a new string with a specified number of copies of the original string.
  const str = "Hello";
  console.log(str.repeat(3)); // "HelloHelloHello"
```

- **replace(searchValue, newValue)**

```javascript
  \\Replaces the first occurrence of a specified value with a new value.
  const str = "Hello World";
  console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"
```

- **slice(beginIndex, endIndex)**

```javascript
  \\Extracts a section of a string and returns it as a new string.
  const str = "Hello World";
  console.log(str.slice(0, 5)); // "Hello"
```

- **split(separator, limit)**

```javascript
  \\Splits a string into an array of substrings.
  const str = "Hello World";
  console.log(str.split(" ")); // ["Hello", "World"]
```

- **substring(indexStart, indexEnd)**

```javascript
  \\Returns a new string containing the characters between two indices.
  const str = "Hello World";
  console.log(str.substring(0, 5)); // "Hello"
```

- **toLowerCase()**

```javascript
  \\Returns the string converted to lowercase.
  const str = "Hello World";
  console.log(str.toLowerCase()); // "hello world"
```

- **toUpperCase()**

```javascript
  \\Returns the string converted to uppercase.
  const str = "Hello World";
  console.log(str.toUpperCase()); // "HELLO WORLD"
```

- **trim()**

```javascript
  \\Removes whitespace from both ends of a string.
  const str = " Hello World ";
  console.log(str.trim()); // "Hello World"
```

- **startsWith(searchString, position)**

```javascript
  \\Checks if a string starts with a specified value.
  const str = "Hello World";
  console.log(str.startsWith("Hello")); // true
```

- **endsWith(searchString, length)**

```javascript
  \\Checks if a string ends with a specified value.
  const str = "Hello World";
  console.log(str.endsWith("World")); // true
```

- **padStart(targetLength, padString)**

```javascript
  \\Pads the current string with another string until the resulting string reaches the given length.
  const str = "5";
  console.log(str.padStart(4, "0")); // "0005"
```

- **padEnd(targetLength, padString)**

```javascript
  \\Pads the current string with another string until the resulting string reaches the given length.
  const str = "5";
  console.log(str.padEnd(4, "0")); // "5000"
```

- **fromCharCode(...codes)**

```javascript
  \\Converts Unicode values to characters.
  console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
```

- **at(index)**

```javascript
  \\Returns the character at a specified index, allowing for negative values.
  const str = "Hello";
  console.log(str.at(-1)); // "o"
```

- **codePointAt(index)**

```javascript
  \\Returns a non-negative integer that is the Unicode code point value of the character at the specified index.
  const str = "Hello";
  console.log(str.codePointAt(0)); // 72
```

- **normalize(form)**

```javascript
  \\Returns the Unicode Normalization Form of the string.
  const str = "e\u0301";
  console.log(str.normalize("NFC")); // "é"
  [trimStart() or trimLeft()]

```
