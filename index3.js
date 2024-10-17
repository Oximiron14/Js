let y;
let c = 7;
for(let x = 0;x <= 1; x+=0.1){
    y = Math.pow(2,-x)*Math.pow(c,x);
    console.log(y);
}

console.log(".....")

    let x = -1 ;



    while (x <= 1) {
        y = Math.pow(2,-x)*Math.pow(c,x);
        x += 0.1;
        console.log(y);
}

x = 0.1;

do  {
    y = Math.pow(2,-x)*Math.pow(c,x);
    x += 0.1;
    console.log(y);
    } while (x <= 1)