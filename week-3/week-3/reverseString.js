//Function that reverse a string 
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString('Hana Debay'));


//Function that print/output
function printElements(start,end){
    for(let i = start -1; i <= end; i++){
        console.log(i)
    }
}
printElements(1,10)