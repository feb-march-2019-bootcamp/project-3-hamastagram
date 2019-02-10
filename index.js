var str = "aba";

let strClean = str.replace(/[^a-zA-Z ]/g, "");

strClean = strClean.replace(/\s/g, '')
// console.log(strClean);


if( strClean == strClean.split('').reverse().join('')){
    console.log(strClean +" is palindrome");
}
else console.log(strClean + " not palindrome");