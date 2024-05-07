//Assignment 41
var MagNames = ["Zach King", "Jack Black", "Harry Potter", "Dumbledore"];
function Show_Magicians(Magicians) {
    for (var Mag in Magicians) {
        console.log(Magicians[Mag]);
    }
}
Show_Magicians(MagNames);
console.log('\n');
//Assignment 42 && 43
var NewMagNames = ["Zach King", "Jack Black", "Harry Potter", "Dumbledore"];
function Great_Magicians(GMagicians) {
    var GreatMagNames = GMagicians.map(function (Mag) { return "The Great ".concat(Mag); });
    return GreatMagNames;
}
NewMagNames = Great_Magicians(NewMagNames);
Show_Magicians(MagNames);
Show_Magicians(NewMagNames);
console.log('\n');
