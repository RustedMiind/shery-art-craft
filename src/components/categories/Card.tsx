type CardProps = {
  image: string;
  name: string;
  id: number;
};
function Card(props: CardProps) {
  return (
    <div
      className="card-container"
      style={{
        justifyContent:
          props.id / 2 === Math.floor(props.id / 2) ? "flex-end" : "flex-start",
      }}
    >
      <div className={"card " + (props.id > 0 ? "negMargin" : "")}>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="content">
          <div className="top">
            <h2 className="name">{props.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
