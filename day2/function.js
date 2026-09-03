

// """""""""" Functions exexercices """"""""

//---------  1  ------------
function SayHello(){
    console.log("Hello");
    
}
// SayHello();


//---------  2  ------------
function myName(name){
    return "my name is " + name ;
}
console.log(  myName("issam") );


//---------  3  ------------
function somme(a , b){
    return a + b ;
}
let result = somme( 87 , 21) ;
console.log(result);


//---------  3  ------------
function isPair( c ){
    if(c % 2 == 0) return c + " est pair " ;
    return c + " est impair" ;
}

console.log(isPair(7979));


//---------  4  ------------
function maxNumber(d , e , f){
    if(d < e){
        if(e < f) return f + " est max" ;
        
        else return e + " est max" ; 
    }
    else{
        if(d < f) return f + " est max" ;

        else return d + " est max" ;
    }
}
console.log( maxNumber(883 , 388 , 945));


//---------  5  ------------
function Factorial(n){
    let SF = 1 ;
    let F = "";
    for(let i=1 ; i<=n ; i++){
        SF *= i
        F += ` ${i} *` ;
        
    }
    // console.log(F);
    return `${F} = ${SF}` ;
}
console.log( Factorial(9) );


//---------  6  ------------
