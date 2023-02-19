import React, { FC, createContext, ReactNode } from "react";

type AuthContext = {
  isAuth: boolean;
};

export const AuthContext = createContext<AuthContext>({ isAuth: false });

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => (
  <AuthContext.Provider value={{ isAuth: false }}>
    {children}
  </AuthContext.Provider>
);
