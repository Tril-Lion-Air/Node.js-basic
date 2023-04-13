var members = ['trilly', 'k8805', 'hoya']; // 배열: 리터럴이 대괄호
console.log(members[1]);

var i = 0;
while(i < members.length) {
    console.log('array', members[i]);
    i++;
}

var roles = {  // 객체: 리터럴이 중괄호
    'programmer' : 'trilly',
    'designer' : 'k8805',
    'manager' : 'hoya'
}

console.log(roles.designer);
console.log(roles['designer']);

for(var n in roles) {
    console.log('object', n, ':', roles[n]);
}