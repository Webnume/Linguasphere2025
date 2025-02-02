"use client";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = ({ title }: { title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index:number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full max-w-[1440px] z-1 overflow-hidden">
      <div className="slider-container   w-[100vw] flex items-center justify-center">
        <div className="carousel w-full h-[370px] relative flex items-center
    justify-center 
    align-center">
          <div className="carousel-images">
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                variants={slideVariants}
              />
            </AnimatePresence>
            <div className="slide_direction">
              <motion.div
                variants={slidersVariants}
                whileHover="hover"
                className="left"
                onClick={handlePrevious}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                >
                  <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
              </motion.div>
              <motion.div
                variants={slidersVariants}
                whileHover="hover"
                className="right"
                onClick={handleNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                >
                  <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
              </motion.div>
            </div>
          </div>
          <div className="carousel-indicator">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                initial="initial"
                animate={currentIndex === index ? "animate" : ""}
                whileHover="hover"
                variants={dotsVariants}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
