import "../App.css";
import PhotoGrid from "./images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero--img" src={PhotoGrid} alt="photo-grid" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
