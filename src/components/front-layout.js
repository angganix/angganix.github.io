import React from "react";
import TopNav from "./top-nav";

const FrontLayout = ({ pageTitle = "Blog", children }) => {
  return (
    <div id="front-wrapper">
      <TopNav />
      <div id="content">
        <header className="flex justify-between items-center">
          <h1>{pageTitle}</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default FrontLayout;
