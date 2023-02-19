import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { RequireAuth } from "./RequireAuth";
import { ApplicationPage, LoginPage } from "@pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/application"
        element={
          <RequireAuth>
            <ApplicationPage />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
