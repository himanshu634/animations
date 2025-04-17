"use client";

import React, { useEffect, useRef, useState } from "react";

const ThreeJsScrollTracker = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    console.log("scrollValue", scrollValue);
  }, [scrollValue]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function preventDefault(e: any) {
      e.preventDefault();
    }

    function handleWheel(e: WheelEvent) {
      const delta = e.deltaY;
      setScrollValue((prev) => prev + delta);
    }

    document.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", preventDefault);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "10px 20px",
          borderRadius: 5,
        }}
      >
        Scroll Value: {scrollValue}
      </div>
    </div>
  );
};

export default ThreeJsScrollTracker;
