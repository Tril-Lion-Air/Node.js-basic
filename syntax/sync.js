var fs = require('fs');

// //readFileSync
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C');

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');

// callback: readFile 기능을 수행한 후 callback 함수를 통해 동작이 모두 끝났음을 알려줘