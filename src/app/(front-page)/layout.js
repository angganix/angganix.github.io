import TopNav from "@/components/layouts/TopNav";
import React from "react";

const FrontLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default FrontLayout;
