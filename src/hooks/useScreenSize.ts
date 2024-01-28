import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenX, setScreenX] = useState(window.innerWidth);
  const [screenY, setScreenY] = useState(window.innerHeight);
  useEffect(() => {
    const handleScreenSize = () => {
      setScreenX(window.innerWidth);
      setScreenY(window.innerHeight);
    };
    addEventListener("resize", handleScreenSize);
    return removeEventListener("resize", handleScreenSize);
  });
  return { screenX, screenY };
};
