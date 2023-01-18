import AirBnbLogo from "../../public/images/airbnb-logo.png";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={AirBnbLogo} alt="airbnb-logo" />
    </nav>
  );
}
