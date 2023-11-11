/**
 * 
 * Uma interface é um contrato que define um conjunto de métodos e propriedades que uma classe deve implementar, 
 * sem fornecer uma implementação.
 * 
 */

interface IVeiculo {
    iniciarRota(): void;
    finalizarCorrida(): void
}

class VeiculoMotorizado {
    motor: string;

    ligarMotor(): void {
        console.log("Motor ligado!");
    }
}

class Carro2 extends VeiculoMotorizado implements IVeiculo {
    finalizarCorrida(): void {
        throw new Error("Method not implemented.");
    }
    iniciarRota(): void {
        console.log("Iniciando a rota...");
    }
}