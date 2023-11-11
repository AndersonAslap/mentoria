/**
 * 
 * Herança é um princípio pelo qual uma classe (chamada subclass) 
 * pode herdar características (atributos e métodos) de outra classe (chamada superclass).
 * 
 */
/*
class VeiculoMotorizado {
    motor: string;

    ligarMotor(): void {
        console.log("Motor ligado!");
    }
}
*/

abstract class VeiculoMotorizado {
    abstract motor: string;
    abstract ligarMotor(): void 
}


class Bus extends VeiculoMotorizado {
    motor: string;
    
    constructor() {
        super();
    }

    ligarMotor(): void {
        console.log("dadasd")
    }
}

class Motocycle extends VeiculoMotorizado  {
    motor: string;
    
    constructor() {
        super();
    }

    ligarMotor(): void {
        console.log("asdasd")
    }
}
