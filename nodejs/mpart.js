var M = {
    v:'v',
    f:function() {
        console.log(this.v);
    }
}

module.exports = M; //현재 파일(mpart.js)에 있는 것 중, M 객체를 바깥에서도 쓸 수 있도록 exports 한다.