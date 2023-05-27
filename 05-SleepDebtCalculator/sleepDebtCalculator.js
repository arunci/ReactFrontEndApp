const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 9;
    case "thursday":
      return 6;
    case "friday":
      return 5.5;
    case "saturday":
      return 9;
    case "sunday":
      return 8.5;
    default:
      break;
  }
};

const geActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = geActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    return "You had a perfect amount of sleep.";
  } else if (idealSleepHours > actualSleepHours) {
    return `You need to sleep ${
      idealSleepHours - actualSleepHours
    } hours more!`;
  } else {
    return `You slept ${
      actualSleepHours - idealSleepHours
    } more hours than needed!`;
  }
};

console.log(calculateSleepDebt());
