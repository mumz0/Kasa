import active_star from "../../assets/logo/star-active.png";
import inactive_star from "../../assets/logo/star-inactive.png";

export default function Rating(props) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map((star) =>
        props.rating >= star ? (
          <img
            key={star.toString()}
            src={active_star}
            alt="active_star"
            className="rating__star"
          />
        ) : (
          <img
            key={star.toString()}
            src={inactive_star}
            alt="inactive_star"
            className="rating__star"
          />
        )
      )}
    </div>
  );
}
