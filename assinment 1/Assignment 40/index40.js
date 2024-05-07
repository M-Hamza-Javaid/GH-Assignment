function Make_Album(Artist, Title, Tracks) {
    if (Tracks !== undefined) {
        Tracks = Tracks;
    }
    console.log("".concat(Artist, " ").concat(Title, " ").concat(Tracks));
}
console.log('\n');
Make_Album("Linda Ronstadt", "'Desperado'");
Make_Album(" Michael Jackson", "'Thriller'");
Make_Album("Jackson Browne", "'Late for the Sky'");
Make_Album("Fleetwood Mac", "'Tusk'", 20);
