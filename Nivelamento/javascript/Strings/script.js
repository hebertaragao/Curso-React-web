/*
console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crase`);

console.log("Concatenação e interpolação:")

console.log("O valor do produto é: " + num)
console.log(`O valor do produto é ${num}` )
*/

const num = 14.5;
console.log("Conversão entre number e string");

const str1 = num.toString();
console.log(`Tipo de ${str1}: ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`Tipo de ${str2}: ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${num1}`);

const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2}: ${num2}`);

const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${num3}`)

const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${num4}`)

