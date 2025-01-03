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

// Program-Run-Cycle with all relevant functions.
errorHandler();
encrypt(userInput);
console.log(userOutput.join(" "));

// Error Handler
function errorHandler() {
  if (userInput.length === 0) {
    console.error(
      "Please write something. This is a encrypter! It needs input!"
    );
  } else if (userInput.every((i) => !isNaN(Number(i)))) {
    console.log(`Your input was: ${userInput.join(" ")}`);
    console.log(
      "You only wrote numbers. But we need just one number and text?!"
    );
  } else {
    console.log(`Your input was: ${userInput.join(" ")}. Processing...`);
  }
}

function encrypt() {
  let shiftNum = userInput[0];
  userInput.shift();
  userInput = userInput.join(" ").split("");

  userInput.forEach((char, i) => {
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
    } else {
      userOutput.push(char);
    }
    return userOutput;
  });
}
// function encrypt(userInput) {
//   let shiftNum = parseInt(userInput[0], 10);
//   console.log(shiftNum);
//   userInput.shift();
//   for (let i = 0; i < userInput.length; i++) {
//     let char = userInput[i];
//     if (fullAlphabet.low.includes(char)) {
//       let currentIndex = fullAlphabet.low.indexOf(char);
//       console.log(currentIndex);
//       let newIndex = (currentIndex + shiftNum) % fullAlphabet.low.length;
//       console.log(newIndex);
//       userOutput.push(fullAlphabet.low[newIndex]);
//     } else if (fullAlphabet.up.includes(char)) {
//       let currentIndex = fullAlphabet.up.indexOf(char);
//       let newIndex = (currentIndex + shiftNum) % fullAlphabet.up.length;
//       console.log(newIndex);
//       userOutput.push(fullAlphabet.up[newIndex]);
//     } else {
//       userOutput.push(char);
//     }
//   }
//   return userOutput;
// }
