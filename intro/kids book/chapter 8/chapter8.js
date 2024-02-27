// let ourFirstFunction = function() {
//     console.log("Hello World!")
// }

// ourFirstFunction();
// ourFirstFunction()

// ourFirstFunction();
// ourFirstFunction();


// function ourFirstFunction() {
//     console.log("Hello World!")
// }

//   sayHelloTo("Sherry");
//   sayHelloTo("Nick");

// function sayHelloTo(name) {
//     alert(`Hello ${name}`);
// }

// function drawCats(howManyTimes) {
//     for(let i = 0; i < howManyTimes; i++) {
//         console.log("=^.^=");
//     }
// }
// drawCats(4,"0^0");

// function drawCats(howManyTimes,whatToDraw) {
//     for(let i = 0; i < howManyTimes; i++) {
//         console.log(whatToDraw);
//     }
// }

// function add(num1, num2, num3) {
//     console.log("sum = " + (num1 + num2 + num3));
// }

// add(10, 100, 1000)

// function double(num) {
//     return num*2;
// }
// console.log(double(25));
// console.log(Math.floor(100.99));
// console.log(double(100)+ double(34));

// function meal(fcontent , scontent) {
//     return ("You ordered  " + fcontent + "and" + scontent);
// }

// let sentence = meal ("McFeast Burger ", " Fries with barbeque sauce");
// alert(sentence)

// let randomWords = ["Planet", "Worm", "Flower", "Sandwich", "Computer"]

// console.log(pickRandomWord(randomWords));

// function pickRandomWord(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }

// function generateInsult() {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//     //Join all the random strings into a sentence :
//     let randomString = "Your " + pickRandomWord(randomBodyParts) + 
//     " is like a " + pickRandomWord(randomAdjectives) + " " 
//     + pickRandomWord(randomWords) + "!!!";
//     console.log(randomString);
// }

// generateInsult()
// generateInsult()
// generateInsult()

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// let result = add(multiply(36325, 9824), 777);
// console.log(result);


// function areArraysSame(arr1, arr2) {
//     // Check if the arrays are different lengths
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     // Go through each of the values in the first array
//     for (let i = 0; i < arr1.length; i++) {
//         // See whether they're the same in the second array
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }

//     // If we made it this far, the arrays are the same
//     return true;
// }

// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

 function square(number) {
     return number * number;
 }

 console.log(square(5));

// function logMessage() {
//     console.log("This is a message.");
//     return;
// }
