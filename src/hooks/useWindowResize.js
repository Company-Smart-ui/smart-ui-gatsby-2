import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const updateRenderResize = () => {
      setSize(typeof window !== "undefined" ? window.innerWidth : 0);
    };

    window.addEventListener("resize", updateRenderResize);
    updateRenderResize();
    return () => window.removeEventListener("resize", updateRenderResize);
  });

  return size;
};