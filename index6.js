//4ЛБ//
//2 вариант//


let a = +prompt("введите число");




let b = +prompt("введите число");



let c = +prompt("введите число");

a1 = mediana(a,b,c);
console.log(a1);

b1 = mediana(a,b,c);
console.log(b1);

a2 = zapros();
console.log(a2.a);


function mediana (A,B,C)
{
    let m = 0.5 * Math.sqrt(2*Math.pow(B,2)+(2*Math.pow(C,2)-(Math.pow(A,2))));
    return m;
}

function zapros ()
{
    let n = +prompt("???");
    let k = +prompt("???");
    let y = +prompt("???");
    return {
        a:n,
        b:k,
        c:y
    };
    
}