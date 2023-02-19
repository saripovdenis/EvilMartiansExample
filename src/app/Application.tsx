import React, { FC } from "react";
import { Provider } from "./Provider";
import "./styles/normalize.scss";

export const Application: FC = () => {
  return (
    <Provider>
      <button>text</button>
    </Provider>
  );
};
