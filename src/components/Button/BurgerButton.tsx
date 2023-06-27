import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import './BurgerButton.scss';

type TMobileButtonProps = {
  onClick: () => void,
  className?: string,
};

export const BurgerButton: React.FC <TMobileButtonProps> = ({
  onClick,
  className,
}) => {
  const [toggle, setToggle] = useState(true);
  const hadleClick = useCallback(() => {
    setToggle((switcher) => !switcher);
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [setToggle, onClick]);
  const classNames = [toggle ? 'burger__button__bar' : 'burger__button__bar__active', className];
  return (
    <button
      type="button"
      className={classnames('burger__button')}
      onClick={hadleClick}
    >
      <span className={classnames(...classNames)} />
    </button>
  );
};
