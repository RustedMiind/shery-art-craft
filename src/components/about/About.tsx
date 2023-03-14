import { useEffect } from "react";
import "./about.css";
type propsType = {
  setNav: (arg: number) => void;
};
function About(props: propsType) {
  useEffect(() => {
    props.setNav(window.innerHeight);
  }, []);
  return (
    <div className="about" id="about">
      <h2 className="header">About Shery Art Craft</h2>
      <nav className="about-nav">
        <ul>
          <li>About us</li>
          <li>FAQ</li>
          <li>Become a Partner</li>
        </ul>
      </nav>
      <div className="content">
        <h3>A handmade products seller</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aperiam placeat necessitatibus, nemo eos sint saepe, quasi cum
          doloribus voluptates quas. Culpa itaque autem veritatis minus aperiam
          in temporibus ipsum quos. Quia eum iure maiores illo quibusdam minima
          aliquam eaque fugiat. Quis officiis unde eos, praesentium dolorum id!
          Asperiores, magni. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Recusandae quia odit placeat voluptatum optio vel. Illo quisquam
          facere perferendis sunt aperiam praesentium dicta tempore, quis
          numquam explicabo ut autem molestias.
        </p>
      </div>
    </div>
  );
}

export default About;
