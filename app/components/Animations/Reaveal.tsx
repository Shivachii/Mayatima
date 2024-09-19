"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      // Fire animation
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
