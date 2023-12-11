const stadiums = [];
let showedlist = stadiums;


const saveStadium = () => {
  const stadiumList = document.getElementById("stadiumlist");
  const titleInput = document.getElementById("title__input").value;
  const locationInput = document.getElementById("location__input").value;
  const sportInput = parseFloat(document.getElementById("sport__input").value);
  const capacityInput = document.getElementById("capacity__input").value;

  if (sportInput ==='' || locationInput ==='' || titleInput === '' || capacityInput === '' || capacityInput === '0') {
    alert("Please fill in all fields and ensure the sport is not 0.");
    return; // Exit the function if sport is 0
  }

  const stadium = {
    title: titleInput,
    location: locationInput,
    sport: sportInput,
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
        <h2 class="card__stadium__sport">stadium sport: ${stadium.sport}</h2>
        <h2 class="card__stadium__capacity">stadium capacity: ${stadium.capacity}</h2>
        <button type="button" class="edit__button" onclick="editstadium(this.parentElement)">Edit</button>
      </div>
    `;
  stadiumList.appendChild(stadiumItem);
  TotalBysport(stadiums);
  showedlist = stadiums;

  titleInput.value = "";
  locationInput.value = "";
  sportInput.value = "";
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
      <h2 class="card__stadium__sport">stadium sport: ${item.sport}</h2>
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
  const sportInput = element.querySelector(".card__stadium__sport");
  const sport = sportInput.textContent.split(": ");
  stadiums.forEach((stadium, index) => {
    console.log(
      stadium.title === title &&
        stadium.location === location &&
        stadium.sport === parseFloat(sport[1])
    );
    if (
      stadium.title === title &&
      stadium.location === location &&
      stadium.sport === parseFloat(sport[1])
    ) {
      stadiums.splice(index, 1);
      element.remove();
    }
  });
  TotalBysport(stadiums);
}


