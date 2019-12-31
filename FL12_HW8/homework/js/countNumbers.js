function makeNumber(symbols) {
  let arrSymbols = symbols.split('');
  let numbers = [];
  for (let key of arrSymbols) {
    !isNaN(parseFloat(key)) ? numbers.push(key) : numbers;
  }
  return numbers.join('');
}

function countNumbers (str) {
const numArr = makeNumber(str).split('');
const numCache = {};
for (const key of numArr) {
    console.log(typeof key);
    
     numCache[key] = (numCache[key] || 0) + 1; 
}
return numCache;
}

countNumbers('sfdsfdsf1223334444555555');
