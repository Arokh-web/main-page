//English to pig translator

// setting variables and managing the input
// prettier-ignore
const consonant = ["B", "b", "C", "c", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
const vowel = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
// main working-arrays for in- and output
let userInput = process.argv.slice(2);
let userOutput = [];

// main wordcheck-and-error-variables
let inputCheck;
let FirstChar;
let SecChar;
let outcomeWord;

// Program-Run-Cycle with all relevant functions. Choose the ErrorHandler.
errorHandlerV1(); //also possible: V2!
wordcheck();
console.log(userOutput.join(" "));
//wordprocess() in progress

// VERSION ONE - Error Handling reduced - without Switch
// Error Message: Wrong Input (empty, only numbers, correct input)
function errorHandlerV1() {
  if (userInput.length === 0) {
    console.error(
      "Please write something. This is a translator! It needs input!"
    );
  } else if (userInput.every((i) => !isNaN(Number(i)))) {
    console.log(`Your input was: ${userInput.join(" ")}`);
    console.log("You only wrote numbers. But we need text?!");
  } else {
    console.log(`Your input was: ${userInput.join(" ")}`);
  }
}

// VERSION TWO - Error Handling - with Switch
// Error Message: Wrong Input (empty, only numbers, correct input)
// Possibility to easier add new cases, e.g. other input types that would lead to errors.
function errorHandlerV2() {
  if (userInput.length === 0) {
    inputCheck = "empty";
  } else if (userInput.every((i) => !isNaN(Number(i)))) {
    inputCheck = "numbers";
  } else {
    inputCheck = "text";
  }

  switch (inputType) {
    case "empty":
      console.error(
        "Please write something. This is a translator! It needs input!"
      );
      break;

    case "numbers":
      console.log(`Your input was: ${userInput.join(" ")}`);
      console.log("You only wrote numbers. But we need text?!");
      break;

    case "mixed":
      console.log(`Your input was: ${userInput.join(" ")}`);
      console.log(
        "You provided a mix of numbers and text. Please stick to one type!"
      );
      break;

    case "text":
      console.log(`Your input was: ${userInput.join(" ")}`);
      break;

    default:
      console.error("Unknown error occurred!");
      break;
  }
}

// The CHARACTERCHECK
function vowelCheck(vowel, SecChar) {
  for (i of vowel) {
    if (SecChar === i) return true;
  }
}

function consonantCheck(consonant, FirstChar) {
  for (i of consonant) {
    if (FirstChar === i) return true;
  }
}

// The WORDCHECK
// If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
// Example: Happy = appyh + ay = appyhay
// If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
// Example: Child = Ildch + ay = Ildchay
// If a word starts with a vowel add the word “way” at the end of the word.
// Example: Awesome = Awesome +way = Awesomeway

function wordcheck() {
  // Processing the input: making the word an array with parameters and catching the punctuation;
  // getting the word itself with word[1], the punctuation with word[2], make it a string and slice the first and second character out.
  for (word of userInput) {
    word = word.match(/(\w+)(['.,!?]*)/);
    FirstChar = word[1].toString().slice(0, 1);
    SecChar = word[1].toString().slice(1, 2);
    // If it is a number, the outcome is a number plus the punctuation.
    if (!isNaN(Number(word[1]))) {
      // console.log("The Number is: ", word[1])
      outcomeWord = word[1] + word[2];
    } else if (vowelCheck(vowel, FirstChar)) {
      // console.log("First char is a vowel: ", word[1])
      outcomeWord = word[1] + "way" + word[2];
    } else if (consonantCheck(consonant, FirstChar) === true) {
      if (vowelCheck(vowel, SecChar) === true) {
        // console.log("First is a consonant, second is a vowel: ", word[1])
        outcomeWord =
          word[1].slice(1) + FirstChar.toLowerCase() + "ay" + word[2];
      } else if (consonantCheck(consonant, SecChar) === true) {
        // console.log("Second Char is a consonant: ", word[1])
        outcomeWord =
          word[1].slice(2) + FirstChar.toLowerCase() + SecChar + "ay" + word[2];
      }
    }
    userOutput.push(outcomeWord);
  }
  return userOutput;
}
