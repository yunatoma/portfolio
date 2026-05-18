"use client";

import Image from "next/image";
import { useRef } from "react";

type Thumbnail = {
  src: string;
  alt: string;
};

type ProjectThumbnailCarouselProps = {
  thumbnails: Thumbnail[];
  sizes?: string;
  imageClassName?: string;
};

export const ProjectThumbnailCarousel = ({
  thumbnails,
  sizes = "(min-width: 768px) 420px, 86vw",
  imageClassName = "object-cover",
}: ProjectThumbnailCarouselProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const distance = scroller.clientWidth * 0.9;
    scroller.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  if (thumbnails.length === 0) return null;

  return (
    <div className="relative -mx-1 mb-5">
      {thumbnails.length > 1 && (
        <>
          <button
            type="button"
            aria-label="前のサムネイル"
            onClick={() => scroll("prev")}
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-pink-200 bg-white/90 text-lg font-bold text-pink-500 shadow-sm backdrop-blur-sm transition hover:bg-pink-50"
          >
            &lt;
          </button>
          <button
            type="button"
            aria-label="次のサムネイル"
            onClick={() => scroll("next")}
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-pink-200 bg-white/90 text-lg font-bold text-pink-500 shadow-sm backdrop-blur-sm transition hover:bg-pink-50"
          >
            &gt;
          </button>
        </>
      )}

      <div
        ref={scrollerRef}
        className="flex snap-x gap-3 overflow-x-auto px-1 pb-2"
      >
        {thumbnails.map((thumbnail) => (
          <div
            key={thumbnail.src}
            className="relative aspect-video w-[86%] flex-none snap-start overflow-hidden rounded-xl border border-pink-100 bg-pink-50 sm:w-[72%] md:w-[88%]"
          >
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              fill
              sizes={sizes}
              className={imageClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
