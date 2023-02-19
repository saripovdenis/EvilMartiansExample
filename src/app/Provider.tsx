import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Provider: FC<Props> = ({ children }) => {
  return <>{children}</>;
};
