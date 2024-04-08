import { Button } from '@mui/material';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';

interface TextButtonProps {
  text: string;
  handleClick: () => void;
  isDisabled?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({ text, handleClick, isDisabled }) => {
  return (
    <Button variant="text" onClick={handleClick} disabled={isDisabled}>
      {text}
    </Button>
  );
};

export default TextButton;
