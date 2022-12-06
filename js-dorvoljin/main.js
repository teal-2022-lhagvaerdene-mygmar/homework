const num = 13
let output = ''
for(i = 1; i <= num; i++){
    for(j = 1 ; j <= num; j++){
        if(i == 1 || i == num || j == 1 || j == num || j == i || num + 1 == i + j ){
            output += '* '
        }else{
            output += '  '
        }
    }
    output += '\n'
}
console.log(output)