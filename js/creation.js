const stadiums = [];
let showedlist = stadiums;

const displayAllStadiums = async () =>{
  const allStadiums = await getAllStadiums();
  stadiums = allStadiums;
  showedlist = stadiums;
  display(stadiums);
  TotalByticket(showedlist);
}


const saveStadium = () => {
  const stadiumList = document.getElementById("stadiumlist");
  const titleInput = document.getElementById("title__input").value;
  const locationInput = document.getElementById("location__input").value;
  const ticketInput = parseFloat(document.getElementById("ticket__input").value);
  const capacityInput = document.getElementById("capacity__input").value;
  
  if (!String.isString(String(titleInput))) {
    alert("Please enter a valid integer for the title.");
    return;}
  
  if (!Number.isInteger(Number(capacityInput))) {
    alert("Please enter a valid integer for the capacity.");
    return;}

  if (!Number.isInteger(Number(ticketInput))) {
    alert("Please enter a valid integer for the ticket.");
    return;} 

  if (ticketInput <= 0 || locationInput ==='' || titleInput === '' || capacityInput === '' || capacityInput === '0') {
    alert("Please fill in all fields and ensure the ticket is not 0.");
    return; 
  }
  

  const stadium = {
    title: titleInput,
    location: locationInput,
    ticket: ticketInput,
    capacity: capacityInput,
  };
  stadiums.push(stadium);
  const stadiumItem = document.createElement("div");
  stadiumItem.classList.add("stadium-item");
  stadiumItem.innerHTML = `
      <div class="card__body">
        <img src="/res/stadium.jpg" >
        <h1 class="card__title">${stadium.title}</h1>
        <h2 class="card__stadium__location">stadium location: ${stadium.location}</h2>
        <h2 class="card__stadium__ticket">stadium ticket: ${stadium.ticket}</h2>
        <h2 class="card__stadium__capacity">stadium capacity: ${stadium.capacity}</h2>
        <button type="button" class="edit__button" onclick="editstadium(this.parentElement)">Edit</button>
      </div>
    `;
  stadiumList.appendChild(stadiumItem);
  TotalByticket(stadiums);
  showedlist = stadiums;

  titleInput.value = "";
  locationInput.value = "";
  ticketInput.value = "";
  capacityInput.value = "";

  restore();
};

function display(stadiums) {
  const stadiumList = document.getElementById("stadiumlist");
  stadiumList.innerHTML = "";
  stadiums.forEach((item) => {
    const stadiumItem = document.createElement("div");
    stadiumItem.classList.add("stadium-item");
    stadiumItem.innerHTML = `
    <div class="card__body">
      <img src="/res/stadium.jpg" >
      <h1 class="card__title">${item.title}</h1>
      <h2 class="card__stadium__location">stadium location: ${item.location}</h2>
      <h2 class="card__stadium__ticket">stadium ticket: ${item.ticket}</h2>
      <h2 class="card__stadium__capacity">stadium capacity: ${item.capacity}</h2>
      <button type="button" class="edit__button" onclick="editStadium(this.parentElement)">Edit</button>
    </div>
  `;
    stadiumList.appendChild(stadiumItem);
  });
}

function deleteStadium(element) {
  const titleInput = element.querySelector(".card__title");
  const title = titleInput.textContent;
  const locationInput = element.querySelector(".card__stadium__location");
  const location = locationInput.textContent;
  const ticketInput = element.querySelector(".card__stadium__ticket");
  const ticket = ticketInput.textContent.split(": ");
  stadiums.forEach((stadium, index) => {
    console.log(
      stadium.title === title &&
        stadium.location === location &&
        stadium.ticket === parseFloat(ticket[1])
    );
    if (
      stadium.title === title &&
      stadium.location === location &&
      stadium.ticket === parseFloat(ticket[1])
    ) {
      stadiums.splice(index, 1);
      element.remove();
    }
  });
  TotalByticket(stadiums);
}


