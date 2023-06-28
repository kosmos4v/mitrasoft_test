import React, {
  useEffect,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { TRootState } from '../../redux/reducers';
import { loadPosts } from '../../redux/actions/post';
import Post from '../../components/Post';
import Content from '../../components/common/Content';
import { TPost } from '../../models/post';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, isLoadPostPending } = useSelector((state: TRootState) => state.post);
  const { searchValue } = useSelector((state: TRootState) => state.filter);

  const filteredPostsByeSearch: TPost[] | undefined = useMemo(() => {
    const filteredPosts = posts?.filter(({ title }) => title
      .toLowerCase()
      .includes(searchValue
        .toLowerCase()));
    return filteredPosts;
  }, [posts, searchValue]);

  useEffect(() => {
    if (!isLoadPostPending && typeof posts === 'undefined') dispatch(loadPosts());
  }, [dispatch, isLoadPostPending, posts]);

  return (
    <Content>
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
        : filteredPostsByeSearch?.map((post) => (
          <Post
            postId={post.id}
            key={post.id}
            title={post.title}
            text={post.body}
          />
        ))}
    </Content>
  );
};
