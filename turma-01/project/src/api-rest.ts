import express, { Request, Response } from 'express';
import { CreateDriver } from './application/usecases/driver/create-driver';
import { CreateCars } from './application/usecases/cars/create-cars';
import { Available } from './application/usecases/driver/available';
import { GetAllDrivers } from './application/usecases/driver/get-all-drivers';

const PORT = 3000;
const server = express();

server.use(express.json());

const db: any = {
    'drivers': [],
    'cars': []
};

server.get('/drivers', async (request: Request, response: Response) => {
    try {
        const usecase = new GetAllDrivers(db);
        const drivers = await usecase.execute();
        return response.json({drivers});
    } catch (error: any) {
        return response.status(400).json({message: error.message});
    }
});

server.post('/drivers', async (request: Request, response: Response) => {
    try {
        const input = request.body;
        const usecase = new CreateDriver(db);
        const driver = await usecase.execute(input);
        return response.json({driver_id: driver.driver_id});
    } catch (error: any) {
        return response.status(400).json({message: error.message});
    }
});

server.post('/cars', async (request: Request, response: Response) => {
    try {
        const input = request.body;
        const usecase = new CreateCars(db);
        const car = await usecase.execute(input);
        return response.json({car_id: car.car_id});
    } catch (error: any) {
        return response.status(400).json({message: error.message});
    }
});

server.post('/avaliable', async (request:Request, response:Response) => {
    try {
        const input = request.body;
        const usecase = new Available(db);
        await usecase.execute(input);
        return response.send();
    } catch (error: any) {
        return response.status(400).json({message: error.message});
    }
});

server.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
});