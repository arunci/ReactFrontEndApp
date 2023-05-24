let userName = "Javier";

// ternary expression that checks if userName is Javier
userName === "Javier"
    ? console.log(`Hello, ${userName}!`)
    : console.log("Hello!");

let userQuestion = "Are you going to eat pizza today?";
console.log(`${userName} asked: ${userQuestion}`);

// create a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber)

// new variable set it to an empty string
let eightBall = "";

switch (randomNumber) {
    case 0:
        eightBall = "It is certain";
        break;
    case 1:
        eightBall = "It is decidedly so";
        break;
    case 2:
        eightBall = "Reply hazy try again";
        break;
    case 3:
        eightBall = "Cannot predict now";
        break;
    case 4:
        eightBall = "Do not count on it";
        break;
    case 5:
        eightBall = "My sources say no";
        break;
    case 6:
        eightBall = "Outlook no so good";
        break;
    case 7:
        eightBall = "Signs point to yes";
        break;
    default:
        break;
}

console.log(`And the answer is...\n${eightBall}!`);
