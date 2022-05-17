let n = 10;
let fibo_for = 1;
let fn1 = 0;
let fn2 = 1;
for (let i = 2; i < n; i++) {
    fn2 = fn1;
    fn1 = fibo_for;
    fibo_for = fn2 + fn1;
}
console.log(fibo_for);

let fibo_while = 1;
let count = 2;
fn1 = 0;
fn2 = 1;
while (count < n) {
    fn2 = fn1;
    fn1 = fibo_while;
    fibo_while = fn2 + fn1;
    count++;
}
console.log(fibo_while);

console.log(fibo_for === fibo_while)