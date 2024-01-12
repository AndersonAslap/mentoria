import { v4 as uuid } from 'uuid';

export class CreateDriver {

    constructor(readonly db: any) {}

    async execute(input: Input) : Promise<Output> {
        if (!input.name) throw new Error('Name is required');
        if (!input.email) throw new Error('Email is required');
        if (!input.password) throw new Error('Password is required');

        const driverAlreadyExists = this.db.drivers.find((driver: any) => driver.email === input.email);
        if (driverAlreadyExists) throw new Error('Email already exists');

        const driver = {
            driver_id: uuid(),
            name: input.name,
            email: input.email,
            password: input.password,
            disponible: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this.db.drivers.push(driver);

        return {
            driver_id: driver.driver_id
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