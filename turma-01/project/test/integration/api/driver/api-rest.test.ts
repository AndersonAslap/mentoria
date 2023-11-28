import axios from "axios";

axios.defaults.validateStatus = function() {
    return true;
}

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

test("should create a driver by http-rest", async () => {
    const input = {
        name: 'Emerson',
        email: 'emerson@dev.com',
        password: '123456'
    }
    const response = await api.post('/drivers', input);
    const output = response.data;
    expect(output.driver_id).toBeDefined();
});

test("should throw error when name is empty", async () => {
    const input = {
        name: '',
        email: 'emerson@dev.com',
        password: '123456'
    }
    const response = await api.post('/drivers', input);
    const status = response.status;
    const message = response.data.message;
    expect(status).toBe(400);
    expect(message).toBe("Name is required");
});

test("should throw error when email is empty", async () => {
    const input = {
        name: 'Emerson',
        email: '',
        password: '123456'
    }
    const response = await api.post('/drivers', input);
    const status = response.status;
    const message = response.data.message;
    expect(status).toBe(400);
    expect(message).toBe("Email is required");
});

test("should throw error when password is empty", async () => {
    const input = {
        name: 'Emerson',
        email: 'emerson@dev.com',
        password: ''
    }
    const response = await api.post('/drivers', input);
    const status = response.status;
    const message = response.data.message;
    expect(status).toBe(400);
    expect(message).toBe("Password is required");
});

test("should throw error when email already exists", async () => {
    const input = {
        name: 'Emerson',
        email: 'emerson@dev.com',
        password: '123456'
    }
    await api.post('/drivers', input);
    const response = await api.post('/drivers', input);
    const status = response.status;
    const message = response.data.message;
    expect(status).toBe(400);
    expect(message).toBe("Email already exists");
});

