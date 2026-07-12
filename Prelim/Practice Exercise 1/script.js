// 1. MDAS calculator
function mdasCalculator() {
  alert("MDAS Calculator");
  let num1 = parseFloat(prompt("Enter first number:"));
  let num2 = parseFloat(prompt("Enter second number:"));

  let multiplication = num1 * num2;
  let division = num1 / num2;
  let addition = num1 + num2;
  let subtraction = num1 - num2;

  alert(
    "MDAS Result:\n" +
    "Multiplication: " + multiplication + "\n" +
    "Division: " + division + "\n" +
    "Addition: " + addition + "\n" +
    "Subtraction: " + subtraction
  );
}

// 2. Age calculator 
function ageCalculator() {
  alert("Age Calculator");
  let birthYear = parseInt(prompt("Enter your birth year:"));
  let yearsToAdd = parseInt(prompt("Enter 10:"));

  let currentYear = new Date().getFullYear();
  let currentAge = currentYear - birthYear;
  let futureAge = currentAge + yearsToAdd;

  alert(
    "Current Year: " + currentYear + "\n" +
    "Your Current Age: " + currentAge + "\n" +
    "Your Age " + yearsToAdd + " years from now: " + futureAge
  );
}

// 3. Circumference calculator 
function circumferenceCalculator() {
  alert("Circumference Calculator");
  let radius = parseFloat(prompt("Enter the length of the radius:"));
  let circumference = 2 * Math.PI * radius;

  alert("The circumference is: " + circumference.toFixed(2));
}

// 4. Temperature converter 
function celsiusToFahrenheit() {
  alert("Celsius to Fahrenheit Converter");
  let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
  let fahrenheit = (celsius * 9 / 5) + 32;

  alert("The temperature in Fahrenheit is: " + fahrenheit.toFixed(2) + "°F");
}

// 5. Grade scheme 
function gradeScheme() {
  alert("📊 Grade Scheme");
  let grade = parseFloat(prompt("Enter your grade (0-100):"));
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

  alert("Your grade equivalent is: " + equivalent);
  return equivalent;
}

// Run all functions
mdasCalculator();
ageCalculator();
circumferenceCalculator();
celsiusToFahrenheit();
gradeScheme();
