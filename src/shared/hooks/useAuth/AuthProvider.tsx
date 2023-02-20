import React, { FC, createContext, ReactNode, useState } from "react";

import { authProvider } from "@shared/api/auth/auth";
import { Credentials } from "@entities/auth";

type AuthContext = {
  isAuth: boolean;
  signIn: (credentials: Credentials, callback: VoidFunction) => void;
};

export const AuthContext = createContext<AuthContext>({
  isAuth: false,
  signIn: () => null,
});

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const signIn = (credentials: Credentials, callback: VoidFunction) =>
    authProvider.signIn(() => {
      console.log(credentials);
      setIsAuth(true);
      callback();
    });

  return (
    <AuthContext.Provider value={{ isAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
