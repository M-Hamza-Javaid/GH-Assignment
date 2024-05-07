function Make_Album(Artist:string , Title:string, Tracks?:number){
    if(Tracks !== undefined){
        Tracks = Tracks
    }
 console.log(`${Artist} ${Title} ${Tracks}`)
}
console.log('\n')


Make_Album("Linda Ronstadt","'Desperado'")
Make_Album(" Michael Jackson","'Thriller'")
Make_Album("Jackson Browne","'Late for the Sky'")
Make_Album("Fleetwood Mac","'Tusk'",20)