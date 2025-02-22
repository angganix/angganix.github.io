"use client";

import Image from 'next/image';
import { useState } from 'react';

const ViewPortofolio = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDetail = () => {
    if (item?.link) {
      window.open(item?.link, "_blank");
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div>
      <div
        className={`relative flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer`}
        onClick={openDetail}
      >
        <div className="relative w-full min-h-52">
          <Image
            alt={item?.title}
            src={item?.image}
            fill
            className="object-cover object-top"
          />
        </div>
        <span className="p-1 px-2 rounded-lg bg-lime-700 text-white text-xs self-start absolute top-0 right-0 m-1">
          {item?.category}
        </span>
        <div className="p-4 flex flex-col gap-2">
          <h5 className="font-semibold text-gray-800 text-sm">
            {item.title}
          </h5>
          <ul className="flex gap-1 flex-wrap text-xs">
            {item?.stack?.map((tech, index) => (
              <span
                key={index}
                className="p-0.5 px-1.5 rounded-lg bg-gray-800 text-white"
              >
                {tech}
              </span>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-transparent rounded-lg shadow-xl mx-4 max-w-2xl w-full max-h-[90vh] overflow-y-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="space-y-4 relative h-80">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-gray-300 transition-colors absolute -top-4 right-0 m-2 z-10 text-lg"
              >
                ✕
              </button>
              <Image
                alt={item?.title}
                src={item?.image}
                fill
                className="object-fill rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPortofolio;