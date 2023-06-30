import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { TRootState } from '../../redux/reducers';
import { loadPosts } from '../../redux/actions/post';
import Post from '../../components/Post';
import Content from '../../components/common/Content';
import Pagination from '../../components/common/Pagination';
import { TPost } from '../../models/post';

export const Main: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { posts, isLoadPostPending } = useSelector((state: TRootState) => state.post);
  const { searchValue, ascendingSort } = useSelector((state: TRootState) => state.filter);

  const filteredPostsByeSearch: TPost[] | undefined = useMemo(() => {
    setCurrentPage(1);
    const filteredPosts = posts?.filter(({ title }) => title
      .toLowerCase()
      .includes(searchValue
        .toLowerCase()));
    return filteredPosts;
  }, [posts, searchValue]);

  const sortedPosts: TPost[] | undefined = useMemo(() => {
    const filteredPosts = filteredPostsByeSearch?.concat();
    return ascendingSort
      ? filteredPosts?.sort((min, max) => min.title.localeCompare(max.title))
      : filteredPosts?.sort((min, max) => max.title.localeCompare(min.title));
  }, [filteredPostsByeSearch, ascendingSort]);

  const paginatedPosts: TPost[] | undefined = useMemo(() => {
    const filteredPost = sortedPosts?.slice(
      ((currentPage - 1) * pageSize),
      ((pageSize * currentPage)),
    );
    return filteredPost;
  }, [sortedPosts, currentPage, pageSize]);

  const handleSelectPage = useCallback((page: number) => () => {
    setCurrentPage(page);
  }, [setCurrentPage]);

  useEffect(() => {
    if (!isLoadPostPending && typeof posts === 'undefined') dispatch(loadPosts());
  }, [dispatch, isLoadPostPending, posts]);

  return (
    <Content>
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
          : paginatedPosts?.map((post) => (
            <Post
              postId={post.id}
              key={post.id}
              title={post.title}
              text={post.body}
            />
          ))}
      </div>
      <Pagination
        onSelect={handleSelectPage}
        pageSize={pageSize}
        currentPage={currentPage}
        pages={sortedPosts?.length}
      />
    </Content>

  );
};
