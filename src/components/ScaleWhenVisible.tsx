"use client";
import React from "react";
import { motion } from "framer-motion";

const ScaleWhenVisible = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [0, 2, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleWhenVisible;
