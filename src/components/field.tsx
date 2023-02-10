import React from 'react';
import { Form } from 'semantic-ui-react';

interface Props {
  label: string,
  inputType?: string,
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Field = ({ label, inputType, handleInput }: Props) => {
  return (
    <Form.Field>
      <label>{label}</label>
      <input placeholder={label} type={inputType} onChange={handleInput}/>
    </Form.Field>
  );
}