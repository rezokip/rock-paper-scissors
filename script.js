// get id with querry Selector
const resultsContainer = document.querySelector('#results-container');
const yourChoiceContainer = document.querySelector('#your-choice-container');
const computerChoiceContainer = document.querySelector('#computer-choice-container');
const yourScoreContainer = document.querySelector('#your-score-container');
const computerScoreContainer= document.querySelector('#computer-score-container');
const endOfGameContainer = document.querySelector('#end-of-game-container')

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playGameButton = document.querySelector('#playgame-button')
const newGameButton = document.querySelector('#newgame-button')


const endOfGameElement = document.querySelector('#end-of-game-element');
// at the start of the page hide the elements with display-none
document.querySelector('main').style.display = "none"
endOfGameContainer.style.display ="none";
yourScoreContainer.style.display ="none"
computerScoreContainer.style.display ="none"


// create the elements 
// give the elements a class with classList.add
// append them to the Parent 

const yourScoreElement = document.createElement('p');
yourScoreElement.classList.add = ('your-score');
yourScoreContainer.appendChild(yourScoreElement);

const compScoreElement = document.createElement('p');
compScoreElement.classList.add = ('computer-score')
computerScoreContainer.appendChild(compScoreElement);

const yourChoiceImage= document.createElement('img')
yourChoiceContainer.appendChild(yourChoiceImage)

const computerChoiceImage = document.createElement('img')
computerChoiceContainer.appendChild(computerChoiceImage)



// Helper Function for getting Computer Choice
  // write an choice array with [rock,paper,scissors]
  // computerChoice equals a random number between the array 
  // write a math.random method for getting a random number (choice) between 0 and 2
  
// return the computer Choice

function getComputerChoice()  {  
  let choice = ['rock', 'paper', 'scissors']
  
  computerChoice = choice[Math.floor(Math.random()*3)];
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
  // hide (display none) the main elements
  // show (display block) the end game elements
  // compare the scores together after one of it hits 5
    // if your score is higher you win, if comp score is hihger you lose

let endingTheGame = () =>{
  if (yourScore === 5 || compScore === 5){
    
    document.querySelector('#r-p-s-container').style.display ="none"
    endOfGameContainer.style.display ="flex"

    if (yourScore>compScore){
    endOfGame = "you Won the game"
    endOfGameElement.style.color ="green"
    }
  else if (yourScore<compScore){
    endOfGame = "you Lost the game"
    endOfGameElement.style.color ="red"
    }
    return endOfGame 
  } 
}


// Helper Function for binding textcontent and image
  // call getYourChoiceImage and getComputerChoiceImage
  // give the created html elements appropiate text content
  // to show the results on page


  let writeContent = () =>{
    getYourChoiceImage  ()
    getComputerChoiceImage()
    yourScoreElement.textContent= yourScore   
    compScoreElement.textContent= compScore  
    endOfGameElement.textContent= endOfGame
  }
  
// Helper functions for getting your choice image and computer choice images
  // if player Choice is rock then image equals rock and so on
let getYourChoiceImage = () =>{
  if (playerChoice === "rock"){
    yourChoiceImage.src = "images/rock.jpg"
  }
  else if(playerChoice==="paper"){
    yourChoiceImage.src = "images/paper.png"
  }
   else if(playerChoice==="scissors") {
    yourChoiceImage.src = "images/scissor.jpg"
   }
}

let getComputerChoiceImage = () =>{
  if (computerChoice === "rock"){
    computerChoiceImage.src = "images/rock.jpg"
  }
  else if(computerChoice==="paper"){
    computerChoiceImage.src = "images/paper.png"
  }
   else if(computerChoice==="scissors") {
    computerChoiceImage.src = "images/scissor.jpg"
   } 
}
// write a function for playRound
//call the Helper Functions
function playRound(){
  
  getComputerChoice()
  getResult()
  compareResult() 
  endingTheGame()
  writeContent()
}


// write an Event Listener click for every button
  // after getting the click, look in the function(e) 
  // show the your Choice Image and Computer choice image with display block
  // give your Choice Contaiener and Comptuer Choice container border with color
  // initialize the playerChoice to the appropriate button
  // call the PlayRound function
rockButton.addEventListener('click', function(e){ 
  yourChoiceImage.style.display ="block"
  yourChoiceContainer.style.border ="solid green"
  computerChoiceImage.style.display="block"
  computerChoiceContainer.style.border="solid red"
  playerChoice = rockButton.id
  playRound()
});

paperButton.addEventListener('click', function(e){
  yourChoiceImage.style.display ="block"
  yourChoiceContainer.style.border ="solid green"
  computerChoiceImage.style.display="block"
  computerChoiceContainer.style.border="solid red"
  playerChoice = paperButton.id
  playRound()
});

scissorsButton.addEventListener('click', function(e){
  yourChoiceImage.style.display ="block"
  yourChoiceContainer.style.border ="solid green"
  computerChoiceImage.style.display="block"
  computerChoiceContainer.style.border="solid red"
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
  document.querySelector('main').style.display = "block"
  document.querySelector('#r-p-s-container').style.display ="flex"
  yourScoreElement.textContent = ""
  compScoreElement.textContent =""
  yourChoiceImage.style.display ="none"
  computerChoiceImage.style.display="none"
  endOfGameContainer.style.display="none"
  yourChoiceContainer.style.border="none"
  computerChoiceContainer.style.border="none"
} )


// write an event listener click for playgame button
  //after pressing the button, hide the button with display-none
  //after pressing the button, display the main element with display-block
playGameButton.addEventListener('click', () =>{
  document.querySelector('main').style.display = "block"
  yourScoreContainer.style.display ="flex"
  computerScoreContainer.style.display ="flex"
  document.querySelector('h1').style.display = "none" 
  playGameButton.style.display = "none"
})















 let yourScore = 0
 let compScore = 0
 let endOfGame





