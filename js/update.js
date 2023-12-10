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
  const areaElement = currentElement
    .querySelector(".card__stadium__area")
    .textContent.split(": ");
  const capacityElement = currentElement
    .querySelector(".card__stadium__capacity")
    .textContent.split(": ");
  document.getElementById("title__input__edit").value = `${titleElement}`;
  document.getElementById("location__input__edit").value = `${locationElement[1]}`;
  document.getElementById("area__input__edit").value = `${areaElement[1]}`;
  document.getElementById("capacity__input__edit").value = `${capacityElement[1]}`;
};

const saveEdit = () => {
  const titleUpdated = document.getElementById("title__input__edit").value;
  const locationUpdated = document.getElementById("location__input__edit").value;
  const areaUpdated = document.getElementById("area__input__edit").value;
  const capacityUpdated = document.getElementById("capacity__input__edit").value;

  const titleElement = currentElement.querySelector(".card__title");
  const locationElement = currentElement.querySelector(".card__stadium__location");
  const areaElement = currentElement.querySelector(".card__stadium__area");
  const capacityElement = currentElement.querySelector(".card__stadium__capacity");

  const title = titleElement.textContent;
  const location = locationElement.textContent.split(": ");
  const area = areaElement.textContent.split(": ");

  if (areaUpdated <= 0 || locationUpdated==='' || titleUpdated === '' || capacityUpdated === '' || capacityUpdated === '0') {
    alert("Please fill in all fields and ensure the area is not 0.");
    return; // Exit the function if area is 0
  }

  titleElement.textContent = titleUpdated;
  locationElement.textContent = "stadium location: " + locationUpdated;
  areaElement.textContent = "stadium area: " + areaUpdated;
  capacityElement.textContent = "stadium capacity: " + capacityUpdated;

  for (let i = 0; i < stadiums.length; i++) {
    if (
      stadiums[i].title === title &&
      stadiums[i].location === location[1] &&
      stadiums[i].area === parseFloat(area[1])
    ) {
      stadiums[i].title = titleUpdated;
      stadiums[i].location = locationUpdated;
      stadiums[i].area = parseFloat(areaUpdated);
      stadiums[i].capacity = capacityUpdated;
    }
  }
  edit.classList.add(HIDE_CLASSNAME);
  TotalByArea(stadiums);
};
const cancelEdit = () => {
    edit.classList.add(HIDE_CLASSNAME);

}
