import React from "react";
import defaultStadiumImage from "./ls.png";
import { NavLink } from "react-router-dom";

const DefaultStadium = ({
  id,
  name = "No name",
  area: ticket = 0,
  price = 0,
  location = "Nowhere",
  imageSrc = defaultStadiumImage,
}) => {
  return (
    <div className="container">
        <div class="Stadium-item">
            <img src={imageSrc} className="Stadium-image" alt="Stadium"/>
            <h2 className="Stadium-name">{name}</h2>
            <h6 className="Stadium-text">bought ticket: <text>{ticket}</text></h6>
            <h6 className="Stadium-text">location: <text>{location}</text></h6>
            <h6 className="Stadium-text">Price:{price} $</h6>
            <NavLink exact to={`/Catalog/${id}`}> View more</NavLink>
        </div>
    </div>
  );
};
export default DefaultStadium;