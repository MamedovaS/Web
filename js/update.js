const HIDE_CLASSNAME = "hide";

const edit = document.querySelector(".edit");

let currentElement;
const editStadium = (element) => {
  edit.classList.remove(HIDE_CLASSNAME);
  currentElement = element;
  const titleElement = currentElement.querySelector(".card__title").textContent;
  const locationElement = currentElement
    .querySelector(".card__stadium__location")
    .textContent.split(": ");
  const bought_tiketElement = currentElement
    .querySelector(".card__stadium__bought_tiket")
    .textContent.split(": ");
  const capacityElement = currentElement
    .querySelector(".card__stadium__capacity")
    .textContent.split(": ");
  document.getElementById("title__input__edit").value = `${titleElement}`;
  document.getElementById("location__input__edit").value = `${locationElement[1]}`;
  document.getElementById("bought_tiket__input__edit").value = `${bought_tiketElement[1]}`;
  document.getElementById("capacity__input__edit").value = `${capacityElement[1]}`;
};

const saveEdit = () => {
  const titleUpdated = document.getElementById("title__input__edit").value;
  const locationUpdated = document.getElementById("location__input__edit").value;
  const bought_tiketUpdated = document.getElementById("bought_tiket__input__edit").value;
  const capacityUpdated = document.getElementById("capacity__input__edit").value;

  const titleElement = currentElement.querySelector(".card__title");
  const locationElement = currentElement.querySelector(".card__stadium__location");
  const bought_tiketElement = currentElement.querySelector(".card__stadium__bought_tiket");
  const capacityElement = currentElement.querySelector(".card__stadium__capacity");

  const title = titleElement.textContent;
  const location = locationElement.textContent.split(": ");
  const bought_tiket = bought_tiketElement.textContent.split(": ");

  if (bought_tiketUpdated <= 0 || locationUpdated==='' || titleUpdated === '' || capacityUpdated === '' || capacityUpdated === '0') {
    alert("Please fill in all fields and ensure the bought_tiket is not 0.");
    return; // Exit the function if bought_tiket is 0
  }

  titleElement.textContent = titleUpdated;
  locationElement.textContent = "stadium location: " + locationUpdated;
  bought_tiketElement.textContent = "stadium bought_tiket: " + bought_tiketUpdated;
  capacityElement.textContent = "stadium capacity: " + capacityUpdated;

  for (let i = 0; i < stadiums.length; i++) {
    if (
      stadiums[i].title === title &&
      stadiums[i].location === location[1] &&
      stadiums[i].bought_tiket === parseFloat(bought_tiket[1])
    ) {
      stadiums[i].title = titleUpdated;
      stadiums[i].location = locationUpdated;
      stadiums[i].bought_tiket = parseFloat(bought_tiketUpdated);
      stadiums[i].capacity = capacityUpdated;
    }
  }
  edit.classList.add(HIDE_CLASSNAME);
  TotalBybought_tiket(stadiums);
};
const cancelEdit = () => {
    edit.classList.add(HIDE_CLASSNAME);

}