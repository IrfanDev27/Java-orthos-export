import "./contact.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-grid">
          {/* LEFT INFO */}
          <div className="contact-info">
            <span className="contact-label">Business Inquiry</span>
            <h2>Let’s Discuss Your Sourcing Requirements</h2>
            <p>
              We welcome inquiries from importers, distributors, and long-term
              partners looking for reliable herbal supply from Indonesia.
            </p>

            <ul className="contact-details">
              <li><strong>Location:</strong> Indonesia</li>
              <li><strong>Supply Focus:</strong> Export-oriented herbal products</li>
              <li><strong>Partnership:</strong> Long-term cooperation</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your full name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your product requirements"
              ></textarea>
            </div>

            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
