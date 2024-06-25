import { useEffect, useState } from "react";
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", updateSize);

    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return windowSize;
};
