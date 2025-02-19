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
            <a  href="#imageupload"><button className="primary-button">Get Started</button></a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="Hero illustration" />
        </div>
      </section>
      <div id="imageupload"></div>
      <UploadImage/>

      {/* Features Section */}
      <Features />


      {/* Team Section */}
     

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
          <h2>Our Team</h2>
          <p>Meet our talented team of experts dedicated to bringing you the best solutions.</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-author">
              {/* <img src="/avatar-1.png" alt="Team member avatar" /> */}
              <div>
                <h4>Digvijay</h4>
                <p>Vision AI Expert</p>
              </div>
            </div>
            <div className="testimonial-content">
              <p>Leading our computer vision and AI initiatives with expertise in developing cutting-edge image processing solutions and machine learning models.</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-author">
              {/* <img src="/avatar-1.png" alt="Team member avatar" /> */}
              <div>
                <h4>Kartik</h4>
                <p>Frontend Development Specialist</p>
              </div>
            </div>
            <div className="testimonial-content">
              <p>Creating seamless and responsive user interfaces while ensuring optimal performance and user experience across all platforms.</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-author">
              {/* <img src="/avatar-1.png" alt="Team member avatar" /> */}
              <div>
                <h4>Rushikeshwar</h4>
                <p>Backend Architecture Master</p>
              </div>
            </div>
            <div className="testimonial-content">
              <p>Architecting robust backend systems and ensuring scalable infrastructure to support our growing platform needs.</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-author">
              {/* <img src="/avatar-1.png" alt="Team member avatar" /> */}
              <div>
                <h4>Jagadeesh</h4>
                <p>ML Algorithm Innovator</p>
              </div>
            </div>
            <div className="testimonial-content">
              <p>Developing and implementing innovative machine learning algorithms to enhance our platforms capabilities and accuracy.</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-author">
              {/* <img src="/avatar-1.png" alt="Team member avatar" /> */}
              <div>
                <h4>Rajesh</h4>
                <p>UI/UX Design Professional</p>
              </div>
            </div>
            <div className="testimonial-content">
              <p>Crafting intuitive and engaging user experiences while ensuring aesthetic excellence across all our platform interfaces.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Numerix</h2>
          </div>
            <p>Transform your ideas into reality with our powerful solutions.</p>
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