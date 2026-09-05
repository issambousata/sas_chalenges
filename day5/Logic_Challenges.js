//  Challenge 1 — Count Even and Odd Numbers

let numbers = [4, 2,7, 2, 9, 10, 13 , 9];
let even = 0 ;
let odd = 0 ;

for(let i=0 ; i<numbers.length ; i++){
    if(numbers[i] % 2 === 0) even ++ ;
}
odd = numbers.length - even ;
console.log("even : " , even);
console.log("odd : " , odd);


// Challenge 2 — Find the Largest Number
function getmax(arr){
    let max = arr.length 
    for(let i=1 ; i<arr.length ; i++){
        if(max < arr[i]) max = arr[i]
    }
    return max ;
}
console.log(getmax([7,3,4,5,3,98,4,3,83]));


//  Challenge 3 — Count a Character Inside a String

function countCharactor(str , char){
    let count = 0 
    for(let i=0 ; i<str.length ; i++){
        if(char === str[i]) count ++
    }
    return count 
}
console.log(countCharactor("hello every body","o"));


//  Challenge 4 — Reverse a String Manually

function reverse(str){
    let newstr = "" ;
    for(let i=str.length-1 ; 0<=i ; i--){
        newstr += str[i]
    }
    return newstr
}
console.log(reverse("hello"));



// Challenge 5 — Count Vowels

function countVowels(str){
    let count = 0
    for(let i=0 ; i<str.length ; i++){
        if(str[i]== "a" || str[i]== "o" || str[i]== "u" || str[i]== "i" || str[i]== "e") count ++ 
    }
    return count 
}
console.log(countVowels("bonjour"));



// Challenge 6 — Detect a Palindrome

function Palindrome(str){
    let ispalindrome = true ;
    for(let i=1 ; i<str.length ; i++){
        if(str[i-1] !== str[str.length - i]) ispalindrome = false 
    }
    return ispalindrome
}
console.log(Palindrome("massam"));
