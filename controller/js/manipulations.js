function SortStadium(list) {
  const stadiumsList = document.getElementById("stadiumlist");
  stadiumsList.innerHTML = "";
  list.sort((a, b) => a.area - b.area);
  list.forEach((stadium) => {
    const stadiumItem = document.createElement("div");
    stadiumItem.classList.add("stadium-item");
    stadiumItem.innerHTML = `
      <div class="card__body">
        <img src="./stadium.jpeg">
        <h1 class="card__title">${stadium.title}</h1>
        <h2 class="card__stadium__location">stadium location: ${stadium.location}</h2>
        <h2 class="card__stadium__area">stadium area: ${stadium.area}</h2>
        <h2 class="card__stadium__capacity">stadium capacity: ${stadium.capacity}</h2>
        <button type="button" class="edit__button" onclick="editstadium(this.parentElement)">Edit</button>
      </div>
    `;

    stadiumsList.appendChild(stadiumItem);
  });
  TotalByArea(list);
  console.log(showedlist);
  console.log(list);
}

function TotalByArea(stadium) {
  const totalArea = stadium.reduce((totalArea, stadium) => totalArea + stadium.area, 0);
  console.log(totalArea);
  const totalAreaElement = document.getElementById("total__area");
  totalAreaElement.textContent = `Total Area: ${totalArea}`;
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
  TotalByArea(showedlist);
}

function restore(){
  display(stadiums);
  TotalByArea(stadiums);
  showedlist = stadiums;
}
