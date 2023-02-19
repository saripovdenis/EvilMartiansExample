import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Input, Button } from "@shared/ui";

import styles from "./LoginForm.module.scss";

type FormData = {
  email: string;
  password: string;
};

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitFn = (data: FormData) => {
    alert(data);
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(handleSubmitFn)}>
        <div className={styles.topContainer}>
          <h1 className={styles.header}>Sign in</h1>
          <div className={styles.inputContainer}>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Incorrect email",
                },
              })}
              label="Email"
              hasError={Boolean(errors.email)}
              errorText={errors.email?.message}
              placeholder="Email"
            />
            <Input
              {...register("password", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters",
                },
                pattern: {
                  value: /\d/,
                  message:
                    "The string must contain at least 1 numeric character",
                },
              })}
              type="password"
              label="Password"
              hasError={Boolean(errors.password)}
              errorText={errors.password?.message}
              placeholder="Password"
            />
          </div>
        </div>
        <Button
          disabled={!isDirty}
          type="submit"
          text="login"
          className={styles.button}
        />
      </form>
    </div>
  );
};
