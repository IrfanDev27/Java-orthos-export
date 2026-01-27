import "./product.css";


const ProductSection = () => {
  return (
    <section id="product" className="product">
      <div className="product-container">
        <header className="product-header">
          <span className="product-label">Product Overview</span>
          <h2>Premium Kumis Kucing</h2>
          <p className="product-subtitle">
            Orthosiphon aristatus – dried leaves for export markets
          </p>
        </header>

        <div className="product-content">
          <div className="product-image-box">
            <img src={"/product.jpg"} alt="Dried Kumis Kucing Leaves" />
          </div>

          <div className="product-info">
            <ul>
              <li>
                <strong>Botanical Name:</strong>
                <span>Orthosiphon aristatus</span>
              </li>
              <li>
                <strong>Origin:</strong>
                <span>Indonesia</span>
              </li>
              <li>
                <strong>Form:</strong>
                <span>Dried leaves</span>
              </li>
              <li>
                <strong>Processing:</strong>
                <span>Sun-dried and manually sorted</span>
              </li>
              <li>
                <strong>Packaging:</strong>
                <span>PP bags or cartons (customizable)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
