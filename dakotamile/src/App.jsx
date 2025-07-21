import './App.css'

function Hero() {
  return (
    <section className="hero">
      <h1>Empowering Struggling Businesses to Succeed</h1>
      <p>Dakota Miles Consulting helps businesses identify what’s holding them back and provides actionable strategies for sustainable growth.</p>
      <a href="#contact" className="cta">Schedule Your Free Consultation</a>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <h2>About Dakota Miles Consulting</h2>
      <p>Dakota Miles Consulting specializes in helping businesses that are facing challenges or declining performance. With years of experience across multiple industries, we diagnose operational inefficiencies, uncover hidden opportunities, and guide you through proven strategies to turn your business around. Our mission is to empower business owners with the clarity, tools, and support they need to achieve lasting success.</p>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <ul>
        <li><strong>Business Health Assessment:</strong> Comprehensive review of your current systems, processes, and financials.</li>
        <li><strong>Strategic Planning:</strong> Develop clear, actionable roadmaps for growth and recovery.</li>
        <li><strong>Financial Management:</strong> Improve cash flow, budgeting, and profitability.</li>
        <li><strong>Marketing & Sales Optimization:</strong> Attract more customers and boost sales with effective strategies.</li>
        <li><strong>Digital Transformation:</strong> Leverage technology to streamline operations and reach new markets.</li>
        <li><strong>Leadership Coaching:</strong> Build strong teams and effective leaders for long-term success.</li>
      </ul>
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
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <blockquote>
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

function App() {
  return (
    <div className="main-container">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Challenges />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
