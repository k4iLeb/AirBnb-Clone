import "../App.css";
import AirBnbLogo from "./images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={AirBnbLogo} alt="airbnb-logo" />
    </nav>
  );
}
