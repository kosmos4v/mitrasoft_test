import React from 'react';
import classnames from 'classnames';

import './Header.scss';
import BurgerButton from '../Button';

export type THeaderProps = {
  className?: string,
};

export const Header: React.FC<THeaderProps> = ({
  className,
}) => (
  <div className={classnames('header', className)}>
    <BurgerButton
      onClick={() => {}}
    />
  </div>
);
