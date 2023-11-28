import axios from "axios";

axios.defaults.validateStatus = function() {
    return true;
}

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

let DRIVER_ID = "";

beforeEach(async () => {
    const inputDrive = {
        name: 'Anderson',
        email: 'anderson@dev.com',
        password: '123456'
    }
    const response = await api.post('/drivers', inputDrive);
    const output = response.data;
    DRIVER_ID = output.driver_id;
});

test("should create a car", async () => {
    const input = {
        driver_id: DRIVER_ID,
        model: 'camaro 2021',
        description: 'carro legal',
        license_plate: 'XXX-1234',
        brand: 'camaro'
    }
    const response = await api.post('/cars', input);
    const output = response.data;
    expect(output.car_id).toBeDefined();
});