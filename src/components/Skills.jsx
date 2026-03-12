import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    name: "AI/ML",
    skills: [
      { name: "Neural Networks", icon: "https://cdn.simpleicons.org/deeplearning4j/31787C" },
      { name: "Fine-tuning", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "LLM", icon: "https://cdn.simpleicons.org/anthropic/D97757" },
      { name: "RAG", icon: "https://cdn.simpleicons.org/langchain/000000" },
      { name: "CNN", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "RNN", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "Transformers", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    ]
  },
  {
    name: "Frameworks",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Keras", icon: "https://cdn.simpleicons.org/keras/D00000" },
      { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Langchain", icon: "https://cdn.simpleicons.org/langchain/000000" },
      { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
      { name: "FAST API", icon: "https://cdn.simpleicons.org/fastapi/05998B" },
    ]
  },
  {
    name: "Data Tools",
    skills: [
      { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi/F2C811" },
      { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau/E97628" },
      { name: "RStudio", icon: "https://cdn.simpleicons.org/rstudio/75AADB" },
      { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel/217346" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "WEKA", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Weka_logo.png" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "ChromaDB", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" }, // Placeholder if not found
      { name: "Vector DB", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
      { name: "Data Warehouse", icon: "https://cdn.simpleicons.org/snowflake/29B5E8" },
    ]
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "GIT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Apache HTTP Server", icon: "https://cdn.simpleicons.org/apache/D22128" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Leadership", icon: "https://cdn.simpleicons.org/lighthouse/F44B21" },
      { name: "Communication", icon: "https://cdn.simpleicons.org/googlemessages/4285F4" },
      { name: "Critical Thinking", icon: "https://cdn.simpleicons.org/brain.fm/000000" },
      { name: "Problem Solving", icon: "https://cdn.simpleicons.org/codewars/B1361E" },
      { name: "Team Work", icon: "https://cdn.simpleicons.org/slack/4A154B" },
      { name: "Time Management", icon: "https://cdn.simpleicons.org/clockify/03A9F4" },
    ]
  }
];

const languages = [
  { name: "PYTHON", level: 95 },
  { name: "SQL", level: 90 },
  { name: "R", level: 85 },
  { name: "C++", level: 80 },
  { name: "RUST", level: 75 },
  { name: "CYPHER", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">My <span>Skills</span></h2>
          <p className="section-subtitle">LANGUAGES, FRAMEWORKS, DATA TOOLS, AND MORE.</p>
        </motion.div>

        {/* Languages Bar Chart Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="languages-card"
        >
          <div className="languages-content">
            <div className="bars-container">
              {languages.map((lang, idx) => (
                <div key={idx} className="bar-wrapper">
                  <div className="bar-label">{lang.name}</div>
                  <div className="bar-bg">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="bar-fill"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="languages-title">
              <h3>LANGUAGES MASTERED</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Divider */}
      <div className="marquee-divider">
        <div className="marquee-content">
          <span>LOGICIELS • APPS • FRAMEWORKS • DATABASE • DEVOPS • LOGICIELS • APPS • FRAMEWORKS • DATABASE • DEVOPS • </span>
        </div>
      </div>

      <div className="container">
        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => (
            <React.Fragment key={catIdx}>
              {category.skills.map((skill, skillIdx) => (
                <motion.div 
                  key={`${catIdx}-${skillIdx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (catIdx * 0.1) + (skillIdx * 0.05) }}
                  whileHover={{ y: -5 }}
                  className="skill-card"
                >
                  <div className="skill-icon-wrapper">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" onError={(e) => { e.target.src = 'https://cdn.simpleicons.org/react/61DAFB'; }} />
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{category.name}</span>
                  </div>
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
