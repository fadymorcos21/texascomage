"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: (d) => ({
    opacity: 0,
    y: d === "up" ? 28 : 0,
    x: d === "left" ? 28 : d === "right" ? -28 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      custom={direction}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
