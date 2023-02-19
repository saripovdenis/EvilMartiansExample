import React, { FC, FormEvent } from "react";

import { Input, Button } from "@shared/ui";

import styles from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  const handleSubmitFn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmitFn}>
        <div className={styles.topContainer}>
          <h1 className={styles.header}>Sign in</h1>
          <div className={styles.inputContainer}>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </div>
        </div>
        <Button text="login" className={styles.button} />
      </form>
    </div>
  );
};
