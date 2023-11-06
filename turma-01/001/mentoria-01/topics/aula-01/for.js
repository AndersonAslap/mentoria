/**
 * 
 * Use for...in para percorrer propriedades de um objeto.
 * Use for...of para percorrer valores em objetos iteráveis. arrays , strings
 * Use forEach para executar uma função para cada item em um array.
 * 
 */

let cars = []

cars.push({
    license_plate: 'xxxx-123',
    brand: 'palio',
    model: 2023
})

cars.push({
    license_plate: 'xxxx-112',
    brand: 'ferrari',
    model: 2000
})

cars.push({
    license_plate: 'xxxx-888',
    brand: 'palio',
    model: 2030
})

/*
let car = {
    license_plate: 'xxxx-123',
    brand: 'palio',
    model: 2023
}

for (propertie in car) 
{
    console.log(propertie, car[propertie])
}*/


/*
for(car of cars) 
{
    console.log(car)
}

let name = 'Emerson';

for(letter of name)
{
    console.log(letter)
}
*/

cars.forEach((car, index) => {
    console.log(car, index)
})