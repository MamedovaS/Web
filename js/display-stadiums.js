
function display(stadiums) {
  const stadiumList = document.getElementById("stadiumlist");
  stadiumList.innerHTML = "";
  stadiums.forEach((item) => {
    const stadiumItem = document.createElement("div");
    stadiumItem.classList.add("stadium-item");
    stadiumItem.innerHTML = `
    <div class="card__body">
      <h1 class="card__title">${item.name}</h1>
      <h2 class="card__stadium__location">Stadium location: ${item.location}</h2>
      <h2 class="card__stadium__capacity">Stadium capacity: ${item.capacity}</h2>
      <h2 class="card__stadium__ticket">Stadium ticket: ${item.ticket}</h2>

      <button type="button" class="edit__button" onclick="startEdit(${item.id})">Edit</button>
    </div>
  `;
    stadiumList.appendChild(stadiumItem);
  });
}