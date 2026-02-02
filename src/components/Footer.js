import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span>Southwest Industrial</span>
              <span className="muted">© {currentYear}</span>
            </div>
            <div className="footer-note">
              Serving Northern Arizona with industrial products and responsive service since 2000.
            </div>
          </div>

          <div className="footer-meta">
            <div className="pill">
              <span>Address</span> 1709 N East St, Flagstaff, AZ 86004
            </div>
            <div className="pill">
              <span>Hours</span> Weekdays • 8am–4pm
            </div>
            <div className="pill">
              <span>Phone</span> <a href="tel:19285229296">928-522-9296</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
