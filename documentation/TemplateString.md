# Template string
A template string are used in JS whenever we need to create strings that incorporate variables, expressions or complex formatting.

## 1. Insert variables into strings
Template strings simplify string creation by allowing variables and expressions directly within the string without using + for concatenation.

```
const userName = "Alice";
const greeting = `Hello, ${userName}!`;
```
```
const user = { name:"Alice", age:30 };
console.log(`User Info: Name - ${user.name}, Age - ${user.age});