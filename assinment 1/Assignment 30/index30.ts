let Names = ["Ben","Admin","Vladamir","Ashton","Mason"]
for (let i in Names) {
    if (Names[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${Names[i]}, thank you for logging in again.`)
    }
}