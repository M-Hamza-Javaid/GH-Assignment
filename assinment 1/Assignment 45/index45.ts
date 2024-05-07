function create_car(manufacturer: String, model: String, ... properties:[string, any][]): any{
    const Car: any = {
        manufacturer,
        model,
    }
    for (const [key, value] of properties){
        Car[key] = value;
    }

    return Car
}

let MakeCar = create_car("Chevrolet", "Camaro",["colour","blue"],["Optional_Feature","Nitro"])
console.log(MakeCar)