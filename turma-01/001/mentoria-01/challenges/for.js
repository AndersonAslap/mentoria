/**
 * 
 * Você foi contratado pelo Uber para melhorar a experiência do usuário, dando insights sobre suas viagens, motoristas e gastos. 
 * Para isso, você deve usar diferentes métodos de iteração no JavaScript: for...in, for...of e forEach.
 * 
 * 
 * for...in: Use este loop para iterar sobre as propriedades do objeto de motoristas. 
 * Exiba uma lista contendo detalhes do motorista, como "Motorista [Nome], dirige um [Carro], placa [Placa], membro desde [Data]".
 * 
 * for...of: Com a lista de viagens, use este loop para encontrar a viagem mais longa e a mais curta. 
 * Ao final, exiba as informações dessas duas viagens.
 * 
 * forEach: Use este loop para calcular o rating médio dado pelo usuário aos motoristas e exiba essa média.
 * 
 */



const trips = [
    { tripId: 101, driver: 'John', distance: 5.0, cost: 10, rating: 5 },
    { tripId: 102, driver: 'Mary', distance: 12.0, cost: 20, rating: 4 },
    { tripId: 103, driver: 'Luke', distance: 3.0, cost: 6, rating: 5 },
];

const drivers = {
    'John': { carModel: 'Toyota Corolla', licensePlate: 'XYZ-1234', joined: '2019-01-05' },
    'Mary': { carModel: 'Honda Civic', licensePlate: 'ABC-5678', joined: '2020-06-12' },
    'Luke': { carModel: 'Ford Focus', licensePlate: 'LMN-7890', joined: '2018-11-20' },
};
