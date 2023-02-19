import React, { ReactNode, FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../shared/hooks/useAuth";

type Props = {
  children: ReactNode;
};

export const RequireAuth: FC<Props> = ({ children }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
