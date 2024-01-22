import clsx from "clsx";
import React from "react";
type ButtonProps = {
  className?: string;
  image?: string;
  text?: string;
  OnClick: any;
};
const Button = ({ className, image, text, OnClick }: ButtonProps) => {
  return (
    <div
      className={clsx(
        "m-6 flex h-10 cursor-pointer select-all place-items-center overflow-hidden rounded-md bg-element",
        `${className}`,
      )}
      onClick={OnClick}
    >
      {!!image && <img src={image} className="h-full" />}
      {!!text && <code>{text}</code>}
    </div>
  );
};

export default Button;
