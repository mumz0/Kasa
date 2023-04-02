export default function Headings(props) {
    return (
        <div>
            <div className="heading__profile">
            <div className="heading__profile__name">{props.name}</div>
            <img
                className="heading__profile__picture"
                src={props.picture} alt=""
            ></img>
            </div>
        </div>
            )}