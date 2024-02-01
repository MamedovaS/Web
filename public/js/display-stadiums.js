
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
      <h2 class="card__stadium__ticket">stadium ticket: ${item.ticket}</h2>
      <h2 class="card__stadium__capacity">stadium capacity: ${item.capacity}</h2>
      <button type="button" class="edit__button" onclick="editStadium(this.parentElement)">Edit</button>
    </div>
  `;
    stadiumList.appendChild(stadiumItem);
  });
}