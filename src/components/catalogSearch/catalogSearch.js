const CatalogSearch = () => {
    return (
      <div class="filterwrapper">
        <div class="filterinner">
          <div class="filter-options">
            <div class="dropdown">
              <label for="filter">Filter:</label>
              <select id="filter">
                <option>Sort by tickets</option>
                <option>Sort by price</option>
                <option>Sort by location</option>
              </select>
            </div>
            <p class="sorted-by">Stadiums sorted by: tickets/price/location</p>
          </div>
          <div class="tickets-inputs">
            <label for="mintickets">Minimum tickets</label>
            <input type="text" id="mintickets" name="mintickets" />
            <label for="maxtickets">Maximum tickets</label>
            <input type="text" id="maxtickets" name="maxtickets" />
          </div>
          <button class="apply-button">Apply</button>
        </div>
      </div>
    );
  };
  
  export default CatalogSearch;
  