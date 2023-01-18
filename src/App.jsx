import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((x) => (
    <Card
      img={x.coverImg}
      rating={x.stats.rating}
      reviewCount={x.stats.reviewCount}
      country={x.location}
      title={x.title}
      price={x.price}
    />
  ));
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="cards--container">{cards}</div>
    </div>
  );
}
export default App;
