/*Tema 13

Tema obligatorie si simpla :)
Urmariti video-ul de la curs, secțiunea în care e explicat, 
folosit site-ul ‘jspaint’, 
cum se gandeste o sortare de tip Bubble Sort.
Declarati un sir de 10 numere, neordonate și scrieți 
un algoritm JavaScript, care sa ordoneze șirul. 
Folositi-va de funcțiile structurii Array (w3schools), 
pentru a putea inversa 2 valori are șirului, intre ele. 
Folositi un for de tip: ‘for (;conditie;) {}’ 
pentru a simula un while, 
o structura care se va repeta de oricate ori, 
pana cand o conditie e indeplinita.*/

/*let getString = prompt("Write an array separated by commas: ");
let getStringArray = getString.split(',');
let intArray = [];

for(let i = 0; i < getStringArray.length; i++){
    intArray += parseInt(getStringArray.indexOf(i));
    console.log(intArray);
}*/


// This is our unsorted array
let ourArray = [34, 43, 55, 63, 50, 6, 25, 57, 1];

// Creating the bblSort function
let bubbleSort = (ourArray) => {

    for (var i = 0; i < ourArray.length; i++) {

        // Last i elements are already in place 
        for (var j = 0; j < (ourArray.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (ourArray[j] > ourArray[j + 1]) {

                // If the condition is true then swap them
                let temp = ourArray[j];
                ourArray[j] = ourArray[j + 1];
                ourArray[j + 1] = temp;
            }
        }
    }
    // Print the sorted array
    console.log(ourArray);
}
bubbleSort(ourArray);
