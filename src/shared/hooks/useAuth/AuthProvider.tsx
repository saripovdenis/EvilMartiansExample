import React, { FC, createContext, ReactNode, useState } from "react";

import { authProvider } from "@shared/api/auth/auth";
import { Credentials } from "@entities/auth";

type AuthContext = {
  isAuth: boolean;
  signIn: (credentials: Credentials) => Promise<null>;
};

export const AuthContext = createContext<AuthContext>({
  isAuth: false,
  signIn: () => Promise.resolve(null),
});

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const signIn = (credentials: Credentials) =>
    authProvider.signIn(() => {
      setIsAuth(true);
    });

  return (
    <AuthContext.Provider value={{ isAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
