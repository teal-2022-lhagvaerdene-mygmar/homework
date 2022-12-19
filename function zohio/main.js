// 2 tooniii ih
function f(a,b){
    if(a > b){
        return a
    }else{
        return b
    }
}
console.log(f(3,6))
// 2 daalgvar
let k = [1,2,3,4,5,6,7,8,9,10]
function number(sum){
    for(let i = 0 ; i < k.length ; i++){
        if(sum === k[i]){
            return sum
        }
    }
    if(sum != k){
        return -1
    }
}
console.log(number(2))
let temdegt = ['a','s','d','f','g','h','j','k','l']
function temdegtoloh(sum){
    for(let i = 0 ; i < temdegt.length ; i ++ ){
        if(sum == temdegt[i]){
            return sum
        }
    }
    if(sum != temdegt){
        return -1
    }
}
console.log(temdegtoloh('k'))
let randomNumber = k[Math.floor(Math.random() * k.length)]
function random(){
    return randomNumber
} 
console.log(random(randomNumber))
let too = [1,2,3,4,22,33,44,55,66]
let niilber = 0
function dundaj(){
    for(let i = 0 ; i < too.length ; i++){
        niilber += too[i]
    }
    
    return niilber / too.length
}
console.log(dundaj())
function primenumber(){
    const n = Number(prompt('too oruulna uu'))
    if(n == 1){
        console.log('it is not prime number')
    }else if(n > 1){
        for(let i = 2 ; i < n ; i++){
            if(n % i == 0){
                return  n , 'it is not prime number'
            }
        }
        return n , 'it is prime number'
    }else {
        return ' it is not prime number'
    }
}
console.log(primenumber())
function upperCase(){
    const j = prompt('ugee oruulna uu')
    return j.toUpperCase()
}
console.log(upperCase())
function lowerCase(){
    const j = prompt('ug oruul')
    return j.toLowerCase()
}
console.log(lowerCase())

