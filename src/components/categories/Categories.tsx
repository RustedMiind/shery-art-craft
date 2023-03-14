import "./categories.css";
import Card from "./Card";
import mugImg from "./images/mug6.jpg";
import carMedalImg from "./images/car-medal.jpg";
import keyMedalImg from "./images/key-medal.jpg";
import decoupageImg from "./images/decoupage.jpg";
import { NavLink } from "react-router-dom";
type CategoriesTypes = "" | "mug" | "decoupage" | "key" | "car";
type PropsType = {
  setCategory: (input: CategoriesTypes) => void;
};

function Categories(props: PropsType) {
  return (
    <div className="categories">
      <h2>What we offer?</h2>
      <div className="cards-container">
        <NavLink
          to="store"
          onClick={() => {
            props.setCategory("mug");
          }}
        >
          <Card image={mugImg} name="Mugs" id={0} />
        </NavLink>
        <NavLink
          to="store"
          onClick={() => {
            props.setCategory("car");
          }}
        >
          <Card image={carMedalImg} name="car medals" id={1} />
        </NavLink>
        <NavLink
          to="store"
          onClick={() => {
            props.setCategory("decoupage");
          }}
        >
          <Card image={decoupageImg} name="decoupage" id={2} />
        </NavLink>
        <NavLink
          to="store"
          onClick={() => {
            props.setCategory("key");
          }}
        >
          <Card image={keyMedalImg} name="key medals" id={3} />
        </NavLink>
      </div>
    </div>
  );
}

export default Categories;
