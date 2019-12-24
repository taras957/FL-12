// Your code goes here
let discrimCoef = 4;
let toPow = 2;
let devidedBy2 = 2;
let a = prompt('input number a');
let b = prompt('input number b');
let c = prompt('input number c');
let validFlag = true;

if (isNaN(a) && !isFinite(a) || isNaN(b) && !isFinite(b) || isNaN(c) && !isFinite(c)) {
    alert('Invalid input data');
    validFlag = false;
}
while (validFlag) {
    let d = Math.pow(b, toPow) - discrimCoef * a * c;
    console.log(d);

    if (d < 0) {
        alert('There is no solution')
    } else if (d === 0) {
        let x = -b / devidedBy2 * a;
        alert(`X = ${x}`);
    } else {
        let x1 = Math.round((-b + Math.sqrt(d)) / devidedBy2 * a);
        let x2 = Math.round((-b - Math.sqrt(d)) / devidedBy2 * a);
        alert(`x1 = ${x1} and x2 = ${x2}`)
    }
}