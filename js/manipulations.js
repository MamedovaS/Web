function SortStadiums(list) {
  const stadiumsList = document.getElementById("stadiumlist");
  stadiumsList.innerHTML = "";
  list.sort((a, b) => a.bought_tiket - b.bought_tiket);
  list.forEach((stadium) => {
    const stadiumItem = document.createElement("div");
    stadiumItem.classList.add("stadium-item");
    stadiumItem.innerHTML = `
      <div class="card__body">
        <img src="./stadium.jpeg">
        <h1 class="card__title">${stadium.title}</h1>
        <h2 class="card__stadium__location">stadium location: ${stadium.location}</h2>
        <h2 class="card__stadium__bought_tiket">stadium bought_tiket: ${stadium.bought_tiket}</h2>
        <h2 class="card__stadium__capacity">stadium capacity: ${stadium.capacity}</h2>
        <button type="button" class="edit__button" onclick="editstadium(this.parentElement)">Edit</button>
      </div>
    `;

    stadiumsList.appendChild(stadiumItem);
  });
  TotalBybought_tiket(list);
  console.log(showedlist);
  console.log(list);
}

function TotalBybought_tiket(stadium) {
  const totalbought_tiket = stadium.reduce((totalbought_tiket, stadium) => totalbought_tiket + stadium.bought_tiket, 0);
  console.log(totalbought_tiket);
  const totalbought_tiketElement = document.getElementById("total__bought_tiket");
  totalbought_tiketElement.textContent = `Total bought_tiket: ${totalbought_tiket}`;
}


function SearchStadiums() {
  const findStadium = document
    .getElementById("find__title")
    .value.toLowerCase();
  const result = showedlist.filter((stadium) => {
    return stadium.title.toLowerCase().includes(findStadium);
  });
  showedlist = result;
  display(showedlist);
  console.log(showedlist);
  TotalBybought_tiket(showedlist);
}

function restore(){
  display(stadiums);
  TotalBybought_tiket(stadiums);
  showedlist = stadiums;
}
