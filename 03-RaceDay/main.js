let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let age = 17;

// check whether the runner is an adulta and registered. In in that case add 1000 to racenumber

if (age >= 18) {
    if (earlyRegister) {
        raceNumber += 1000;
        console.log(`Runner number ${raceNumber}: you will race at 9:30 am`);
    } else {
        console.log(`Runner number ${raceNumber}: you will race at 11:00 am`);
    }
} else {
    console.log(`Runner number ${raceNumber}: you will race at 12:30 am`);
}
