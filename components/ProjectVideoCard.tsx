"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ProjectVideoCardProps = {
  title: string;
  description: string;
  videoSrc?: string;
  posterSrc: string;
  className?: string;
};

// 视频地址失效时（例如 404）直接换成实景图，不保留无法播放的播放器。
// 用 video 的 src 属性而不是 <source> 子元素，404 时 video 本身才会触发 error 事件。
export function ProjectVideoCard({ title, description, videoSrc, posterSrc, className = "" }: ProjectVideoCardProps) {
  const [showFallback, setShowFallback] = useState(!videoSrc);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 服务端渲染出的 video 可能在 React 接管前就已加载失败，错过 onError，这里补查一次
  useEffect(() => {
    const video = videoRef.current;
    if (video && (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE)) {
      setShowFallback(true);
    }
  }, []);

  return (
    <figure className={`group relative isolate min-h-[18rem] overflow-hidden rounded-2xl bg-ink ${className}`}>
      {videoSrc && !showFallback ? (
        <video
          ref={videoRef}
          controls
          preload="metadata"
          poster={posterSrc}
          src={videoSrc}
          className="absolute inset-0 h-full w-full bg-black object-cover"
          onError={() => setShowFallback(true)}
        />
      ) : (
        <>
          <Image
            src={posterSrc}
            alt={title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,42,0)_35%,rgba(13,26,42,0.88)_100%)]" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">{title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/75">{description}</p>
          </figcaption>
        </>
      )}
    </figure>
  );
}
