import React from 'react';
import { Accordion } from 'react-bootstrap';

export type TCommentProp = {
  id: string,
  header: string,
  body: string,
};

export const Comment: React.FC<TCommentProp> = ({
  id,
  header,
  body,
}) => (
  <Accordion>
    <Accordion.Item eventKey={id}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>{body}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
);
