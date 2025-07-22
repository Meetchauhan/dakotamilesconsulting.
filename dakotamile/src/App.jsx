import './App.css'

function Hero() {
  return (
    <section
      className="hero"
      style={{
        width: '100%',
        height: '90vh',
        minHeight: '500px',
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.55)',
          padding: '3rem 2rem',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          textAlign: 'center',
          color: '#fff',
          maxWidth: '600px',
        }}
      >
        <h1 style={{
          fontSize: '2.8rem',
          marginBottom: '1.2rem',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#fff',
          textShadow: '0 2px 12px rgba(0,0,0,0.45)',
        }}>
          Empowering Struggling Businesses to Succeed
        </h1>
        <p style={{fontSize: '1.3rem', marginBottom: '2.2rem', fontWeight: 400}}>
          Dakota Miles Consulting helps businesses identify what’s holding them back and provides actionable strategies for sustainable growth.
        </p>
        <a
          href="#contact"
          className="cta"
          style={{
            padding: '1.1rem 2.6rem',
            fontSize: '1.2rem',
            borderRadius: '8px',
            background: '#4a90e2',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(74,144,226,0.18)',
            transition: 'background 0.2s',
            display: 'inline-block',
          }}
        >
          Schedule Your Free Consultation
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about" style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Consulting team" style={{width: '180px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
      <div>
        <h2>About Dakota Miles Consulting</h2>
        <p>Dakota Miles Consulting specializes in helping businesses that are facing challenges or declining performance. With years of experience across multiple industries, we diagnose operational inefficiencies, uncover hidden opportunities, and guide you through proven strategies to turn your business around. Our mission is to empower business owners with the clarity, tools, and support they need to achieve lasting success.</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem'}}>
        <div style={{background: '#f9f9f9', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Business Health Assessment" style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem'}} />
          <h3 style={{margin: '0.5rem 0'}}>Business Health Assessment</h3>
          <p>Comprehensive review of your current systems, processes, and financials.</p>
        </div>
        <div style={{background: '#f9f9f9', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Strategic Planning" style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem'}} />
          <h3 style={{margin: '0.5rem 0'}}>Strategic Planning</h3>
          <p>Develop clear, actionable roadmaps for growth and recovery.</p>
        </div>
        <div style={{background: '#f9f9f9', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Financial Management" style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem'}} />
          <h3 style={{margin: '0.5rem 0'}}>Financial Management</h3>
          <p>Improve cash flow, budgeting, and profitability.</p>
        </div>
        <div style={{background: '#f9f9f9', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80" alt="Marketing & Sales Optimization" style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem'}} />
          <h3 style={{margin: '0.5rem 0'}}>Marketing & Sales Optimization</h3>
          <p>Attract more customers and boost sales with effective strategies.</p>
        </div>
        <div style={{background: '#f9f9f9', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Digital Transformation" style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem'}} />
          <h3 style={{margin: '0.5rem 0'}}>Digital Transformation</h3>
          <p>Leverage technology to streamline operations and reach new markets.</p>
        </div>
        <div style={{background: '#f9f9f9', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80" alt="Leadership Coaching" style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem'}} />
          <h3 style={{margin: '0.5rem 0'}}>Leadership Coaching</h3>
          <p>Build strong teams and effective leaders for long-term success.</p>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <h2>Why Work With Us?</h2>
      <ul>
        <li><strong>Expert Guidance:</strong> Benefit from years of hands-on experience in business transformation.</li>
        <li><strong>Tailored Solutions:</strong> Every business is unique—our strategies are customized to your needs.</li>
        <li><strong>Proven Results:</strong> We’ve helped numerous businesses overcome obstacles and achieve their goals.</li>
        <li><strong>Confidential & Supportive:</strong> We partner with you every step of the way, respecting your vision and values.</li>
      </ul>
    </section>
  );
}

function Challenges() {
  return (
    <section className="challenges" id="challenges">
      <h2>Common Challenges We Solve</h2>
      <ul>
        <li>Declining sales or profits</li>
        <li>Inefficient operations</li>
        <li>Poor team performance</li>
        <li>Outdated technology or processes</li>
        <li>Lack of clear direction or strategy</li>
        <li>Struggles with marketing or customer acquisition</li>
      </ul>
    </section>
  );
}

function Process() {
  return (
    <section className="process" id="process">
      <h2>Our Process</h2>
      <ol>
        <li><strong>Discovery Call:</strong> We start with a free, no-obligation consultation to understand your challenges.</li>
        <li><strong>Assessment:</strong> In-depth analysis of your business to identify root causes.</li>
        <li><strong>Strategy:</strong> Develop a customized action plan.</li>
        <li><strong>Implementation:</strong> Hands-on support to execute the plan.</li>
        <li><strong>Ongoing Support:</strong> Regular check-ins to ensure continued progress.</li>
      </ol>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Satisfied client" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
      <blockquote style={{margin: 0}}>
        “Dakota Miles Consulting helped us identify the real issues in our business and guided us to a successful turnaround. Highly recommended!”
        <footer>— Satisfied Client</footer>
      </blockquote>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Ready to transform your business?</p>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="How can we help you?" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Or call us at <a href="tel:5551234567">(555) 123-4567</a></p>
    </section>
  );
}

function Highlights() {
  return (
    <section className="highlights" style={{background: '#f0f6fa', padding: '3rem 0', margin: '3rem 0', borderRadius: '16px'}}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>What Sets Us Apart</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem'}}>
        <div style={{maxWidth: '260px', textAlign: 'center'}}>
          <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=260&q=80" alt="Personalized Approach" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
          <h4>Personalized Approach</h4>
          <p>We tailor every solution to your unique business needs.</p>
        </div>
        <div style={{maxWidth: '260px', textAlign: 'center'}}>
          <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=260&q=80" alt="Proven Results" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
          <h4>Proven Results</h4>
          <p>Our strategies have helped businesses achieve real, lasting growth.</p>
        </div>
        <div style={{maxWidth: '260px', textAlign: 'center'}}>
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=260&q=80" alt="Supportive Partnership" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
          <h4>Supportive Partnership</h4>
          <p>We work alongside you every step of the way.</p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="main-container">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Highlights />
      <Challenges />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
