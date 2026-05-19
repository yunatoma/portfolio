"use client";

import Image from "next/image";
import { useRef } from "react";
import type { SVGProps } from "react";

type Thumbnail = {
  src: string;
  alt: string;
};

type ProjectThumbnailCarouselProps = {
  thumbnails: Thumbnail[];
  sizes?: string;
  imageClassName?: string;
};

function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16.5 20L7.5 12l9-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 4l9 8-9 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

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
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-pink-200 bg-white/90 text-pink-500 shadow-sm backdrop-blur-sm transition hover:bg-pink-50"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="次のサムネイル"
            onClick={() => scroll("next")}
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-pink-200 bg-white/90 text-pink-500 shadow-sm backdrop-blur-sm transition hover:bg-pink-50"
          >
            <ChevronRightIcon className="h-5 w-5" />
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
