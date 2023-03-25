const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/folder/first.txt','utf8');
const second = readFileSync('./content/folder/second.txt','utf8');

const write = writeFileSync('./content/folder/wrt.txt', `${first}, ${second}`,{flag:'a'});

console.log(first,second);