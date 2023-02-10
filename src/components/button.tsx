import React from 'react';
import { Button } from 'semantic-ui-react';

interface Props {
  label: string,
  handleClick: () => void
}

export const Button_ = ({ label, handleClick }: Props) => {
  return (
    <Button onClick={handleClick} primary fluid>{label}</Button>
  );
}