const n=prompt("Enter a number to calculate its factorials ");
let a=1;
for ( let i=1; i <= n ; i++) {
     a=a*i;
}
alert(` factorials of ${n} is ${a} `);