import { useState } from "react";
import "./contact.css";

const ContactSection = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formspree.io/f/mvzanyap",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

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
          </div>

          {/* RIGHT FORM */}
          {status === "success" ? (
            <div className="form-success">
              <h3>Message Sent Successfully</h3>
              <p>
                Thank you for reaching out. Our team will respond to your inquiry
                within 24 hours.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Export Inquiry" />

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>

              {status === "error" && (
                <p className="form-error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
