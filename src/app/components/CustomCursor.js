"use client"
import React, { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientXDot: 0,
    clientYDot: 0
  });

  const updatePosition = (event) => {
    const { clientX, clientY } = event;
    setPosition({
      clientXDot: clientX,
      clientYDot: clientY
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return position;
};

export const CustomCursor = () => {
  const { clientXDot, clientYDot } = useMousePosition();
  const [cursorPointer, setCursorPointer] = useState(false);

  useEffect(() => {
    const handleMouseOverButton = () => {
      setCursorPointer(true);
    };

    const handleMouseLeaveButton = () => {
      setCursorPointer(false);
    };

    const pointer = document.querySelectorAll("button, a, link");

    pointer.forEach((elements) => {
      elements.addEventListener("mouseover", handleMouseOverButton);
      elements.addEventListener("mouseleave", handleMouseLeaveButton);
    });

    return () => {
      pointer.forEach((elements) => {
        elements.removeEventListener("mouseover", handleMouseOverButton);
        elements.removeEventListener("mouseleave", handleMouseLeaveButton);
      });
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      setCursorPointer(false); // Restablecer el cursor cuando se hace clic en algún elemento
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="hidden l:block">
      <div className="fixed z-[2000] pointer-events-none ">
        <svg
          fill={`${cursorPointer ? "#3395FF" : "white"}`}
          width={40}
          height={40}
          viewBox="0 0 50 50"
          style={{
            position: "absolute",
            left: clientXDot,
            top: clientYDot,
            transform: "translate(-50%, -50%)"
          }}
        >
          <circle cx="25" cy="25" r="8" />
        </svg>
      </div>
      <div className={`fixed pointer-events-none`}>
        <svg
          width={100}
          height={100}
          stroke={`${cursorPointer ? "#3395FF" : "white"}`}
          opacity="1"
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            left: clientXDot,
            top: clientYDot,
            transform: "translate(-50%, -50%)"
          }}
        >
          <circle
            r={`${cursorPointer ? "38" : "25"}`}
            cx="50"
            cy="50"
            fill="transparent"
            opacity="0.8"
            stroke={`${cursorPointer ? "#3395FF" : "grey"}`}
            strokeWidth={1.5}
          />
        </svg>
      </div>
    </div>
  );
};