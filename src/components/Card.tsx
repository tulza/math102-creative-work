import clsx from "clsx";
import React from "react";

type CardProps = {
  children?: React.ReactNode;
  text?: string;
  description?: string;
  className?: string;
};
const Card = ({ children, text, description, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "min-h-[200px] w-[400px] rounded-lg border-4 border-black p-6",
        `${className}`,
      )}
    >
      <p className="bold mb-4 text-xl">{text}</p>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Card;
