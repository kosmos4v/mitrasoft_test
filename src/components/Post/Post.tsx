import React from 'react';
import {
  Card,
  Button, Container,
  Accordion,
} from 'react-bootstrap';
import { TComment } from '../../models/comment';

type PostProps = {
  title: string,
  text: string,
  buttonText: string,
  onClickImage?: () => void,
  onClickButton?: () => void,
  showComments: boolean,
  comments: TComment[];
};

export const Post: React.FC<PostProps> = ({
  title = '',
  text = '',
  buttonText = 'кнопка',
  onClickImage,
  onClickButton,
  comments,
  showComments = false,
}) => {
  const handlClickButton = () => {
    if (typeof onClickButton === 'function') {
      onClickButton();
    }
  };

  const handleClickCard = () => {
    if (typeof onClickImage === 'function') {
      onClickImage();
    }
  };
  return (
    <Card className="mb-2">
      <Container style={{ display: 'flex', flexDirection: 'row' }}>
        <Card.Img
          variant="left"
          src="/images/avatar.jpg"
          className="post__img mt-3"
          style={{ width: '100px', height: '100px', cursor: 'pointer' }}
          onClick={handleClickCard}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button
            variant="link"
            onClick={handlClickButton}
          >
            {buttonText}
          </Button>
          {
            showComments
            && comments.map((comment) => (
              <Accordion key={comment.id}>
                <Accordion.Item eventKey={comment.id.toString()}>
                  <Accordion.Header>{comment.email}</Accordion.Header>
                  <Accordion.Body>{comment.body}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))
          }
        </Card.Body>
      </Container>
    </Card>
  );
};
