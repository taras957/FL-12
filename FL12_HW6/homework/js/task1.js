// Your code goes here

let a;
let b;
let c;
let x;
let x1;
let x2;
let discrimCoef = 4;
let toPow = 2;
let devidedBy2 = 2;
while (!a) {
    a = +prompt('input number a', 1);
    if (isNaN(parseFloat(a)) && !isFinite(a) || a === 0) {
        alert('Invalid input data');
    } else {
        break;
    }


}
while (!b) {
    b = +prompt('input number b', 1);
    if (isNaN(parseFloat(b)) && !isFinite(b)) {
        alert('Invalid input data');
    } else {
        break;
    }

}
while (!c) {
    c = +prompt('input number c', 1);
    if (isNaN(parseFloat(c)) && !isFinite(c)) {
        alert('Invalid input data');
    } else {
        break;
    }

}
let d = Math.pow(b, toPow) - discrimCoef * a * c;
console.log(d);

if (d < 0) {
    alert('There is no solution')
} else if (d === 0) {
    x = -b / devidedBy2 * a;
    alert('X = ' + x);
} else {
    let x1 = Math.round((-b + Math.sqrt(d)) / devidedBy2 * a);
    let x2 = Math.round((-b - Math.sqrt(d)) / devidedBy2 * a);
    alert(`x1 = ${x1} and x2 = ${x2}`)
}