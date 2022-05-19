let employee = [5]
employee[0] = {
    'name': 'นาย ก ',
    'surname': 'นามสมมติ',
    'age': 68,
    'salary': 75900,
}
employee[1] = {
    'name': 'นางสาว ข',
    'surname': 'นามสมมติ',
    'age': 35,
    'salary': 55400,
}
employee[2] = {
    'name': 'นาย ค',
    'surname': 'นามสมมติ',
    'age': 51,
    'salary': 81000,
}
employee[3] = {
    'name': 'นาง ง ',
    'surname': 'นามสมมติ',
    'age': 76,
    'salary': 111000,
}
employee[4] = {
    'name': 'นางสาว จ',
    'surname': 'นามสมมติ',
    'age': 22,
    'salary': 20500,
}
console.log(employee)

let taxAvg = 0
for (let i = 0; i < employee.length; i++) {
    taxAvg += findTax(employee[i].salary * 12)
}

function findTax(money) {
    let tax = 0
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
    tax = tax / employee.length
    return tax
}

let salarySum = 0
for (let i = 0; i < employee.length; i++) {
    salarySum += employee[i].salary;
}

let ageAvg = 0;
for (let i = 0; i < employee.length; i++) {
    ageAvg += employee[i].age;
}
ageAvg = ageAvg / employee.length;

function findSum(array, key) {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i][key];
    }
    return sum;
}

function findAvg(array, key) {
    sum = findSum(array, key);
    avg = sum / array.length;
    return avg;
}

salarySum = findSum(employee, 'salary');
ageAvg = findAvg(employee, 'age');

console.log('Salary Avg : ' + salarySum);
console.log('Age Avg : ' + ageAvg);
console.log('Tax Avg : ' + taxAvg)