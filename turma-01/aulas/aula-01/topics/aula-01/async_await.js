/*
O que é Async/Await?

Imagine estar numa biblioteca. Você pede um livro ao bibliotecário e, em vez de ficar parado esperando, 
você decide ler outra coisa enquanto aguarda. 
Quando o bibliotecário volta com o livro que você pediu, 
você interrompe o que está fazendo e lê o livro solicitado. 
Em JavaScript, essa espera sem bloqueio é semelhante ao conceito de async/await.

Como funciona?

Async: Transforma uma função em uma função assíncrona, fazendo-a retornar uma Promise.

Await: Pausa a execução da função assíncrona até que a Promise seja resolvida.
*/


async function getAddressByCep(cep)
{
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    let data = await response.json()
    console.log(data)
}

getAddressByCep('52191175')