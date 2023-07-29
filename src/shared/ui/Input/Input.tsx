import React, { forwardRef, ComponentProps, useId } from "react";

import { DryInput } from "./DryInput";

import styles from "./Input.module.scss";

type Props = ComponentProps<typeof DryInput> & {
  label?: string;
  hasError?: boolean;
  errorText?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, hasError = false, errorText, id, ...rest }, ref) => {
    const generatedId = useId();

    return (
      <div className={styles.root}>
        <label htmlFor={id ?? generatedId} className={styles.label}>
          {label}
        </label>
        <DryInput {...rest} id={id ?? generatedId} ref={ref} aria-invalid={hasError} aria-errormessage={errorText} />
        {hasError && (
          <span role="alert" className={styles.errorText}>
            {errorText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
