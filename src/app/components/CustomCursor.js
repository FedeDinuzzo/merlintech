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
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};

const useMousePositionDelay = () => {
  const [position, setPosition] = useState({
    clientXCircle: 0,
    clientYCircle: 0
  });

  const updatePosition = (event) => {
    const { clientX, clientY } = event;
    setTimeout(() => {
      setPosition({
        clientXCircle: clientX,
        clientYCircle: clientY
      });
    }, 100);
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};

export const CustomCursor = () => {
  const { clientXDot, clientYDot } = useMousePosition();
  const { clientXCircle, clientYCircle } = useMousePositionDelay();
  const [cursorPointer, setCursorPointer] = useState(false);

  useEffect(() => {
    const handleMouseOverButton = () => {
      setCursorPointer(true);
    };

    const handleMouseLeaveButton = () => {
      setCursorPointer(false);
    };

    const pointer = document.querySelectorAll("button, link");

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

  return (
    <>
      <div className="fixed z-[2000] pointer-events-none">
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
      <div className={`${cursorPointer ? "hidden" : "visible"} fixed pointer-events-none`}>
        <svg
          width={100}
          height={100}
          stroke={`${cursorPointer ? "#3395FF" : "white"}`}
          fill="white"
          opacity="0.7"
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            left: clientXCircle,
            top: clientYCircle,
            transform: "translate(-50%, -50%)"
          }}
        >
          <circle
            r="25"
            cx="50"
            cy="50"
            opacity="0.25"
          />
        </svg>
      </div>
    </>
  );
};