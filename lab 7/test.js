const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//1. Enter a number and on click of a button print its multiplication table.
function multiplicationTable() {
  rl.question("Enter a number to print its multiplication table: ", (number) => {
    number = parseInt(number);
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
    mainMenu();
  });
}

//2. Print the largest of three numbers entered by the user.
function largestOfThree() {
  rl.question("Enter three numbers separated by spaces: ", (input) => {
    const numbers = input.split(' ').map(Number);
    if (numbers.length !== 3) {
      console.log("Please enter exactly three numbers.");
    } else {
      const max = Math.max(...numbers);
      console.log(`The largest number is: ${max}`);
    }
    mainMenu();
  });
}

//3. Find the factorial of a number entered by the user.
function factorial() {
  rl.question("Enter a number to find its factorial: ", (number) => {
    number = parseInt(number);
    if (number < 0) {
      console.log("Factorial is not defined for negative numbers.");
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      console.log(`The factorial of ${number} is: ${result}`);
    }
    mainMenu();
  });
}

//4. Enter a list of positive numbers using the prompt terminated by a zero. Find the sum and average of three numbers
function sumAndAverage() {
  let numbers = [];
  function getNumber() {
    rl.question("Enter a positive number (or 0 to stop): ", (number) => {
      number = parseInt(number);
      if (number === 0) {
        if (numbers.length === 0) {
          console.log("No numbers were entered.");
        } else {
          const sum = numbers.reduce((a, b) => a + b, 0);
          const average = sum / numbers.length;
          console.log(`Sum: ${sum}, Average: ${average}`);
        }
        mainMenu();
      } else if (number > 0) {
        numbers.push(number);
        getNumber();
      } else {
        console.log("Please enter only positive numbers.");
        getNumber();
      }
    });
  }
  getNumber();
}

//Main Function
function mainMenu() {
  console.log("\nChoose an option:");
  console.log("1. Print multiplication table");
  console.log("2. Find the largest of three numbers");
  console.log("3. Find factorial of a number");
  console.log("4. Find sum and average of numbers");
  console.log("5. Exit");
  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        multiplicationTable();
        break;
      case "2":
        largestOfThree();
        break;
      case "3":
        factorial();
        break;
      case "4":
        sumAndAverage();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        mainMenu();
    }
  });
}

// Start the program
mainMenu();
