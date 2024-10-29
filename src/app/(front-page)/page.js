import React from "react";
import Hero from "./(home-sections)/hero";
import TechStack from "./(home-sections)/tech-stack";

export const metadata = {
  title: `Home - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const Home = () => {
  return (
    <>
      <Hero />
      <TechStack />
    </>
  );
};

export default Home;
