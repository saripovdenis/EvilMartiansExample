import React, { FC } from "react";

import { PageLayout } from "@shared/components";
import { LoginForm } from "@features/LoginForm";

import styles from "./LoginPage.module.scss";

export const LoginPage: FC = () => (
  <PageLayout className={styles.container}>
    <LoginForm />
  </PageLayout>
);

export default LoginPage;
