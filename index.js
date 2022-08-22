function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
    function havereturn ( c) {
        return `${c} is here`
    }
} 

function returnsAnAnonymousFunction (){
return function (m) {
    consolesss.log("m")
}
}