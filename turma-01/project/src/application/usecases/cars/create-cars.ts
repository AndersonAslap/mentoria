import { v4 as uuid } from 'uuid';

export class CreateCars {

    constructor(readonly db: any) {}

    async execute(input: Input) : Promise<Output> {
        const { driver_id, model, description, license_plate, brand } = input;

        if (!driver_id) throw new Error('Driver is required');
        if (!model) throw new Error('Model is required');
        if (!license_plate) throw new Error('License plate is required');
        if (!brand) throw new Error('Brand is required');

        const licensePlateAlreadyExists = this.db.cars.find((car:any) => car.license_plate === license_plate);
        if (licensePlateAlreadyExists) throw new Error('Liscense plate already exists');

        const driverExists = this.db.drivers.find((driver:any) => driver.driver_id === driver_id);
        if (!driverExists) throw new Error('Driver does not exists');

        const car = {
            car_id: uuid(),
            driver_id, 
            model, 
            description, 
            license_plate, 
            brand,
            avaliable: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this.db.cars.push(car);

        return {
            car_id: car.car_id
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