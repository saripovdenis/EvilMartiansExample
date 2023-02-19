import React, { lazy, Suspense } from "react";

const LoadingPage = lazy(() => import("./LoginPage"));

export const LoginPageLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LoadingPage />
  </Suspense>
);
