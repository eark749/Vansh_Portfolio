import React, { forwardRef, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

function useResizeObserver(ref, callback) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(callback);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, callback]);
}

function getElementCenter(el, container) {
  const eRect = el.getBoundingClientRect();
  const cRect = container.getBoundingClientRect();
  return {
    x: eRect.left - cRect.left + eRect.width / 2,
    y: eRect.top - cRect.top + eRect.height / 2,
  };
}

function getCurvePath(start, end) {
  const dx = end.x - start.x;
  const cx1 = start.x + dx * 0.4;
  const cy1 = start.y;
  const cx2 = start.x + dx * 0.6;
  const cy2 = end.y;
  return `M ${start.x},${start.y} C ${cx1},${cy1} ${cx2},${cy2} ${end.x},${end.y}`;
}

export const AnimatedBeam = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = React.useId();
  const [path, setPath] = useState("");
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  const updatePath = () => {
    if (!containerRef.current || !fromRef.current || !toRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();
    setSvgSize({ width: cRect.width, height: cRect.height });
    const from = getElementCenter(fromRef.current, containerRef.current);
    const to = getElementCenter(toRef.current, containerRef.current);
    from.x += startXOffset;
    from.y += startYOffset;
    to.x += endXOffset;
    to.y += endYOffset;
    setPath(getCurvePath(from, to));
  };

  useEffect(() => {
    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [containerRef, fromRef, toRef]);

  const gradientId = `beam-gradient-${id}`;
  const start = reverse ? "100%" : "0%";
  const end = reverse ? "0%" : "100%";

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "visible",
      }}
      width={svgSize.width}
      height={svgSize.height}
    >
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="32.5%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Static path */}
      <path
        d={path}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
      />
      {/* Animated gradient path */}
      <motion.path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth={pathWidth}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0.4, pathOffset: reverse ? 1 : -1 }}
        animate={{ pathLength: 0.4, pathOffset: reverse ? -1 : 1 }}
        transition={{
          duration,
          delay,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </svg>
  );
};
