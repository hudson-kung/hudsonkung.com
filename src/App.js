import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './App.css';

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectPackage = (packageName, price) => {
    setSelectedPackage({ name: packageName, price: price });
    setFormData(prev => ({
      ...prev,
      message: `I'm interested in the ${packageName} package ($${price}). Please provide more details about what's included.`
    }));
    scrollToSection('contact');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, selectedPackage });
    setShowModal(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    });
    setSelectedPackage(null);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-code"></i>
            <span>Hudson Studio</span>
          </div>
          <div className="nav-links">
            <Link to="services" smooth={true} duration={500}>Services</Link>
            <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
            <button className="nav-btn">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Dream Website</h1>
          <p>Professional website creation services tailored to your business needs</p>
          <div className="hero-button">
            <Link to="contact" smooth={true} duration={500} className="shop-btn">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Hudson Studio?</h2>
            <p>We deliver exceptional websites that drive results</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>Get your website live in as little as 7 days</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile Responsive</h3>
              <p>Perfect on all devices, from phones to desktops</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>SEO Optimized</h3>
              <p>Built to rank high on search engines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive web solutions for every need</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-paint-brush"></i>
              <h3>Custom Design</h3>
              <p>Unique designs tailored to your brand</p>
              <ul>
                <li>• Brand-aligned visuals</li>
                <li>• Modern UI/UX</li>
                <li>• Interactive elements</li>
              </ul>
            </div>
            <div className="service-card">
              <i className="fas fa-shopping-cart"></i>
              <h3>E-commerce</h3>
              <p>Complete online stores ready to sell</p>
              <ul>
                <li>• Payment integration</li>
                <li>• Inventory management</li>
                <li>• Order tracking</li>
              </ul>
            </div>
            <div className="service-card">
              <i className="fas fa-wordpress"></i>
              <h3>WordPress Sites</h3>
              <p>Easy-to-manage WordPress solutions</p>
              <ul>
                <li>• Custom themes</li>
                <li>• Plugin setup</li>
                <li>• Content management</li>
              </ul>
            </div>
            <div className="service-card">
              <i className="fas fa-bullhorn"></i>
              <h3>Digital Marketing</h3>
              <p>Drive traffic and conversions</p>
              <ul>
                <li>• SEO optimization</li>
                <li>• Social media integration</li>
                <li>• Analytics setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Recent Projects</h2>
            <p>See our work in action</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <div className="portfolio-content">
                <h3>Tech Startup Website</h3>
                <p>Modern, sleek design for a technology company</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <div className="portfolio-content">
                <h3>E-commerce Store</h3>
                <p>Full-featured online store with payment integration</p>
                <div className="tech-tags">
                  <span>Shopify</span>
                  <span>Stripe</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <div className="portfolio-content">
                <h3>Restaurant Website</h3>
                <p>Elegant site with online ordering system</p>
                <div className="tech-tags">
                  <span>WordPress</span>
                  <span>PHP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Start Your Project</h2>
            <p>Get a free consultation and quote</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Project Type *</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a project type</option>
                <option value="business">Business Website</option>
                <option value="ecommerce">E-commerce Store</option>
                <option value="portfolio">Portfolio Site</option>
                <option value="blog">Blog/Content Site</option>
                <option value="custom">Custom Application</option>
              </select>
            </div>
            <div className="form-group">
              <label>Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
              >
                <option value="">Select budget range</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-5000">$2,000 - $5,000</option>
                <option value="5000+">$5,000+</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fas fa-code"></i>
                <span>Hudson Studio</span>
              </div>
              <p>Creating exceptional websites that drive business growth.</p>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">E-commerce</a></li>
                <li><a href="#">SEO</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
              <p>info@hudsonstudio.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Hudson Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <div className="success-icon">
                <i className="fas fa-check"></i>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for your inquiry. We'll get back to you within 24 hours.</p>
              <button onClick={closeModal} className="modal-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
