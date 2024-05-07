let current_Users = ["Kylian Mbappe","Lionel Messi","Jude Bellingham","Mohammad Salah","Kevin Debruyne"]
let new_Users = ["Alisson Becker","Erling Haaland","LIONEL MESSI","MOHAMMAD Salah","Luis Suarez"]
let LowerCurrentUser = current_Users.map( User => User.toLowerCase())

for (let newUser in new_Users) {
let LowerNewUser = new_Users[newUser].toLowerCase()
if (LowerCurrentUser.indexOf(LowerNewUser)) {
    console.log(`"${new_Users[newUser]}" is already in use please enter a new username`)
} else {
    console.log(`"${new_Users[newUser]}" is available`)
};
    
}