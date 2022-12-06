// console.log('day 15 array')
// let playersFrance = ['llo','kou','var','upa','her','tch','rab','dem','gri','mba','gir']
// let playersPoland = ['szc','cas','gli','kiw','ber','kry','kam','zie','szy','fra','lew']
// playersFrance[2] = 'par'
// console.log(playersFrance[2])
// for( let i = 0 ; i <= playersFrance.length ; i++){
//     console.log(playersFrance[i])
// }
// for( let k = 0 ; k <= playersPoland.length ; k++){
//     console.log(playersPoland[k])
// }





let shatar = [[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8]]
console.log(shatar)
let xbox = [['*', '*', '*'],['*', '*','*'],['*','*','*']]
let output = ""
for(let i = 0 ; i < xbox.length ; i++){
    output 
    for(let j = 0; j < xbox[i].length ; j++){
        output = output + ' | ' + xbox[i][j] + ' | '
        if(j == xbox[i].length - 1){
            output = output = '\n'
        }

    }
}
