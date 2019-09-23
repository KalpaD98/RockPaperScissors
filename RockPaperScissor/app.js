//normal variables
var userScore = 0;
var computerScore = 0;

//DOM variables
//caching the DOM 
//storing all things in variables so we can use it easeir
//querySelector is more useful when you want to use more complex selectors.

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_dic = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3)); // will vary 0,1,2
    return choices[randomNumber];
}

function convertLetterToWord(letter) {
    if (letter === 'r') return "rock";
    if (letter === 'p') return "paper";
    return "scissor";
}


function win(userChoice, computerChoice) {

    const smallYourWord = "Your".fontsize(3).sup();
    const smallComputersWord = "Computer\'s".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${smallYourWord} ${convertLetterToWord(userChoice)} Beats ${smallComputersWord}  ${convertLetterToWord(computerChoice)} You Won 🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(function() { userChoice_div.classList.remove("green-glow") }, 300);

}

//setTimeout(function() { console.log("hello") }, 3000);

function lose(userChoice, computerChoice) {
    const smallYourWord = "Your".fontsize(3).sup();
    const smallComputersWord = "Computer\'s".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);


    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;


    result_p.innerHTML = `${smallYourWord} ${convertLetterToWord(userChoice)} Loses to ${smallComputersWord}  ${convertLetterToWord(computerChoice)} You Lost ⚠️`;
    userChoice_div.classList.add("red-glow");
    setTimeout(function() { userChoice_div.classList.remove("red-glow") }, 300);

}

function draw(userChoice) {
    const smallDamnWord = "Damn!".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = ` ${smallDamnWord}  Draw 🤷‍ `;
    userChoice_div.classList.add("grey-glow");
    setTimeout(function() { userChoice_div.classList.remove("grey-glow") }, 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;


        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;


        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }

}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main();