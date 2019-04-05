// 1. Define a `hands` array with the values 'rock', 'paper', and 'scissors';
// 2. Define a function called `getHand()` that returns a hand from the array using `parseInt(Math.random()*10)%3`
// 3. Define two objects for two players. Each player has `name` and `getHand()` properties.
// 4. Define a function called `playRound()` that
// - Takes two player objects as arguments
// - Gets hands from each
// - Determines the winner
// - Logs the hands played and name of the winner.
// - If its a tie, log the hands played and "it's a tie".
// - Returns the winner object (null if no winner)
// 5. Define a function called `playGame()` that takes arguments `player1`, `player2`, and `playUntil`.
// - Play rounds until one of the players wins `playUntil` hands
// - When one player has won enough games, return the winning player object
// 6. Play a game to 5 wins

const hands = ['Rock','Paper','Scissors']
function getHand() {return hands[parseInt(Math.random()*10)%3]}

let pScore1 = 0
let pScore2 = 0

let player1 = {name:'Izzy', hand:''};
let player2 = {name:'Ben', hand:''};
let player3 = {name:'Taylor', hand:''};
let player4 = {name:'Torrie', hand:''};

function playRound (rPlayer1,rPlayer2) {
    rPlayer1.hand = getHand() //Choose Rock, Paper, or Scissors for rPlayer1
    rPlayer2.hand = getHand() //Choose Rock, Paper, or Scissors for rPlayer2
    console.log (rPlayer1.name + " plays " + rPlayer1.hand + " & " + rPlayer2.name + " plays " + rPlayer2.hand);
    //Begin Winner Declaration
    if (rPlayer1.hand === "Rock" && rPlayer2.hand === "Scissors" || rPlayer1.hand === "Scissors" && rPlayer2.hand === "Paper" || rPlayer1.hand === "Paper" && rPlayer2.hand === "Rock"){ 
        console.log (rPlayer1.name + " Wins");
        pScore1 ++;
    } else if (rPlayer1.hand === "Rock" && rPlayer2.hand === "Paper" || rPlayer1.hand === "Scissors" && rPlayer2.hand === "Rock" || rPlayer1.hand === "Paper" && rPlayer2.hand === "Scissors"){
        console.log (rPlayer2.name + " Wins");
        pScore2 ++;
    } else {
        console.log ("Tie, No Winner ");
    } //End Winner Declaration
}   //End playRound function

function playGame (gPlayer1,gPlayer2,playUntil) {
    while (pScore1<playUntil && pScore2<playUntil){ //While plays roshambo untill a player's score is playUntil 
        playRound(gPlayer1,gPlayer2);
    }
    console.log (pScore1 + " to " + pScore2)   
    if (pScore1 == playUntil) { //Determines and returns winner of the game.
        return gPlayer1
    } else if (pScore2 == playUntil) {
        return gPlayer2
    }  
}   //End playGame function

function playTournament (tPlayer1,tPlayer2,tPlayer3,tPlayer4,tWinScore) {
    var tWinner1 = playGame (tPlayer1,tPlayer2,tWinScore); //Tournament Round 1
    console.log (tWinner1.name + " Wins the 1st Game")
    pScore1 = 0; pScore2 = 0;  
    var tWinner2 = playGame (tPlayer3,tPlayer4,tWinScore); //Tournament Round 2
    console.log (tWinner2.name + " Wins the 2nd Game")
    pScore1 = 0; pScore2 = 0;
    var tWinner = playGame (tWinner1,tWinner2,tWinScore); //Tournament Finals
    console.log (tWinner.name + " Wins it all!") 
}   //End playTournament Function

playTournament(player1,player2,player3,player4,5)