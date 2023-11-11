/*
O que é uma Promise?

Imagine que você encomendou uma pizza. 
Em vez de ficar esperando olhando para o forno, você recebe um dispositivo que bipa quando a pizza está pronta. 
Enquanto isso, você pode fazer outras coisas. 
A pizza pode estar pronta corretamente (sucesso) ou queimar (erro). 
Quando um desses eventos ocorre, o dispositivo informa você. 
Em JavaScript, essa ideia é semelhante a uma Promise.

Como funciona?

Uma Promise representa um valor que pode não estar disponível agora, 
mas estará em algum momento no futuro. 
Ela pode terminar com sucesso (resolvida) ou com um erro (rejeitada).

A estrutura básica de uma Promise é:
*/

const myPromise = new Promise((resolve, reject) => {
    // Alguma operação assíncrona
    if (/* tudo funcionou */ true) {
        resolve('Sucesso!');
    } else {
        reject('Erro!');
    }
});