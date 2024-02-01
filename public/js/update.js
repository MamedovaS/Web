const HIDE_CLASSNAME = "hide";
const edit = document.querySelector(".edit");
let globalStudiumId;


const startEdit = (studiumId) => {
  edit.classList.remove(HIDE_CLASSNAME);
  const foundStudium = studium.find((studium) => studium.id === studiumId);
  const capacityElement = currentElement
    .querySelector(".card__stadium__capacity")
    .textContent.split(": ");
  document.getElementById("title__input__edit").value = `${titleElement}`;
  document.getElementById("location__input__edit").value = `${locationElement[1]}`;
  document.getElementById("bought_ticket__input__edit").value = `${bought_ticketElement[1]}`;
  document.getElementById("capacity__input__edit").value = `${capacityElement[1]}`;
  globalStudiumId=studiumId;
};

const saveEdit = () => {
  const titleUpdated = document.getElementById("title__input__edit").value;
  const locationUpdated = document.getElementById("location__input__edit").value;
  const bought_ticketUpdated = document.getElementById("bought_ticket__input__edit").value;
  const capacityUpdated = document.getElementById("capacity__input__edit").value;


  if (bought_ticket <= 0 || locationUpdated==='' || titleUpdated === '' || capacityUpdated === '' || bought_ticketUpdated === '0') {
    alert("Please fill in all fields and ensure the bought_ticket is not 0.");
    return; // Exit the function if bought_ticket is 0
  }

  const stadium = {
    title: titleInput,
    location: locationInput,
    ticket: bought_ticketInput,
    capacity: capacityInput,
  };

  edit.classList.add(HIDE_CLASSNAME);
  TotalBybought_ticket(stadiums);
};
const cancelEdit = () => {
    edit.classList.add(HIDE_CLASSNAME);

}