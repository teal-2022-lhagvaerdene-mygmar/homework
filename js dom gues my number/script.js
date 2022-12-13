let too =  Math.floor(Math.random() * 20) + 1 
const messageEl = document.getElementsByClassName('message')[0]
const scoreEl = document.getElementsByClassName('score')[0]
const inputEl = document.getElementsByTagName( 'input')[0]
const buttons = document.getElementsByTagName( 'button')
const highScore = document.getElementsByClassName("highscore")[0]
function buttonEl(){
    const inputValue = Number(inputEl.value)
    const scoreText = Number(scoreEl.innerHTML)
    const highNumber = Number(highScore.innerHTML)
    if(isNaN(inputValue)){
      messageEl.innerHTML = 'too oruulna uu'       
    }else{
        if(inputValue > too){
            if(scoreText - 1 === 0){
                afterlose()
            }else{
                messageEl.innerHTML = 'ih baina'
            }
            scoreEl.innerHTML = scoreText - 1
        }else if(inputValue < too){
            if(scoreText - 1 === 0){
               afterlose()
            }else{
                messageEl.innerHTML = ' baga baina'
            }
            scoreEl.innerHTML = scoreText - 1
        }else{
            messageEl.innerHTML = 'zov taalaa'
            document.body.style.backgroundColor = '#60b347'
            buttons[1].style.display = 'none'
            if(scoreText > highNumber){
                highScore.innerHTML = scoreText
            }
        }
    }
}
function afterlose(){
    messageEl.innerHTML = "ta hojigdloo"
    buttons[1].style.display = 'none';
}
function resetGame(){
    too = Math.floor(Math.random() * 20) + 1  
    scoreEl.innerHTML = 20
    inputEl.value = ''
    document.body.style.backgroundColor = '#222'
    buttons[1].style.display = 'block'
}