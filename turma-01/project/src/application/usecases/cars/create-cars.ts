import { Car, CarProps } from '../../../domain/car';
import { Driver } from '../../../domain/driver';
import { UseCase } from '../contract/iuse-case';

export class CreateCars implements UseCase {

    constructor(readonly db: any) {}

    async execute(input: Input) : Promise<Output> {
        const { driver_id, model, description, license_plate, brand } = input;

        const props : CarProps = {
            driverId: driver_id, 
            model, 
            description, 
            license_plate, 
            brand,
        }

        const car = new Car(props)

        const licensePlateAlreadyExists = this.db.cars.find((car:Car) => car.license_plate === license_plate);
        if (licensePlateAlreadyExists) throw new Error('Liscense plate already exists');

        const driverExists = this.db.drivers.find((driver:Driver) => driver.id === driver_id);
        if (!driverExists) throw new Error('Driver does not exists');

        this.db.cars.push(car);

        return {
            car_id: car.id
        }
    }
}

type Input = {
    driver_id: string
    model: string 
    description: string
    license_plate: string
    brand: string
}

type Output = {
    car_id: string
}