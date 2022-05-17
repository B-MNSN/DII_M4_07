let n = 3
let fac_for = 1
for (let i = 1; i <= n; i++) {
    fac_for = fac_for * i
}
console.log(fac_for)

let fac_while = 1
let count = 1
while (count <= n) {
    fac_while = fac_while * count
    count++
}
console.log(fac_while)

console.log(fac_for === fac_while)