import "../sass/Card.scss";

const Card = () => {
  return (
    <article className="card">
      <section className="imageContainer"></section>
      <section className="contentContainer">
        <div className="info">
          <h2 className="title">
            Get <span>insights</span> that help your business grow.
          </h2>
          <p className="desc">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div className="features">
          <div>
            <span>10k+</span>
            <span>COMPANIES</span>
          </div>
          <div>
            <span>314</span>
            <span>TEMPLATES</span>
          </div>
          <div>
            <span>12M+</span>
            <span>QUERIES</span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Card;
