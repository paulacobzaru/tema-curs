//Homework 9
//Scrieți un mic program care sa afiseze în pagina web, 
//toate datele calendaristice incepand din 1 iulie 2021 și 
//pana-n ziua curentă (ziua în care utilizatorul intra pe pagina), 
//din 6 in 6 zile. Folosiți formatul datei din exemplul de mai jos.
//Exemplu: pentru ca 1 Iulie 2021 pica într-o zi de Joi, 
//primele 3 date din lista pe care o veti afisa, for fi:
//Thu, July 1, 2021
//Wed, July 7, 2021
//Tue, July 20, 2021

let year = 2021;
let month = 6;
let day = 1;
let divLine = document.getElementById('date');

weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


for(new Date(year,month,day); new Date(year,month,day) <= new Date(); day += 6){
    let newDate = new Date(year, month, day);

    let dayOfWeek = weekDays[newDate.getDay()];
    let monthOfYear = months[newDate.getMonth()];
    let dayOfMonth = newDate.getDate();
    let yearOfArray = newDate.getFullYear();


    let formatDate = dayOfWeek + ', ' + monthOfYear + ' ' + dayOfMonth + ', ' + yearOfArray;

    let myDay = document.createTextNode(formatDate);
    let loopDiv = document.createElement('div');
    loopDiv.appendChild(myDay);
    let breakLine = document.createElement('br');
    divLine.appendChild(loopDiv);
    divLine.appendChild(breakLine);

}

//Thu, July 1, 2021;