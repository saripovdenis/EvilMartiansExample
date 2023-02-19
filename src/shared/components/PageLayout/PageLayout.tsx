import React, { FC, ReactNode } from "react";
import cx from "classnames";

import styles from "./PageLayout.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

export const PageLayout: FC<Props> = ({ children, className }) => {
  return <div className={cx(styles.root, className)}>{children}</div>;
};
