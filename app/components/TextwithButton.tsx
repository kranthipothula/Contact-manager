import React from 'react';
import Button from './AddNewButton';
import Link from 'next/link';

interface TextWithButtonProps {
    buttonText: string;
    onButtonClick: () => void;
    children: React.ReactNode;
    textColor?: string;
    buttonColor?: string;
    buttonLink?: string;
  }
  
  const TextWithButton: React.FC<TextWithButtonProps> = ({
    buttonText,
    onButtonClick,
    children,
    textColor,
    buttonColor,
    buttonLink,
  }) => {
    
    return (
      <div className="flex items-center">
        <a className={`mr-2 ${textColor || ''}`}>{children}</a>
        <Link href={buttonLink || '/'}>
        <Button onClick={onButtonClick} buttonColor={buttonColor}>
          {buttonText}
        </Button>
        </Link>
      </div>
    );
  };
  
  export default TextWithButton;