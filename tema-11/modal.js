let todayTiles = document.querySelector(".today");

let clickOnTile = function () {
  // show popup
  let popup = document.querySelector(".popup");
  popup.style.display = "block";

  // register close event for popup
  let closeButton = document.querySelector(".popup");
  closeButton.addEventListener("click", onCloseButtonClicked);
};

let onCloseButtonClicked = function () {
  // hide popup
  let popup = document.querySelector(".popup > button");
  popup.style.display = "none";
};

for (let m = 0; m < calendar.dataLaunches.length; i++) {
  todayTiles[m].addEventListener("click", clickOnTile);
}

let initTile = function () {
  axios
    .get("https://api.spacexdata.com/v4/launches")
    .then(function (response) {
      // success
      calendar.dataLaunches = response.data;
      clickOnTile();
    })
    .catch(function (error) {
      // error
      console.log(error);
    });
};

initTile();
