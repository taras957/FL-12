// Your code goes here
let a = parseInt(prompt('input triangle side length', 1), 10);
let b = parseInt(prompt('input triangle side length', 1), 10);
let c = parseInt(prompt('input triangle side length', 1), 10);
console.log(a);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers ')
} else if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length ')
}

if (!(b + c > a && a + b > c && a + c > b)) {
    alert('Triangle doesn’t exist')
} else if (a === b === c) {
    alert('Equilateral triangle');
} else if (a === b || b === c || c === a) {
    alert('Isosceles triangle');
} else {
    alert('Scalene triangle');
}