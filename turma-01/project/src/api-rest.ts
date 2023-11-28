import express, { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

const PORT = 3000;
const server = express();

server.use(express.json());

const db: any = {
    'drivers': [],
    'cars': []
};

server.post('/drivers', async (request: Request, response: Response) => {
    try {
        const { name, email, password } = request.body;

        if (!name) throw new Error('Name is required');
        if (!email) throw new Error('Email is required');
        if (!password) throw new Error('Password is required');

        const driverAlreadyExists = db.drivers.find((driver: any) => driver.email === email);
        if (driverAlreadyExists) throw new Error('Email already exists');

        const driver = {
            driver_id: uuid(),
            name,
            email,
            password,
            disponible: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        db.drivers.push(driver);

        return response.json({driver_id: driver.driver_id});
    } catch (error: any) {
        return response.status(400).json({message: error.message});
    }
});

server.post('/cars', async (request: Request, response: Response) => {
    try {
        const { driver_id, model, description, license_plate, brand } = request.body;

        if (!driver_id) throw new Error('Driver is required');
        if (!model) throw new Error('Model is required');
        if (!license_plate) throw new Error('License plate is required');
        if (!brand) throw new Error('Brand is required');

        const licensePlateAlreadyExists = db.cars.find((car:any) => car.license_plate === license_plate);
        if (licensePlateAlreadyExists) throw new Error('Liscense plate already exists');

        const driverExists = db.drivers.find((driver:any) => driver.driver_id === driver_id);
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

        db.cars.push(car);

        return response.json({car_id: car.car_id});
    } catch (error: any) {
        return response.status(400).json({message: error.message});
    }
});

server.post('/avaliable', async (request:Request, response:Response) => {
    try {
        const { driver_id, car_id } = request.body;
        const carExists = db.cars.find((car: any) => car.car_id === car_id);
        console.log(carExists);
        if (!carExists) throw new Error('Car does not exists');

        const carBelongsToDriver = db.cars.find((car: any) => car.car_id === car_id && car.driver_id === driver_id);
        if (!carBelongsToDriver) throw new Error('This car does not belongs to this driver');

        const index = db.cars.indexOf((car: any) => car.car_id === car_id);
        console.log(index);
        console.log(db.cars[index]);
        db.cars[index].avaliable = true;

        const car = db.cars[index];
        
        return response.json({car});
    } catch (error: any) {
        return response.status(400).json({message: error.message});
    }
});

server.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
});