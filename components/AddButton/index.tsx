 
import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import Link from "next/link";
 
const AddButton = memo(() => {
  

  return (
    <Link href={"/addTopic"} className={clsx(style.container)}>
      Add New Idea
    </Link>
  );
});

export default AddButton;
