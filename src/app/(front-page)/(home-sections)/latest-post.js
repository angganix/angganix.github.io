import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const LatestPost = async () => {
  const data = await fetch(
    `https://api-berita-indonesia.vercel.app/cnbc/tech/`
  );
  const result = await data.json();
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
        {!result?.data?.posts?.length ? (
          <div className="flex justify-center items-center flex-col gap-2">
            <h4>Tidak ada berita terbaru</h4>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result?.data?.posts?.map((post, index) => (
              <Link
                href={post?.link}
                target="_blank"
                className="rounded-lg border border-gray-100 relative overflow-hidden flex flex-col gap-3 transform hover:-translate-y-1 transition-all duration-200 ease-linear hover:shadow-lg hover:shadow-gray-200/50"
                key={index}
              >
                <Image
                  alt={post?.title}
                  src={post?.thumbnail}
                  width={300}
                  height={200}
                  className="object-cover h-auto w-auto"
                />
                <div className="flex flex-col gap-2 p-4">
                  <span className="flex items-center gap-x-1 text-gray-700 text-xs italic">
                    <AiOutlineClockCircle size={14} />
                    <time>{dayjs().format("(dddd), DD MMM YYYY - HH:mm")}</time>
                  </span>
                  <h2 className="text-lg font-semibold line-clamp-2" title={post?.title}>
                    {post?.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: post?.description }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestPost;
