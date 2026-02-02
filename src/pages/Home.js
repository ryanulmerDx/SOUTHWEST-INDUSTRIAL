import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="kicker">Industrial Products & Service</div>

            <h1>
              <span className="title-line">Southwest Industrial</span>
            </h1>

            <p className="hero-sub">
              Serving Northern Arizona since 2000 with dependable industrial supply support and responsive service.
            </p>

            <div className="hero-cta">
              <Link className="btn" to="/contact">Contact</Link>
              <Link className="btn ghost" to="/products">View Products</Link>
            </div>
          </div>

          <div className="hero-media" aria-label="Industrial supply hero image">
            <img
              src="https://i.imgur.com/GamHDgD.png"
              alt="Industrial equipment and components"
            />
            <div className="overlay"></div>
            <div className="hero-badge">Trusted Since 2000</div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products">
        <div className="container">
          <div className="section-head">
            <h2>Products</h2>
            <p>A clean overview of the categories we support (simple demo layout).</p>
          </div>

          <div className="products-grid">
            <div className="tile">
              <div className="tile-head">
                <h3>Bearings & Linear</h3>
                <span className="chip">Bearings</span>
              </div>
              <p>Stocking and sourced bearing solutions for industrial applications.</p>
              <ul>
                <li>Bearings (All Types)</li>
                <li>Pillow Blocks & Flange Bearings</li>
                <li>Linear Bearings, Shafting, Slides</li>
              </ul>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Mechanical Power Transmission</h3>
                <span className="chip">Power</span>
              </div>
              <p>Core drive components and assemblies to keep equipment moving.</p>
              <ul>
                <li>Belts, Sheaves, Bushings</li>
                <li>Roller Chain, Sprockets, Couplings</li>
                <li>Gear Boxes, Speed Reducers</li>
              </ul>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Conveyor Belting & Components</h3>
                <span className="chip">Conveyor</span>
              </div>
              <p>Belting, idlers, pulleys, and related parts.</p>
              <ul>
                <li>Conveyor Belts, Fasteners, Cleaners</li>
                <li>Idlers (Troughing / Return / Impact)</li>
                <li>Pulleys & Take-Up Frames</li>
              </ul>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Motors & Controls</h3>
                <span className="chip">Motors</span>
              </div>
              <p>Motor and control components for industrial operations.</p>
              <ul>
                <li>AC / Electric Motors, Motor Mounts</li>
                <li>AC Drives, Soft Starts</li>
                <li>Pneumatics, Regulators, Cylinders</li>
              </ul>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Hose & Fittings</h3>
                <span className="chip">Hose</span>
              </div>
              <p>Hydraulic and industrial hose solutions.</p>
              <ul>
                <li>Hydraulic & Industrial Hose</li>
                <li>Hose Fittings & Reels</li>
                <li>Filters & Air Filtration</li>
              </ul>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Industrial Supply & MRO</h3>
                <span className="chip">MRO</span>
              </div>
              <p>Essentials for maintenance, repairs, and operations.</p>
              <ul>
                <li>Fasteners, Safety Supplies, Gloves</li>
                <li>Lubricants, Lubricators</li>
                <li>Rubber, Plastics, Gasket Material</li>
              </ul>
            </div>
          </div>

          <div className="callout">
            <div>
              <strong>Questions?</strong>
              <div className="muted">Reach out by phone or email.</div>
            </div>
            <Link className="btn" to="/contact">Contact</Link>
          </div>
        </div>
      </section>

      {/* About + Mission */}
      <section id="about" className="alt">
        <div className="container">
          <div className="section-head">
            <h2>About Southwest Industrial</h2>
            <p>
              Southwest Industrial was established in 2000 by Brent, who began the business from his home with a small
              storage unit and a big vision. Through dedication, hard work, and a commitment to exceptional customer service,
              the company has grown steadily over the past 25 years.
            </p>
          </div>

          <div className="about">
            <p>
              After a few moves and many loyal customers later, Southwest Industrial has become what it is today —
              a trusted name built on relationships, reliability, and service you can count on.
            </p>
          </div>

          <div className="mission-wrap">
            <div className="mission-top">
              <div className="mission-title">Mission Statement</div>
              <div className="mission-rule"></div>
            </div>

            <p className="mission-quote">
              "At Southwest Industrial, Inc., our mission is to deliver high-quality industrial products and services that
              drive operational efficiency and long-term value for our clients. We are committed to building lasting
              partnerships through responsive service, personalized support, and a deep understanding of our customers' needs.
              By fostering trust and integrity, we aim to be more than a supplier — we strive to be a strategic ally in our
              customers' success."
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-head">
                <h2>Contact</h2>
                <div className="contact-tag">
                  <span>Response</span> Same-day
                </div>
              </div>

              <p className="contact-lead">Call or email for industrial supply support.</p>

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
                    <div className="label">Email</div>
                    <div className="value">Caleb@southwest-industrial.com</div>
                  </div>
                  <div className="arrow">→</div>
                </a>

                <a className="contact-action" href="mailto:Brent@southwest-industrial.com">
                  <div className="left">
                    <div className="label">Email</div>
                    <div className="value">Brent@southwest-industrial.com</div>
                  </div>
                  <div className="arrow">→</div>
                </a>
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
    </div>
  );
}

export default Home;
