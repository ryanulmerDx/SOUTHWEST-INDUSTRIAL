import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally send to a backend/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 3000);
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Get In Touch</div>
          <h1>Contact Southwest Industrial</h1>
          <p className="hero-sub">
            Questions about products? Need a quote? Have an emergency order? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-head">
                <h2>Contact Information</h2>
                <div className="contact-tag">
                  <span>Response</span> Same-day
                </div>
              </div>

              <p className="contact-lead">
                Call or email for industrial supply support. We respond to all inquiries the same business day.
              </p>

              <div className="contact-actions">
                <a className="contact-action" href="tel:19285229296">
                  <div className="left">
                    <div className="label">Phone</div>
                    <div className="value">928-522-9296</div>
                  </div>
                  <div className="arrow">→</div>
                </a>

                <a className="contact-action" href="mailto:Caleb@southwest-industrial.com">
                  <div className="left">
                    <div className="label">Email - Caleb</div>
                    <div className="value">Caleb@southwest-industrial.com</div>
                  </div>
                  <div className="arrow">→</div>
                </a>

                <a className="contact-action" href="mailto:Brent@southwest-industrial.com">
                  <div className="left">
                    <div className="label">Email - Brent</div>
                    <div className="value">Brent@southwest-industrial.com</div>
                  </div>
                  <div className="arrow">→</div>
                </a>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <div className="label" style={{ marginBottom: '12px' }}>Business Hours</div>
                <div style={{ color: 'var(--muted)', lineHeight: '1.8', fontSize: '15px' }}>
                  <div><strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM</div>
                  <div><strong>Saturday - Sunday:</strong> Closed</div>
                  <div style={{ marginTop: '8px', fontSize: '14px' }}>
                    Emergency orders: Contact by phone for after-hours assistance
                  </div>
                </div>
              </div>
            </div>

            <iframe
              className="map"
              title="Southwest Industrial Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=1709%20N%20East%20St%20Flagstaff%20AZ%2086004&output=embed"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="alt">
        <div className="container">
          <div className="section-head">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you within one business day.</p>
          </div>

          <div className="mission-wrap">
            {submitted ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px',
                color: 'var(--brand)'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
                <h3 style={{ margin: '0 0 8px', fontSize: '24px' }}>Message Sent!</h3>
                <p style={{ margin: 0, color: 'var(--muted)' }}>
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(928) 555-1234"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Quote">Product Quote</option>
                    <option value="Emergency Order">Emergency Order</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Account Question">Account Question</option>
                    <option value="Custom Sourcing">Custom Sourcing Request</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your needs or questions..."
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="btn" style={{ width: '100%' }}>
                    Send Message
                  </button>
                  <div style={{ 
                    marginTop: '12px', 
                    fontSize: '13px', 
                    color: 'var(--muted)',
                    textAlign: 'center'
                  }}>
                    We typically respond within one business day
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Visit Our Facility</h2>
            <p>Stop by our Flagstaff location to discuss your needs in person or pick up urgent orders.</p>
          </div>

          <div className="location-grid">
            <div className="tile">
              <div className="tile-head">
                <h3>Address</h3>
                <span className="chip">Location</span>
              </div>
              <p>
                1709 N East St<br />
                Flagstaff, AZ 86004
              </p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=1709+N+East+St+Flagstaff+AZ+86004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn ghost"
                style={{ marginTop: '12px', fontSize: '13px', padding: '10px 16px' }}
              >
                Get Directions
              </a>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Parking</h3>
                <span className="chip">Access</span>
              </div>
              <p>
                Convenient on-site parking available. Loading dock access for larger pickups.
              </p>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Will Call</h3>
                <span className="chip">Pickup</span>
              </div>
              <p>
                Call ahead for will-call orders. We'll have your items ready for quick pickup during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;