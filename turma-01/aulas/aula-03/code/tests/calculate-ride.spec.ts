import { calculateRide } from "../src/calculate";

test("deve dar error quando a distância estiver inválida", () => {
    const segments = [
        {distance: -1, datetime: new Date()}
    ];
    expect(() => calculateRide(segments)).toThrow("Invalid distance");
});

test("deve dar error quando a data estiver inválida", () => {
    const segments = [
        {distance: 1, datetime: new Date("abcd")}
    ];
    expect(() => calculateRide(segments)).toThrow("Invalid datetime");
});

test("deve calcular o preço de uma corrida no domingo pela manhã", () => {
    const segments = [
        {distance: 10, datetime: new Date("2023-11-12T10:00:00")}
    ];
    const price = calculateRide(segments);
    expect(price).toBe(29);
});

test("deve calcular o preço de uma corrida em um dia diferente de domingo e que não seja de madrugada", () => {
    const segments = [
        {distance: 10, datetime: new Date("2023-11-11T15:15:00")}
    ];
    const price = calculateRide(segments);
    expect(price).toBe(21);
});

test("deve calcular o preço de uma corrida em um dia diferente de domingo e que seja de madrugada", () => {
    const segments = [
        {distance: 10, datetime: new Date("2023-11-10T01:15:00")}
    ];
    const price = calculateRide(segments);
    expect(price).toBe(39);
});

test("deve calcular o preço de uma corrida em um domingo e que seja de madrugada", () => {
    const segments = [
        {distance: 10, datetime: new Date("2023-11-12T01:15:00")}
    ];
    const price = calculateRide(segments);
    expect(price).toBe(50);
});

test("deve calcular o preço mínimo de uma corrida", () => {
    const segments = [
        {distance: 1, datetime: new Date("2023-11-12T01:15:00")}
    ];
    const price = calculateRide(segments);
    expect(price).toBe(10);
});

test("deve calcular o preço de uma corrida em um domingo e que seja de madrugada e que tenha dois segmentos", () => {
    const segments = [
        {distance: 10, datetime: new Date("2023-11-12T01:15:00")},
        {distance: 10, datetime: new Date("2023-11-12T02:15:00")}
    ];
    const price = calculateRide(segments);
    expect(price).toBe(100);
});