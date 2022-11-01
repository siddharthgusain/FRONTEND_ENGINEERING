
function a(){

    var d = 11;
    var e = 12;
    c();

    function c(){
        console.log(b);
        console.log(d);
        console.log(e);
    }

}

var b = 10;
a();

// console.log(d);