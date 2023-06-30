import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Content from '../../components/common/Content';
import { TRootState } from '../../redux/reducers';
import Post from '../../components/Post';

import './User.scss';

export const User: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = useSelector((state: TRootState) => state.post);
  const postsByAuthorId = useMemo(() => {
    const filteredPosts = posts?.filter((post) => post.userId.toString() === id);
    return filteredPosts;
  }, [posts, id]);
  const handleBackMainPage = useCallback(() => {
    navigate('/');
  }, [navigate]);
  return (
    <Content>
      {postsByAuthorId?.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          title={post.title}
          text={post.body}
        />
      ))}
      <Button
        className="user__button-back"
        variant="outline-primary"
        size="sm"
        onClick={handleBackMainPage}
      >
        Вернуться к постам
      </Button>
    </Content>
  );
};
