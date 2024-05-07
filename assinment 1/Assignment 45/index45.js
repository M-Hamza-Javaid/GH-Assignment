function create_car(manufacturer, model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var Car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        Car[key] = value;
    }
    return Car;
}
var MakeCar = create_car("Chevrolet", "Camaro", ["colour", "blue"], ["Optional_Feature", "Nitro"]);
console.log(MakeCar);
