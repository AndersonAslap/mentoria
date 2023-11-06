/**
 * 
 * Imagine que você está desenvolvendo um recurso para o aplicativo Uber. 
 * Os usuários podem ver uma lista de carros disponíveis próximos a eles. 
 * Cada carro tem informações associadas a ele, como o motorista, a distância do usuário, 
 * a avaliação do motorista e se o carro está disponível ou não. 
 * Você precisa usar o método find para identificar o primeiro carro disponível 
 * que atenda aos critérios específicos do usuário.
 * 
 * critérios rating deve ser um valor acima de 4.7 e que esteja disponível
 *
 */

const cars = [
    { driver: 'John', distance: 2.5, rating: 4.7, disponible: false },
    { driver: 'Mary', distance: 1.8, rating: 4.3, disponible: true },
    { driver: 'Luke', distance: 0.5, rating: 4.9, disponible: true },
    { driver: 'Fernanda', distance: 1.2, rating: 4.8, disponible: false }, 
    { driver: 'Robert', distance: 3.0, rating: 5.0, disponible: true }
];
