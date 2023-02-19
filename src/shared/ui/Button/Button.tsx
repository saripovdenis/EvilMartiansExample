import React, { FC } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
};

export const Button: FC<Props> = ({ text, className, ...rest }) => {
  return (
    <button type="button" className={cx(styles.root, className)} {...rest}>
      {text}
    </button>
  );
};
