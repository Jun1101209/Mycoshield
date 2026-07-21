'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

/**
 * The Myco-Pellet 3D turntable, played back as a smoothly looping muted video
 * rather than a scroll-scrubbed one. Scroll scrubbing seeks the decoder on every
 * wheel tick, which is what made the old version stutter; a plain forward loop
 * decodes at a steady rate and stays smooth. The clip is only fetched (preload
 * "none") and played once it scrolls into view, and paused when it leaves.
 *
 * Fallback chain: reduced motion or a video the browser can't decode drops to
 * the static 3D poster frame; only a missing poster falls through to the drawn
 * schematic.
 */
export function PelletModel({
  src = '/media/myco-pellet.mp4',
  poster = '/media/myco-pellet-poster.jpg',
  ratio = '4 / 5',
  label = 'Myco-Pellet · 3D model',
  className,
  fallback,
}: {
  src?: string;
  poster?: string;
  ratio?: string;
  label?: string;
  className?: string;
  fallback?: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const showVideo = !reduce && !videoFailed;

  // Play only while actually on screen; pause otherwise. Slowing playback a
  // touch means the decoder handles fewer frames per second, which keeps a
  // high-bitrate clip smooth without re-encoding it. play() on a muted video
  // also kicks off the fetch, so preload can stay "none" until then.
  useEffect(() => {
    if (!showVideo) return;
    const el = wrapRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    video.playbackRate = 0.7;
    const play = () => {
      video.playbackRate = 0.7;
      video.play?.().catch(() => {});
    };
    if (typeof IntersectionObserver === 'undefined') {
      play();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        if (e.isIntersecting) play();
        else video.pause?.();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showVideo]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-hairline bg-offwhite shadow-card',
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 bg-grid-fine opacity-40" aria-hidden />

      {showVideo ? (
        <video
          ref={videoRef}
          poster={asset(poster)}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: 'translateZ(0)' }}
        >
          <source src={asset(src)} type="video/mp4" />
        </video>
      ) : posterFailed ? (
        fallback
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(poster)}
          alt="Myco-Pellet 3D model cross-section"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setPosterFailed(true)}
        />
      )}

      {label && (
        <div className="pointer-events-none absolute left-4 top-4 z-10 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
          {label}
        </div>
      )}
    </div>
  );
}
