let menu = ["com", "canh","tom", "rau", "ca" ];
for(let i=0;i < menu.length; i++) {
    console.log(`${i+1}. ` + menu[i])
}

let answer = prompt ("do you want to add a new food to the menu? y/n").toLowerCase;
if (answer = "y") {
    let newFood = prompt("enter your new food here")
menu.push(newFood);
console.log(menu);
}
else if (answer = "n"){
alert("goodbye");
}



