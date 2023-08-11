import { Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages";

export const Routing = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  );
};
