import React from 'react';
import classnames from 'classnames';

import './Header.scss';

export type THeaderProps = {
  className?: string,
};

export const Header: React.FC<THeaderProps> = ({
  className,
}) => (
  <div className={classnames('header', className)}>
    Header
  </div>
);
