import Card from "./card/Card";
import "./artists.css";
function Artists() {
  return (
    <div className="artists" id="artists">
      <h2>Artists</h2>
      <div className="container">
        <div className="persons">
          <Card
            name="Shery Art Craft"
            about={
              "Hello sit amet consectetur adipisicing elit. Nihil dolorem ea natus eius, voluptatibus rem dolore ipsa magnam qui assumenda debitis harum laborum aut repellendus. Veniam rem unde"
            }
            id={0}
            role="CEO and Founder"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRn4izh_oov3duVpx8oI2gO9Kfvpl3OQynEg6uv2gyBcLabwBMsvYUAuejy3_89WElOs&usqp=CAU"
          />
          <Card
            name="Shery Art Craft"
            about={
              "Hello sit amet consectetur adipisicing elit. Nihil dolorem ea natus eius, voluptatibus rem dolore ipsa magnam qui assumenda debitis harum laborum aut repellendus. Veniam rem unde"
            }
            id={1}
            role="Artist"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRn4izh_oov3duVpx8oI2gO9Kfvpl3OQynEg6uv2gyBcLabwBMsvYUAuejy3_89WElOs&usqp=CAU"
          />
          <Card
            name="Shery Art Craft"
            about={
              "Hello sit amet consectetur adipisicing elit. Nihil dolorem ea natus eius, voluptatibus rem dolore ipsa magnam qui assumenda debitis harum laborum aut repellendus. Veniam rem unde"
            }
            id={2}
            role="Artist"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRn4izh_oov3duVpx8oI2gO9Kfvpl3OQynEg6uv2gyBcLabwBMsvYUAuejy3_89WElOs&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

export default Artists;
