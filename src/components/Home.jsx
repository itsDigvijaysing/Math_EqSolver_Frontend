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
            <a href="#imageupload"><button className="primary-button">Get Started</button></a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="Hero illustration" />
        </div>
      </section>
      <div></div>
      <UploadImage/>

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-left">
          <h2>About Us</h2>
          <p>We are dedicated to providing the best solutions for our clients. </p>
        </div>

        <div className="quick-team-cards">
          <div className="quick-team-card"><strong>Digvijay</strong> - Vision AI Expert</div>
          <div className="quick-team-card"><strong>Kartik</strong> - Frontend Development Specialist</div>
          <div className="quick-team-card"><strong>Rushikeshwar</strong> - Backend Architecture Master</div>
          <div className="quick-team-card"><strong>Jagadeesh</strong> - ML Algorithm Innovator</div>
          <div className="quick-team-card"><strong>Rajesh</strong> - UI/UX Design Professional</div>
        </div>
      </section>

      {/* Team Section */}
     

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
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

   


      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Numerix</h3>
            <p>Transform your ideas into reality with our powerful solutions.</p>
          </div>
          <div className="footer-section">
            <a href="#home">Home</a>
            <a href="#about">About</a>
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