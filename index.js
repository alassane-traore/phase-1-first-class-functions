function receivesAFunction (ab) {
    console.log ( ab ) 
}
(receivesAFunction(function(){ 
    console.log ('your complet name here!')
}))

function returnsANamedFunction(){
    function havereturn ( c) {
        return `${c} is here`
    }
} 

function returnsAnAnonymousFunction (){
return function (m) {
    console.log("m")
}
}