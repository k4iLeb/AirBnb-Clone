import "../App.css";
// import KatieZaferes from "../images/katie-zaferes.png";
import star from "../../public/images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--img" src={props.img} alt="katie-zaferes" />
      <span className="card--status">sold out</span>
      <div className="card--container">
        <div className="card--container-review">
          <img className="card--review-star" src={star} alt="star" />
          <p className="card--review-p">
            <span className="card--review-rating">{props.rating}</span>
            <span className="card--review-reviews">
              ({props.reviewCount}) •
            </span>
            <span className="card--review-country">{props.country}</span>
          </p>
        </div>
        <p className="card--container-type">{props.title}</p>
        <p>
          <span className="card--container-cost">From ${props.price}</span> /
          person
        </p>
      </div>
    </div>
  );
}
