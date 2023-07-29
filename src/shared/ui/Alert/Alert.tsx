import React from "react";

import styles from "./Alert.module.scss";

type Props = {
  text: string;
};

export function Alert(props: Props) {
  const { text } = props;

  return (
    <div role="alert" className={styles.root}>
      <span>{text}</span>
    </div>
  );
}
