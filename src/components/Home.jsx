import './HomePage.css';
import Features from './Features';
import Navbar from './Navbar';
import UploadImage from './UploadImage';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = 'rgba(173, 170, 170, 0.8)'; // Changed to white
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 200; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(173, 170, 170, ${0.8 - distance/120})`; // Changed to grey
            ctx.lineWidth = 0.8;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <canvas id="particles-canvas"></canvas>
    <div className="homepage">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Transform your ideas into reality with our powerful solutions</p>
          <div className="hero-buttons">
            <a href="#imageupload"><button className="primary-button">Let AI Solve the Equation</button></a>
          </div>
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
                <p>Vision & AI</p>
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
                <p>Frontend</p>
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
                <p>Backend</p>
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
                <p>ML Algorithms</p>
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
                <p>UI/UX Design</p>
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
    </>

  );
};

export default HomePage;