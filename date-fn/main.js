const dateFn = require('date-fn')
const date = new Date()

console.log("date:", date)

let formatDate = dateFn.date(date, 143)
console.log("date-fn", formatDate)


