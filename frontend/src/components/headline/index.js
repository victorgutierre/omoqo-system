function Headline({ title, subtitle }) {
  return (
    <div className="headline">
      <h2 className="headline__title">{title}</h2>
      <span>{subtitle}</span>
    </div>
  );
}

export default Headline;