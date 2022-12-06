let now = new Date()
console.log(now)
 let  startPCTime = new Date(0)
 console.log(startPCTime)

let  Dec31_1969 = new Date(-24 * 3600 * 1000)
console.log(Dec31_1969)
let tuesday = new Date()
let lstDaysof2022 = new Date('2022-12-31')
console.log(lstDaysof2022)
console.log(tuesday.getDate())
console.log(lstDaysof2022.getDate())

// 
console.log(tuesday.getHours())
console.log(lstDaysof2022.getHours())
console.log(tuesday.getMinutes())
console.log(lstDaysof2022.getMinutes())

console.log("onoodroos shine on gartal   baina  $(lstDaysof2022.getDate - tuesday.getDate)  $(lstDaysof2022.getHours - tuesday.getHours)  tsag $(lstDaysof2022.getMinutes - tuesday.getMinutes) baina") 