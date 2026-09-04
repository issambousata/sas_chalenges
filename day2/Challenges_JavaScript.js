
//----------------  1 -----

function afficherPairs(n) {

    for(let i=1 ; i<=n ; i++){

        if(i % 2 == 0){

            console.log(i);
        }

    }
}

afficherPairs(13);


//---------------- 2 ----------

function compterPairs(nbr1, nbr2) {

    let count = 0 ;

    for(let j=nbr1 ; j<=nbr2 ; j++){

        let result = nbr1 + nbr2 + j ;

        if(result % 2 == 0){

            count ++ ;
        }

    }

    return `le nombre des resultas pairs est ${count}` ;
}

console.log(compterPairs(1 , 7));


// ---------  3  ------

function construireTriangle(taille) {
    let line = "" ;
    for(let x=0 ; x<=taille ; x++){
        

        line += " " + x 
        console.log(line);
        
    }
}
construireTriangle(4)


// ---------  4  ------

function calculer(nbr1, nbr2, callback) {

    return callback(nbr1 , nbr2) ;
}

function addition(a , b){
    return a + b ;
}

function multiple(a , b){
    return a * b ;
}

console.log( calculer(6 , 8 , addition ));

console.log( calculer(6 , 8 , multiple ));

// ---------------------

let result1 = calculer( 8 , 5 , function(a , b){
    return   a ** b ;
})

console.log(result1);


let result2 = calculer( 6 , 7 , (a , b)=>{
    return a / b ;
})

console.log( result2);

