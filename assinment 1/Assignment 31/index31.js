//Assignment 31
var names = ["Ben", "Admin", "Vladamir", "Ashton", "Mason"];
if (names.length === 0) {
    console.log("We need more users!");
}
else {
    console.log('\n');
    //Assignment 30
    for (var i in names) {
        if (names[i] === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(names[i], ", thank you for logging in again."));
        }
    }
}
