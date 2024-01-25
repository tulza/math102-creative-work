export const parallax = (
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

export const parallaxX = (mouseX: number | null, effectStrength: number) => {
  if (mouseX == null) {
    return;
  }
  return {
    transform: `translate(${
      (mouseX - window.innerWidth / 2) * effectStrength
    }px, 0px)`,
  };
};

export const parallaxY = (mouseY: number | null, effectStrength: number) => {
  if (mouseY == null) {
    return;
  }
  return {
    transform: `translate(0px, ${
      (mouseY - window.innerHeight / 2) * effectStrength
    }px)`,
  };
};
