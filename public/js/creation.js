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
  const bought_ticketInput = parseFloat(document.getElementById("bought_ticket__input").value);
  const capacityInput = document.getElementById("capacity__input").value;

  if (!Number.isInteger(Number(bought_ticketInput))) {
    alert("Please enter a valid integer for the ticket.");
    return;
  }

  if (!Number.isInteger(Number(capacityInput))) {
    alert("Please enter a valid integer for the capacity.");
    return;
  }

  if (bought_ticketInput <= 0 || locationInput === '' || titleInput === '' || capacityInput === '' || bought_ticketInput === '0') {
    alert("Please fill in all fields and ensure the ticket is not 0.");
    return;
  }

  const stadium = {
    title: titleInput,
    location: locationInput,
    ticket: bought_ticketInput,
    capacity: capacityInput,
  };

  console.log(stadium)
  postStadium(stadium).then((allStadiums)=>{
    stadiums = allStadiums;
    showedlist = stadiums;
    console.log(allStadiums)
    display(stadiums);
    TotalByTickets(showedlist);
  showedlist = stadiums;

  // Reset the input values
  document.getElementById("title__input").value = "";
  document.getElementById("location__input").value = "";
  document.getElementById("bought_ticket__input").value = "";
  document.getElementById("capacity__input").value = "";

  restore();
});


function stadiumDelete(element) {
  deleteStadium(element).then(displayAllStadiums);
  TotalByticket(showedlist);
}
displayAllStadiums();
}