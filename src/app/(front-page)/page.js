import React from "react";
import Hero from "./(home-sections)/hero";
import TechStack from "./(home-sections)/tech-stack";
import LatestPost from "./(home-sections)/latest-post";

export const metadata = {
  title: `Home - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const Home = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <LatestPost />
    </>
  );
};

export default Home;
