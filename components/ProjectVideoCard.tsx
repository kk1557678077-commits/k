"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectVideoCardProps = {
  title: string;
  description: string;
  videoSrc?: string;
  posterSrc: string;
};

export function ProjectVideoCard({ title, description, videoSrc, posterSrc }: ProjectVideoCardProps) {
  const [showFallback, setShowFallback] = useState(!videoSrc);

  return (
    <article className="overflow-hidden rounded-lg border border-[#e6d8b8] bg-white shadow-sm">
      <div className="relative aspect-video bg-[#111c2e]">
        {videoSrc && !showFallback ? (
          <video
            controls
            preload="metadata"
            poster={posterSrc}
            className="h-full w-full bg-black object-cover"
            onError={() => setShowFallback(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image src={posterSrc} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
      </div>
    </article>
  );
}
