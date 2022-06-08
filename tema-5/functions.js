//1. calculati : 4 / x + 5 - x * (34 - x + 10) / 6 + x

let x = prompt("Write a number: ");
x = parseInt(x);

let sum = function (a, b) {
  return a + b;
};

let substraction = function (a, b) {
  return a - b;
};

let multiplication = function (a, b) {
  return a * b;
};

let division = function (a, b) {
  return a / b;
};

let f1 = division(4, x); // 4/x
let f2 = sum(f1, 5); //4/x+5
let f3 = substraction(34, x); //34-x
let f4 = sum(f3, 10); // 34-x+10
let f5 = multiplication(x, f4); //x*(34-x+10))
let f6 = division(f5, 6); //x*(34-x+10))/6
let f7 = substraction(f2, f6);
let f8 = sum(f7, x);

let string1 =
  "1. Scrieti 4 functii, care, respectiv, pot aduna, scadea, inmulti sau imparti 2 numere. Cititi un X de la tastatura, cu functia prompt(), si rezolvati, folosind cat de mult functiile de mai sus, urmatorul calcul: 4 / x + 5 - x * (34 - x + 10) / 6 + x.";
let string2 = "Rezultatul este: ";
console.log(string1);
console.log(x);
console.log(string2);
console.log(f8);

let ex1 = document.getElementById("5.1");
let result1 = document.createElement("div");
result1.innerHTML = "Pentru x = " + x + " rezultatul este: " + f8;
ex1.appendChild(result1);

//Verificati daca un numar/cuvant este palindrom

let word = "";
let palindrome = function (word) {
  let isPalindrome = true;
  for (i = 0; i < word.length; i++) {
    if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
      isPalindrome = false;
    }
  }
  if (isPalindrome) {
    return "The number or word is palindrome.";
  } else {
    return "The number or word is not a palindrome.";
  }
};

word = prompt("Scrie un cuvant sau numar" + word);
console.log(
  "Check if the word or number " + "'" + word + "'" + " is palindrome or not."
);
console.log(palindrome(word));

let ex2 = document.getElementById("5.2");
let result2 = document.createElement("div");
result2.innerHTML =
  "Veridifcam daca cuvantul sau numarul " +
  "'" +
  word +
  "'" +
  " este palindrom. " +
  "<br>" +
  "<br>" +
  palindrome(word);
ex2.appendChild(result2);

//count the longest word

sentence = prompt("Write a sentence: ");

let longestWordFunction = function (sentence) {
  let splitStr = sentence.split(" ");
  let longestWord = splitStr.reduce(function (longest, current) {
    if (current.length > longest.length) {
      return current;
    } else {
      return longest;
    }
  }, "");
  return longestWord;
};

console.log("Check the longest word.");
console.log(sentence);
console.log("The longest word is ");
console.log(longestWordFunction(sentence));

let ex3 = document.getElementById("5.3");
let result3 = document.createElement("div");
result3.innerHTML =
  "The longest word of the sentence " +
  "<br>" +
  "<br>" +
  " '" +
  sentence +
  "' " +
  " is " +
  "'" +
  longestWordFunction(sentence) +
  "'";
ex3.appendChild(result3);

//calculati factorialul unui numar

let myNumber = prompt("Write a positive integer number");

function factorial(myNumber) {
  if (myNumber === 0 || myNumber === 1) {
    return 1;
  } else {
    if (Math.ceil(myNumber) !== Math.floor(myNumber)) {
      return -1;
    } else {
      return factorial(myNumber - 1) * myNumber;
    }
  }
}

let ex4 = document.getElementById("5.4");
let result4 = document.createElement("div");
result4.innerHTML =
  "The factorial number of the number " +
  "'" +
  myNumber +
  "' " +
  "is " +
  factorial(myNumber);
ex4.appendChild(result4);

// [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2] adunare/inmultire numere sir

let myArray = [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2];
let z = prompt(
  "Chose to add - write 1 - or multiply - write 2 - the elements of the array: " +
    myArray
);

let arrayChoice = {
  mySum: function mySum() {
    let aSum = 0;
    for (i = 0; i < myArray.length; i++) {
      let arrayItemAsInt = parseInt(myArray[i]);
      aSum = aSum + arrayItemAsInt;
    }
    return aSum;
  },
  myMultipl: function mult() {
    let aMult = 1;
    for (i = 0; i < myArray.length; i++) {
      aMult = aMult * arrayItemAsInt;
    }
    return aMult;
  },
  resultChoice: function aChoice() {
    let myChoice = " ";
    if (z === "1") {
      resultChoice = arrayChoice.mySum();
    } else {
      resultChoice = arrayChoice.myMultipl();
    }
  },
};

let res = "Rezultatul alegerii este: " + arrayChoice.resultChoice();
console.log(res);

let ex5 = document.getElementById("5.5");
let result5 = document.createElement("div");
result5.innerHTML = res;
ex5.appendChild(result5);

//info about a person

let person = {
  firstName: prompt("Enter your first name: "),
  lastName: prompt("Enter your last name: "),
  gender: prompt("Enter your gender (f/m): "),
  nationality: prompt("What is your nationality (Romanian/other)"),
  yearBirth: prompt("Enter your year of birth: "),
  writePoliteName: function politeName() {
    let prefix = "Mr. ";
    if (person.sex !== "m") {
      prefix = "Mrs. ";
    }
    return (politeName = prefix + person.firstName + " " + person.lastName);
  },
  checkIfRomanian: function nationalCheck() {
    let nationality = "Romanian";
    if (person.nationality !== "Romanian") {
      nationality = "other";
    }
    return (nationalCheck =
      person.firstName +
      " " +
      person.lastName +
      "'s nationality is " +
      nationality +
      ".");
  },
  calculateYourAge: function yourAge() {
    let age = 0;
    const d = new Date();
    let year = d.getFullYear();
    age = year - person.yearBirth;
    return (yourAge =
      person.firstName + " " + person.lastName + " is " + age + " years old.");
  },
};
console.log(person.writePoliteName());
console.log(person.checkIfRomanian());
console.log(person.calculateYourAge());

let ex61 = document.getElementById("5.6");
let result61 = document.createElement("div");
result61.innerHTML = person.writePoliteName();
ex61.appendChild(result61);

let ex62 = document.getElementById("5.6");
let result62 = document.createElement("div");
result62.innerHTML = person.checkIfRomanian();
ex62.appendChild(result62);

let ex63 = document.getElementById("5.6");
let result63 = document.createElement("div");
result63.innerHTML = person.calculateYourAge();
ex63.appendChild(result63);

/**2.4. Scrieti un obiect al carui proprietati
 * vor avea valoarea de tip functie
 * si vor fi functiile de mai sus */

let ex64 = document.getElementById("5.7");
let result64 = document.createElement("div");
result64.innerHTML = person.writePoliteName.checkIfRomanian;
ex64.appendChild(result64);
