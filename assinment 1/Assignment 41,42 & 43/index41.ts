//Assignment 41
let MagNames = ["Zach King","Jack Black","Harry Potter","Dumbledore"]
function Show_Magicians(Magicians:string[]){
    for (let Mag in Magicians) {
        console.log(Magicians[Mag]);
    }
}
Show_Magicians(MagNames)
console.log('\n')

//Assignment 42 && 43
let NewMagNames = ["Zach King","Jack Black","Harry Potter","Dumbledore"]
function Great_Magicians(GMagicians:string[]){
   let GreatMagNames = GMagicians.map(Mag => `The Great ${Mag}`)
   return GreatMagNames
}
NewMagNames = Great_Magicians(NewMagNames)
Show_Magicians(MagNames)
Show_Magicians(NewMagNames)
console.log('\n')