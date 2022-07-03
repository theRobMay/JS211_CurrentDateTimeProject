// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
const today = new Date();
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log(`Today is : ${daylist[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ')
{
  if (minute===0 && second===0)
  {
    hour=12;
    prepand=' Noon';
  }
  else
  {
    hour=12;
    prepand=' PM';
  }
}
if (hour===0 && prepand===' AM ')
{
  if (minute===0 && second===0)
  {
    hour=12;
    prepand=' Midnight';
  }
  else
  {
    hour=12;
    prepand=' AM';
  }
}
console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
// Write a JavaScript program to convert a number to a string.
const numToString =() => {
  let num = 15
  let text = num.toString();

  console.log(text, num)
  document.getElementById("num-to-string").innerHTML = (`The typeof ${text} is ${typeof text}`)
}


// Write a JavaScript program to convert a string to the number.

const stringToNum =() => {
  let num = "15";
  let text = parseInt(num);

  console.log(text, num);

  document.getElementById("string-to-num").innerHTML = (`The typeof ${text} is ${typeof text}`);
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
let datatypeItem =""

const saveDatatypeInput = () => {
  let datatypeItem = document.getElementById("datatypeItem").value;
}
const putDataInElement = (userDatatypeItem) => {
  document.getElementById("dataResults").innerHTML = (`Data Type: ${typeof datatypeItem}`);
}
const dataResult = () => {
  putDataInElement(datatypeItem)
}
  
// Write a JavaScript program that adds 2 numbers together.
let firstNum = null
let secondNum = null
let operation = null

const saveFirstNumber = (num) => {
  firstNum = parseInt(num)
}
const saveSecondNumber = (num) => {
  secondNum = parseInt(num)
}

const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

const putResultInElement = (operationResults) => {
  document.getElementById("result").innerHTML = "Results: " + operationResults

}
const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  console.log(operation)
}
const equals = () => {
  switch (operation) {
  case "addition":
    putResultInElement(add(firstNum, secondNum))
    break;
  default:
    "Choose an operation"
  }
}
// Write a JavaScript program that runs only when 2 things are true.
let testNum = null;

const saveTestNumber = (num) => {
  testNum = parseInt(num)
}

const conditionalCheck = () => {
  console.log("testnum:", testNum)
  if (testNum < 5) {
    document.getElementById("conditionResult").innerHTML = "This number is less than 5"
  }
  if (testNum >= 5 && testNum <= 100) {
    document.getElementById("conditionResult").innerHTML = "This number is greater than 4 but less than 100"
  }
  if (testNum < 0 || testNum >100) {
    document.getElementById("conditionResult").innerHTML = "This number is greater than 100 or is a negative integer"
  }
}







// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
