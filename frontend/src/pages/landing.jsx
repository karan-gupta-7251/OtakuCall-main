import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useNavigate();

  // Animation variants for navbar
  const navVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Faster for mobile
    },
  };

  // Animation variants for main content
  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation for button interactions
  const buttonVariants = {
    hover: {
      scale: 1.05, // Smaller scale for mobile
      backgroundColor: "#a23030ff",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95, // Feedback on tap
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="landingPageContainer">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="navHeader">
          <h2>
            Otaku<span style={{ color: "#c24040ff" }}>Call</span>
          </h2>
        </div>
        <div className="navlist">
          <motion.p
            onClick={() => router("/karan")}
            whileTap="tap"
            variants={buttonVariants}
          >
            Join as Guest
          </motion.p>
          <motion.p
            onClick={() => router("/auth")}
            whileTap="tap"
            variants={buttonVariants}
          >
            Register
          </motion.p>
          <motion.div
            role="button"
            onClick={() => router("/auth")}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <p>Login</p>
          </motion.div>
        </div>
      </motion.nav>
      <div className="landingMainContainer">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <h1>
            <span style={{ color: "#c24040ff" }}>Summon</span> Your Friends.
            Connect Instantly
          </h1>
          <p>Built for effortless and reliable connection</p>
          <motion.div
            role="button"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Link to={"/auth"}>Get Started</Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img  src="/phone.png" alt="OtakuCall" />
        </motion.div>
      </div>
    </div>
  );
}