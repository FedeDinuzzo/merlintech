import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
};

export function FlipCard({ width, height, itemsArray }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotateXaxis, setRotateXaxis] = useState(0);
  const [rotateYaxis, setRotateYaxis] = useState(0);
  const ref = useRef(null);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
    // Cambiar al siguiente ítem en el array, reiniciar si se llega al final
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsArray.length);
  };

  const handleMouseMove = (event) => {
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
  };

  const handleMouseEnd = () => {
    setRotateXaxis(0);
    setRotateYaxis(0);
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
        whileHover={{ scale: 1.05 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseEnd}
        transition={spring}
        style={{
          width: "100%",
          height: "100%",
          rotateX: dx,
          rotateY: dy,
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
          {/* Renderiza el ítem actual del array */}
          {itemsArray[currentIndex]}
        </div>
      </motion.div>
    </motion.div>
  );
}
