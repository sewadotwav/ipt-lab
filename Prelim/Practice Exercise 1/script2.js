//npm install readline-sync
//node script.js
const readline = require('readline-sync');

// 1. MDAS calculator
function mdasCalculator() {
  console.log("\n=== 1. MDAS Calculator ===");

  let num1 = parseFloat(readline.question("Enter first number: "));
  let num2 = parseFloat(readline.question("Enter second number: "));

  let multiplication = num1 * num2;
  let division = num1 / num2;
  let addition = num1 + num2;
  let subtraction = num1 - num2;

  console.log(
    "MDAS Result:\n" +
    "Multiplication: " + multiplication + "\n" +
    "Division: " + division + "\n" +
    "Addition: " + addition + "\n" +
    "Subtraction: " + subtraction
  );
}

// 2. Age calculator 
function ageCalculator() {
  console.log("\n=== 2. Age Calculator ===");

  let birthYear = parseInt(readline.question("Enter your birth year: "));
  let yearsToAdd = parseInt(readline.question("Enter 10: "));

  let currentYear = new Date().getFullYear();
  let currentAge = currentYear - birthYear;
  let futureAge = currentAge + yearsToAdd;

  console.log(
    "Current Year: " + currentYear + "\n" +
    "Your Current Age: " + currentAge + "\n" +
    "Your Age " + yearsToAdd + " years from now: " + futureAge
  );
}

// 3. Circumference calculator 
function circumferenceCalculator() {
  console.log("\n=== 3. Circumference Calculator ===");

  let radius = parseFloat(readline.question("Enter the length of the radius: "));
  let circumference = 2 * Math.PI * radius;

  console.log("The circumference is: " + circumference.toFixed(2));
}

// 4. Temperature converter 
function celsiusToFahrenheit() {
  console.log("\n=== 4. Celsius to Fahrenheit Converter ===");

  let celsius = parseFloat(readline.question("Enter the temperature in Celsius: "));
  let fahrenheit = (celsius * 9 / 5) + 32;

  console.log("The temperature in Fahrenheit is: " + fahrenheit.toFixed(2) + "°F");
}

// 5. Grade scheme 
function gradeScheme() {
  console.log("\n=== 5. Grade Scheme ===");

  let grade = parseFloat(readline.question("Enter your grade (0-100): "));
  let equivalent;

  if (grade >= 90) {
    equivalent = "A";
  } else if (grade >= 80) {
    equivalent = "B";
  } else if (grade >= 70) {
    equivalent = "C";
  } else if (grade >= 60) {
    equivalent = "D";
  } else {
    equivalent = "F";
  }

  console.log("Your grade equivalent is: " + equivalent);
  return equivalent;
}

// Run all functions
mdasCalculator();
ageCalculator();
circumferenceCalculator();
celsiusToFahrenheit();
gradeScheme();