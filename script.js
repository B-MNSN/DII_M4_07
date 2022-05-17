let score = 0
let grade
if (score >= 80) {
    grade = 'A'
} else if (score >= 75) {
    grade = 'B+'
} else if (score >= 70) {
    grade = 'B'
} else if (score >= 65) {
    grade = 'c+'
} else if (score >= 60) {
    grade = 'c'
} else if (score >= 55) {
    grade = 'D+'
} else if (score >= 50) {
    grade = 'D'
} else if (score < 50) {
    grade = 'F'
}
console.log(grade + ' ' + score)