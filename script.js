// write a var for computerChoice
// write a funktion for getting the Computer choice (getComputerChoice)
// write a math.random method for getting a random number (choice) between 0 and 2
  // if choice equals 0 then computer Choice becomes rock
  // if choice equals 1 then computer Choice becomes paper
  // else the computer Choice becomes scissors
// return the computer Choice

let computerChoice

function getComputerChoice()  {  
  let choice= Math.floor(Math.random()*3)
  if(choice===0){
    computerChoice= 'rock'
  }
  else if (choice===1){
    computerChoice ='paper'
  }
  else {
    (computerChoice='scissors')
  }
  return("Computer Choice", computerChoice)
}



// write a var for playerChoice
// write a funktion for playRound
// call the getComputerChoice inside the playRound function (to be able to compare player and computer...)
// compare the player choice and computer choice together
  // if the choices are equal, then result is "tie"
  /*if the player choice is rock && the computer choice is scissors 
    OR|| the player choice is paper && the computer choice is rock
    OR|| the player choice is scissors && the computer choice is paper
    then result is "you won"*/
  // else result is "you lose"
// return the result

let playerChoice 
   
function playRound(){
  getComputerChoice()
  if(playerChoice === computerChoice){
    result="tie"
  } 
  else if((playerChoice ==="rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")){
    result="you won"
  }
  else {
    result="you lose"
  }  
  return result
}



// write a var called yourScore and compScore to compare the scores 
// write a loop that runs 5 times (a game goes 5 times)
  // every loop the player gets a prompt massage to pick his choice
  // call the PlayRound funktion inside the loop to play one round
  // the player needs to be able to see his choice, computer choice and the result (console.log)
  // if you get a point (result equals "you won") yourscore increments by one 
  // if the computer gets a point (result equals "you lose") his score incements by one
  // the player needs to be albe to see compScore and yourScore (console.log)
// after the loop compare yourScore and compScore
// if yourScore is greater then compScore then you win the game
// if yourScore is less then compScore then you lose the game
// if yourScore equals compScore then the game is a Tie
// the player needs to be able to see what the end of the game is (console.log) 


 let yourScore = 0
 let compScore = 0
 let endOfGame

 function game(){
  for (let i = 0; i<5; i++){
    console.log("player Choice", playerChoice =  prompt("what is your choice?").toLowerCase());
    playRound();
    console.log("Computer Choice",computerChoice )
    console.log(result)
      if (result === "you won"){
        yourScore ++ 
      }
      else if (result === "you lose"){
        compScore ++
      }
    console.log(yourScore, "your Score")  
    console.log(compScore, "comp Score")
  }
  if (yourScore>compScore){
    endOfGame = "you Won the game"
  }
  else if (yourScore<compScore){
    endOfGame = "you Lost the game"
  }
  else {
    endOfGame = "the game is a tie"
  }
  console.log(endOfGame)
}

  game() 

    