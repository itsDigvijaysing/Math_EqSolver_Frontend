import './HomePage.css';
import Features from './Features';
import Navbar from './Navbar';
import UploadImage from './UploadImage';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Transform your ideas into reality with our powerful solutions</p>
          <div className="hero-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="Hero illustration" />
        </div>
      </section>
      <UploadImage />

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing the best solutions for our clients.
            With years of experience and a passionate team, we deliver
            exceptional results that exceed expectations.
          </p>
          <button className="primary-button">Learn More</button>
        </div>
        <div className="about-image">
          <img src="/about-image.png" alt="About us" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {[1, 2, 3].map((item) => (
            <div className="testimonial-card" key={item}>
              <div className="testimonial-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>
              <div className="testimonial-author">
                <img src={`/avatar-${item}.png`} alt="Client avatar" />
                <div>
                  <h4>John Doe</h4>
                  <p>CEO, Company {item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Get in Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="primary-button">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Business Street, City, Country</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+1 234 567 890</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>contact@yourcompany.com</p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>YourLogo</h3>
            <p>Transform your ideas into reality with our powerful solutions.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Numerix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;