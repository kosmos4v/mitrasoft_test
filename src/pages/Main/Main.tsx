import React, {
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { TRootState } from '../../redux/reducers';
import { loadPosts } from '../../redux/actions/post';
import Post from '../../components/Post';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, isLoadPostPending } = useSelector((state: TRootState) => state.post);

  useEffect(() => { dispatch(loadPosts()); }, [dispatch]);

  return (
    <div>
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
            id={post.id}
            key={post.id}
            title={post.title}
            text={post.text}
          />
        ))}
    </div>
  );
};
