var UN = "Ali"
console.log("Is UN =='Ali'? I predict True.")
console.log(UN == "Ali")
console.log("Is UN !='Ali'? I predict False.")
console.log(UN != "Ali")
console.log('\n')


var Name = "bilal".toUpperCase
console.log("Is Name ='BILAL'? I predict True.")
console.log(Name == "bilal".toUpperCase)
console.log("Is Name ='bilal'? I predict False.")
console.log(Name == "bilal".toLowerCase)
console.log('\n')


var Age = 20
console.log("Is Age > '10'? I predict True.")
console.log(Age > 10)
console.log("Is Age > '20'? I predict False.")
console.log(Age > 20)
console.log("Is Age >= '10'? I predict False.")
console.log(Age >= 20)
console.log("Is Age <= '20'? I predict True.")
console.log(Age <= 20)
console.log("Is Age = '20'? I predict True.")
console.log(Age = 20)
console.log("Is Age != '20'? I predict False.")
console.log(Age != 20)
console.log('\n')


let num1 = 10
let num2 = 20
let num3 = 30
console.log("Is num1 < num2 and num2 > num1? I predict true")
console.log(num1 < num2 && num2 > num1)
console.log("Is any expression true among num2 < num3 or num2 = num3? I predict true")
console.log(num1 < num2 || num2 > num1)
console.log("Is num3 < num2 and num2 > num1? I predict False")
console.log(num3 < num2 && num2 > num1)
console.log("Is any expression true among num1 > num3 or num2 > num3? I predict False")
console.log(num1 > num3 || num2 > num3)
console.log('\n')


var ingredients = ["Tomato", "Onion", "Garlic"]
console.log("Does Ingredients contain Onion? I predict true")
console.log(ingredients[1] === "Onion")
console.log("Does Ingredients contain Pepper? I predict False")
console.log(ingredients[1] === "Pepper")
console.log('\n')