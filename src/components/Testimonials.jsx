
const Testimonials = () => {
  const testimonials = [
    {
      initial: "S",
      name: "Sarah Johnson",
      role: "High School Student",
      rating: 5,
      comment: "This tool has been a lifesaver for my calculus homework. The step-by-step explanations help me understand where I went wrong."
    },
    {
      initial: "M",
      name: "Michael Chen",
      role: "Math Teacher",
      rating: 5,
      comment: "I recommend this to all my students. It's like having a math tutor available 24/7. The detailed explanations are fantastic."
    },
    {
      initial: "R",
      name: "Rachel Martinez",
      role: "College Student",
      rating: 5,
      comment: "The AI is incredibly accurate and the interface is so easy to use. Worth every penny for the Pro subscription!"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <i key={index} className="fas fa-star"></i>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Users Say</h2>
        <p className="testimonials-subtitle">
          Real feedback from students and educators
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.initial}
                </div>
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p className="role">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 