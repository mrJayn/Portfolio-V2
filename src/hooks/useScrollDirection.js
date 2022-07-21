import { useState, useEffect, useCallback } from "react";

const UP = false;
const DOWN = true;

const useScrollDirection = () => {
  const [y, setY] = useState(0);
  const [scrollDir, setScrollDir] = useState(UP);

  const handleNavDisplay = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollDir(UP);
      } else if (y < window.scrollY) {
        setScrollDir(DOWN);
      }
      setY(window.scrollY);
    },
    [y]
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavDisplay);

    return () => {
      window.removeEventListener("scroll", handleNavDisplay);
    };
  }, [handleNavDisplay]);

  return scrollDir;
};

export default useScrollDirection;
