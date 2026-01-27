import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Trusted Kumis Kucing Supplier
          <span>for Global Herbal Markets</span>
        </h1>

        <p>
          High-quality Orthosiphon aristatus sourced from Indonesia,
          processed under strict quality control for international buyers.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn solid">
            Request Quotation
          </a>
          <a href="#product" className="btn outline">
            View Product
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
