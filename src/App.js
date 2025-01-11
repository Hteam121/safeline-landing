import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import './App.css'; // Import your updated CSS

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  // State to track mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to control visibility of "Back to Top" button
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Contact form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // React Slick carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Updated team (Acknowledgments)
  const acknowledgments = [
    {
      name: 'Shaik Hatim',
      title: 'Team Lead',
      img: '/hatim.png',
    },
    {
      name: 'Sahishnu Sagiraju',
      title: 'Lead Full-Stack Developer',
      img: '/sahi.png',
    },
    {
      name: 'Sherwin Thirumavalan',
      title: 'Back-End Developer',
      img: '/sherwin.png',
    },
    {
      name: 'Hari Prasath Ramalingam',
      title: 'Front-End Developer',
      img: '/hari.png',
    },
    {
      name: 'Adit Pathania',
      title: 'Front-End Developer',
      img: '/adit.png',
    },
    {
      name: 'Harkanwarveer Singh Kang',
      title: 'Mechanical Systems Engineer',
      img: '/hark.png',
    },
    {
      name: 'Ameer Rehman',
      title: 'Mechanical Systems Engineer',
      img: '/ameer.png',
    },
  ];

  // Carousel slides data
  const originSlides = [
    {
      title: 'The Idea',
      description: 'The idea for SafeLine was born during HackUTA, where our team tackled the challenge of creating a safer and more efficient school pick-up system. With a shared passion for technology and problem-solving, we brainstormed a solution to streamline student pick-ups while ensuring security. The concept was simple: leverage license plate recognition and modern web tools to simplify the process for parents and educators alike. Fueled by the energy of the hackathon, SafeLines foundation was laid, and the journey began.',
      image: '/team.png',
    },
    {
      title: 'The Vision',
      description: 'Our vision for SafeLine extends far beyond its initial concept. We aim to redefine school pick-ups by creating a system that is not only efficient but also scalable and secure. Imagine a world where every school, big or small, can adopt an automated system to reduce traffic congestion, enhance student safety, and eliminate manual errors. SafeLine strives to bring peace of mind to parents, teachers, and administrators by blending cutting-edge technology with user-friendly design.',
      image: '/vision.png',
    },
    {
      title: 'The Journey',
      description: 'After HackUTA, we set out to make SafeLine a reality. We began gathering the tools and skills needed to build the project. From integrating Raspberry Pi for camera systems to developing a Firebase-backed database and crafting an intuitive ReactJS interface, every step brought us closer to our goal. Along the way, we faced challenges, refined our approach, and grew as a team. Today, SafeLine stands as a testament to our perseverance and commitment to innovation, with a fully functional system ready to make an impact in select DFW schools.',
      image: '/journey.png',
    },
  ];

  // Simple fade-in animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Example: Send form data somewhere, or just log it
    console.log('Form submission:', { name, email, message });
    // Reset the form
    setName('');
    setEmail('');
    setMessage('');
  };

  // Show "Back to Top" button when scrolling below a certain point
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Header */}
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          SafeLine Pickup
        </motion.div>

        {/* Hamburger icon for mobile */}
        <div
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Navigation links (hidden on mobile if menu closed) */}
        <nav className={isMenuOpen ? 'nav-mobile-open' : ''}>
          <ul className="nav-links">
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#features">Featured</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#origin">About</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#team">Team</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#contact" className="contact-button-header">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* Banner / Hero Section */}
      <section className="hero-section">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Welcome to SafeLine Pickup
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 1.2 }}
          className="hero-subtitle"
        >
          Simplifying School Pickups, One Tap at a Time.
        </motion.p>
      </section>

      {/* Video Section */}
      <section id="features" className="video-section">
        <h2>Check out our demo</h2>
        <div className="video-wrapper">
          <iframe
            title="Project Demo"
            width="100%"
            height="100%"
            className="demo-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Origin / Carousel Section */}
      <section id="origin" className="origin-section">
        <h2>Our Origin Story</h2>
        <div className="carousel-container">
          <Slider {...carouselSettings}>
            {originSlides.map((slide, index) => (
              <div key={index} className="slide">
                <div className="slide-content">
                  {/* Image on the left */}
                  <motion.div
                    className="slide-image-container"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={slide.image} alt={slide.title} className="slide-image" />
                  </motion.div>
                  {/* Text on the right */}
                  <div className="slide-text-container">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Acknowledgments Section */}
      <section id="team" className="ack-section">
        <h2>The Team</h2>
        <div className="ack-grid">
          {acknowledgments.map((person, idx) => (
            <motion.div
              key={idx}
              className="ack-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={person.img} alt={person.name} className="ack-img" />
              <h4>{person.name}</h4>
              <p>{person.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section (scrolls from header "Contact" link) */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
            type="submit"
            className="contact-button"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} SafeLine Pickup. All rights reserved.</p>
      </footer>

      {/* "Back to Top" button (floats at bottom-right) */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ 
        </button>
      )}
    </div>
  );
}

export default App;
