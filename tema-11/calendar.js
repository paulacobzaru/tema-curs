/*Tema obligatorie si simpla :)
Aduceti cu axios toate lansarile de la SpaceX API. 
In web page, afisati, tabelar, niste casute (aprox dimensiune 200px) 
reprezentand zilele din luna curenta. 
Daca exista lansari SpaceX in luna curenta, 
afisati o bulina albastra in casuta zilei in care va fi sau a fost lansarea.
Apasand pe orice bulina albastra, deschideti un Bootstrap modal, 
in care sa afisati unele detalii, la alegere, despre lansarea respectiva.
Adaugati butoane in dreapta si stanga paginii web, 
un buton de <next> si unul de <prev>; aceste butoane, 
sa inlocuiasca luna curenta din pagina cu luna urmatoare sau anterioara, 
dupa caz; lansarile din lunile respective, sa fie marcate tot 
cu buline clickabile.
Asigurati-va ca nu doar cele 3 luni de la punctul 3 sunt acoperite 
de programul vostru, ci veti lasa user-ul sa mearga din luna in luna, 
pana la primele, respectiv ultimele lansari SpaceX.

Tema obligatorie ce necesita creativitate :)
Aveti grija ca, in loc de ‘next’ si ‘prev’, 
pe butoanele din marginea paginii, sa fie scrise numele lunii din an corecte
Faceti in asa fel incat, structura tabelara de patrate de mai sus, 
sa fie ordonata pe zile din saptamana (Luni, Marti etc); 
astfel, daca 1 a lunii pica Miercuri, primele casute de Luni si 
Marti sa fie goale:*/

let date = new Date();

let calendar = {
  //data: {
  //calendarLaunches: [],
  //},

  allDataLaunches: [],
  dataLaunches: {
    name: [],
    date_utc: [],
    details: [],
    //youtubeLink: [],
    //wikipedia: []
  },

  init: function () {
    axios
      .get("https://api.spacexdata.com/v4/crew")
      .then(function (response) {
        calendar.allDataLaunches = response.data;

        console.log(calendar);
        for (let i in calendar.allDataLaunches) {
          calendar.dataLaunches.name = calendar.allDataLaunches[i].name;
          calendar.dataLaunches.date_utc.push(
            calendar.allDataLaunches[i].date_utc
          );
          calendar.dataLaunches.details.push(
            calendar.allDataLaunches[i].details
          );
          //calendar.dataLaunches.youtubeLink.push(calendar.allDataLaunches[i].links.webcast);
          //calendar.dataLaunches.wikipedia.push(calendar.allDataLaunches[i].links.wikipedia);
          
          /*let launchDay = [];
          for(let k = 0; k<calendar.allDataLaunches.length; k++){
            if(launchDay ===calendar.allDataLaunches){
              launchDay = calendar.allDataLaunches;
            }
            k++;
          }*/
          launchDay = calendar.allDataLaunches;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

calendar.init();

let renderCalendar = function () {
  date.setDate(1);

  let monthDays = document.querySelector(".days");

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  let firstDayIndex = date.getDay();

  let lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  let nextDays = 7 - lastDayIndex - 1;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML =
    months[date.getMonth()] + " " + date.getFullYear();

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

let onTileClicked = function () {
  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  }),
    document.querySelector(".next").addEventListener("click", () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });
};

renderCalendar();
onTileClicked();
