import React, { lazy, Suspense } from "react";

const ApplicationPage = lazy(() => import("./ApplicationPage"));

export const ApplicationPageLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ApplicationPage />
  </Suspense>
);
