let money = 999999
let tax
if (money <= 150000) {
    tax = 0
} else if (money <= 300000) {
    tax = (money - 150000) * (5 / 100)
} else if (money <= 500000) {
    tax = ((money - 300000) * (10 / 100)) + 7500
} else if (money <= 750000) {
    tax = ((money - 500000) * (15 / 100)) + 27500
} else if (money <= 1000000) {
    tax = ((money - 750000) * (20 / 100)) + 65000
} else if (money <= 2000000) {
    tax = ((money - 1000000) * (25 / 100)) + 115000
} else if (money <= 5000000) {
    tax = ((money - 2000000) * (30 / 100)) + 365000
} else if (money > 5000000) {
    tax = ((money - 5000000) * (35 / 100)) + 1265000
}
console.log('You have to pay' + ' ' + tax)