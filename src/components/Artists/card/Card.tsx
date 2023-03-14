type CardProps = {
  image: string;
  id: number;
  name: string;
  role: string;
  about: string;
};
function Card(props: CardProps) {
  return (
    <div key=".id" className="person-card">
      <div className="card-info">
        <div className="image-container">
          <img src={props.image} alt="person" />
        </div>
        <div className="person-about">
          <h3>{props.name}</h3>
          <h5>{props.role ? props.role.toUpperCase() : null}</h5>
          <p>{props.about}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
