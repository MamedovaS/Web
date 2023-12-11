const titleInput = document.getElementById("title__input");
const locationInput = document.getElementById("location__input");
const sportInput = document.getElementById("sport__input");
const capacityInput = document.getElementById("capacity__input");
const submitButton = document.getElementById("submit__button");
const stadiumForm = document.getElementById("stadiumform");

function checkForsport(sportValue) {
  return sportValue !== 0;
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
  const sportValue = parseInt(sportInput.value.trim()); 
  const capacityValue = capacityInput.value.trim();
  return titleValue && locationValue && checkForsport(sportValue) && capacityValue;
}


submitButton.addEventListener("click", function (event) {
  event.preventDefault();
});