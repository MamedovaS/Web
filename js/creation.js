const stadiums = [];
let showedlist = stadiums;


const saveStadium = () => {
  const stadiumList = document.getElementById("stadiumlist");
  const titleInput = document.getElementById("title__input").value;
  const locationInput = document.getElementById("location__input").value;
  const areaInput = parseFloat(
    document.getElementById("area__input").value
  );
  const capacityInput = document.getElementById("capacity__input").value;

  if (areaInput <= 0 || locationInput ==='' || titleInput === '' || capacityInput === '' || capacityInput === '0') {
    alert("Please fill in all fields and ensure the area is not 0.");
    return; // Exit the function if area is 0
  }

  const stadium = {
    title: titleInput,
    location: locationInput,
    area: areaInput,
    capacity: capacityInput,
  };
  stadiums.push(stadium);
  const stadiumItem = document.createElement("div");
  stadiumItem.classList.add("stadium-item");
  stadiumItem.innerHTML = `
      <div class="card__body">
        <img src="./stadium.jpeg" >
        <h1 class="card__title">${stadium.title}</h1>
        <h2 class="card__stadium__location">stadium location: ${stadium.location}</h2>
        <h2 class="card__stadium__area">stadium area: ${stadium.area}</h2>
        <h2 class="card__stadium__capacity">stadium capacity: ${stadium.capacity}</h2>
        <button type="button" class="edit__button" onclick="editstadium(this.parentElement)">Edit</button>
      </div>
    `;
  stadiumList.appendChild(stadiumItem);
  TotalByArea(stadiums);
  showedlist = stadiums;

  titleInput.value = "";
  locationInput.value = "";
  areaInput.value = "";
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
      <img src="./stadium.jpeg" >
      <h1 class="card__title">${item.title}</h1>
      <h2 class="card__stadium__location">stadium location: ${item.location}</h2>
      <h2 class="card__stadium__area">stadium area: ${item.area}</h2>
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
  const areaInput = element.querySelector(".card__stadium__area");
  const area = areaInput.textContent.split(": ");
  stadiums.forEach((stadium, index) => {
    console.log(
      stadium.title === title &&
        stadium.location === location &&
        stadium.area === parseFloat(area[1])
    );
    if (
      stadium.title === title &&
      stadium.location === location &&
      stadium.area === parseFloat(area[1])
    ) {
      stadiums.splice(index, 1);
      element.remove();
    }
  });
  TotalByArea(stadiums);
}


