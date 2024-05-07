var current_Users = ["Kylian Mbappe", "Lionel Messi", "Jude Bellingham", "Mohammad Salah", "Kevin Debruyne"];
var new_Users = ["Alisson Becker", "Erling Haaland", "LIONEL MESSI", "MOHAMMAD Salah", "Luis Suarez"];
var LowerCurrentUser = current_Users.map(function (User) { return User.toLowerCase(); });
for (var newUser in new_Users) {
    var LowerNewUser = new_Users[newUser].toLowerCase();
    if (LowerCurrentUser.indexOf(LowerNewUser)) {
        console.log("\"".concat(new_Users[newUser], "\" is already in use please enter a new username"));
    }
    else {
        console.log("\"".concat(new_Users[newUser], "\" is available"));
    }
    ;
}
