import { Driver, DriverProps } from '../../../domain/driver';
import { UseCase } from '../contract/iuse-case';

export class CreateDriver implements UseCase {

    constructor(readonly db: any) {}

    async execute(input: Input) : Promise<Output> {
        const { name, email, password } = input;

        const props: DriverProps = {
            name,
            email,
            password
        }

        const driver = new Driver(props);

        const driverAlreadyExists = this.db.drivers.find((driver: any) => driver.email === input.email);
        if (driverAlreadyExists) throw new Error('Email already exists');

        this.db.drivers.push(driver);

        return {
            driver_id: driver.id
        }
    }
}

type Input = {
    name: string 
    email: string 
    password: string
}

type Output = {
    driver_id: string
}