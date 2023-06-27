import React from 'react';
import { Container } from 'react-bootstrap';

import './Content.scss';

export type ContentProps = {
  children: string | React.ReactNode | React.ReactElement
};

export const Content: React.FC <ContentProps> = ({ children }) => (
  <Container className="content">
    {children}
  </Container>
);
