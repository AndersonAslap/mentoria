/**
 * 
 * O que são Genéricos? 
 * Genéricos, ou generics, são uma ferramenta de tipos que permite criar componentes que funcionam 
 * com qualquer tipo de dado. Em vez de ter um tipo específico, o componente pode ser usado com vários tipos sem perder a segurança do tipo. 
 * 
 * Para que servem?
 * O uso de genéricos é fundamental para a criação de componentes reutilizáveis. 
 * Eles permitem que você crie estruturas como arrays, promessas e funções que podem trabalhar com qualquer tipo, 
 * proporcionando mais flexibilidade e segurança de tipo no seu código.
 * 
 * 
 */

class FilaDeEspera<T> {
    private elementos: T[] = [];
    
    entrarNaFila(elemento: T): void {
        this.elementos.push(elemento);
    }
    
    proximoNaFila(): T | null {
        return this.elementos.shift() || null;
    }
}

const fileDeEspera = new FilaDeEspera();

const fileDeEsperaAny = new FilaDeEspera<any>();

const fileDeEsperaUndefined = new FilaDeEspera<undefined>();

const fileDeEsperaBoolean = new FilaDeEspera<boolean>();

const filaDeEsperaVip = new FilaDeEspera<string>();

const fileDeEsperaNormal = new FilaDeEspera<number>();

const filaDeEsperaTriagem = new FilaDeEspera<{name: string, ficha:number}>();

const filaDeEsperaPedidosViagem = new FilaDeEspera<{cpf: string, items: string[]}>();



