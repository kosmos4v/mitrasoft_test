import React from 'react';
import classnames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Header.scss';

export type THeaderProps = {
  className?: string,
};

export const Header: React.FC<THeaderProps> = ({
  className,
}) => {
  const { pathname } = useLocation();
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
    </div>
  );
};
