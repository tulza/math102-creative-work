import useMousePos from "@/hooks/useMousePos";
import { parallax, parallaxX, parallaxY } from "@/styles/parallaxStyle";
import React from "react";

// ! Performance for all these one sucks!!!

const ParallaxWrapper = ({
  children,
  strength,
}: {
  children?: React.ReactNode;
  strength: number;
}) => {
  const { mouseX, mouseY } = useMousePos();
  return <div style={parallax(mouseX, mouseY, strength)}>{children}</div>;
};

const ParallaxXWrapper = ({
  children,
  strength,
}: {
  children?: React.ReactNode;
  strength: number;
}) => {
  const { mouseX } = useMousePos();
  return <div style={parallaxX(mouseX, strength)}>{children}</div>;
};

const ParallaxYWrapper = ({
  children,
  strength,
}: {
  children?: React.ReactNode;
  strength: number;
}) => {
  const { mouseY } = useMousePos();
  return <code style={parallaxY(mouseY, strength)}>{children}</code>;
};
export { ParallaxWrapper, ParallaxXWrapper, ParallaxYWrapper };
