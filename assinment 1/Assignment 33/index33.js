var OrdNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var OrdNum in OrdNums) {
    if (OrdNums[OrdNum] === 1) {
        console.log(OrdNums[OrdNum] + "st");
    }
    else if (OrdNums[OrdNum] === 2) {
        console.log(OrdNums[OrdNum] + "nd");
    }
    else if (OrdNums[OrdNum] === 3) {
        console.log(OrdNums[OrdNum] + "rd");
    }
    else {
        console.log(OrdNums[OrdNum] + "th");
    }
}
