import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import {
  Card,
  Button,
  Container,
} from 'react-bootstrap';
import Comment from '../Comment';
import { loadCommentsByPostId } from '../../redux/actions/comment';
import { TRootState } from '../../redux/reducers';

type TPostProps = {
  title: string,
  text: string,
  postId: number,
  userId?: number,
};

export const Post: React.FC<TPostProps> = ({
  title = '',
  text = '',
  postId,
  userId,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showComments, setShowComments] = useState(false);

  const { comments, isLoadCommentsPending } = useSelector((state: TRootState) => state.comment);

  const handlClickButton = useCallback(() => {
    setShowComments((comment) => !comment);
    if (!isLoadCommentsPending && !comments[postId]) dispatch(loadCommentsByPostId(postId));
  }, [setShowComments, dispatch, postId, comments, isLoadCommentsPending]);

  const handleClickImage = useCallback(() => {
    if (userId) navigate(`/user/${userId}`);
  }, [navigate, userId]);

  return (
    <Card className="mb-2" border="primary">
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
          {showComments
          && (
            isLoadCommentsPending && !comments[postId]
              ? <Spinner />
              : comments[postId].map((comment) => (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  header={comment.email}
                  body={comment.body}
                />
              ))
          )}
        </Card.Body>
      </Container>
    </Card>
  );
};
