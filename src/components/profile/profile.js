export default function Headings(props) {
  return (
    <div>
      <div className="profile">
        <div className="profile__name">{props.name}</div>
        <img className="profile__picture" src={props.picture} alt=""></img>
      </div>
    </div>
  );
}
