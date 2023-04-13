var f =function() { // function은 값임
    console.log("함수는 값이다");
    console.log("변수는 물론, 배열과 객체에도 넣을 수 있다.");
}

// var i = if(ture{console.log(1)}) // if문은 값이 아님.

// var 2 = while(true){console.log(1)}; // while문은 값이 아님.

console.log(f);
f();

var a = [f]; // 배열의 원소로 함수가 들어감.
a[0]();

var o = {
    func:f
}
o.func();