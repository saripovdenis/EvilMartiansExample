import React, { FC } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";
import { Loader } from "@shared/ui/Button/Loader";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
};

export const Button: FC<Props> = ({
  text,
  className,
  loading = false,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={cx(styles.root, className)}
      disabled={loading || disabled}
      {...rest}
    >
      <span
        className={cx({
          [styles.hidden]: loading,
        })}
      >
        {text}
      </span>
      {loading && <Loader className={styles.loader} />}
    </button>
  );
};
