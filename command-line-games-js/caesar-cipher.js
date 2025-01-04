// Caesar Cipher

// Setting variables
let userInput = process.argv.slice(2);
let userOutput = [];
// prettier-ignore
const fullAlphabet = {
  "low": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ü", "ä", "ö", "ß"], 
  "up": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ü", "Ä", "Ö"]
  };
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Program-Run-Cycle with all relevant functions.
errorHandler();
switch (userInput[1]) {
  case "encrypt":
    console.log(encrypt().join(""));
    break;
  case "decrypt":
    console.log(decrypt().join(""));
    break;
  default:
    console.log(
      "Need argument: Do you want to encrypt or decrypt? (Needs to be the 2nd argument) Don't forget to set the right cipher for decryption."
    );
}

// Error Handler
function errorHandler() {
  if (userInput.length === 0) {
    console.error(
      "Please write something. This is a encrypter! It needs input!"
    );
  } else if (userInput.every((i) => !isNaN(Number(i)))) {
    console.log(`Your input was: ${userInput.join(" ")}`);
    console.log(
      "You only wrote numbers. But we need a shift number, the command (encrypt/decrypt) and text."
    );
  } else {
    console.log(`Your input was: ${userInput.join(" ")}.`);
  }
}

// Encryption function
function encrypt() {
  console.log("Processing...");
  let shiftNum = parseInt(userInput[0], 10);
  userInput.shift();
  userInput.shift();
  userInput = userInput.join(" ").split("");

  userInput.forEach((char) => {
    if (fullAlphabet.low.includes(char)) {
      let alphaIndex = fullAlphabet.low.indexOf(char);
      userOutput.push(
        fullAlphabet.low[(alphaIndex + shiftNum) % fullAlphabet.low.length]
      );
    } else if (fullAlphabet.up.includes(char)) {
      let alphaIndex = fullAlphabet.up.indexOf(char);
      userOutput.push(
        fullAlphabet.up[(alphaIndex + shiftNum) % fullAlphabet.up.length]
      );
    } else if (numbers.includes(char)) {
      let alphaIndex = numbers.indexOf(char);
      userOutput.push(numbers[(alphaIndex + shiftNum) % numbers.length]);
    } else {
      userOutput.push(char);
    }
  });
  console.log("Done:");
  return userOutput;
}

// Decryption function
function decrypt() {
  let shiftNum = parseInt(userInput[0], 10);
  userInput.shift();
  userInput.shift();
  userInput = userInput.join(" ").split("");

  userInput.forEach((char) => {
    if (fullAlphabet.low.includes(char)) {
      let alphaIndex = fullAlphabet.low.indexOf(char);
      userOutput.push(
        fullAlphabet.low[
          (alphaIndex - shiftNum + fullAlphabet.low.length) %
            fullAlphabet.low.length
        ]
      );
    } else if (fullAlphabet.up.includes(char)) {
      let alphaIndex = fullAlphabet.up.indexOf(char);
      userOutput.push(
        fullAlphabet.up[
          (alphaIndex - shiftNum + fullAlphabet.up.length) %
            fullAlphabet.up.length
        ]
      );
    } else if (numbers.includes(char)) {
      let alphaIndex = numbers.indexOf(char);
      userOutput.push(
        numbers[(alphaIndex - shiftNum + numbers.length) % numbers.length]
      );
    } else {
      userOutput.push(char);
    }
  });
  return userOutput;
}
