import React, { FC, ReactNode } from "react";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "@shared/hooks/useAuth";

type Props = {
  children: ReactNode;
};

export const Provider: FC<Props> = ({ children }) => {
  return (
    <HashRouter>
      <AuthProvider>{children}</AuthProvider>
    </HashRouter>
  );
};
