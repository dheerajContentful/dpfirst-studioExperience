import React from "react";

interface ButtonComponentProps {
  text: string;
}

const Button: React.FC<ButtonComponentProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
