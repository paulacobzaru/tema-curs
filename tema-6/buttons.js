//button 1

function press() {
  alert("The first button was pressed.");
}

//button 2

let button2 = document.getElementById("button2");
let butt2 = document.createElement("button");
butt2.innerHTML = "Second";
button2.appendChild(butt2);

butt2.addEventListener("click", function () {
  alert("The second button was pressed.");
});

//button 3

let newButton = function (newB) {
  let newButtons = document.createElement("button");
  newButtons.innerHTML = newB;
  return newButtons;
};

let button3 = newButton("Start!");
let butt3 = document.getElementById("button3");
butt3.appendChild(button3);

let buttonStep1 = newButton("Step 1");
button3.addEventListener("click", function () {
  butt3.appendChild(buttonStep1);
});

let buttonStep2 = newButton("Step 2");
buttonStep1.addEventListener("click", function () {
  butt3.appendChild(buttonStep2);
});
let buttonStep3 = newButton("Step 3");
buttonStep2.addEventListener("click", function () {
  butt3.appendChild(buttonStep3);
});
let buttonStep4 = newButton("Step 4");
buttonStep3.addEventListener("click", function () {
  butt3.appendChild(buttonStep4);
});

let buttonStep5 = newButton("Step 5");
buttonStep4.addEventListener("click", function () {
  butt3.appendChild(buttonStep5);
});
buttonStep5.addEventListener("click", function () {
  alert("You have reached the end, there are no more buttons!");
});

//Scrieti o funcție care poate crea orice fel de buton,
//cu orice text pe el si cu orice fel de actiune atasata.
//Folositi aceasta functie într-un nou algoritm,
//care face ce face si algoritmul de la tema Simpla, punctul #3.

/**let buttonFunction = {
    newElement: (elementId, buttonType, buttonText) => {
        let buttonId = document.getElementById(elementId);
        let anyButton = document.createElement(buttonType);
        anyButton.innerHTML = buttonText;
        buttonId.appendChild(anyButton);
        return anyButton;
    },
    newFunction:(buttonType, newElement) => {
        let newAction = buttonType.addEventListener('click', newElement);
    }
};

buttonFunction.newElement("buttonF", "button", "Click me!").newFunction('button', 'buttonF', 'button', 'Step1');
**/

let n = prompt("How many elements do you want to add on the page: ");
n = parseInt(n);
let newElements = [];
newElements.length = n;
let newText = " ";
let buttonDiv = document.getElementById("button4");

for (let i = 1; i <= n; i++) {
  i = parseInt(i);
  newElements[i] = newButton("Button" + i);
  if (i === 1) {
    buttonDiv.appendChild(newElements[i]);
    newElements[i].addEventListener("click", function () {
      buttonDiv.appendChild(newElements[i + 1]);
    });
  } else {
    if (i < n) {
      newElements[i].addEventListener("click", function () {
        buttonDiv.appendChild(newElements[i + 1]);
      });
    } else {
      newElements[i].addEventListener("click", function () {
        alert("You have reached the end, there are no more buttons!");
      });
    }
  }
}

