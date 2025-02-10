import PageFooter from "@/components/layouts/PageFooter";
import TopNav from "@/components/layouts/TopNav";
import React from "react";

const FrontLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <main className="min-h-screen">{children}</main>
      <PageFooter />
    </div>
  );
};

export default FrontLayout;
