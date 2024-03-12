import { useState } from "react";


const CatalogSearch = ({ applyFilter }) => {
  const [minTicket, setMinTicket] = useState("");
  const [maxTicket, setMaxTicket] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleApplyClick = () => {
    applyFilter(minTicket, maxTicket, sortBy, searchInput);
  };
  
  return (
      <div class="filterwrapper">
        <div class="filterinner">
          <div class="filter-options">
            <div class="dropdown">
              <label for="filter">Filter:</label>
              <select
                  id="filter"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="selectFilter"
                >
                <option value="ticket">Sort by ticket</option>
                <option value="price">Sort by price</option>
                <option value="location">Sort by location</option>
              </select>
            </div>
          </div>
          <div class="ticket-inputs">
            <label for="minTicket">Minimum ticket</label>
            <input type="number"
              name="minTicket"
              className="minTicket"
              value={minTicket}
              onChange={(e) => setMinTicket(e.target.value)} />
            
            <label for="maxTicket">Maximum ticket</label>
            <input type="number"
              name="maxTicket"
              className="maxTicket"
              value={maxTicket}
              onChange={(e) => setMaxTicket(e.target.value)}  />
          <div className="search">
            <label>
              Search
              <input
                type="text"
                name="searchInput"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Type something..."
              />
            </label>
          </div>
          </div>
          <button class="apply-button" onClick={handleApplyClick}>Apply</button>
        </div>
      </div>
    );
  };
export default CatalogSearch;