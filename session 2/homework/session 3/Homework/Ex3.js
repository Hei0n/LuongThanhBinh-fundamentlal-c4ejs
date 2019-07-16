let items = ["T-Shirt","Sweater" ]; 
let answer = prompt("Welcome to our shop, what do you want? (C,R,U,D)").toLowerCase();
    for(i = 0; i<items.length; i++) {
    if(answer === "r"){
    }
    else if(answer === "c"){
        let newItem = prompt("Enter new item");
        items.push(newItem);
    }
    else if(answer === "u"){
        let itemIndex = Number(prompt("Update position?"));
        let newItem = prompt("New item?");
        items[itemIndex-1]=newItem;       
    }
    else if(answer === "d"){
        let itemIndex = Number(prompt("Delete position?"));
        items.splice(itemIndex -1 ,1);        
    }
    else{
        break;
    }
    console.log(`Our items: ${items}`);
    break;
}
