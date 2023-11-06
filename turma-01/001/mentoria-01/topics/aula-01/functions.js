/**
 * Uma função é um bloco de código projetado para realizar uma tarefa específica. 
 * E uma função é executada quando é chamada (invocada). 
 * 
 */

/*function sum(number1, number2) {
    return number1 + number2;
}*/

function sumAll(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}

function sum(numbers, callback) {
    return callback(numbers);
}

let number = sum([1, 2, 6], sumAll);

console.log(number);