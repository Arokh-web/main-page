//English to pig translator

// setting variables and managing the input
let userInput = process.argv.slice(2);
let inputType;
let userInputString;
const consonant = ["B", "b", "C", "c", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
const vowel = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
let FirstChar;
let SecChar;
let userOutput = [];
let outcomeWord;

// Program-Run
errorHandler1()
wordcheck()

// Error Handling and Reducing - VERSION ONE without Switch
    // Error Message: Wrong Input (empty, only numbers, correct input)
    function errorHandler1() {
    if (userInput.length === 0) {
        console.error("Please write something. This is a translator! It needs input!");
    } else if (userInput.every(i => !isNaN(Number(i)))) {
        let userInputString = userInput.join(" ")
        console.log(`Your input was: ${userInputString}`); 
        console.log("You only wrote numbers. But we need text?!")
    } else {
        let userInputString = userInput.join(" ")
        return console.log(`Your input was: ${userInputString}`); 
    }}

// console.log(userInputString)

// Error Handling and Reducing - VERSION TWO with Switch
    // Error Message: Wrong Input (empty, only numbers, correct input)
    function errorHandler2() {
    if (userInput.length === 0) {
        inputType = "empty";
    } else if (userInput.every(i => !isNaN(Number(i)))) {
        inputType = "numbers";
    } else {
        inputType = "text";
    }

switch (inputType) {
    case "empty":
        console.error("Please write something. This is a translator! It needs input!");
        break;

    case "numbers":
        userInputString = userInput.join(" ");
        console.log(`Your input was: ${userInputString}`);
        console.log("You only wrote numbers. But we need text?!");
        break;

    case "mixed":
        userInputString = userInput.join(" ");
        console.log(`Your input was: ${userInputString}`);
        console.log("You provided a mix of numbers and text. Please stick to one type!");
        break;
    
    case "text":
        userInputString = userInput.join(" ");
        console.log(`Your input was: ${userInputString}`);
        break;
    
    default:
        console.error("Unknown error occurred!");
        break;
    }}

// Here starts the first check: 


// The LETTERCHECK
function vowelCheck (vowel, SecChar) {
    for (i of vowel) {
        if (SecChar === i)
            return true
}}

function consonantCheck (consonant, FirstChar) {
    for (i of consonant) {
        if (FirstChar === i)
            return true;
    }}

    // The WORDCHECK
    // If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
    // Example: Happy = appyh + ay = appyhay
    // If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
// Example: Child = Ildch + ay = Ildchay
// If a word starts with a vowel add the word “way” at the end of the word.
// Example: Awesome = Awesome +way = Awesomeway
function wordcheck (userOutput) {
    for (word of userInput) {
    FirstChar = word.slice(0, 1).toLowerCase();
    SecChar = word.slice(1, 2);
    console.log(FirstChar)
    // console.log("Grundwort: ", word)
    if (vowelCheck(vowel, FirstChar)) {
        console.log("First char is a vowel: ", word)
        outcomeWord = word + "way";
    } else if (consonantCheck(consonant, FirstChar) === true) {
        if (vowelCheck(vowel, SecChar) === true) {
            console.log("First is a consonant, second is a vowel: ", word)
            outcomeWord = word.slice(1) + FirstChar + "ay";
            console.log("Changed word is so far: ", outcomeWord)
            userOutput.push(outcomeWord);
            console.log(userInput);
        } else {
            console.log("Second Char is a consonant: ", word)
            outcomeWord = word.slice(2) + FirstChar + SecChar + "ay";
            console.log("Changed word is so far: ", outcomeWord)
            userOutput.push(outcomeWord);
            console.log(userInput);
        }
    } 
}}