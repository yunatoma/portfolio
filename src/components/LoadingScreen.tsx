"use client";

import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const hideTimer = setTimeout(() => setHidden(true), 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #fbcfe8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating blobs */}
      <div className="animate-float absolute top-16 right-8 w-72 h-72 rounded-full bg-pink-100 opacity-50 blur-3xl pointer-events-none" />
      <div className="animate-float-reverse absolute bottom-16 left-8 w-56 h-56 rounded-full bg-rose-100 opacity-40 blur-2xl pointer-events-none" />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Icon */}
        <div className="relative w-24 h-24">
          <div className="animate-rotate-slow absolute inset-0 rounded-full border-2 border-dashed border-pink-200" />
          <div className="animate-float absolute inset-3 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl">🌸</span>
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <p className="mb-1 text-[10px] font-bold tracking-widest text-pink-300 uppercase">
            Portfolio
          </p>
          <p className="text-xl font-bold text-gray-700">青木 由奈</p>
        </div>

        {/* Bouncing dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-pink-400"
              style={{
                animation: `bounce-dot 1.2s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
