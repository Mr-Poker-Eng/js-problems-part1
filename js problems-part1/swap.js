let a = 3;
let b = 9;

console.log(a, b);

const temp = a;
a = b;
b = temp;

console.log(a, b);


//-------------------------------------------------
let x = 5;
let y = 7;

console.log(x,y);
[x, y] = [y, x];
console.log(x, y);


//--------------------------------------------------