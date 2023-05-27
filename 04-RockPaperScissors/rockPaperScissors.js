const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "bomb" ||
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return "value not allowed";
  }
};

const getComputerChoice = () => {
  const randomNuber = Math.floor(Math.random() * 3);
  switch (randomNuber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      break;
  }
};

// function to determine the winner.
const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return "tie";
  }
  if (getUserChoice === "rock") {
    if (getComputerChoice === "paper") {
      return "computer";
    } else {
      return "user";
    }
  } else if (getUserChoice === "paper") {
    if (getComputerChoice === "scissors") {
      return "computer";
    } else {
      return "user";
    }
  } else if (getUserChoice === "scissors") {
    if (getComputerChoice === "rock") {
      return "computer";
    } else {
      return "user";
    }
  } else {
    return "user";
  }
};

const playGame = (user) => {
  const userChoice = getUserChoice(user);
  const computerChoice = getComputerChoice();
  console.log(
    `User choice: ${userChoice}\nComputer choice: ${computerChoice}\nWinner: ${determineWinner(
      userChoice,
      computerChoice
    )}`
  );
};

playGame("bomb");
