const HIDE_CLASSNAME = "hide";

const edit = document.querySelector(".edit");

let currentElement;
const editStadium = (element) => {
  edit.classList.remove(HIDE_CLASSNAME);
  currentElement = element;
  
  const titleElement = currentElement.querySelector(".card__title").textContent;
 
  const locationElement = currentElement.querySelector(".card__stadium__location")
    .textContent.split(": ");
  const bought_ticketElement = currentElement.querySelector(".card__stadium__bought_ticket")
    .textContent.split(": ");
  const capacityElement = currentElement
    .querySelector(".card__stadium__capacity")
    .textContent.split(": ");
  document.getElementById("title__input__edit").value = `${titleElement}`;
  document.getElementById("location__input__edit").value = `${locationElement[1]}`;
  document.getElementById("bought_ticket__input__edit").value = `${bought_ticketElement[1]}`;
  document.getElementById("capacity__input__edit").value = `${capacityElement[1]}`;
};

const saveEdit = () => {
  const titleUpdated = document.getElementById("title__input__edit").value;
  const locationUpdated = document.getElementById("location__input__edit").value;
  const bought_ticketUpdated = document.getElementById("bought_ticket__input__edit").value;
  const capacityUpdated = document.getElementById("capacity__input__edit").value;

  const titleElement = currentElement.querySelector(".card__title");
  const locationElement = currentElement.querySelector(".card__stadium__location");
  const bought_ticketElement = currentElement.querySelector(".card__stadium__bought_ticket");
  const capacityElement = currentElement.querySelector(".card__stadium__capacity");

  const title = titleElement.textContent;
  const location = locationElement.textContent.split(": ");
  const bought_ticket = bought_ticketElement.textContent.split(": ");

  if (bought_ticket <= 0 || locationUpdated==='' || titleUpdated === '' || capacityUpdated === '' || bought_ticketUpdated === '0') {
    alert("Please fill in all fields and ensure the bought_ticket is not 0.");
    return; // Exit the function if bought_ticket is 0
  }

  titleElement.textContent = titleUpdated;
  locationElement.textContent = "stadium location: " + locationUpdated;
  bought_ticketElement.textContent = "stadium bought_ticket: " + bought_ticketUpdated;
  capacityElement.textContent = "stadium capacity: " + capacityUpdated;

  for (let i = 0; i < stadiums.length; i++) {
    if (
      stadiums[i].title === title &&
      stadiums[i].location === location[1] &&
      stadiums[i].bought_ticket === parseFloat(bought_ticket[1])
    ) {
      stadiums[i].title = titleUpdated;
      stadiums[i].location = locationUpdated;
      stadiums[i].bought_ticket = parseFloat(bought_ticketUpdated);
      stadiums[i].capacity = capacityUpdated;
    }
  }
  edit.classList.add(HIDE_CLASSNAME);
  TotalBybought_ticket(stadiums);
};
const cancelEdit = () => {
    edit.classList.add(HIDE_CLASSNAME);

}