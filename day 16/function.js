console.log('function')
// 1. function
function f1(x,y){
    console.log(Math.pow(x,2)+ Math.pow(y,2))
}
f1(3,4)
// 2. function
function F2(x){
    console.log(Math.pow(x,2.71))
}
F2(3)
// 3. function
function f3(a,b){
    console.log(Math.pow(a,2) - Math.pow(b,2))
}
f3(5,4)
// 4. function
function f4(a,b){
    console.log(Math.sqrt(Math.pow(a,2) - Math.pow(b,2)))
}
f4(5,4)
// 5. function
function f5(y){
    console.log(Math.pow(y,2) - 2 * y + 4)
}
f5(3)
// 6. function
function f6(a,b){
    console.log(a - b * (Math.pow(a,2) + Math.pow(b,2)) - a)
}
f6(5,3)
// 7. function
function f7(a,b){
    console.log(2 * (a + b) )
}
f7(6,5)
// 8. function
function f8(a,b){
    console.log(Math.pow((a+b),2))
}
f8(6,8)
// 9. function
function F9(a,b){
    console.log(Math.pow(a,2) - Math.pow(b,2))
}
F9(8,5)
// 10. function
function f10(a,b){
    console.log(a * b)
}
f10(9,10)
// 11. function
function f11(a,b){
    console.log(3 * Math.pow((a * b),2))
}
f11(3,2)
// 12. function
function f12(x,y){
    console.log(3 * Math.pow(x,3) - 2 * Math.pow(y,3))
}
f12(7,3)
// 13. function
function f13(a,b){
    console.log(a / b)
}
f13(9,3)
// 14. function
function f14(y){
    console.log(Math.pow(y,3) - 3 * Math.pow(y,2) + 8)
}
f14(4)
// 15. function
function f15(x,y){
    console.log(1 / Math.pow(x,2) - 1 / Math.pow(y,2))
}
f15(2,4)
// 16. function
function f16(x,y){
    console.log(Math.sqrt(Math.pow(x,2) - Math.pow(y,2)))
}
f16(4,3)
// 17. function
function f17(x){
    let k = 1
    for(let i = 1 ; i <= x ; i++){
        k = k * i
    }
    console.log(k)
}
f17(5)
// 18. function
function f18(m,c){
    console.log(m * Math.pow(c,2))
}
f18(2,300000)