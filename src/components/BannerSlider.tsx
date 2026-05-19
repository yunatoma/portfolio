"use client";

import Image from "next/image";
import { useRef } from "react";
import type { SVGProps } from "react";

type BannerImage = {
  src: string;
  alt: string;
};

type BannerSliderProps = {
  images: BannerImage[];
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

export function BannerSlider({ images }: BannerSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (images.length === 0) return null;

  const scroll = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction === "next" ? scroller.clientWidth * 0.85 : -scroller.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-5 w-full max-w-full overflow-hidden border-y border-pink-100 py-3">
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="前のバナーを見る"
            onClick={() => scroll("prev")}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-pink-200 bg-white/95 text-pink-500 shadow-sm backdrop-blur-sm transition hover:bg-pink-50"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="次のバナーを見る"
            onClick={() => scroll("next")}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-pink-200 bg-white/95 text-pink-500 shadow-sm backdrop-blur-sm transition hover:bg-pink-50"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        ref={scrollerRef}
        className="flex max-w-full snap-x gap-3 overflow-x-auto px-10 pb-1 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image) => (
          <div
            key={image.src}
            className="relative h-24 w-[78%] flex-none snap-start overflow-hidden rounded-lg border border-pink-100 bg-white shadow-sm sm:h-28 sm:w-[calc((100%_-_0.75rem)_/_2)] lg:h-28 lg:w-[calc((100%_-_2.25rem)_/_4)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 220px"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
