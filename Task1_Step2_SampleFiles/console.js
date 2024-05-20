// Console is a module in Node.js that provides a simplified debugging console, that is similar to the JavaScript console found within web browsers. There are a number of methods that are available within the console module. The most commonly used methods are log(), error(), and warn(), but also dir(),  The console module is useful for debugging and logging information to the console.



console.log('This is a log message'); // This will output the message "This is a log message" to the console.

console.error('This is an error message'); // this will print the string "This is an error message" to the console(terminal or command prompt)

const obj = { a: 1, b: 2, c: { d: 3 } }; // declaring a JS object named obj
console.dir(obj, { depth: null }); // prints: { a: 1, b: 2, c: { d: 3 } } - printing a JSON like structure of the object obj.

console.time('100-elements'); // starts a timer with a name of '100-elements'
for (let i = 0; i < 100; i++) {} // loopw through 100 times
console.timeEnd('100-elements'); // stops the timer and prints the elapsed time to the console