import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";

const IdeaCard = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.text)}>
        <b>Topic</b>
        <span>Details</span>
      </div>
      <div className={clsx(style.actions)}>
        <div className={clsx(style.add)}>Copy</div>
        <div className={clsx(style.del)}>del</div>
      </div>
    </div>
  );
});

export default IdeaCard;
