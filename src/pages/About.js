import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Our Story</div>
          <h1>25 Years of Service</h1>
          <p className="hero-sub">
            From a home-based startup with a storage unit to a trusted industrial supplier serving Northern Arizona.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>How It All Started</h2>
            <p>
              Southwest Industrial was founded in 2000 by Brent, who saw an opportunity to provide responsive, 
              personalized industrial supply service to Northern Arizona businesses.
            </p>
          </div>

          <div className="about">
            <p>
              What began as a one-person operation working from home with a small storage unit has grown into 
              a full-service industrial supply company. Through dedication, hard work, and an unwavering commitment 
              to customer service, Southwest Industrial has built lasting relationships with businesses throughout the region.
            </p>
            <p>
              After several relocations and steady growth, the company now operates from a professional facility in 
              Flagstaff, stocking thousands of products and sourcing specialized items from a network of suppliers 
              across the country.
            </p>
            <p>
              Today, Southwest Industrial continues to operate with the same personal touch and commitment to service 
              that defined those early days — just with a lot more inventory and experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Mission & Values</h2>
            <p>What drives us every day.</p>
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

          <div className="products-grid" style={{ marginTop: '32px' }}>
            <div className="tile">
              <div className="tile-head">
                <h3>Customer First</h3>
                <span className="chip">Core Value</span>
              </div>
              <p>
                Every decision we make starts with one question: "How does this serve our customers better?" 
                Your success is our success.
              </p>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Responsive Service</h3>
                <span className="chip">Core Value</span>
              </div>
              <p>
                We understand that time is money in industrial operations. Same-day quotes, quick turnarounds, 
                and emergency availability are standard practice.
              </p>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Quality & Reliability</h3>
                <span className="chip">Core Value</span>
              </div>
              <p>
                We only stock and source products from manufacturers we trust. If we wouldn't use it in our own 
                operations, we won't sell it to you.
              </p>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Knowledge & Expertise</h3>
                <span className="chip">Core Value</span>
              </div>
              <p>
                Over 25 years of experience means we've seen it all. We bring that knowledge to every customer 
                interaction and product recommendation.
              </p>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Relationships Matter</h3>
                <span className="chip">Core Value</span>
              </div>
              <p>
                We're not just a vendor — we're your partner. Many of our customer relationships span decades 
                because we treat each one like it matters.
              </p>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Community Commitment</h3>
                <span className="chip">Core Value</span>
              </div>
              <p>
                Northern Arizona is our home. We're invested in the success of local businesses and the 
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Meet the Team</h2>
            <p>The people behind Southwest Industrial.</p>
          </div>

          <div className="team-grid">
            <div className="tile">
              <div className="tile-head">
                <h3>Brent</h3>
                <span className="chip">Founder & Owner</span>
              </div>
              <p>
                Brent founded Southwest Industrial in 2000 with a vision to provide Northern Arizona with 
                responsive, knowledgeable industrial supply service. With over 25 years in the industry, 
                he brings deep expertise in sourcing, product knowledge, and building lasting customer relationships.
              </p>
              <div style={{ marginTop: '12px' }}>
                <a href="mailto:Brent@southwest-industrial.com" className="btn ghost" style={{ fontSize: '13px', padding: '10px 16px' }}>
                  Contact Brent
                </a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-head">
                <h3>Caleb</h3>
                <span className="chip">Team Member</span>
              </div>
              <p>
                Caleb brings technical expertise and customer service excellence to Southwest Industrial. 
                He works closely with customers to identify the right products for their applications and 
                ensures quick, accurate order fulfillment.
              </p>
              <div style={{ marginTop: '12px' }}>
                <a href="mailto:Caleb@southwest-industrial.com" className="btn ghost" style={{ fontSize: '13px', padding: '10px 16px' }}>
                  Contact Caleb
                </a>
              </div>
            </div>
          </div>

          <div className="callout" style={{ marginTop: '32px' }}>
            <div>
              <strong>Want to work with our team?</strong>
              <div className="muted">Get in touch to discuss your industrial supply needs.</div>
            </div>
            <Link className="btn" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Journey</h2>
            <p>Key milestones in the Southwest Industrial story.</p>
          </div>

          <div className="mission-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '1000',
                    color: 'var(--brand)'
                  }}>2000</div>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--border)'
                  }}></div>
                </div>
                <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.75' }}>
                  Brent founds Southwest Industrial, operating from home with a small storage unit.
                </p>
              </div>

              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '1000',
                    color: 'var(--brand)'
                  }}>2005</div>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--border)'
                  }}></div>
                </div>
                <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.75' }}>
                  First major facility expansion as customer base grows throughout Northern Arizona.
                </p>
              </div>

              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '1000',
                    color: 'var(--brand)'
                  }}>2010</div>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--border)'
                  }}></div>
                </div>
                <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.75' }}>
                  Expanded product lines and established relationships with major manufacturers.
                </p>
              </div>

              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '1000',
                    color: 'var(--brand)'
                  }}>2015</div>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--border)'
                  }}></div>
                </div>
                <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.75' }}>
                  Moved to current Flagstaff facility at 1709 N East St to better serve growing customer needs.
                </p>
              </div>

              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '1000',
                    color: 'var(--brand)'
                  }}>2025</div>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--border)'
                  }}></div>
                </div>
                <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.75' }}>
                  Celebrating 25 years of service to Northern Arizona with the same commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;