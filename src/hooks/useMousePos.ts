import { useEffect, useState } from "react";

type MousePosType = {
  mouseX: number;
  mouseY: number;
};

const useMousePos = () => {
  const [MousePos, setMousePos] = useState<MousePosType>({
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
  });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = (ev: MouseEvent) => {
    setMousePos({
      mouseX: ev.clientX,
      mouseY: ev.clientY,
    });
  };

  return MousePos;
};

export default useMousePos;
