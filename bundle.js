'use strict';

// src/node_modules/foo.js
var foo = 'hello world!';

// src/main.js
function main () {
  console.log(foo);
}

module.exports = main;
