import React, { FC } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

type Props = {
  text: string;
  className?: string;
};

export const Button: FC<Props> = ({ text, className }) => {
  return (
    <button type="button" className={cx(styles.root, className)}>
      {text}
    </button>
  );
};
