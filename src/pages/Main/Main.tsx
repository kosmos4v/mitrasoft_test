import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TRootState } from '../../redux/reducers';
import { loadPosts } from '../../redux/actions/post';
import Post from '../../components/Post';

const comments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntemporaquo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
];

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(true);
  const handleClickCard = useCallback(() => {
    navigate('/user');
  }, [navigate]);
  const handleClickComments = useCallback(() => {
    setShowComments((show) => !show);
  }, [setShowComments]);
  const { posts } = useSelector((state: TRootState) => state.post);

  useEffect(() => { dispatch(loadPosts()); }, [dispatch]);

  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          text={post.text}
          onClickImage={handleClickCard}
          onClickButton={handleClickComments}
          comments={comments}
          showComments={showComments}
        />
      ))}
    </div>
  );
};
