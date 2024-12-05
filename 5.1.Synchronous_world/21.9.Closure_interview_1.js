function layer1() {
    let layer_1_variable = 20;

    function layer2(param) {

        let layer_2_variable = 10;

        function layer3() {
            console.log(layer_1_variable, layer_2_variable, param); // parameter is also same as local variables so closure is formed 
        }

        return layer3;
    }

    return layer2;
}

let layer_1_variable = 200;

layer1()("hello")();

// Use devtools to see the closure behaviour , its interesting and easy to understand