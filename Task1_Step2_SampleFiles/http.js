// HTTP standas for Hyper Text Transfer Protocol
// the http module in Node.js allows for the transfer of data over HTTP. It provides a way to interact with web servers and make requests to them. The http module is a core module in Node.js, so it is included with the installation of Node.js and does not need to be installed separately.

const http = require('http'); // importing the http module(built in)

const options = { // defining an options object
  hostname: 'www.google.com', // domaine name/ip address of the server
  port: 80, // port number of the server
  path: '/', // path of the request
  method: 'GET' // method of the request
};

const req = http.request(options, (res) => { // method used to send a HTTP request to a server
  res.on('data', (chunk) => { // event listener for the 'data' event
    console.log(`BODY: ${chunk}`); // loggs the chunk of response  body
  });
});

req.on('error', (e) => { // event listener for the 'error' event
  console.error(`problem with request: ${e.message}`); // logs the error message
});

req.end(); // ends the request