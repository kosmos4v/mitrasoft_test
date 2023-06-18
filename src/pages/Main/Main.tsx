import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../../redux/reducers';
import { loadPosts } from '../../redux/actions/post';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: TRootState) => state.post);
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
  console.log(posts);
  return (
    <div>
      Main
    </div>
  );
};
