//Chapter 12-13

//Question 1
// function checkCharacterType(inputChar) {
//     // Check if the input is a single character
//     if (inputChar.length === 1) {
//         var charCode = inputChar.charCodeAt(0);

//         // Check if it's a number
//         if (charCode >= 48 && charCode <= 57) {
//             console.log(inputChar + " is a number.");
//         }
//         // Check if it's an uppercase letter
//         else if (charCode >= 65 && charCode <= 90) {
//             console.log(inputChar + " is an uppercase letter.");
//         }
//         // Check if it's a lowercase letter
//         else if (charCode >= 97 && charCode <= 122) {
//             console.log(inputChar + " is a lowercase letter.");
//         }
//         else {
//             console.log(inputChar + " is not a number, uppercase letter, or lowercase letter.");
//         }
//     } else {
//         console.log("Please enter only one character.");
//     }
// }

// checkCharacterType("A");

//Question No 2

// function compareIntegers(num1, num2) {
//     if (num1 === num2) {
//         console.log("The two integers are equal.");
//     } else if (num1 > num2) {
//         console.log(num1 + " is larger than " + num2 + ".");
//     } else {
//         console.log(num2 + " is larger than " + num1 + ".");
//     }
// }

// compareIntegers(32, 78); // Replace with your input integers

//Question No 3

// function checkNumber(number) {
//     if (number > 0) {
//         console.log(number + " is a positive number.");
//     } else if (number < 0) {
//         console.log(number + " is a negative number.");
//     } else {
//         console.log(number + " is zero.");
//     }
// }

// var userInput = prompt("Enter a number:"); // You can use an HTML input field for user input
// var parsedInput = parseFloat(userInput); // Convert the input to a number
// if (!isNaN(parsedInput)) {
//     checkNumber(parsedInput);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }

//Question No 4

// function isVowel(char) {
//     var vowels = "AEIOUaeiou";
//     if (char.length === 1) {
//         return vowels.includes(char);
//     } else {
//         return false;
//     }
// }

// var userInput = prompt("Enter a character:"); // You can use an HTML input field for user input
// if (userInput.length === 1) {
//     var result = isVowel(userInput);
//     console.log(userInput + " is a " + result + " vowel. ");
// } else {
//     console.log("Invalid input. Please enter a single character.");
// }

//Question No 5

// var Password = "Murtaza2112120";
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password.");
// } else if (userPassword === Password) {
//     console.log("Success");
// } else {
//     console.log("Incorrect");
// }

//Question No 6

// var greeting;
// var hour = 21;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);

//Question No 7

// var userInput = prompt("Time? (1-24)");
// var time = parseInt(userInput);

// if (isNaN(time)) {
//     console.log("Invalid input. Please enter a valid time.");
// } else if (time >= 0 && time < 12) {
//     console.log("Good morning!");
// } else if (time >= 12 && time < 17) {
//     console.log("Good afternoon!");
// } else if (time >= 17 && time < 21) {
//     console.log("Good evening!");
// } else if (time >= 21 && time <= 24) {
//     console.log("Good night!");
// } else {
//     console.log("Invalid input. Please enter a valid time.");
// }

//Chapter 14-16

//Question No 1

// var studentNames = [];
// console.log(studentNames);

//Question No 2

// var studentNames = new Array();
// console.log(studentNames);

//Question No 3

// var fruits = ["apple", "kela", "kharbooza", "orange"];
// console.log(fruits);

//Question No 4

// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

//Question No 5

// var booleanArray = [true, false, true, false, true];
// console.log(booleanArray);

//Question No 6

// var mixedArray = [3, "Mango", true, null, { name: "Murtaza", age: 21 }, [1, 3, 2, 5, 6, 8]];
// console.log(mixedArray);

//Question No 7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// var qualificationsList = document.getElementById("qualificationsList");
// for (var i = 0; i < qualifications.length; i++) {
//     var listItem = document.createElement("li");
//     listItem.textContent = qualifications[i];
//     qualificationsList.appendChild(listItem);
// }

//Question No 8

// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 240, 480];
// var totalMarks = 500;
// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = ((studentScores[i] / totalMarks) * 100).toFixed(0);
//     console.log("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%");
// }

//Question No 10

// var studentScores = [320, 230, 480, 120];
// console.log("Scores of Students:", studentScores);
// studentScores.sort(function (a, b) {
//     return a - b;
// });
// console.log("Ordered Scores of Students:", studentScores);

//Question No 11

// var cities = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];
// var selectedCities = [];
// selectedCities = cities.slice(2, 4); // Copies elements at index 1, 2, and 3 (excluding 4)
// console.log("Cities list:");
// console.log(cities);
// console.log("Selected cities list:");
// console.log(selectedCities);

//Question No 12

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// console.log("Array:");
// console.log(arr);
// console.log("String:");
// console.log(singleString);

//Question No 13

// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// while (devices.length > 0) {
//     var nextDevice = devices.shift();
//     console.log("Out:", nextDevice);
// }

//Question No 14

// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// while (devices.length > 0) {
//     var lastDevice = devices.pop();
//     console.log("Out:", lastDevice);
// }

//Question No 15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select id="manufacturerSelect">');
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}
document.write('</select>');