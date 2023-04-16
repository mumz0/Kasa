export default function Tag(props) {
  return (
    <div className="tags">
      {props.tags.map((tag) => (
        <div key={tag} className="tag">
          <span className="tag__text">{tag}</span>
        </div>
      ))}
    </div>
  );
}
