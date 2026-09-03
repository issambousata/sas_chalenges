
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
