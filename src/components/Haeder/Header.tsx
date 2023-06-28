import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import {
  Dropdown,
  InputGroup,
  Form,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { filterPostBySerch } from '../../redux/actions/filter';

import './Header.scss';
import { TRootState } from '../../redux/reducers';

export type THeaderProps = {
  className?: string,
};

export const Header: React.FC<THeaderProps> = ({
  className,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const handleChangeSerchValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.replace(/^\s+|\s+(?=\s)/g, ''));
  }, [setSearchValue]);

  useEffect(() => {
    dispatch(filterPostBySerch(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className={classnames('header', className)}>
      <Dropdown>
        <Dropdown.Toggle variant="ghost" id="dropdown-basic">
          <img className="header__dropdown__user-photo" src="/images/avatar.jpg" alt="user_photo" />
          Валерий
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item disabled={pathname === '/'} href="/">Список постов</Dropdown.Item>
          <Dropdown.Item disabled={pathname === '/author'} href="/author">Обо мне</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <InputGroup className="m-1">
        <Form.Control
          placeholder="Найти пост"
          aria-label="serch"
          onChange={handleChangeSerchValue}
          value={searchValue}
        />
      </InputGroup>
    </div>
  );
};
