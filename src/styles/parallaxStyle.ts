const parallax = (
  mouseX: number | null,
  mouseY: number | null,
  effectStrength: number,
) => {
  if (mouseX == null || mouseY == null) {
    return;
  }
  return {
    transform: `translate(${
      (mouseX - window.innerWidth / 2) * effectStrength
    }px, ${(mouseY - window.innerHeight / 2) * effectStrength}px)`,
  };
};

export { parallax };
