"use client";
import React, { useState, useEffect } from "react";

interface BackgroundImageProps {
  imageUrls: string[]; // Array of image URLs
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  intervalTime?: number; // Time interval in milliseconds
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrls,
  className,
  children,
  style,
  intervalTime = 5000, // Default interval of 5 seconds
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Set up interval for changing background image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [imageUrls, intervalTime]);

  const currentImageUrl = imageUrls[currentImageIndex];

  return (
    <div
      className={`flex flex-col justify-center items-center bg-cover bg-center w-[800px] h-[500px] p-2 m-2 ${className}`}
      style={{
        backgroundImage: `url(${currentImageUrl})`,
        ...style,
      }}
    >
      <div className=" font-bold text-white  text-2xl">
        TRANSFORMING <span className=" text-yellow-300"> ORPHAN&apos;S</span>{" "}
        LIVES
      </div>
      {children}
    </div>
  );
};

export default BackgroundImage;
