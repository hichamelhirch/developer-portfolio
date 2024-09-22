"use client"; // Indique que c'est un composant client
import { useEffect, useState } from 'react';
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

const imagesArray = [
  "/images_blogs/image1.jpg",
  "/images_blogs/image2.png",
  "/images_blogs/image3.png",
  "/images_blogs/image4.png",
  "/images_blogs/image5.png",
  "/images_blogs/image6.png",
  "/images_blogs/image7.jpg",
  "/images_blogs/image8.jpg",
  "/images_blogs/image9.jpg",
  "/images_blogs/image10.jpg",
  "/images_blogs/image11.png",
  "/images_blogs/image12.jpg",
  "/images_blogs/image13.jpg",
  "/images_blogs/image14.png",
  "/images_blogs/image15.jpg",
  "/images_blogs/image16.png",
  "/images_blogs/image17.jpg",
];


function BlogCard({ blog }) {
  
  // Utilisez imagesArray pour une image aléatoire
  const imageUrl = imagesArray[Math.floor(Math.random() * imagesArray.length)];

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
          unoptimized={true}
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.reading_time_minutes} Min Read`}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
