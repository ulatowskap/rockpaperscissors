let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const papier_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function convert(letter) {
    if (letter === "r") return "Kamień";
    if (letter === "p") return "Papier";
    return "Nożyce"
}

function convert2(letter) {
    if (letter === "r") return "Kamienia";
    if (letter === "p") return "Papieru";
    return "Nożyc"
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convert(userChoice) + " pokonuje " + convert(computerChoice) + ". Wygrałeś :)";
    document.getElementById(userChoice).classList.add("green-glow");

}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convert(userChoice) + " nie pokonuje " + convert2(computerChoice) + ". Przegrałeś :(";
}

function draw() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Twój wybór jest taki sam, jak komputera - remis!"
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
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
    rock_div.addEventListener("click", function () {
        game("r")
    })
    papier_div.addEventListener("click", function () {
        game("p")
    })
    scissors_div.addEventListener("click", function () {
        game("s")
    })
}

main();