import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="hero-title-light">I am </span>
          <span className="hero-title-bold">Vansh</span>
        </motion.h1>
        <motion.p className="hero-description" variants={itemVariants}>
          A junior developer and UI/UX designer who wants to bring your ideas
          and visions to life digitally. I specialize in modern web design
          and development.
        </motion.p>
        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#" className="btn btn-dark">Download Resume</a>
          <Link to="/contact" className="btn btn-outline">
            Contact Me
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.img 
          src="/memoji.png" 
          alt="Vansh memoji" 
          className="memoji-img" 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
