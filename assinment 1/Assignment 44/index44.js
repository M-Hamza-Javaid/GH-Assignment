function Make_Sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Make a sandwhich including ".concat(ingredients));
}
Make_Sandwich("Tomato", "Lettuce", "Cheese");
