// Events are core concepts of Node,js and are used to signal that something has occured in the application. The event module in Node.js provides a way to handle events in a clean and efficient way. A built in module in Node.js, where we cane create-, fire- and listen for, events.

const EventEmitter = require('events'); // importing the events module from Node.js

class MyEmitter extends EventEmitter {} //

const myEmitter = new MyEmitter(); //

myEmitter.on('event', () => { // event listener for the 'event' event
  console.log('Look! An event occurred!'); // 
});

myEmitter.emit('event'); // emits the 'event' event