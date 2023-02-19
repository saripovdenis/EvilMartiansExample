import React, { FC } from "react";

import { Input, Button } from "@shared/ui";

import styles from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <h1 className={styles.header}>Login</h1>
        <Input />
        <Input />
        <Button text="login" />
      </form>
    </div>
  );
};
