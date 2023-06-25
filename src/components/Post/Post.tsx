import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Button,
  Container,
} from 'react-bootstrap';
import Comment from '../Comment';

type TPostProps = {
  title: string,
  text: string,
  id: number,
};

export const Post: React.FC<TPostProps> = ({
  title = '',
  text = '',
  id,
}) => {
  const navigate = useNavigate();

  const [showComments, setShowComments] = useState(false);

  const handlClickButton = useCallback(() => {
    console.log('id', id);
    setShowComments((comment) => !comment);
  }, [setShowComments]);

  const handleClickImage = useCallback(() => {
    navigate('/user');
  }, [navigate]);

  return (
    <Card className="mb-2">
      <Container style={{ display: 'flex', flexDirection: 'row' }}>
        <Card.Img
          variant="left"
          src="/images/avatar.jpg"
          className="post__img mt-3"
          style={{ width: '100px', height: '100px', cursor: 'pointer' }}
          onClick={handleClickImage}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button
            variant="link"
            onClick={handlClickButton}
          >
            { showComments ? 'Скрыть комментарии' : 'Показать коментарии' }
          </Button>
          {showComments && <div>1</div>}
        </Card.Body>
      </Container>
    </Card>
  );
};
