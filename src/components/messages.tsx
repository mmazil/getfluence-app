import React from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
  message: string,
  negative?: boolean,
  positive?: boolean
}

export const Messages = ({ message, ...rest }: Props) => {
  return (
    <Message {...rest}>
      <Message.Header>{message}</Message.Header>
    </Message>
  );
}