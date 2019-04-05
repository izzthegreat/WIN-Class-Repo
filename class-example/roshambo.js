//Create a game of 'Rock Paper Scissors' that runs until one player has three wins
//    Store the player names and number of wins for each player in variables
//    Use a while loop to run the game until one player has 3 wins
//    Use the following code to randomly select a weapon
var weapons = ["rock", "paper", "scissors"];
var weaponOfChoice = weapons[Math.floor(Math.random() * weapons.length)];
let pName1="Izzy";
let pName2="Ben";
var pScore1=0;
var pScore2=0;

// for (let i=0; i<10; i++){
while (pScore1 < 3 && pScore2 < 3) {
    var pWeapon1 = weapons[Math.floor(Math.random() * weapons.length)];
    var pWeapon2 = weapons[Math.floor(Math.random() * weapons.length)];
    console.log (pWeapon1 + "-" + pWeapon2);
 if (pWeapon1 === "rock" && pWeapon2 === "scissors" || pWeapon1 === "scissors" && pWeapon2 === "paper" || pWeapon1 === "paper" && pWeapon2 === "rock"){
        console.log (pName1 + " Wins");
        pScore1 ++;
    } else if (pWeapon1 === "rock" && pWeapon2 === "paper" || pWeapon1 === "scissors" && pWeapon2 === "rock" || pWeapon1 === "paper" && pWeapon2 === "scissors"){
        console.log (pName2 + " Wins");
        pScore2 ++;
    } else {
        console.log ("Tie, Nobody Wins");
    }
    console.log (pName1 + "-" + pScore1);
    console.log (pName2 + "-" + pScore2);

    // if (pScore1 === 3 || pScore2 === 3) {break;}
} 


if (pScore1 > pScore2) {
    console.log (pName1 + " is the winner!")
} else if (pScore2 > pScore1) {
    console.log (pName2 + " is the winner!")
}   

//    Output each players hand to the console
//    Use an if or switch statement to determine a winner of the round
//    Output the round winner's name to the console
//    Create a way to track how many rounds each player has won
//    When one player wins 3 rounds, announce that player's name as the game winner
//    Push the code to our class GitHub Repo
//    See below for all possible winning outcomes

