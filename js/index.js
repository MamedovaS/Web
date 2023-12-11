const titleInput = document.getElementById("title__input");
const locationInput = document.getElementById("location__input");
const bought_tiketInput = document.getElementById("bought_tiket__input");
const capacityInput = document.getElementById("capacity__input");
const submitButton = document.getElementById("submit__button");
const stadiumForm = document.getElementById("stadiumform");

function checkForbought_tiket(bought_tiketValue) {
  return bought_tiketValue !== 0;
}

const editButton = document.getElementById("submit__edit__button");
editButton.addEventListener("click", function(event){
  event.preventDefault();
});

submitButton.addEventListener("click", function(event){
  event.preventDefault();
});

function checkFields() {
  const titleValue = titleInput.value.trim();
  const locationValue = locationInput.value.trim();
  const bought_tiketValue = parseInt(bought_tiketInput.value.trim()); 
  const capacityValue = capacityInput.value.trim();
  return titleValue && locationValue && checkForbought_tiket(bought_tiketValue) && capacityValue;
}


submitButton.addEventListener("click", function (event) {
  event.preventDefault();
});