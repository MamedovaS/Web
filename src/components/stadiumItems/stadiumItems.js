import React from "react";

import DefaultStadium from "./defaultStadium";



const StadiumItems = ({ data = [] }) => {
  return (
    <div className="wrapper">
      <div className="inner">
      {data.map(({ id, name, price, ticket, location, imageSrc }, idx) => (
        <DefaultStadium
          id={id}
          name={name}
          price={price}
          ticket={ticket}
          location={location}
          imageSrc={imageSrc}
        />
      ))}
     </div>
    </div>
  );
};

export default StadiumItems;