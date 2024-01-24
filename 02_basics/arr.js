const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash" , "batman"]

// marvelHeros.push(dcHeors)

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);


// let arr = marvelHeros.concat(dcHeors) ;
// console.log(arr);

// Spread Operator

// const allheros = [...marvelHeros, ...dcHeros]

// console.log(allheros);

const anotherArray = [ 1, 2, 3, [4, 5, 6], [6, 7,[8, 9]]]

const realArray = [anotherArray.flat(2)]

console.log(realArray);


console.log(Array.isArray("rohit"));

console.log(Array.from("rohit"));


console.log(Array.from({name : "rohit"})); //intersting case 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3 ));