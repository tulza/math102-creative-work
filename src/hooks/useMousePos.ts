import { useEffect, useState } from "react";

type MousePosType = {
  mouseX: number | null;
  mouseY: number | null;
};

const useMousePos = () => {
  const [MousePos, setMousePos] = useState<MousePosType>({
    mouseX: null,
    mouseY: null,
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
