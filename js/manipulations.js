function SortStadium(list) {
  const stadiumsList = document.getElementById("stadiumlist");
  stadiumsList.innerHTML = "";
  list.sort((a, b) => a.sport - b.sport);
  list.forEach((stadium) => {
    const stadiumItem = document.createElement("div");
    stadiumItem.classList.add("stadium-item");
    stadiumItem.innerHTML = `
      <div class="card__body">
        <img src="./stadium.jpeg">
        <h1 class="card__title">${stadium.title}</h1>
        <h2 class="card__stadium__location">stadium location: ${stadium.location}</h2>
        <h2 class="card__stadium__sport">stadium sport: ${stadium.sport}</h2>
        <h2 class="card__stadium__capacity">stadium capacity: ${stadium.capacity}</h2>
        <button type="button" class="edit__button" onclick="editstadium(this.parentElement)">Edit</button>
      </div>
    `;

    stadiumsList.appendChild(stadiumItem);
  });
  TotalBysport(list);
  console.log(showedlist);
  console.log(list);
}

function TotalBysport(stadium) {
  const totalsport = stadium.reduce((totalsport, stadium) => totalsport + stadium.sport, 0);
  console.log(totalsport);
  const totalsportElement = document.getElementById("total__sport");
  totalsportElement.textContent = `Total sport: ${totalsport}`;
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
  TotalBysport(showedlist);
}

function restore(){
  display(stadiums);
  TotalBysport(stadiums);
  showedlist = stadiums;
}
