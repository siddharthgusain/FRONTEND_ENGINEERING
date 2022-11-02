function outerMost(){
    var outerMostVar = 1000;
    function inner(){
        var innerVar = 7;

        function innerMost(){
            console.log(innerVar , outerMostVar);
        }

        innerMost();
    }
    inner();
}

outerMost();
