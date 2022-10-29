function a() {

    // here var is same for each set timeout
    for(var i = 0 ; i < 5 ; i++){
        window.setTimeout(function() {
            console.log("a "+ i);
        },i*1000);
    }
    // here each callback is pointing to same memory location of "i"
    console.log("I am inside a")
}

function b() {

    // let is block scope , so i is different variable at each loop iteration
    for(let i = 0 ; i < 5 ; i++){
        window.setTimeout(function() {
            console.log("b " + i);
        },(i+5)*1000);
    }
    // callback function  has closure with "i" i.e pointer to "i" but each i is different
    console.log("I am inside b")
}

a();
b();

function c() {

    
        for(var i = 0 ; i < 5 ; i++){

            function close(new_i){
                window.setTimeout(function() {
                    console.log("c " + new_i);
                },(i+10)*1000);
            }
            close(i);
        }
    // callback function  has closure with "i" i.e pointer to "i" but each i is different
    console.log("I am inside c")
}

c();