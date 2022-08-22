
// get button ids with querrySelector
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// get display-results id with querry Selector
const resultsContainer = document.querySelector('#results-container')

// create the elements (your choice, computer choice, your score, 
  // computer score, result this round, end result, new game button)
// give the elements a class with classList.add
// append them to the Parent (display-results)
const yourChoiceElement = document.createElement('p');
yourChoiceElement.classList.add = ('your-choice');
resultsContainer.appendChild(yourChoiceElement);

const computerChoiceElement = document.createElement('p');
computerChoiceElement.classList.add = ('computer-choice');
resultsContainer.appendChild(computerChoiceElement) 

const roundResultElement = document.createElement('p');
roundResultElement.classList.add = ('round-result');
resultsContainer.appendChild(roundResultElement);

const yourScoreElement = document.createElement('p');
yourScoreElement.classList.add = ('your-score');
resultsContainer.appendChild(yourScoreElement);

const compScoreElement = document.createElement('p');
compScoreElement.classList.add = ('computer-score')
resultsContainer.appendChild(compScoreElement);

const endOfGameElement = document.createElement('p');
endOfGameElement.classList.add = ('computer-score')
resultsContainer.appendChild(endOfGameElement);

const newGameButton=document.createElement('button')
newGameButton.classList.add ='newgame-button';
newGameButton.textContent = 'Try Again'
resultsContainer.appendChild(newGameButton)
newGameButton.disabled=true;

// Helper Function for getting Computer Choice
// write a math.random method for getting a random number (choice) between 0 and 2
  // if choice equals 1 then computer Choice becomes paper
  // else the computer Choice becomes scissors
// return the computer Choice

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


// Helper Function to getting result
// compare the player choice and computer choice together
// if the choices are equal, then result is "tie"
// else if compare every posibility to win with (&& and || operator) 
  //then the result is you won
// else result is "you lose"

let getResult =() =>{
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
 return result;
}


// Helper Function for comparing result
let compareResult = () =>{
  if (result === "you won"){
    yourScore ++ 
  }
  else if (result === "you lose"){
    compScore ++
  }
}


// Helper Function for comparing scores and ending the game
// look if one of it hits 5 
  // enable the newgame button 
  // disable the rock paper scissors buttons
  // compare the scores together after one of it hits 5
    // if your score is higher you win, if comp score is hihger you lose

let compareScore = () =>{
  if (yourScore === 5 || compScore === 5){
    newGameButton.disabled=false;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if (yourScore>compScore){
    endOfGame = "you Won the game"
    }
  else if (yourScore<compScore){
    endOfGame = "you Lost the game"
    }
    return endOfGame 
  } 
}


// Helper Function for binding textcontent
// give the created html elements appropiate text content
  // to show the results on page
let writeTextContent = () =>{
  yourChoiceElement.textContent ="you chose " + playerChoice;
  computerChoiceElement.textContent= "computer chose " + computerChoice;
  roundResultElement.textContent= result + " this round"
  yourScoreElement.textContent= " your Score: " + yourScore   
  compScoreElement.textContent= "computer Score: " + compScore  
  endOfGameElement.textContent= endOfGame
}


// write a function for playRound
// call the Helper Functions
function playRound(){
  getComputerChoice()
  getResult()
  compareResult()
  compareScore()
  writeTextContent()
}


// write an Event Listener click for every button
  // after getting the click, look in the function(e) 
  // initialize the playerChoice to the appropriate button
  // call the PlayRound function
rockButton.addEventListener('click', function(e){ 
  playerChoice = rockButton.id
  playRound()
});

paperButton.addEventListener('click', function(e){
  playerChoice = paperButton.id
  playRound()
});

scissorsButton.addEventListener('click', function(e){
  playerChoice = scissorsButton.id
  playRound()
});

// write an Event Listener click for the newGame button
  // after pressing the button, set the scores to 0,
  // reset the Text content
  // enable the rock, paper, scissors button and disable the try again button
newGameButton.addEventListener('click', () =>{
  yourScore = 0;
  compScore = 0;
  yourChoiceElement.textContent ="you chose " + playerChoice;
  computerChoiceElement.textContent= "computer chose " + computerChoice;
  roundResultElement.textContent= result + " this round"
  yourScoreElement.textContent= " your Score: " + yourScore   
  compScoreElement.textContent= "computer Score: " + compScore  
  endOfGameElement.textContent= endOfGame
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  newGameButton.disabled=true;
} )

















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

 /*function game(){
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
*/
    