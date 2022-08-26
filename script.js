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


// at the start of the page hide the elements with display-none
document.querySelector('main').style.display = "none"
endOfGameContainer.style.display ="none";
yourScoreContainer.style.display ="none"
computerScoreContainer.style.display ="none"


// create the elements (your choice, computer choice, your score, 
  // computer score, end game element)
// give the elements a class with classList.add
// append them to the Parent 

//const yourChoiceElement = document.createElement('div');
//yourChoiceElement.classList.add = ('your-choice');
//yourChoiceContainer.appendChild(yourChoiceElement);

//const computerChoiceElement = document.createElement('div');
//computerChoiceElement.classList.add = ('computer-choice');
//computerChoiceContainer.appendChild(computerChoiceElement) 

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


const endOfGameElement = document.querySelector('#end-of-game-element');
//endOfGameContainer.appendChild(endOfGameElement);


// Helper Function for getting Computer Choice
// write a math.random method for getting a random number (choice) between 0 and 2
  // if choice equals 1 then computer Choice becomes paper
  // else the computer Choice becomes scissors
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
  // enable the newgame button 
  // disable the rock paper scissors buttons
  // hide (display none) the main elements
  // show (display block) the end game elements
  // compare the scores together after one of it hits 5
    // if your score is higher you win, if comp score is hihger you lose

let endingTheGame = () =>{
  if (yourScore === 5 || compScore === 5){
    document.querySelector('main').style.display = "none"
    endOfGameContainer.style.display ="block"

    if (yourScore>compScore){
    endOfGame = "you Won the game"
    }
  else if (yourScore<compScore){
    endOfGame = "you Lost the game"
    }
    return endOfGame 
  } 
}


// Helper Function for binding textcontent and image
// give the created html elements appropiate text content
  // to show the results on page


  let writeContent = () =>{
    getYourChoiceImage  ()
    getComputerChoiceImage()
   
  

  
    yourScoreElement.textContent= yourScore   
    compScoreElement.textContent= compScore  
    endOfGameElement.textContent= endOfGame
  }
  

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
 // yourChoiceElement.textContent = ""
  //computerChoiceElement.textContent= "";
  yourScoreElement.textContent= "";
  compScoreElement.textContent= "";
  endOfGameElement.textContent= ""
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  //newGameButton.disabled=true;
  document.querySelector('main').style.display = "block"
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
    



