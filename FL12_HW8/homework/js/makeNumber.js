function makeNumber (symbols) {
    let arrSymbols = symbols.split('');   
    let numbers = [];
    for (let key of arrSymbols) {
        (!isNaN(parseFloat(key))) ? numbers.push(key):numbers;
    }
    return numbers.join('');
}
makeNumber('dcsccwc234324325325qwdqdew');
