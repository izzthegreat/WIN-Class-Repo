const hands = ['Rock','Paper','Scissors']
function getHand() {return hands[parseInt(Math.random()*10)%3]}

let pScore1 = 0
let pScore2 = 0
let tWins = 0
let tLosses = 0

let player1 = {name:'', hand:''};
let player2 = {name:'SkyNet', hand:''};

function clearScore () {
    pScore1 = 0
    pScore2 = 0
    document.getElementById("output3").innerHTML = (player1.name + " : " + pScore1 + " - " + player2.name + " : " + pScore2)
}

function playRound (rPlayer1,rPlayer2) {
    rPlayer2.hand = getHand () //Choose Rock, Paper, or Scissors for rPlayer2
    document.getElementById("output1").innerHTML = (rPlayer1.name + " plays " + rPlayer1.hand + " & " + rPlayer2.name + " plays " + rPlayer2.hand);
    //Begin Winner Declaration
    if (rPlayer1.hand == "Rock" && rPlayer2.hand == "Scissors" || rPlayer1.hand == "Scissors" && rPlayer2.hand == "Paper" || rPlayer1.hand == "Paper" && rPlayer2.hand == "Rock"){ 
        document.getElementById("output2").innerHTML = (rPlayer1.name + " Wins");
        pScore1 ++;
    } else if (rPlayer1.hand == "Rock" && rPlayer2.hand == "Paper" || rPlayer1.hand == "Scissors" && rPlayer2.hand == "Rock" || rPlayer1.hand == "Paper" && rPlayer2.hand == "Scissors"){
        document.getElementById("output2").innerHTML = (rPlayer2.name + " Wins");
        pScore2 ++;
    } else {
        document.getElementById("output2").innerHTML = ("Tie, No Winner ");
    } //End Winner Declaration
    document.getElementById("output3").innerHTML = (rPlayer1.name + " : " + pScore1 + " - " + rPlayer2.name + " : " + pScore2)
    if (pScore1 == 5 ) {
        window.alert ("You Win!!!")
        tWins++
        clearScore ()
    } else if (pScore2 == 5 ) {
        window.alert ("Our robot overlords have begun their domination.")
        window.alert ("All Hail the Robot Overlords!!!")
        tLosses++
        clearScore () 
    } //Tornament Win Declaration
    document.getElementById("output4").innerHTML = "Wins: " + tWins + "   Losses: " + tLosses   
}   //End playRound function

player1.name = prompt("What is your name?")
document.getElementById("playerName").innerHTML = player1.name

function playRPS () {
    player1.hand = prompt("Rock, Paper, or Scissors?")
    playRound(player1,player2)
}

document.getElementById("playgame").addEventListener ("click",function(){playRPS()})
document.getElementById("reset").addEventListener ("click", function(){clearScore()}) 