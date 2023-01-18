import "../App.css";

export default function Card(props) {
  var badgeText;
  if (props.obj.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.obj.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img className="card--img" src={props.obj.coverImg} />
      {badgeText && <span className="card--status">{badgeText}</span>}
      <div className="card--container">
        <div className="card--container-review">
          <img
            className="card--review-star"
            src="./images/star.png"
            alt="star"
          />
          <p className="card--review-p">
            <span className="card--review-rating">
              {props.obj.stats.rating}
            </span>
            <span className="card--review-reviews">
              ({props.obj.stats.reviewCount}) •
            </span>
            <span className="card--review-location">{props.obj.location}</span>
          </p>
        </div>
        <p className="card--container-type">{props.obj.title}</p>
        <p>
          <span className="card--container-cost">From ${props.obj.price}</span>{" "}
          / person
        </p>
      </div>
    </div>
  );
}
