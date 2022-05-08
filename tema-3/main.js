let theName = 'Jane Smith';
let theSum = '$12,450';
let theCar = 'Toyota Yaris';
// let g = '=';

let nameHasSumInBank = function(name, sum, parent) {
  let pElement = document.createElement('p');
  pElement.innerHTML = name + ' has ' + sum + ' in her bank account.';
  parent.appendChild(pElement);
}
let sumIsAlot = function(sum, parent) {
  let pElement = document.createElement('p');
  pElement.innerHTML = sum + ' is a lot of money.';
  parent.appendChild(pElement);
}
// let namePlansCar = function(name, car) {
//   return name + ' plans to buy a ' + car + '.';
// }
// let nameUseSumForCar = function(name, sum, car) {
//   return name + ' will use her ' + sum + ' to buy a ' + car + '.';
// }
// let sumAlotForCar = function(sum, car) {
//   return sum + ' is a lot of money for a ' + car + '.';
// }

let group1 = function(parent) {
  nameHasSumInBank(theName, theSum, parent);
  sumIsAlot(theSum, parent);
  // namePlansCar(theName, theCar, parent);
  // nameUseSumForCar(theName, theSum, theCar, parent);
  // sumAlotForCar(theSum, theCar, parent);
};
let group2 = function(parent) {
  // sumAlotForCar(theSum, theCar, parent);
  // nameUseSumForCar(theName, theSum, theCar, parent);
  sumIsAlot(theSum, parent);
  nameHasSumInBank(theName, theSum, parent);
  // namePlansCar(theName, theCar, parent);
};
let group3 = function(parent) {
  nameHasSumInBank(theName, theSum, parent);
  sumIsAlot(theSum, parent);
  // namePlansCar(theName, theCar, parent);
  // nameUseSumForCar(theName, theSum, theCar, parent);
  // sumAlotForCar(theSum, theCar, parent);
};
let equalsCharLine = function(parent) {
  let pElement = document.createElement('p');
  pElement.innerHTML = '=============================================';
  parent.appendChild(pElement);
}

let theParent = document.getElementById('theBody');

group1(theParent);
equalsCharLine(theParent);
group2(theParent);
equalsCharLine(theParent);
group3(theParent);


// let parFunction = function createPTag(myText){
//   let theNewPTag = document.createElement('p');//<p></p>
//   theNewPTag.innerHTML = myText;//test text
//   let elem = document.getElementsByTagName('body')[0];
//   elem.appendChild(theNewPTag);//<body><p>test text</p></body>
// }

// function createBrTag() {
//   let br = document.createElement('br');
//   let brPar = document.getElementsByTagName('body')[0];
//   brPar.appendChild(br);
// } 

// function createSpanTag1(g){
//   let theNewSpan = document.createElement('span');//<span></span>
//   theNewSpan.setAttribute('id','spanId1')
//   let spanContent = document.createTextNode(g);
//   let el = document.getElementsByTagName('body')[0];
//   el.appendChild(theNewSpan);
//   let equals = document.getElementById('spanId1');
//   equals.style.visibility = 'hidden';
//   let width, savedContent;
//   do{
//     savedContent = equals.textContent;
//     equals.textContent += '=';
//   }
//   while(equals.offsetWidth < equals.parentNode.offsetWidth);
//   equals.textContent = savedContent;
//   equals.style.visibility = 'visible';
// }

// function createSpanTag2(g) {
//   let theNewSpan = document.createElement('span'); //<span></span>
//   theNewSpan.setAttribute('id', 'spanId2');
//   let spanContent = document.createTextNode(g);
//   let el = document.getElementsByTagName('body')[0];
//   el.appendChild(theNewSpan);
//   let equals = document.getElementById('spanId2');
//   equals.style.visibility = 'hidden';
//   let width, savedContent;
//   do {
//     savedContent = equals.textContent;
//     equals.textContent += '=';
//   }
//   while (equals.offsetWidth < equals.parentNode.offsetWidth);
//   equals.textContent = savedContent;
//   equals.style.visibility = 'visible';
// }

// parFunction(myFunction1('Jane Smith', '$12,450'));
// parFunction(myFunction2('$12,450'));
// parFunction(myFunction3('Jane Smith', 'Toyota Yaris'));
// parFunction(myFunction4('Jane Smith', '$12,450', 'Toyota Yaris'));
// parFunction(myFunction5('$12,450', 'Toyota Yaris'));

// createBrTag();
// createSpanTag1(g);
// createBrTag();
// createBrTag();

// parFunction(myFunction2('$12,450'));
// parFunction(myFunction5('$12,450', 'Toyota Yaris'));
// parFunction(myFunction3('Jane Smith', 'Toyota Yaris'));
// parFunction(myFunction1('Jane Smith', '$12,450'));
// parFunction(myFunction4('Jane Smith', '$12,450', 'Toyota Yaris'));

// createBrTag();
// createSpanTag2(g);
// createBrTag();
// createBrTag();

// parFunction(myFunction3('Jane Smith', 'Toyota Yaris'));
// parFunction(myFunction5('$12,450', 'Toyota Yaris'));
// parFunction(myFunction4('Jane Smith', '$12,450', 'Toyota Yaris'));
// parFunction(myFunction1('Jane Smith', '$12,450'));
// parFunction(myFunction2('$12,450'));

