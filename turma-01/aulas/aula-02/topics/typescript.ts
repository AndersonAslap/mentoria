/**
 * 
 * O que é?
 * Definição: TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é um superset do JavaScript. 
 * Ele adiciona tipagem estática e alguns recursos que ainda não estão presentes no JavaScript.
 * 
 * Para que serve?
 * Objetivo: TypeScript é projetado para desenvolver aplicações JavaScript grandes de forma mais fácil. 
 * A tipagem estática ajuda a evitar muitos tipos de erros em tempo de compilação, tornando o código mais robusto e manutenível.
 * 
 */

// criação de tipagens básicas 

let nomeMotorista: string = "Alex";
let avaliacaoMotorista: number = 4.9;
let motoristaAtivo: boolean = true;
let carNames: string[] = ["p", "1", "2"]

type Pessoa = {
    name: string
    age: number
}

let peoples: Pessoa[] = [ 
    {name: "emerson", age:25}, 
    {name: 'Anderson', age: 24} 
];

type peopleWaitQueue = {
    people: Pessoa,
    ficha: number
}  

let pessoa1: peopleWaitQueue = {
    people: {
        name: 'emerson',
        age: 25
    },
    ficha: 10
}
