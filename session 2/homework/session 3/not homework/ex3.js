// let menu = ["com", "canh","tom", "rau", "ca" ];
// for(let i=0;i < menu.length; i++) {
//     console.log(`${i+1}. ` + menu[i])
// }

// let answer = prompt ("do you want to change a food in the menu? y/n").toLowerCase();
// if (answer == "y") {
//     let answer2 = prompt("would you like to pick a food by its name or its number? name/number").toLowerCase();
//     if (answer2 == "name") {
//         let oldFood = prompt("which food would you like to be replaced?");
//         let changedFood = menu.indexOf(oldFood);
//         let newFood = prompt("what food would you like to add to the menu?");
//         menu[changedFood] = newFood;
//     }
//     else if (answer2 == "number") {
//         let oldFood = Number(prompt("which food would you like to be replaced?"));
//         let newFood = prompt("what food would you like to add to the menu?");
//         menu[oldFood - 1] = newFood;
//     }
// }
// else if (answer == "n"){
//     alert("goodbye");
// }
// else {
//     alert("try again")
// }
// console.log(menu);