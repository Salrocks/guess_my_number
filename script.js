'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let current_score = 20;
let high_score = 0;


document.querySelector(".check").addEventListener("click", function() 
{
const guess = Number(document.querySelector(".guess").value);
if (!guess) {
    document.querySelector(".message").textContent = "No Number 🙅🏼‍♂️ "
} 

else if (number === guess){
    document.querySelector(".message").textContent = "Correct Number! 🎉";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (current_score > high_score) {
        high_score = current_score;
        document.querySelector(".highscore").textContent = high_score;
}}else if (number !== guess){
            if (current_score > 1) {
                document.querySelector(".message").textContent = number > guess ? "Too Low 📉" : "Too High 📈";
                current_score--;
                document.querySelector(".score").textContent = current_score;} 
            else {
            document.querySelector(".message").textContent = "You Lost the game! 🙁";
            document.querySelector(".score").textContent = 0;}
        
        }
    }
)



document.querySelector(".again").addEventListener("click", function() {
current_score = 20;
document.querySelector(".score").textContent = current_score;
document.querySelector(".message").textContent = "Start guessing...";
number = Math.trunc(Math.random() * 20) + 1;
document.querySelector("body").style.backgroundColor = "#222";
document.querySelector(".number").style.width = "15rem";
document.querySelector(".number").textContent = "?";
document.querySelector(".guess").value = "";
}
);
