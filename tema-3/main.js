let name = "Jane Smith";
let sum = "$12,450";
let car = "Toyota Yaris";
let g = "=";

let myFunction1 = function nameHasSum(name, sum){
  return name + " has " + sum + " in her bank account.";
}
let myFunction2 = function sumMoney(sum){
  return sum + " is a lot of money.";
}
let myFunction3 = function nameWantsCar(name, car){
  return name + " plans to buy a " + car + ' .';
}
let myFunction4 = function nameUseMoneyCar(name, money, car){
  return name + " will use her " + sum + " to buy a " + car + '.';
}
let myFunction5 = function nameMoneyCar(name, car){
  return name + " is a lot of money for a " + car + ' .';
}

let parFunction = function createPTag(myText){
  let theNewPTag = document.createElement('p');//<p></p>
  theNewPTag.innerHTML = myText;//test text
  let elem = document.getElementsByTagName("body")[0];
  elem.appendChild(theNewPTag);//<body><p>test text</p></body>
}

function createBrTag() {
  let br = document.createElement('br');
  let brPar = document.getElementsByTagName("body")[0];
  brPar.appendChild(br);
} 

function createSpanTag1(g){
  let theNewSpan = document.createElement('span');//<span></span>
  theNewSpan.setAttribute('id','spanId1')
  let spanContent = document.createTextNode(g);
  let el = document.getElementsByTagName("body")[0];
  el.appendChild(theNewSpan);
  let equals = document.getElementById('spanId1');
  equals.style.visibility = "hidden";
  let width, savedContent;
  do{
    savedContent = equals.textContent;
    equals.textContent += '=';
  }
  while(equals.offsetWidth < equals.parentNode.offsetWidth);
  equals.textContent = savedContent;
  equals.style.visibility = 'visible';
}

function createSpanTag2(g) {
  let theNewSpan = document.createElement('span'); //<span></span>
  theNewSpan.setAttribute('id', 'spanId2');
  let spanContent = document.createTextNode(g);
  let el = document.getElementsByTagName("body")[0];
  el.appendChild(theNewSpan);
  let equals = document.getElementById('spanId2');
  equals.style.visibility = "hidden";
  let width, savedContent;
  do {
    savedContent = equals.textContent;
    equals.textContent += '=';
  }
  while (equals.offsetWidth < equals.parentNode.offsetWidth);
  equals.textContent = savedContent;
  equals.style.visibility = 'visible';
}

parFunction(myFunction1('Jane Smith', '$12,450'));
parFunction(myFunction2('$12,450'));
parFunction(myFunction3('Jane Smith', 'Toyota Yaris'));
parFunction(myFunction4('Jane Smith', '$12,450', 'Toyota Yaris'));
parFunction(myFunction5('$12,450', 'Toyota Yaris'));

createBrTag();
createSpanTag1(g);
createBrTag();
createBrTag();

parFunction(myFunction2('$12,450'));
parFunction(myFunction5('$12,450', 'Toyota Yaris'));
parFunction(myFunction3('Jane Smith', 'Toyota Yaris'));
parFunction(myFunction1('Jane Smith', '$12,450'));
parFunction(myFunction4('Jane Smith', '$12,450', 'Toyota Yaris'));

createBrTag();
createSpanTag2(g);
createBrTag();
createBrTag();

parFunction(myFunction3('Jane Smith', 'Toyota Yaris'));
parFunction(myFunction5('$12,450', 'Toyota Yaris'));
parFunction(myFunction4('Jane Smith', '$12,450', 'Toyota Yaris'));
parFunction(myFunction1('Jane Smith', '$12,450'));
parFunction(myFunction2('$12,450'));

