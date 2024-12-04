import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';

const Header = memo(() => {
  return (
    <div className={clsx(style.container)}>
     Bright New Idea!
    </div>
  );
});

export default Header;