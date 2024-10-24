import React from "react";
import FrontLayout from "../components/front-layout";

const HomeIndex = () => {
  return (
    <FrontLayout pageTitle="Home">
      <h4>Home Page</h4>
    </FrontLayout>
  );
};

export const Head = () => (
  <>
    <title>Home</title>
    <meta name="description" content="Sedikit bekerja, banyak minta nya" />
  </>
);

export default HomeIndex;
