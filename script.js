/*const country = "Poland";
console.log(country);
console.log(typeof country);

const continent = "Europe";
console.log(continent);
console.log(typeof continent);

const population = 38265000;
console.log(population);
console.log(typeof population);

let language;
console.log(language);
console.log(typeof language);

const isIsland = false;
console.log(isIsland);
console.log(typeof isIsland);
*/


// PART 1
// CHALLENGE 1

const weightJohn = 150;
const heightJohn = 1.95;
const weightMark = 78;
const heightMark = 1.69;

let bmiJohn = weightJohn / heightJohn ** 2;
let bmiMark = weightMark / heightMark ** 2;

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);


// CHALLENGE 2

if(markHigherBMI === true) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if(markHigherBMI === true) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's! (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's! (${bmiMark})`);
}


// CHALLANGE 3

const dolphinsFirstTurn = 97;
const dolphinsSecondTurn = 112;
const dolphinsThirdTurn = 45;

const koalasFirstTurn = 109;
const koalasSecondTurn = 95;
const koalasThirdTurn = 50;

let dolphinsScore = (dolphinsFirstTurn + dolphinsSecondTurn + dolphinsThirdTurn) / 3;
let koalasScore = (koalasFirstTurn + koalasSecondTurn + koalasThirdTurn) / 3;

if(dolphinsScore === koalasScore && koalasScore >= 100){
    console.log("It's a draw!")
} else if(dolphinsScore > koalasScore && dolphinsScore >= 100){
    console.log(`Dolphins won with the score of ${dolphinsScore}!`)
} else if(koalasScore > dolphinsScore && koalasScore >= 100){
    console.log(`Koalas won with the score of ${koalasScore}!`)
} else {
    console.log("Noone got more than 100 points! :[ There's no winners!")
}


//  CHALLENGE 4

const bill = 40

let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2)

console.log(bill * 0.2)
console.log(bill * 0.15)
console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${tip + bill}`)



// PART 2
// CHALLENGE 1




