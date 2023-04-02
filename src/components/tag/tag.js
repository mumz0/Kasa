export default function Tag(props) {
  return (
    <div className="tags">
      <div className="tag">
        <span className="tag__text">{props.tag}</span>
      </div>
    </div>
  );
}
