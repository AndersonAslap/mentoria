[] - create driver

url : /drivers
method : post
body : {
    name: string
    email: string 
    password: string
}

-----

[] - create car

url : /cars
method : post
body : {
    driver_id: uuid
    model: string 
    description: string
    license_plate: string
    brand: string
}

-----

[] - avaliable car

url : /avaliable
method : post
body : {
    driver_id: uuid
    car_id: uuid
}



=========

[] - Cadastrar passageiro 
[] - Solicitar corrida 
[] - Aceitar corrida 
[] - Rejeitar corrida 