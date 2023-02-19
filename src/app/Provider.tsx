import React, { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../shared/hooks/useAuth";

type Props = {
  children: ReactNode;
};

export const Provider: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
  );
};
