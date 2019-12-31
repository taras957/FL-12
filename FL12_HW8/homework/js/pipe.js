function pipe (num, ...cb) {
    let res = num;
while(cb.length){
    let [func] = cb;
    res = func(res);
    cb.length--;
}
return res;
}


function addOne(x){
    return x+1;
}
pipe(1, addOne, addOne, addOne, addOne);
