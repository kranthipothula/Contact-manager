// components/Button.js
import React, { useEffect, useState } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode; // Explicitly set the type of children
  buttonColor?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, buttonColor }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (isClient && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`py-0 px-2 rounded ${buttonColor || ''}`}>{children}
    </button>
  );
};

export default Button;


  