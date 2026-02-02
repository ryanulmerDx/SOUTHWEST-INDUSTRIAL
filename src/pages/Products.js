import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const productCategories = [
    {
      name: "Bearings & Linear Motion",
      chip: "Bearings",
      description: "Comprehensive bearing solutions for all your industrial applications. From standard ball bearings to specialized linear motion systems.",
      items: [
        "Ball Bearings (Single Row, Double Row)",
        "Roller Bearings (Cylindrical, Spherical, Tapered)",
        "Pillow Block Bearings",
        "Flange Bearings",
        "Linear Bearings & Bushings",
        "Linear Shafting & Rails",
        "Linear Slides & Actuators",
        "Bearing Accessories & Tools"
      ],
      brands: ["SKF", "Timken", "NTN", "FAG", "INA"]
    },
    {
      name: "Mechanical Power Transmission",
      chip: "Power",
      description: "Essential drive components to keep your operations running smoothly and efficiently.",
      items: [
        "V-Belts & Timing Belts",
        "Sheaves & Pulleys",
        "Taper-Lock Bushings",
        "Roller Chain & Sprockets",
        "Shaft Couplings (Rigid, Flexible)",
        "Gear Boxes & Speed Reducers",
        "Universal Joints",
        "Clutches & Brakes"
      ],
      brands: ["Baldor", "Browning", "Martin", "Dodge", "Lovejoy"]
    },
    {
      name: "Conveyor Belting & Components",
      chip: "Conveyor",
      description: "Complete conveyor solutions from belting to components, designed for heavy-duty industrial use.",
      items: [
        "Conveyor Belts (Rubber, PVC, Food Grade)",
        "Belt Fasteners & Clips",
        "Belt Cleaners & Scrapers",
        "Troughing Idlers",
        "Return Idlers",
        "Impact Idlers",
        "Conveyor Pulleys (Drive, Tail, Snub)",
        "Take-Up Frames & Counterweights"
      ],
      brands: ["Fenner", "Continental", "Goodyear", "Flexco"]
    },
    {
      name: "Motors & Motor Controls",
      chip: "Motors",
      description: "Reliable motor solutions and control systems for precise power delivery.",
      items: [
        "AC Motors (1-200 HP)",
        "DC Motors",
        "Motor Mounts & Bases",
        "AC Drives / VFDs",
        "Soft Starters",
        "Motor Starters & Contactors",
        "Brake Motors",
        "Explosion Proof Motors"
      ],
      brands: ["Baldor", "WEG", "Leeson", "ABB", "Siemens"]
    },
    {
      name: "Hydraulic & Pneumatic",
      chip: "Hydraulics",
      description: "Fluid power solutions for hydraulic and pneumatic systems.",
      items: [
        "Hydraulic Hose & Fittings",
        "Industrial Hose (Air, Water, Chemical)",
        "Hose Reels",
        "Hydraulic Pumps",
        "Hydraulic Cylinders",
        "Pneumatic Cylinders",
        "Air Regulators & Filters",
        "Quick Disconnects"
      ],
      brands: ["Parker", "Eaton", "Gates", "Continental"]
    },
    {
      name: "Industrial MRO Supplies",
      chip: "MRO",
      description: "Essential maintenance, repair, and operations supplies to keep your facility running.",
      items: [
        "Fasteners (Bolts, Nuts, Washers, Screws)",
        "Safety Equipment & PPE",
        "Work Gloves (Cut Resistant, Impact)",
        "Industrial Lubricants & Greases",
        "Automatic Lubricators",
        "Gasket Material & Sheet Stock",
        "Rubber & Plastic Products",
        "Hand Tools & Power Tools"
      ],
      brands: ["3M", "Lincoln", "Bostik", "Garlock"]
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Product Catalog</div>
          <h1>Industrial Products & Solutions</h1>
          <p className="hero-sub">
            Comprehensive product lines from trusted manufacturers. If you don't see what you need, just ask — we source specialized items daily.
          </p>
        </div>
      </section>

      {/* Products */}
      <section>
        <div className="container">
          <div className="products-grid">
            {productCategories.map((category, index) => (
              <div className="tile" key={index}>
                <div className="tile-head">
                  <h3>{category.name}</h3>
                  <span className="chip">{category.chip}</span>
                </div>
                <p>{category.description}</p>
                <ul>
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {category.brands && (
                  <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--muted)' }}>
                    <strong>Brands:</strong> {category.brands.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="callout">
            <div>
              <strong>Need something specific?</strong>
              <div className="muted">We source hard-to-find parts and specialized equipment daily.</div>
            </div>
            <Link className="btn" to="/contact">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="alt">
        <div className="container">
          <div className="section-head">
            <h2>Why Choose Southwest Industrial</h2>
            <p>Over two decades of experience serving Northern Arizona's industrial needs.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Serving AZ</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Products Stocked</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Same</div>
              <div className="stat-label">Day Response</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction Focus</div>
            </div>
          </div>

          <div className="mission-wrap" style={{ marginTop: '32px' }}>
            <div className="mission-top">
              <div className="mission-title">Product Sourcing</div>
              <div className="mission-rule"></div>
            </div>
            <p className="mission-quote">
              Don't see what you need? We maintain relationships with hundreds of manufacturers and distributors across the country. 
              If it exists, we can source it for you — often with faster delivery than going direct.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
