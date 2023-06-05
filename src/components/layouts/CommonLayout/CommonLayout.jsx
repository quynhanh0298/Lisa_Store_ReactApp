import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const CommonLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main-content">{children}</div>

      <Footer />
    </div>
  );
};
