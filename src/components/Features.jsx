import './Features.css';

const Features = () => {
  const features = [
    {
      icon: "tick",
      title: "Instant Image Recognition",
      description: "Simply upload a photo of your math equation and our AI will instantly recognize and process it."
    },
    {
      icon: "tick",
      title: "Step-by-Step Solutions",
      description: "Get detailed explanations for each step of the solution process, helping you understand the concepts better."
    },
    {
      icon: "tick",
      title: "5 Free Searches",
      description: "Start with 5 free equation solves. Perfect for trying out the service before committing."
    },
    {
      icon: "tick",
      title: "Secure Login",
      description: "Your work stays private with secure user authentication and personal storage."
    },
    {
      icon: "/tick.png",
      title: "Real-Time Processing", 
      description: "Watch as our AI processes your equation in real-time with a sleek loading animation."
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2>Powerful Features</h2>
        <p className="features-subtitle">
          Experience the power of AI-driven math solutions with our comprehensive feature set
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 