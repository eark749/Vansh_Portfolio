import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    company: "Rysysth technologies",
    location: "Ahmedabad, Hybrid",
    position: "Applied AI Engineer",
    period: "July 2025 - Present",
    type: "Technology",
    description: "Building end-to-end AI powered application for clients based on their needs.",
    brief: "AI Solutions Development"
  },
  {
    company: "Zensible",
    location: "Bangalore, Hybrid",
    position: "AI Engineer",
    period: "April 2025 - July 2025",
    type: "AI & Automation",
    description: "Built AI applications delivering business value; Created HRMS bot for HR automation and employee chat-based queries.",
    brief: "Business Value through AI"
  },
  {
    company: "Amaze Inc",
    location: "Bangalore, On-Site",
    position: "AI Consultant",
    period: "January 2025 - April 2025",
    type: "Consulting",
    description: "Transformed complex datasets into strategic insights and architected custom AI solutions for data-driven decisions.",
    brief: "Data Strategic Insights"
  },
  {
    company: "Brand Shark",
    location: "Bangalore, On-Site",
    position: "AI Engineer Intern",
    period: "November 2024 - January 2025",
    type: "Marketing & AI",
    description: "Analyzed and visualized data, delivered actionable insights to support business decisions.",
    brief: "Data Analytics & Visualization"
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="experience-header"
        >
          <h2 className="experience-title">EXPERIENCE</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="experience-item"
            >
              <div className="experience-item-top">
                <h3 className="company-name">{exp.company}</h3>
              </div>
              
              <div className="experience-item-grid">
                <div className="col-left">
                  <p className="brief">{exp.brief}</p>
                  <p className="period">{exp.period}</p>
                </div>
                
                <div className="col-middle">
                  <div className="info-row">
                    <span className="info-label">Position</span>
                    <span className="info-value">{exp.position}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Location</span>
                    <span className="info-value">{exp.location}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Industry</span>
                    <span className="info-value">{exp.type}</span>
                  </div>
                </div>
                
                <div className="col-right">
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
