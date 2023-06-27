import React, {
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';
import { TRootState } from '../../redux/reducers';
import { loadPosts } from '../../redux/actions/post';
import Post from '../../components/Post';

import './Main.scss';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, isLoadPostPending } = useSelector((state: TRootState) => state.post);

  useEffect(() => {
    if (!isLoadPostPending && typeof posts === 'undefined') dispatch(loadPosts());
  }, [dispatch, isLoadPostPending, posts]);

  return (
    <Container className="main__content">
      {isLoadPostPending
        ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
          >
            <Spinner animation="border" role="status" />
          </div>
        )
        : posts?.map((post) => (
          <Post
            postId={post.id}
            key={post.id}
            title={post.title}
            text={post.body}
          />
        ))}
    </Container>
  );
};
