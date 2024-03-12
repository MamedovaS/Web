import CatalogSearch from "../../components/catalogSearch/catalogSearch";
import "../../components/catalogSearch/catalogSearch.css";
import StadiumItems from "../../components/stadiumItems/stadiumItems";

import "../../components/stadiumItems/defaultStadium.css"
import "../../components/stadiumItems/stadiumItems.css";

import Stadium from "../catalog/stadium.jpg";


const Stadiodata = [
  {
    id: 1,
    name: "Stadium",
    price: 5000,
    ticket: 1000,
    location: "Lviv",
    imageSrc: Stadium,
  },
  {
    id: 2,
    name: "Stadium",
    price: 1000,
    ticket: 200,
    location: "Tokyo",
    imageSrc: Stadium,
  },
  {
    id: 3,
    name: "Stadium",
    price: 500,
    ticket: 200,
    location: "Obroshyno",
    imageSrc: Stadium,
  },
  {
    id: 4,
    name: "Stadium",
    price: 700,
    ticket: 165,
    location: "Kyiv",
    imageSrc: Stadium,
  },
  
  
];



function Catalog() {
  return (
    <div className="Home">
      <CatalogSearch/>
      <StadiumItems data={Stadiodata}/>
    </div>
  );
}

export default Catalog;
