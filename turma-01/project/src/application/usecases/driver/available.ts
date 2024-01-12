export class Available {

    constructor(readonly db: any) {}

    async execute(input: Input) : Promise<void> {
        const { driver_id, car_id } = input;
        const carExists = this.db.cars.find((car: any) => car.car_id === car_id);
        
        if (!carExists) throw new Error('Car does not exists');

        const carBelongsToDriver = this.db.cars.find((car: any) => car.car_id === car_id && car.driver_id === driver_id);
        if (!carBelongsToDriver) throw new Error('This car does not belongs to this driver');

        const index = this.db.cars.findIndex((car: any) => car.car_id === car_id);
        this.db.cars[index].avaliable = true;
    }
}

type Input = {
    driver_id: string 
    car_id: string
}