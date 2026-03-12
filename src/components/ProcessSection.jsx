import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "../registry/aceternity/timeline";
import "./ProcessSection.css";

const steps = [
  {
    title: "Discover",
    content: (
      <div className="ps-content">
        <p className="ps-desc">
          Every great product starts with deep understanding. I research your goals,
          study your users, and map out constraints before a single pixel is drawn.
        </p>
        <ul className="ps-list">
          <li>User interviews & competitive analysis</li>
          <li>Defining success metrics & KPIs</li>
          <li>Mapping user journeys and pain points</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Design",
    content: (
      <div className="ps-content">
        <p className="ps-desc">
          From rough sketches to high-fidelity prototypes, I build a visual
          system that's both beautiful and functional — then validate it with
          real feedback.
        </p>
        <ul className="ps-list">
          <li>Wireframes & interaction design</li>
          <li>Design system & component library</li>
          <li>Prototype testing & iteration</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Build",
    content: (
      <div className="ps-content">
        <p className="ps-desc">
          Designs come to life as clean, accessible, production-ready code.
          I bridge the gap between design and engineering so nothing gets lost
          in translation.
        </p>
        <ul className="ps-list">
          <li>React / TypeScript development</li>
          <li>Performance & accessibility optimization</li>
          <li>Cross-device & browser testing</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Ship",
    content: (
      <div className="ps-content">
        <p className="ps-desc">
          Launching is a milestone, not a finish line. I make sure everything
          is tested, optimized, and ready for real users before it goes live.
        </p>
        <ul className="ps-list">
          <li>CI/CD pipeline & deployment</li>
          <li>Performance audits (Core Web Vitals)</li>
          <li>Staged rollout & monitoring</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Iterate",
    content: (
      <div className="ps-content">
        <p className="ps-desc">
          The best products are never finished. I track real-world usage, gather
          feedback, and keep improving until the experience is exactly right.
        </p>
        <ul className="ps-list">
          <li>Analytics review & user feedback</li>
          <li>A/B testing & experimentation</li>
          <li>Continuous design & code refinement</li>
        </ul>
      </div>
    ),
  },
];

export function ProcessSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="process-section">
      <motion.div 
        className="process-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <h2 className="process-heading">How I Work</h2>
        <p className="process-subheading">
          A clear, repeatable process that turns ideas into products people love.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Timeline data={steps} />
      </motion.div>
    </section>
  );
}
