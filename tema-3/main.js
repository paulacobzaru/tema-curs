let theName = 'Jane Smith';
let theSum = '$12,450';
let theCar = 'Toyota Yaris';

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
 let namePlansCar = function(name, car, parent) {
    let pElement = document.createElement('p');
    pElement.innerHTML = name + ' plans to buy a ' + car + '.';
    parent.appendChild(pElement);
}
 let nameUseSumForCar = function(name, sum, car, parent) {
    let pElement = document.createElement('p');
    pElement.innerHTML = name + ' will use her ' + sum + ' to buy a ' + car + '.';
    parent.appendChild(pElement);
}
 let sumAlotForCar = function(sum, car, parent) {
    let pElement = document.createElement('p');
    pElement.innerHTML = sum + ' is a lot of money for a ' + car + '.';
    parent.appendChild(pElement);
  }

let group1 = function(parent) {
  nameHasSumInBank(theName, theSum, parent);
  sumIsAlot(theSum, parent);
  namePlansCar(theName, theCar, parent);
  nameUseSumForCar(theName, theSum, theCar, parent);
  sumAlotForCar(theSum, theCar, parent);
};
let group2 = function(parent) {
  sumIsAlot(theSum, parent);
  sumAlotForCar(theSum, theCar, parent);
  namePlansCar(theName, theCar, parent);
  nameHasSumInBank(theName, theSum, parent);
  nameUseSumForCar(theName, theSum, theCar, parent);
};
let group3 = function(parent) {
  namePlansCar(theName, theCar, parent);
  sumAlotForCar(theSum, theCar, parent);
  nameUseSumForCar(theName, theSum, theCar, parent);
  nameHasSumInBank(theName, theSum, parent);
  sumIsAlot(theSum, parent);
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