const playerE1 = document.getElementById("player")
const computerE1 = document.getElementById("computer")
const resultE1 = document.getElementById("result")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorBtn = document.getElementById("scissor")
const draws = document.getElementById("draw1")
const player = document.getElementById("player1")
const computer = document.getElementById("computer1")
const reset = document.getElementById("reset")

let playerChoice = ""
let computerChoice = ""
let result = ""
let draw = 0
let playerWins = 0
let computerWins = 0

function computerCh(){
    let randomNum = Math.floor(Math.random()*3)+1
    
    switch(randomNum){
        case 1:
            computerChoice = "Rock"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissor"
             break;
    }
    computerE1.textContent = `Computer: ${computerChoice}`
    
}

function checkResult(){
    if(playerChoice === computerChoice){
        result = "Draw!"
        
    }
    else if(playerChoice === "Rock" && computerChoice === "Scissor"){
        result = "You win!"
        
    }
    else if(playerChoice === "Rock" && computerChoice === "Paper"){
        result = "Computer wins!"
       
    }
    else if(playerChoice === "Paper" && computerChoice === "Scissor"){
        result = "Computer wins!"
        
    }
    else if(playerChoice ==="Paper" && computerChoice === "Rock"){
        result = "You win!"
        
    }
    else if(playerChoice === "Scissor" && computerChoice === "Paper"){
        result = "You win!"
        
    }
    else if(playerChoice === "Scissor" && computerChoice === "Rock"){
        result = "Computer wins!"
    }
    else{
        result = "Something went wrong"
    }

    resultE1.textContent = `Result: ${result}`

    if(result === "Draw!"){
        draw++
    }
    else if(result === "You win!"){
        playerWins++
    }
    else if(result === "Computer wins!"){
        computerWins++
    }
    else{
        result = "Something went wrong"
    }

    draws.innerText = `Draws: ${draw}`
    player.innerText = `Player won: ${playerWins}`
    computer.innerText = `Computer won: ${computerWins}`

}

rockBtn.addEventListener('click',()=>{
    playerChoice = "Rock"
    playerE1.innerText = `Player: ${playerChoice}`
    computerCh()
    checkResult()

})

paperBtn.addEventListener('click',()=>{
    playerChoice = "Paper"
    playerE1.innerText = `Player: ${playerChoice}`
    computerCh()
    checkResult()

})

scissorBtn.addEventListener('click',()=>{
    playerChoice = "Scissor"
    playerE1.innerText = `Player: ${playerChoice}`
    computerCh()
    checkResult()

})

reset.addEventListener('click',()=>{
    playerChoice = ""
    playerE1.innerText = `Player: ${playerChoice}`

    computerChoice = ""
    computerE1.textContent = `Computer: ${computerChoice}`

    result = ""
    resultE1.textContent = `Result: ${result}`

    draw = 0
    draws.innerText = `Draws: ${draw}`

    playerWins = 0
    player.innerText = `Player won: ${playerWins}`

    computerWins = 0
    computer.innerText = `Computer won: ${computerWins}`
})


















// const count = document.getElementById("count")
// const addition = document.getElementById("add")
// let counter = 0
// function add(){
//     counter++
//     count.innerText = `Counter is ${counter}`
// }

// addition.addEventListener('click',add)