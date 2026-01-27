import "./About.css";


const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="about-label">Who We Are</span>
          <h2>Connecting Local Farms to Global Markets</h2>
          <p>
            We are an Indonesian herbal supplier specializing in kumis kucing
            (Orthosiphon aristatus) for export markets. Our focus is on building
            long-term partnerships through consistent quality control and
            transparent sourcing.
          </p>

          <div className="about-points">
            <div className="about-point">
              <strong>Origin</strong>
              <span>Indonesia</span>
            </div>
            <div className="about-point">
              <strong>Focus</strong>
              <span>Export-grade herbal supply</span>
            </div>
            <div className="about-point">
              <strong>Partnership</strong>
              <span>Long-term & reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
