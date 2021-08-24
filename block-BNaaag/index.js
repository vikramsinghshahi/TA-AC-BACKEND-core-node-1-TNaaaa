var { readFile, readFileSync } = require('fs');

readFile('./content.md', 'utf8', (err, content) => {
  console.log(content);
});

var result = readFileSync('./content.md', 'utf8');

console.log(result);

var buf1 = Buffer.alloc(10);

buf1.write('welcome to buffer');

console.log(buf1);
