import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';

const AddButton = memo(() => {
  return (
    <div className={clsx(style.container)}>
      Add New Idea
    </div>
  );
});

export default AddButton;