import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "containers/HomePage";
import { CommonLayout } from "components/layouts/CommonLayout";
function App() {
  return (
    <CommonLayout>
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </CommonLayout>
  );
}

export default App;
