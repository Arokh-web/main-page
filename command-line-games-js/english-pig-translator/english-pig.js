//English to pig translator

// setting variables and managing the input
let userInput = process.argv.slice(2);
let inputType;
let userInputString;

// Error Handling and Reducing - VERSION ONE without Switch
    // Error Message: Wrong Input (empty, only numbers, correct input)
    // if (userInput.length === 0) {
    //     console.error("Please write something. This is a translator! It needs input!");
    // } else if (userInput.every(i => !isNaN(Number(i)))) {
    //     let userInputString = userInput.join(" ")
    //     console.log(`Your input was: ${userInputString}`); 
    //     console.log("You only wrote numbers. But we need text?!")
    // } else {
    //     let userInputString = userInput.join(" ")
    //     return console.log(`Your input was: ${userInputString}`); 
    // }

// console.log(userInputString)

// Error Handling and Reducing - VERSION TWO with Switch
    // Error Message: Wrong Input (empty, only numbers, correct input)
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
    }

// Here starts the first check: 
// If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
// Example: Happy = appyh + ay = appyhay

for (i in userInput, i > 0, i++) {
    
}




// const output = userInput[i].filter() => (i === "*way") 

// Mögliche Methoden:
// .with() --> safe way to update elements in an array without altering the original array.
// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Create an Iterator
// const list = fruits.values();

// // List the Values
// let text = "";
// for (let x of list) {
//   text += x + "<br>";
// }


    // for (i in userInput) {
    //     if (userInput[i] )
    // }

    // Convert each word to Pig Latin:
// If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
// Example: Happy = appyh + ay = appyhay
// If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
// Example: Child = Ildch + ay = Ildchay
// If a word starts with a vowel add the word “way” at the end of the word.
// Example: Awesome = Awesome +way = Awesomeway