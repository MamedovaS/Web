import React from "react";

import DefaultStadium from "./defaultStadium";


const StadiumItems = ({ data = [] }) => {
  return (
    <div className="wrapper">
      <div className="inner">
      {data.map(({ id, name, price, area, location, imageSrc }, idx) => (
        <DefaultStadium
          id={id}
          name={name}
          price={price}
          area={area}
          location={location}
          imageSrc={imageSrc}
        />
      ))}
     </div>
    </div>
  );
};

export default StadiumItems;