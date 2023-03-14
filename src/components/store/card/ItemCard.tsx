import { NavLink } from "react-router-dom";
type dataType = {
  id: number;
  name: string;
  artists: string;
  image: string[];
  price: number;
  handlePopup: (data: ShowItem) => void;
};
type ShowItem = {
  id: number;
  name: string;
  artists: string;
  image: string[];
  price: number;
  opened: boolean;
};
function ItemCard(props: dataType) {
  return (
    <NavLink
      to={`item/${props.id.toString()}`}
      className="item-card"
      key={props.id}
    >
      <div className="image-container">
        <img src={props.image[0]} alt="item" />
      </div>
      <div className="content">
        <h3 className="price">
          <span>EGP</span>
          {props.price}
        </h3>
        <p className="category-show artist">
          <span>{props.artists}</span>
        </p>
        <p className="name">{props.name}</p>
      </div>
    </NavLink>
  );
}

export default ItemCard;
