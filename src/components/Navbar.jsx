const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/icon.png" alt="Numerix Logo" className="navbar-logo" />
        <h1>Numerix</h1>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#testimonials">Testimonials</a>
        {/* <button className="nav-button">Login</button> */}
      </div>
    </nav>
  );
};

export default Navbar; 