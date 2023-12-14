import CatalogSearch from "../../components/catalogSearch/catalogSearch";
import "../../components/catalogSearch/catalogSearch.css";
import StadiumItems from "../../components/stadiumItems/stadiumItems";

import "../../components/stadiumItems/defaultZoo.css"
import "../../components/stadiumItems/zooItems.css";

pen
import Stadium from "./StadiumPhoto/stadium.jpg";
import Stadium from "./StadiumPhoto/stadium.jpg";
import Stadium from "./StadiumPhoto/stadium.jpg";
import Stadium from "./StadiumPhoto/stadium.jpg";
import Stadium from "./StadiumPhoto/stadium.jpg";
import Stadium from "./StadiumPhoto/stadium.jpg";
import Stadium from "./StadiumPhoto/stadium.jpg";

const zoodata = [
  {
    id: 1,
    name: "Stadium",
    price: 5000,
    area: 1000,
    location: "Lviv",
    imageSrc: Stadium,
  },
  {
    id: 2,
    name: "Stadium",
    price: 1000,
    area: 200,
    location: "Tokyo",
    imageSrc: Stadium,
  },
  {
    id: 3,
    name: "Stadium",
    price: 500,
    area: 200,
    location: "Obroshyno",
    imageSrc: Stadium,
  },
  {
    id: 4,
    name: "Stadium",
    price: 700,
    area: 165,
    location: "Kyiv",
    imageSrc: Stadium,
  },
  {
    id: 5,
    name: "Stadium",
    price: 1000,
    area: 1000,
    location: "Poltava",
    imageSrc: Stadium,
  },
  {
    id: 6,
    name: "Stadium",
    price: 1500,
    area: 1500,
    location: "Summertime sadness",
    imageSrc: Stadium,
  },
  {
    id: 7,
    name: "Stadium",
    price: 700,
    area: 400,
    location: "Born to die",
    imageSrc: Stadium,
  },
  {
    id: 8,
    name: "Zoo8",
    price: 1000,
    area: 1000,
    location: "Wales",

  },
];



function Catalog() {
  return (
    <div className="Home">
      <CatalogSearch/>
      <StadiumItems data={zoodata}/>
    </div>
  );
}

export default Catalog;
