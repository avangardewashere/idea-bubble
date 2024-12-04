import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';
import AddForm from '@/components/AddForm';

const AddTopic = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <AddForm/>
    </div>
  );
});

export default AddTopic;