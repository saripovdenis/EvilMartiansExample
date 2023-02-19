import React, { forwardRef } from "react";

import styles from "./DryInput.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const DryInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  console.log(props);
  return (
    <div className={styles.root}>
      <input {...props} className={styles.input} ref={ref} />
    </div>
  );
});

DryInput.displayName = "DryInput";

export { DryInput };
