result = [];

const displaySortedStadiums = async () => {
  const sortstadiums = await getSortedStadium();
  stadiums = sortstadiums;
  display(stadiums)
}

function Sortstadiums(){
  displaySortedStadiums();
  TotalByTickets(showedlist);
}

function TotalByTickets(stadiums){
  let totalTickets = 0;
  stadiums.forEach((stadium) => {
    totalTickets += parseFloat(stadium.Tickets);
  });
  const totalTicketsElement = document.getElementById("bought_ticket__input");
  totalTicketsElement.textContent = `Total Tickets: ${totalTickets}`;
}

function Searchstadiums() {
  const findstadiumTitle = document
    .getElementById("find__title")
    .value.toLowercase();
    result = stadiums.filter(stadium=>stadium.name.includes(findStadiumTitle));
    display(result);
    TotalByTickets(result);
    showedlist = result;
}

function restore(){
  displayAllStadiums();
  TotalByTickets(stadiums);
  showedlist = stadiums;
}