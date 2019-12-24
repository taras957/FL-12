// Your code goes here
let a = prompt('input triangle side length', 1);
let b = prompt('input triangle side length', 1);
let c = prompt('input triangle side length', 1);
let validateFlag = true;

if (isNaN(a) && !isFinite(a) || isNaN(b) && !isFinite(b) || isNaN(c) && !isFinite(c)) {
    alert('input values should be ONLY numbers ');
    validateFlag = false;
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
    validateFlag = false;
}

while (validateFlag) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    if (!(b + c > a && a + b > c && a + c > b)) {
        alert('Triangle doesn’t exist')
    } else if (a === b && b === c && c === a) {
        alert('Equilateral triangle');
    } else if (a === b || b === c || c === a) {
        alert('Isosceles triangle');
    } else {
        alert('Scalene triangle');
    }
}