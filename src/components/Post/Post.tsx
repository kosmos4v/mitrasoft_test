import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

type PostProps = {
  title: string,
  text: string,
  buttonText: string,
  onClick?: () => void,
};

export const Post: React.FC<PostProps> = ({
  title,
  text,
  buttonText,
  onClick,
}) => (
  <Card className="mb-2">
    <Container style={{ display: 'flex', flexDirection: 'row' }}>
      <Card.Img
        variant="left"
        src="/images/avatar.jpg"
        className="post__img mt-3"
        style={{ width: '100px', height: '100px', cursor: 'pointer' }}
        onClick={onClick}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="link">{buttonText}</Button>
      </Card.Body>
    </Container>
  </Card>
);
