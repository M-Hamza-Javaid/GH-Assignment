function make_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Size: ".concat(size, " Message: \"").concat(message, "\""));
}
make_Shirt('Large');
make_Shirt('Medium');
make_Shirt('Small', 'Never Give Up');
