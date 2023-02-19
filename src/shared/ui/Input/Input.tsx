import React, { FC } from "react";

import styles from "./Input.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = (props) => {
  return (
    <div className={styles.root}>
      <input {...props} className={styles.input} />
    </div>
  );
};
