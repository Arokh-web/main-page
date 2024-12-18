// setting main variables
let userInput = process.argv.slice(2)
let random = Math.random()
let computer = ""
// console.log(args)

// Error Handling
    // Error Message: Wrong Input (no string, not enough items)
if (userInput.length !== 1 && userInput[0] == typeof(String)) {
    console.error("Please provide exactly one argument as text: Rock, Paper or Scissors!"); 
}

    // Error Message: No valid Word
if (userInput[0].toLowerCase() === "rock" || userInput[0].toLowerCase() === "paper" || userInput[0].toLowerCase() === "scissors") {
    console.log(`You chose: ${userInput}`)
    userInput = userInput[0].toLowerCase()
} else {
    return console.error(`Your word is not processable. It is: ${userInput}. Please write Rock, Paper or Scissors!`) 
}

// Computer Move: Random Number
if (random <= 0.3) {
     computer = "Rock"
} else if (random <= 0.6) {
     computer = "Paper"
} else if (random <= 1.0) {
     computer = "Scissors"
}

// Computer Move: Output
    // console.log(random)
console.log(`The Computer chose: ${computer}`)

// Tie - no one wins OR user wins OR computer wins.
if (computer.toLowerCase() === userInput) {
    return console.log(`You chose ${userInput}. I chose ${computer}. No one wins!`)
} else if (userInput.toUpperCase() === "Rock" && computer === "Scissors" || userInput.toUpperCase() === "Paper" && computer === "Rock" || userInput.toUpperCase() === "Scissors" && computer === "Paper") {
    console.log("You win!")
} else {
    console.log("You lose!")
}

// Tryout, another random thing
// const moves = ["rock", "paper", "scissors"]
// creates a random 0,... number, times 3, then rounds it up or down --> in this case, it is used as an index
// let computerMove = moves[Math.floor(Math.random() *3)] 


// switch (args){
//     case "scissors":
//         console.log(`You chose ${args}. I chose rock. You lose!`)
//         break;
//     case "rock":
//         console.log(`You chose ${args}. I chose paper. You lose!`)
//         break;
//     case "paper":
//         console.log(`You chose ${args}. I chose scissors. You lose!`)
//         break;
//     default:
//         console.log("Your word could not be processed. An error occured.")}


// if (args === "rock") {
//     console.log(`You chose ${args}.I chose paper. You lose!`)
// } else if (args === "scissors") {
//     console.log(`You chose ${args}.I chose rock. You lose!`)
// } else (args === "paper"); {
//     console.log(`You chose ${args}.I chose scissors. You lose!`)
// }
// const outcome = args((element) => element === "rock")
// const num1 = parseFloat(args[0]);
// const num2 = parseFloat(args[1]);

// if (isNaN(num1) || isNaN(num2)) {
//     console.error("Both arguments must be numbers!");
//     return;
// } else {
// const sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}!`)
// }