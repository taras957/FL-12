function getMin (...numbers) {
numbers.sort( (a,b) => a-b )
return numbers[0];
}
getMin(1,-2342,-3,4,5,6,-23,0);
