var GuestList = ["Asjad", "Ali", "Yousuf", "Bilal", "Mubashir"];
GuestList.push("Saad");
console.log(GuestList[0] + ', you have been invited to have dinner with us.');
console.log(GuestList[1] + ', you have been invited to have dinner with us.');
console.log(GuestList[2] + ', you have been invited to have dinner with us.');
console.log(GuestList[3] + ', you have been invited to have dinner with us.');
console.log(GuestList[4] + ', you have been invited to have dinner with us.');
console.log(GuestList[5] + ', you have been invited to have dinner with us.');
console.log('\n');
console.log("I can only invite 2 guests for dinner");
console.log('\n');
console.log(GuestList[5] + ', sorry we cannot invite you to dinner anymore.');
GuestList.pop();
console.log(GuestList[4] + ', sorry we cannot invite you to dinner anymore.');
GuestList.pop();
console.log(GuestList[3] + ', sorry we cannot invite you to dinner anymore.');
GuestList.pop();
console.log(GuestList[2] + ', sorry we cannot invite you to dinner anymore.');
GuestList.pop();
console.log(GuestList[0] + ', you are still invited.');
console.log(GuestList[1] + ', you are still invited.');
GuestList.pop();
GuestList.pop();
console.log(GuestList);
