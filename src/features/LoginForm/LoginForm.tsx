import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "@shared/ui";
import { hasDigit, email } from "@shared/utils/validation/regexp";

import styles from "./LoginForm.module.scss";
import { useAuth } from "@shared/hooks/useAuth";

type FormData = {
  email: string;
  password: string;
};

export const LoginForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

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
    setLoading(true);
    signIn(data, () => navigate("/application"));
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
                  value: email,
                  message: "Incorrect email",
                },
              })}
              autoComplete="email"
              label="Email"
              disabled={loading}
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
                  value: hasDigit,
                  message:
                    "The string must contain at least 1 numeric character",
                },
              })}
              disabled={loading}
              autoComplete="current-password"
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
          loading={loading}
          type="submit"
          text="login"
          className={styles.button}
        />
      </form>
    </div>
  );
};
