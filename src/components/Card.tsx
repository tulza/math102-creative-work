import React from "react";

type CardProps = {
  children?: React.ReactNode;
  text?: string;
  description?: string;
};
const Card = ({ children, text, description }: CardProps) => {
  return (
    <div className="min-h-[200px] w-[400px] rounded-lg border-4 border-black p-6">
      <p className="bold mb-4 text-xl">{text}</p>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Card;
