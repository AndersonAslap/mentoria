/**
 * 
 * push
 * map
 * find
 * findIndex
 * filter
 * reduce
 * pop
 * slice
 * 
 */

let cars = []

/**
 * 
 * push : ele serve para adicionar um elemento no final do array
 * 
 */

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

/**
 * 
 * map : é um método que percorre os elementos do array atual e retorna um novo
 * 
 */


const cars2 = cars.map((car) => {
    car.new = car.model >= 2023 ? true : false 
    return car
})

/**
 * 
 * find : ele é ultilizado para retornar o primeiro elemento baseado na condição de paramêtro que for informado
 * se encontra retorna o elemento, senão encontrar retorna undefined
 * 
 */


const car = cars.find((car) => car.brand == 'palio' && car.model > 2023)


/**
 * 
 * findIndex : ele é ultilizado para retornar o indice do elemento baseado na condição de parâmetro que for informado
 * se encontrar ele vai retornar o indice de onde se encontra o elemento, senão encontrar ele retornar -1
 * 
 */

const carIndex = cars.findIndex((car) => car.brand == 'palio' && car.model > 2023)


/**
 * 
 * filter : ele é ultilizado para retornar um array com elementos filtrados baseado na condição passada
 * 
 */

const cars3 = cars.filter((car) => car.model > 2005)


/**
 * 
 * reduce : ele é ultilizado para percorrer o array e realizar alguma operação e retornar um valor
 * 
 */

const transactions = [
    {deposit: 40, withdraw: 0},
    {deposit: 0, withdraw: 15},
    {deposit: 0, withdraw: 15},
]

const balacer = transactions.reduce((acc, item) => {    
    if (item.deposit > 0) {
        acc += item.deposit
    }

    if (item.withdraw > 0) {
        acc -= item.withdraw
    }

    return acc
}, 0)