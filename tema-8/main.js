let crewLaunch = {
  

  data: {
    crew: []
  },

  init: function(){

    axios
      .get('https://api.spacexdata.com/v4/crew')
      .then(function (response) {
          // handle success
          crewLaunch.data.crew = response.data;
          crewLaunch.doTable();
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
  },

  doTable: function(){

    let table = document.querySelector('.table');

    for(let i=0; i < crewLaunch.data.crew.length; i++){

          let tr = document.createElement('tr');
          let th = document.createElement('th');
          let tdName = document.createElement('td');
          let tdAgency = document.createElement('td');
          let tdStatus = document.createElement('td');

          th.innerHTML = i + 1;
          tdName.innerHTML = crewLaunch.data.crew[i].name;
          tdAgency.innerHTML = crewLaunch.data.crew[i].agency;
          tdStatus.innerHTML = crewLaunch.data.crew[i].status;

          tr.appendChild(th);
          tr.appendChild(tdName);
          tr.appendChild(tdAgency);
          tr.appendChild(tdStatus);
          table.appendChild(tr);
    }
  },
}
crewLaunch.init();