export default function Banner(props) {
    return (
            <div className="banner">
                <img src={props.image} alt="Banner" />
                <p className="banner_text">{props.text}</p>
            </div>
    )
}