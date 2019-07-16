let Index = [7, 5, 9, -3, 0];
let n = Number(prompt("enter a random number "));
let trongdayso = true
for (let i = 0; i < Index.length; i++) {
    if (n === Index[i]){
        trongdayso = true     
    }
    else {
        trongdayso = false
    }
    if(trongdayso = true){
        console.log(`Số ${n} ở vị trí thứ ${Index.indexOf(n)+1}`);
    }
    else if (trongdayso = false){
        console.log("not found");
        break;
    }
}


// let numbers = [7, 5, 9, -3, 0];
// let n = Number(prompt("enter a random number "));
// let indexOfN = -1;
// numbers.forEach((number, index) -> {
//     if (number === n) {
//         indexOfN = index;
//     }
// })
// if (indexOfN === -1);


