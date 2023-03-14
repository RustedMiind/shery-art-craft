type SlideProps = {
  image: string;
  header: string;
};
function Slide(props: SlideProps) {
  return (
    <div
      className="slider-background"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="content">
        <h2>{props.header}</h2>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Slide;
