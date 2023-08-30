// ------------------CHAPTER 01------------------------------

// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

var allLower = userInput.toLowerCase();


// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.
x = x.toLowerCase();

// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.
y = y.toUpperCase();


// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
var originalVariable = "SomeText"; // Replace this with your actual string
var secondVariable = originalVariable.toLowerCase();



// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.
var myArray = ["SomeText", "AnotherString", "YetAnother"];
var index = 1; // Replace this with the desired index

var lowerCaseElement = myArray[index].toLowerCase();


// 6. Display in an alert the upper-case version of the string
// represented by a variable.
var myString = "SomeText"; // Replace this with your actual string

alert(myString.toUpperCase());



// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.
var cityName = "kaRacHi";

var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedCityName); 




// Chapter 22 - 25 (Strings)
// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
var sameWords = "captain";

var slicedPart = sameWords.slice(1, 3);

console.log(slicedPart); // Output: "ap"


// 2. The number of characters in the string will be assigned to the
// variable.
var myString = "example string"; // Replace this with your actual string

var numberOfCharacters = myString.length;

console.log(numberOfCharacters); 

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
var animal = "elephant";

var startIndex = Math.floor((animal.length - 4) / 2);
var endIndex = startIndex + 4;

var seg = animal.slice(startIndex, endIndex);

console.log(seg); // Output: "epha"




// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

 var myString = "example"; // Replace this with your actual string

 var numberOfCharacters = myString.length;

 console.log(numberOfCharacters); 

// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
var myString = "example"; // Replace this with your actual string

var numberOfCharacters = myString.length;

var slicedString = myString.slice(1, -3);

console.log(numberOfCharacters); // Output: The number of characters in the string
console.log(slicedString); // Output: The sliced string

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
The value of `indx` would be `3`. 

The `indexOf` method returns the index of the first occurrence of the specified substring within the string. In this case, the substring "be" first occurs at index 3 within the string "To be or not to be.", hence the value of `indx` is 3.
// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.
var text = "To go or not to go, that is the question.";
var searchString = "go";

var lastIndex = text.lastIndexOf(searchString);
var indx = lastIndex !== -1 ? lastIndex : null;

console.log(indx); // Output: The index of the first character of the last instance of "go"

// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.
if (indexNum >= 0 && indexNum < myString.length) {
    Code to execute if the segment exists
  } else {
     Code to execute if the segment doesn't exist
  }
  
// 10. In this string "abcde", what character is at index 2? (Use
// charAt)
In the string "abcde", the character at index 2 is `"c"`.

You can use the `charAt` method to retrieve the character at a specific index in the string. In this case, `charAt(2)` will give you the character `"c"`.
// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.
var text = "Some example text here"; // Replace this with your actual string

var indexNum = 9; 
var cha = text.charAt(indexNum);

console.log(cha); 

// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.
var str = "Hello, world!";

var lastIndex = str.length - 1;
var x = str.charAt(lastIndex);

console.log(x);  

// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.
var input = "Your input string here"; 

var indexNum = 4; 
var cha = input.charAt(indexNum);

console.log(cha);             

// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.
if (myString.length >= 3 && myString.charAt(2) === 'x') {
    // Code to execute if the 3rd character is 'x'
  } else {
    // Code to execute if the 3rd character is not 'x'
  }
  
// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
var myString = "example string";
var characterArray = []; 

for (var i = 0; i < myString.length; i++) {
  characterArray.push(myString.charAt(i));
}

console.log(characterArray); 

// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.
var str = "123451234";

var newStr = str.replace("1", "one");

console.log(newStr); 


// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");

var y = x.replace(/a/g, "z");

// Chapter 26 (Rounding Numbers)
// 1. Form a statement that rounds a number to the nearest integer.
var originalNumber = 5.67; 
var roundedNumber = Math.round(originalNumber);

console.log(roundedNumber); 


// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
var origNum = 7.32; 

var roundNum = Math.ceil(origNum);

console.log(roundNum); 

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
var origNum = 9.87; // Replace this with the number you want to round down

var roundNum = Math.floor(origNum);

console.log(roundNum); // Output: The rounded-down number


// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.
var originalNumber = 8.58; // Replace this with the number you want to round

var roundedNumber = Math.round(originalNumber);

console.log(roundedNumber); // Output: The rounded number

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.
var originalNumber = 0.5;
var roundedNumber = Math.round(originalNumber);

console.log(roundedNumber); 

// Chapter 27 (Random Numbers)
// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50

var randomNumber = Math.floor(Math.random() * 50) + 1;

console.log(randomNumber); 


// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
var randomNum = Math.random();

console.log(randomNum); 

// 3. You have to create a dice in JavaScript with the use of pseudorandom number.
// Generate a random number between 1 and 6
var diceRoll = Math.floor(Math.random() * 6) + 1;

console.log("You rolled:", diceRoll);

// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.
// Generate a random number between 0 and 1
var randomValue = Math.random();

var tossResult = randomValue < 0.5 ? "Heads" : "Tails";

console.log("Toss result:", tossResult);

// Chapter 28, 29 (Converting Strings)
// 1. How do you convert a string to an integer in JavaScript?

var stringNumber = "42";
var integerNumber = parseInt(stringNumber);


// 2. Write a JavaScript function to convert the string "123" to an
// integer.
function convertStringToInt(str) {
    return parseInt(str);
  }
  
  var stringNumber = "123";
  var integerNumber = convertStringToInt(stringNumber);
  
// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
var stringDecimal = "3.14";
var floatNumber = parseFloat(stringDecimal);

// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
var stringToCheck = "42abc";
if (!isNaN(parseInt(stringToCheck))) {
  // Conversion to integer is possible
}
if (!isNaN(parseFloat(stringToCheck))) {
  // Conversion to floating-point number is possible
}

// 5. How can you convert a number to a string in JavaScript?
var number = 42;
var stringNumber = number.toString();

// 6. Write a JavaScript function to convert the number 42 to a string.
function convertNumberToString(num) {
    return num.toString();
  }
  
  var number = 42;
  var stringNumber = convertNumberToString(number);
  
// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?
var stringDecimal = "3.14";
var integerPart = parseInt(stringDecimal);
// integerPart will be 3

// Chapter 30 (Controlling the length of
//     decimals)
//     1. Code a statement that rounds a number represented by num to 4

//     places, converts it to a string, and assigns it to newNum, which
//     hasn't been declared beforehand.
var num = 3.14159265358979323846; // Replace this with your number

var roundedNum = num.toFixed(4);
var newNum = roundedNum.toString();

//     2. In a single statement round a number represented by a variable to
//     2 places, convert it to a string, convert it back to a number, and
//     assign it to the same variable.


myNumber = parseFloat(myNumber.toFixed(2));

//     3. Code the first line of an if statement that tests whether the
//     number represented by num, rounded to 2 digits and converted
//     to a string, has more than 4 characters in it.
if (num.toFixed(2).toString().length > 4) {
    // Code to execute if the condition is true
  } else {
    // Code to execute if the condition is false
  }
  
//     4. Assign a number with many decimal places to a variable.
//     Code an alert that displays the number rounded to 2 decimal
//     places and converted to a string.
var bigNumber = 123.4567890123456789; // Replace this with your number

var roundedNumber = bigNumber.toFixed(2);
alert(roundedNumber.toString());

// -------------------------Chapter 30 (Controlling the length of
//   decimals)
//   1. Code a statement that rounds a number represented by num to 4
//   places, converts it to a string, and assigns it to newNum, which
//   hasn't been declared beforehand.

num = 123.456789  # Replace this with the number you want to round and convert
newNum = "{:.4f}".format(num)



//   2. In a single statement round a number represented by a variable to
//   2 places, convert it to a string, convert it back to a number, and
//   assign it to the same variable.

num = float("{:.2f}".format(num))

//   3. Code the first line of an if statement that tests whether the
//   number represented by num, rounded to 2 digits and converted
//   to a string, has more than 4 characters in it.

if len("{:.2f}".format(num)) > 4:

//   4. Assign a number with many decimal places to a variable.
//   Code an alert that displays the number rounded to 2 decimal
//   places and converted to a string.

var num = 123.456789;  // Replace this with your number
var roundedNum = parseFloat(num.toFixed(2));
alert(roundedNum.toString());


// ================Chapter 31 - 34 (Date & Time)
// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.
Creating a new Date object and assigning it to dObj:
javascript
Copy code
var dObj = new Date();

// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.


Creating a new Date object, converting it to a string, and assigning the string to dStr:
javascript
Copy code
var dStr = new Date().toString();

// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.
var d = new Date();  // Replace this with your Date object
var day = d.getDay();

// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var index = d.getDay();  // Assuming d holds the extracted day
var day = dayNames[index];
alert("Current day: " + day + " (Index: " + index + ")");

// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.
var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();

// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.
var later = new Date(2020, 11, 0);


// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.
var myDate = new Date(1992, 1, 2);


//--------------------------- Chapter 35 - 37 (Functions)
// 1. Code the first line of a function displayAlert.
def displayAlert(yes/no):

// 2. Code a function named askName that prompts the user to "Enter 
// name" and assigns the answer to userName, which hasn't been 
// declared beforehand.
def askName():
    userName = input("Enter name: ")
    return userName

// 3. Code a function that calls 2 other functions.
def main_function():
    result1 = function1()
    result2 = function2()
    
    # Do something with the results
    combined_result = result1 + result2
    print("Combined result:", combined_result)

def function1():
    # Some code here
    return 10

def function2():
    # Some code here
    return 20

// 4. Code a function that displays a prompt, "Enter name" and then 
// displays the name in an alert. Call the function.
def display_alert(message):
    print("Alert:", message)

def get_name_from_user():
    name = input("Enter name: ")
    return name

def main():

// 5. Code the first line of a function named concat that has 3 
// parameters, the first three letters of the alphabet. Call that takes 
// a variable, a string, and a number as arguments.
def concat(alpha1, alpha2, alpha3):
variable_arg = "Hello"
string_arg = "World"
number_arg = 42

concat(variable_arg, string_arg, number_arg)

// 6. Code a function that has 2 parameters. Concatenate them and 
// assign the result to a variable that hasn't been declared 
// beforehand.
def concatenate_and_assign(param1, param2):
    result = param1 + param2
    return result

# Call the function with two strings as parameters
string1 = "Hello, "
string2 = "world!"
concatenated_result = concatenate_and_assign(string1, string2)
print(concatenated_result)

// 7. Code a function that has three parameters. Multiply them and 
// assign them to a variable that hasn't been declared yet.
def multiply_and_assign(param1, param2, param3):
    result = param1 * param2 * param3
    return result

# Call the function with three numbers as parameters
number1 = 2
number2 = 3
number3 = 4
multiplied_result = multiply_and_assign(number1, number2, number3)
print(multiplied_result)

// 8. Write a JavaScript function that takes an array of numbers as 
// input and returns the average of those numbers.
function calculateAverage(numbers) {
  if (numbers.length === 0) {
      return 0; // Handle the case of an empty array
  }
  
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  
  const average = sum / numbers.length;
  return average;
}

// Example usage
const numberArray = [5, 10, 15

// 9. Write a JavaScript function that takes two parameters and returns 
// their sum.
function addNumbers(a, b) {
  return a + b;
}

// Example usage
const num1 = 5;
const num2 = 10;
const sum = addNumbers(num1, num2);
console.log("Sum:", sum);

// 10. Write a JavaScript function that takes an array of numbers as 
// input and returns the average of those numbers.
function calculateAverage(numbers) {
  if (numbers.length === 0) {
      return 0; // Handle the case of an empty array
  }
  
  const sum = numbers.reduce((total, number) => total + number, 0);
  const average = sum / numbers.length;
  return average;
}

// Example usage
const numberArray = [5, 10, 15, 20];
const avg = calculateAverage(numberArray);
console.log("Average:", avg);

// 11. You have to capture the returned value from a function and 
// store it in a variable?
function calculateAverage(numbers) {
  if (numbers.length === 0) {
      return 0; // Handle the case of an empty array
  }
  
  const sum = numbers.reduce((total, number) => total + number, 0);
  const average = sum / numbers.length;
  return average;
}

// Example usage
const numberArray = [5, 10, 15, 20];
const avg = calculateAverage(numberArray);

console.log("Average:", avg);

// 12. Write a function which tells letter counts of (word).
function letterCounts(word) {
  const counts = {};

  for (const letter of word) {
      if (counts[letter]) {
          counts[letter]++;
      } else {
          counts[letter] = 1;
      }
  }

  return counts;
}

// Example usage
const word = "hello";
const counts = letterCounts(word);
console.log("Letter counts:", counts);

// 13. Write a function to set (year) in date object.
function setYearInDate(date, year) {
  date.setFullYear(year);
  return date;
}

// Example usage
const currentDate = new Date();
const targetYear = 2023;

const newDate = setYearInDate(currentDate, targetYear);
console.log("Updated date:", newDate);

// 14. Write a function which tells the age of a person who Born on 
// (dateOfBirth)
function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust age if the birth month hasn't occurred yet this year
  if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
  ) {
      return age - 1;
  }

  return age;
}

// Example usage
const dateOfBirth = "1990-08-29"; // YYYY-MM-DD

// 15. Write a function which tells the presense of (word) in an 
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false
function checkWordPresence(word, array) {
  return array.includes(word);
}

// Example usage
const wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
const wordToCheck = 'raza';
const isPresent = checkWordPresence(wordToCheck, wordArray);
console.log("Word presence:", isPresent);

// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
function repeatLetter(letter) {
  return letter.repeat(10);
}

// Example usage
const letterToRepeat = 'a';
const repeatedString = repeatLetter(letterToRepeat);
console.log("Repeated letter:", repeatedString);

// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()
function reverseArray(arr) {
  return arr.reverse();
}

// Example usage
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const reversedArray = reverseArray(originalArray);
console.log("Reversed array:", reversedArray);
