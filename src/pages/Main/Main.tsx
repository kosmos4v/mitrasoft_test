import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TRootState } from '../../redux/reducers';
import { loadPosts } from '../../redux/actions/post';
import Post from '../../components/Post';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickCard = useCallback(() => {
    navigate('/user');
  }, [navigate]);
  const { posts } = useSelector((state: TRootState) => state.post);
  useEffect(() => { dispatch(loadPosts()); }, [dispatch]);
  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          text={post.text}
          buttonText="Комментарии"
          onClick={handleClickCard}
        />
      ))}
    </div>
  );
};
