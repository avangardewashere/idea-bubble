import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';

const AddTopic = memo(() => {
  return (
    <div className={clsx(style.container)}>
      this is the container
    </div>
  );
});

export default AddTopic;