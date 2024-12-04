import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";

const AddForm = memo(() => {
  return (
    <form className={clsx(style.container)}>
      <input type="text" placeholder="Enter Idea Title" />
      <input type="text" placeholder="Enter Idea Description" />

      <button>
        Submit Idea
      </button>
    </form>
  );
});

export default AddForm;
