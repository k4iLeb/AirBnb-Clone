import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((obj) => <Card key={obj.id} obj={obj} />);
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="cards--container">{cards}</div>
    </div>
  );
}
export default App;
