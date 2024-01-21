// primitive data type 

// string,number,bigInt,boolean,null,undefined,Symbol



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 545486415148145378154871n ;


// Non primitive(reference)

// Array , Objects , Functions
const heros = ["shaktiman" ,'naagraj'] 


const myObj = {
    age : 20 ,
    name : "rohit"


}
const myFunction = function(){
    console.log("hello , rohit ");
} 

console.log(typeof heros);

// 