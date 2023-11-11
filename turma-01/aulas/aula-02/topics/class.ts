/**
 * 
 * Classe: é um template, para criar objetos. 
 * Ela define um tipo de dado, agrupando dados (atributos) e métodos (funções ou procedimentos) que operam nesses dados.
 * 
 * Atributos/Propriedades: São características de uma classe, como nome, tamanho, cor, etc. 
 * 
 * Métodos: São as ações que um objeto da classe pode executar.
 * 
 * Objeto: é uma instância de uma classe. É um exemplar concreto que possui os atributos definidos pela 
 * classe e pode realizar os métodos que ela descreve.
 * 
 */


class Carro {
    private _marca?: string;
    private _modelo: string;
    private _cor: string;

    constructor(marca: string, modelo: string, cor: string) {
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
    }

    get marca(): string | undefined{
        return this._marca
    }

    set marca(marca: string) {
        this._marca = marca
    }

    get modelo(): string {
        return this._modelo
    }

    set modelo(modelo: string) {
        this._modelo = modelo
    }

    get cor(): string {
        return this._cor
    }

    set cor(cor: string) {
        this._cor = cor
    }

    mostrarDetalhes(): void {
        console.log(`Carro: ${this._marca} ${this._modelo}, Cor: ${this._cor}`);
    }
}

class People {
    myCar: Carro;

    constructor() {
        this.myCar = new Carro('', '', '');
        this.myCar.marca = "ferrary";
        console.log(this.myCar.cor)
    }

}


