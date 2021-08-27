var area = require('./area');

console.log(area.square(5));

var buffer1 = Buffer.alloc(10);
var buffer2 = Buffer.allocUnsafe(20);

buffer1.write('hello world');
console.log(buffer1.toString());

var { readFile } = require('fs');
