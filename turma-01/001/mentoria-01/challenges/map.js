/**
 * 
 * No aplicativo Uber, antes de confirmar a viagem, os usuários podem ver um preço estimado. 
 * Vamos supor que o preço do Uber seja calculado com base na distância e no tipo de serviço selecionado pelo usuário. 
 * Você será desafiado a usar o método map para gerar uma lista de preços estimados para cada carro disponível.
 * 
 * O item dessa nova lista terá o formato abaixo 
 * 
 * { driver: string, estimatedPrice: number }
 * 
 * UberX: R$ 1.00/km 
 * UberBlack: R$ 1.50/km
 * UberSUV: R$ 2.00/km
 * 
 */

const cars = [
    { driver: 'John', distance: 2.5, carType: 'UberBlack' },
    { driver: 'Mary', distance: 1.8, carType: 'UberX' },
    { driver: 'Luke', distance: 0.5, carType: 'UberSUV' },
    { driver: 'Fernanda', distance: 1.2, carType: 'UberX' },
    { driver: 'Robert', distance: 3.0, carType: 'UberBlack' }
];