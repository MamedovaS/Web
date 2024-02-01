function SortStadiums(list) {
  const stadiumsList = document.getElementById("stadiumlist");
  stadiumsList.innerHTML = "";
  list.sort((a, b) => a.capacity - b.capacity);
  list.forEach((stadium) => {
    const stadiumItem = document.createElement("div");
    stadiumItem.classList.add("stadium-item");
    stadiumItem.innerHTML = `
      <div class="card__body">
        <img src="./stadium.jpeg">
        <h1 class="card__title">${stadium.title}</h1>
        <h2 class="card__stadium__location">stadium location: ${stadium.location}</h2>
        <h2 class="card__stadium__bought_ticket">stadium bought_ticket: ${stadium.bought_ticket}</h2>
        <h2 class="card__stadium__capacity">stadium capacity: ${stadium.capacity}</h2>
        <button type="button" class="edit__button" onclick="editstadium(this.parentElement)">Edit</button>
      </div>
    `;
  
    stadiumsList.appendChild(stadiumItem);
  });
  TotalByticket(list);
  console.log(showedlist);
  console.log(list);
  }
  
  function TotalByticket(stadium) {
  const totalbought_ticket = stadium.reduce((totalbought_ticket, stadium) => totalbought_ticket + stadium.bought_ticket, 0);
  console.log(totalbought_ticket);
  const totalbought_ticketElement = document.getElementById("total__bought_ticket");
  totalbought_ticketElement.textContent = `Total bought_ticket: ${totalbought_ticket}`;
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
  TotalByticket(showedlist);
  }
  
  function restore(){
  display(stadiums);
  TotalByticket(stadiums);
  showedlist = stadiums;
  }