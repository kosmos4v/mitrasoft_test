import React, { useCallback, useState } from 'react';
import {
  Card,
  Button, Container,
  Accordion,
} from 'react-bootstrap';
import { TComment } from '../../models/comment';

type TPostProps = {
  title: string,
  text: string,
  onClickImage?: () => void,
  onClickButton?: () => void,
  comments: TComment[];
  showComments: boolean,
};

export const Post: React.FC<TPostProps> = ({
  title = '',
  text = '',
  onClickImage,
  onClickButton,
  comments,
  showComments = true,
}) => {
  const postPicker = React.useRef<HTMLDivElement>(null);
  const [showPostComments, setPostShowComments] = useState(showComments);
  const postComments: string = comments.map((comment) => (
    `$<Accordion key=${comment.id}>
      <Accordion.Item eventKey=${comment.id.toString()}>
        <Accordion.Header>${comment.email}</Accordion.Header>
        <Accordion.Body>${comment.body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>`
  )).join('');
  const handlClickButton = useCallback(() => {
    if (typeof onClickButton === 'function') {
      onClickButton();
      setPostShowComments((comment) => !comment);
      if (postPicker.current) {
        postPicker.current.innerHTML = showPostComments ? postComments : '';
      }
    }
  }, [onClickButton, showPostComments, postComments]);

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
            { showPostComments ? 'Показать коментарии' : 'Скрыть комментарии' }
          </Button>
          <div ref={postPicker} />
        </Card.Body>
      </Container>
    </Card>
  );
};
