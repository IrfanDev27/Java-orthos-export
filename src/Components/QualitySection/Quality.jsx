
import "./Quality.css";

const QualitySection = () => {
  return (
    <section id="quality" className="quality">
      <div className="quality-container">
        <header className="quality-header">
          <span className="quality-label">Our Standard</span>
          <h2>Our Commitment to Quality</h2>
          <p>
            We focus on consistency, traceability, and long-term partnerships.
            Our kumis kucing is sourced and processed with export reliability
            in mind.
          </p>
        </header>

        <div className="quality-grid">
          <div className="quality-card">
            <h3>Direct Farm Sourcing</h3>
            <p>
              We work directly with local farmers to maintain quality and full
              transparency.
            </p>
          </div>

          <div className="quality-card">
            <h3>Export-Grade Processing</h3>
            <p>
              Carefully handled and dried under controlled conditions for
              international markets.
            </p>
          </div>

          <div className="quality-card">
            <h3>Quality Inspection</h3>
            <p>
              Each batch is checked for moisture level, cleanliness, and visual
              consistency.
            </p>
          </div>

          <div className="quality-card">
            <h3>Reliable Supply Capacity</h3>
            <p>
              Stable volume to support long-term contracts and large-scale
              orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
