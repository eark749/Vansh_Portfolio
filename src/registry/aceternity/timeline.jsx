import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./timeline.css";

export function Timeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="tl-container" ref={containerRef}>
      <div ref={ref} className="tl-items">
        {data.map((item, index) => (
          <div key={index} className="tl-item">
            <div className="tl-title-col">
              <div className="tl-dot-outer">
                <div className="tl-dot-inner" />
              </div>
              <h3 className="tl-title">{item.title}</h3>
            </div>
            <div className="tl-content-col">{item.content}</div>
          </div>
        ))}

        <div className="tl-line-track" style={{ height: height + "px" }}>
          <motion.div
            className="tl-line-fill"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  );
}
