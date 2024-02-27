//console.log(99 * 123);
//console.log("This is a string".slice(0, 4));
//console.log(true);

//NUMBERS AND OPERATORS

console.log("adding" + (12345 + 56789));

console.log("Adding three numbers" + (22 + 33 + 44));

console.log("subtracting" + (1000 - 17));

console.log("multiplication" + (123 * 456));

console.log("division" + (12345 / 250));

console.log(1234 + 57 * 3 - 31 / 4)
console.log(8 / (3 + 1))

//TRY IT OUT

console.log((15 + 9) * 2)

//VARIABLES

// let age;
// age =12;

//let age = 12;
//age = 13;
//console.log("age is" + age)

//let numberOfSiblings = 1 + 3;
//let numberOfCandles = 8;
//console.log(numberOfCandles / numberOfSiblings);

let secondsInAMinute = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);

let daysInAYear = 365;
let secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);

//let age = 18;
//let secondsInMyAge = age * secondsInAYear;
//console.log("I Am " + secondsInMyAge + "seconds old!");

//INCRAMENTING AND DECRAMENTING

//let highfives = 0

//console.log(++highfives);
//console.log(++highfives);
//console.log(--highfives);

//let balloons = 100;
//console.log(balloons *= 2);

//let numberNine = 9;
//let stringNine = "9";

//console.log(numberNine + numberNine);
//console.log(stringNine + stringNine);
//console.log(numberNine + stringNine);
//console.log("adding" + 9 + 9);
//console.log("adding" + (9 + 9));

//let greeting = "Hello";
//let myName = "Josh";
//alert(greeting + myName);
//console.log(greeting + myName)

//let codeWord1 = "dont";
//let codeWord2 = "be";
//let codeWord3 = "a";
//let codeWord4 = "conformist";

//let codeWord = codeWord1[2] + codeWord2[1] + codeWord3[0] + codeWord4[9];
//alert(codeWord);
//console.log("a string".slice(2));
//let isvery = "My long string is very longish";
//alert(isvery.slice(15,22))

//console.log("Hello there, how are you doing?".toUpperCase());

//console.log("hELlo THERE, hOW ARE yOu doINg?".toLowerCase());

//let mystring = "hELlo THERE, hOW ARE yOu doINg?"
//mystring = mystring[0].toUpperCase() + mystring.slice(1).toLowerCase();
//console.log(mystring);

//let Josh = prompt("what is your name?")
//let hadShower = confirm("did you have a shower " +  Josh + "?")
//let hasBackPack = confirm("Do you have your backpack " +   Josh + "?")
//alert(Josh + " are you a Non-Conformist?")
//alert(hadShower && hasBackPack)

//let isWeekend = confirm("is it the Weekend?");
//let needToShower = !isWeekend;
//alert(Josh + " Do u need to shower?" + needToShower);

//let isWeekend = confirm(Josh + " is it the weekend?");
//let hadShower = confirm(Josh + " did u have a shower?");
//let hasApple = confirm("do u have an apple?");
//let hasOrange = confirm("do u have an orange?");
//let goToSchool = !isWeekend && hadShower &&(hasApple||hasOrange);
//alert(Josh + " do u go to school?" + goToSchool);

//alert(Josh + " Welcome to the theme park!");
//let height = prompt(Josh + " What is your height in inches?");
//let heightRestriction = 60;
//let allowed = height >= heightRestriction;
//alert(Josh + " are u allowed on this ride?" + allowed);

//alert(Josh + " Welcome to the theme park!");
//let height = prompt(Josh + " What is your height in inches?");
//let heightRestriction = 48;
//let allowed = height <= heightRestriction;
//alert(Josh + " are u allowed on this kids ride?" + allowed);

//let mySecretNumber = 5;
//let chicoGuess = 3;
//alert(mySecretNumber === chicoGuess);
//let harpoGuess = 7;
//alert(mySecretNumber === harpoGuess);
//let grouchoGuess = 5;
//alert(mySecretNumber === grouchoGuess);

alert("welcome to the movie theatre!")
let age = parseInt(prompt("How old are you?"));
let accompanied = confirm("are you accompanied by an adult?");
alert(" are you allowed to view this movie?" + (age >= 12 || accompanied))
