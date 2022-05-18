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

let salarySum = 0
for (let i = 0; i < employee.length; i++) {
    salarySum += employee[i].salary;
}
console.log(salarySum);

let ageAvg = 0;
for (let i = 0; i < employee.length; i++) {
    ageAvg += employee[i].age;
}
ageAvg = ageAvg / employee.length;
console.log(ageAvg);

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

console.log(salarySum);
console.log(ageAvg);