import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: "Same-Day Quoting",
      chip: "Fast",
      description: "Get quotes on your parts and supplies the same day you reach out. We understand downtime costs money.",
      features: [
        "Email or phone quotes within hours",
        "Detailed pricing breakdowns",
        "Alternative options when available",
        "Volume pricing for bulk orders"
      ]
    },
    {
      title: "Emergency Supply",
      chip: "24/7",
      description: "Equipment down? We prioritize emergency orders to get you back up and running as quickly as possible.",
      features: [
        "Rush order handling",
        "After-hours emergency contact",
        "Express shipping coordination",
        "Temporary replacement options"
      ]
    },
    {
      title: "Custom Sourcing",
      chip: "Sourcing",
      description: "Can't find that specific part? We leverage our network of suppliers to track down exactly what you need.",
      features: [
        "Hard-to-find part location",
        "Obsolete equipment parts",
        "International sourcing when needed",
        "OEM and aftermarket options"
      ]
    },
    {
      title: "Technical Support",
      chip: "Support",
      description: "Not sure which part you need? Our experienced team can help identify the right solution for your application.",
      features: [
        "Application consulting",
        "Product recommendations",
        "Cross-reference assistance",
        "Installation guidance"
      ]
    },
    {
      title: "Inventory Management",
      chip: "Inventory",
      description: "We'll help you maintain optimal stock levels of critical components to minimize downtime.",
      features: [
        "Customized stocking programs",
        "Usage tracking and forecasting",
        "Scheduled deliveries",
        "Consignment options available"
      ]
    },
    {
      title: "On-Site Consultation",
      chip: "On-Site",
      description: "We can visit your facility to assess needs, recommend solutions, and ensure proper product selection.",
      features: [
        "Facility equipment assessment",
        "Preventive maintenance planning",
        "Efficiency improvement suggestions",
        "System optimization recommendations"
      ]
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Service & Support</div>
          <h1>More Than Just Products</h1>
          <p className="hero-sub">
            We're your industrial supply partner. From emergency orders to long-term inventory management, 
            we're here to keep your operations running smoothly.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Our Services</h2>
            <p>Comprehensive support to complement our product offerings.</p>
          </div>

          <div className="products-grid">
            {services.map((service, index) => (
              <div className="tile" key={index}>
                <div className="tile-head">
                  <h3>{service.title}</h3>
                  <span className="chip">{service.chip}</span>
                </div>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="alt">
        <div className="container">
          <div className="section-head">
            <h2>How We Work With You</h2>
            <p>Our process is designed to be simple, efficient, and responsive to your needs.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>1. Contact Us</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                Reach out by phone, email, or visit our Flagstaff location. We're ready to help during business hours 
                and for emergencies after hours.
              </p>
            </div>

            <div className="stat-card">
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>2. We Quote</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                Same-day quotes on standard items. For custom or hard-to-find parts, we'll source options and 
                provide detailed pricing within 24 hours.
              </p>
            </div>

            <div className="stat-card">
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>3. Fast Delivery</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                In-stock items ship immediately. We coordinate with carriers for expedited delivery when you need 
                parts urgently.
              </p>
            </div>

            <div className="stat-card">
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>4. Ongoing Support</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                We stay in touch to ensure everything worked as expected and you're completely satisfied with 
                your solution.
              </p>
            </div>
          </div>

          <div className="callout" style={{ marginTop: '32px' }}>
            <div>
              <strong>Ready to experience the Southwest Industrial difference?</strong>
              <div className="muted">Let's talk about your industrial supply needs.</div>
            </div>
            <Link className="btn" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Industries We Serve</h2>
            <p>Trusted by businesses across Northern Arizona in diverse sectors.</p>
          </div>

          <div className="mission-wrap">
            <div className="industries-grid">
              <div>
                <strong>Manufacturing</strong>
                <div className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>
                  Production facilities, assembly plants, fabrication shops
                </div>
              </div>
              <div>
                <strong>Mining & Aggregates</strong>
                <div className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>
                  Quarries, processing plants, material handling
                </div>
              </div>
              <div>
                <strong>Forestry & Lumber</strong>
                <div className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>
                  Sawmills, timber operations, wood processing
                </div>
              </div>
              <div>
                <strong>Food & Beverage</strong>
                <div className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>
                  Processing plants, packaging facilities, breweries
                </div>
              </div>
              <div>
                <strong>Transportation</strong>
                <div className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>
                  Fleet maintenance, logistics facilities, warehouses
                </div>
              </div>
              <div>
                <strong>Public Works</strong>
                <div className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>
                  Municipal facilities, utilities, government operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;