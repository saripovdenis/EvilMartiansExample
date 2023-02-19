import React, { FC } from "react";
import { Provider } from "./Provider";
import "./styles/normalize.scss";
import "./styles/fonts.scss";

import { Router } from "./Router";

export const Application: FC = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};
