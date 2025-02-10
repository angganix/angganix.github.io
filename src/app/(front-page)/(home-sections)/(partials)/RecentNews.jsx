"use client";
import useRecentPost from '@/hooks/useRecentPost';
import dayjs from 'dayjs';
import Error from 'next/error';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiOutlineClockCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';

const RecentNews = () => {
    const { data: result, isLoading, error } = useRecentPost(`https://api-berita-indonesia.vercel.app/cnbc/tech/`);

    if (error) {
        return (
            <div className="flex justify-center items-center flex-col gap-2">
                <h1>Terjadi Error</h1>
                <Error />
            </div>
        )
    }

    return (
        <>
            {!result?.data?.posts?.length ? (
                <>
                    {isLoading ? (
                        <span className="flex justify-center items-center gap-x-1">
                            <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                            <span>Memuat Artikel</span>
                        </span>
                    ) : (
                        <div className="flex justify-center items-center flex-col gap-2">
                            <h4>Tidak ada berita terbaru</h4>
                        </div>
                    )}
                </>
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
                                    <time>{dayjs(post?.pubDate).format("(dddd), DD MMM YYYY - HH:mm")}</time>
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
        </>
    )
}

export default RecentNews