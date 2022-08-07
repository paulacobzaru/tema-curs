//Tema 13

//Tema obligatorie si simpla :)
//Urmariti video-ul de la curs, secțiunea în care e explicat, 
//folosit site-ul ‘jspaint’, 
//cum se gandeste o sortare de tip Bubble Sort.
//Declarati un sir de 10 numere, neordonate și scrieți 
//un algoritm JavaScript, care sa ordoneze șirul. 
//Folositi-va de funcțiile structurii Array (w3schools), 
//pentru a putea inversa 2 valori are șirului, intre ele. 
//Folositi un for de tip: ‘for (;conditie;) {}’ 
//pentru a simula un while, 
//o structura care se va repeta de oricate ori, 
//pana cand o conditie e indeplinita.

let arrayToSort = window.querySelector('.bubblesort');


function swap(arr, xp, yp)
{
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
  
// An optimized version of Bubble Sort
function bubbleSort( arr, n)
{
let i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
          
        }
    }
  
}
}
  