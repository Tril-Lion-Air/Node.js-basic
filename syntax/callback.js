// function a() {
//     console.log('A');
// }

var a = function() { // 함수를 변수에 저장할 수 있다.
    console.log('A');
}
// a();

function slowfunc(callback) {
    callback();
}

slowfunc(a); // callback 이라는 매개변수에 a함수가 인자로 들어갔다.