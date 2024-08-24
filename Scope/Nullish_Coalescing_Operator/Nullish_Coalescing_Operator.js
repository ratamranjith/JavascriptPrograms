// Basic
let user = null;
let defaultName = "Guest";
let name = user ?? defaultName;
console.log(name); // Output: "Guest" (because user is null)

//Undefined
let userName;
let defaultUserName = "Anonymous";
let finalUserName = userName ?? defaultUserName;
console.log(finalUserName); // Output: "Anonymous" (because userName is undefined)

//null
let settings = {
  theme: null,
};
let defaultTheme = "light";
let theme = settings.theme ?? defaultTheme;
console.log(theme); // Output: "light" (because settings.theme is null)

// Comparison with logical OR
let count = 0;
let defaultCount = 10;
let finalCount = count || defaultCount;
console.log(finalCount); // Output: 10 (because count is falsy)

let countWithNullish = 0;
let finalCountWithNullish = countWithNullish ?? defaultCount;
console.log(finalCountWithNullish); // Output: 0 (because countWithNullish is neither null nor undefined)

// Function Parameters
function greet(name) {
  let finalName = name ?? "Stranger";
  console.log(`Hello, ${finalName}!`);
}

greet("Alice"); // Output: "Hello, Alice!"
greet(); // Output: "Hello, Stranger!" (because name is undefined)

// With Objects
let config = {
  retries: 0,
};
let maxRetries = config.retries ?? 3;
console.log(maxRetries); // Output: 0 (because config.retries is neither null nor undefined)
