import Tag from "../../components/tag/tag";
import Profile from "../../components/profile/profile";
import Rating from "../../components/rating/rating";

export default function Headings(props) {
  console.log(props);
  console.log(props.location);
  return (
    <section>
      <div className="headings">
        <div>
          <h1 className="headings__title">{props.title}</h1>
          <p className="headings__location">{props.location}</p>
          <div className="tags">
          {props.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
          </div>
        </div>
        <div>
          <Profile name={props.name} picture={props.picture} />
          <Rating rating={props.rating} />
        </div>
      </div>
    </section>
  );
}
