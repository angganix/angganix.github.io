import React from "react";
import RecentNews from "./(partials)/RecentNews";

const LatestPost = async () => {
  return (
    <section
      id="tech-stack"
      className="px-4 lg:px-0 overflow-hidden py-16 bg-white"
    >
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="text-3xl font-medium mb-12 block text-center relative">
          <span>Artikel Terbaru</span>
          <span className="w-16 h-1.5 -bottom-4 absolute -translate-x-1/2 left-1/2 bg-lime-600 border block"></span>
        </h1>
        <RecentNews />
      </div>
    </section>
  );
};

export default LatestPost;
