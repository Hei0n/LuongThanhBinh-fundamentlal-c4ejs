//4.1
let flock = [5,7,300,90,24,50,75];
console.log(`Hello, my name is Minh and here is my flock ${flock}`);


//4.2
for(let month = 1; month<5 ;month++){
    if(month>1){
        bored = prompt(`${month -1} month has passed!Bored yet? (y/n)`).toLowerCase();
        if (bored ==="y"){
            break;
        }
    }
let biggest = Math.max.apply(Math, flock);
console.log(`Now my biggest sheep has size ${biggest}! Lets shear it!`); 


// 4.3
let maxIndex = flock.indexOf(biggest);
flock[maxIndex]=8;
console.log(`After shearing, here is my flock ${flock}`);


// 4.4
 flock.forEach((size,index)=>{
    flock[index] = flock[index] + 50;
})
console.log(`MONTH ${month} :One month has passed, now here is my flock ${flock}`)
}


// 4.5


// 4.6
let profit = 0;
for (let i = 0; i < flock.length; i++) {
    profit = profit + flock[i];
}
console.log(`My flock has size in total: ${profit}. I would get ${profit*2}$`)