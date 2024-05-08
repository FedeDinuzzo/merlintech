"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
};

export const FlipCard = React.memo(function FlipCard({ width, height, itemsArray }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotateXaxis, setRotateXaxis] = useState(0);
  const [rotateYaxis, setRotateYaxis] = useState(0);
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 840; // Determinar si es un dispositivo de escritorio

  const ref = useRef(null);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsArray.length);
  };

  const handleMouseMove = (event) => {
    if (isDesktop) {
      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const elementWidth = elementRect.width;
      const elementHeight = elementRect.height;
      const elementCenterX = elementWidth / 2;
      const elementCenterY = elementHeight / 2;
      const mouseX = event.clientY - elementRect.y - elementCenterY;
      const mouseY = event.clientX - elementRect.x - elementCenterX;
      const degreeX = (mouseX / elementWidth) * 20;
      const degreeY = (mouseY / elementHeight) * 20;
      setRotateXaxis(degreeX);
      setRotateYaxis(degreeY);
    }
  };

  const handleMouseEnd = () => {
    if (isDesktop) {
      setRotateXaxis(0);
      setRotateYaxis(0);
    }
  };

  const dx = useSpring(0, spring);
  const dy = useSpring(0, spring);

  useEffect(() => {
    dx.set(-rotateXaxis);
    dy.set(rotateYaxis);
  }, [rotateXaxis, rotateYaxis]);

  return (
    <motion.div
      animate={{
        rotateY: isFlipped ? -180 : 0,
        scaleX: isFlipped ? -1 : 1,
      }}
      onClick={handleClick}
      transition={spring}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        width: width,
        height: height,
      }}
    >
      <motion.div
        ref={ref}
        whileHover={isDesktop ? { scale: 1.05 } : {}} // Aplicar efecto de hover solo en escritorio
        onMouseMove={isDesktop ? handleMouseMove : undefined} // Manejar movimiento del mouse solo en escritorio
        onMouseLeave={isDesktop ? handleMouseEnd : undefined} // Restablecer posición del mouse solo en escritorio
        transition={spring}
        style={{
          width: "100%",
          height: "100%",
          rotateX: isDesktop ? dx : 0, // Aplicar rotación solo en escritorio
          rotateY: isDesktop ? dy : 0, // Aplicar rotación solo en escritorio
        }}
      >
        <div
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
          }}
        >
          {itemsArray[currentIndex]}
        </div>
      </motion.div>
    </motion.div>
  );
});
