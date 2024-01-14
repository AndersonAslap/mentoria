import { Car } from "../../../domain/car";
import { UseCase } from "../contract/iuse-case";

// deixar carro disponível
export class Available implements UseCase {

    constructor(readonly db: any) {}

    async execute(input: Input) : Promise<void> {
        const { driver_id, car_id } = input;

        const car = this.db.cars.find((car: Car) => car.id === car_id) as Car | undefined;
        if (!car) throw new Error('Car does not exists');

        const carBelongsToDriver = this.db.cars.find((car: Car) => car.id === car_id && car.driverId === driver_id);
        if (!carBelongsToDriver) throw new Error('This car does not belongs to this driver');

        car.avaliable();
    }
}

type Input = {
    driver_id: string 
    car_id: string
}