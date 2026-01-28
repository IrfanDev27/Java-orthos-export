import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h3 className="footer-brand">JavaOrtho Herbal</h3>
          <p>
            Reliable Indonesian herbal supplier focused on export markets and
            long-term partnerships.
          </p>
        </div>

        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#quality">Quality</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-bottom">
          © {new Date().getFullYear()} JavaOrtho Herbal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
