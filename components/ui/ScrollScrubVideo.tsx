'use client';

import { useEffect, useRef, useState } from 'react';
import type { MotionValue } from 'framer-motion';
import { useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

type ScrollScrubVideoProps = {
  /** Public path to the MP4 (H.264) scrub video, e.g. "/media/myco-pellet.mp4". */
  src: string;
  /** Optional VP9/WebM source, tried before the MP4 for smaller files. */
  webmSrc?: string;
  /** Poster frame path (public), shown until the first frames are decoded. */
  poster?: string;
  className?: string;
  /** Aspect ratio of the frame — defaults to square to match the schematic. */
  ratio?: string;
  /** Small mono label pinned in the corner. */
  label?: string;
  /**
   * Rendered instead of the video when the file is missing / fails to load, or
   * when the visitor prefers reduced motion. Receives the same scroll progress
   * MotionValue (0→1) so the fallback can animate with the identical gesture.
   */
  fallback?: (progress: MotionValue<number>) => React.ReactNode;
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/**
 * A video whose playhead is driven by scroll position rather than time.
 *
 * As the frame transits the viewport, scroll progress (0→1) is mapped onto the
 * video's currentTime, so scrolling **down plays forward** and scrolling **up
 * plays it in reverse**. A requestAnimationFrame loop eases the playhead toward
 * the scroll target for buttery scrubbing (and to avoid flooding the decoder
 * with seeks). Ideal for a Blender turntable rendered to an all-keyframe MP4.
 */
export function ScrollScrubVideo({
  src,
  webmSrc,
  poster,
  className,
  ratio = '1 / 1',
  label = 'Myco-Pellet · 3D turntable',
  fallback,
}: ScrollScrubVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef(0);
  const rafId = useRef<number | null>(null);

  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  // 0 when the frame's top hits the viewport bottom, 1 when its bottom hits the top.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Translate scroll progress into a target playhead; the rAF loop chases it.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const video = videoRef.current;
    if (!video || Number.isNaN(video.duration)) return;
    targetTime.current = clamp(v, 0, 1) * video.duration;
  });

  useEffect(() => {
    if (reduce || failed || !ready) return;
    const video = videoRef.current;
    if (!video) return;

    // Seed the playhead from the current scroll position on mount.
    if (!Number.isNaN(video.duration)) {
      targetTime.current = clamp(scrollYProgress.get(), 0, 1) * video.duration;
    }

    const tick = () => {
      const cur = video.currentTime;
      const diff = targetTime.current - cur;
      // Ease toward the target; hold still once within ~one frame to stop churning seeks.
      if (Math.abs(diff) > 1 / 60) {
        video.currentTime = cur + diff * 0.16;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
    };
  }, [reduce, failed, ready, scrollYProgress]);

  // Detect whether the video actually loads. With <source> children the `error`
  // event fires on the <source> (not the <video>) and doesn't bubble, so it's
  // unreliable through React. Instead poll the media load state: once metadata
  // arrives we're ready; once the browser exhausts every source it flips to
  // NETWORK_NO_SOURCE and we fall back to the schematic.
  useEffect(() => {
    if (reduce) return;
    let timer: ReturnType<typeof setTimeout>;
    let tries = 0;
    const check = () => {
      const video = videoRef.current;
      if (!video) return;
      if (video.readyState >= 1 /* HAVE_METADATA */ && !Number.isNaN(video.duration)) {
        setReady(true);
        return;
      }
      if (video.networkState === video.NETWORK_NO_SOURCE || video.error) {
        setFailed(true);
        return;
      }
      if (tries++ < 100) timer = setTimeout(check, 120); // give up polling after ~12s
    };
    check();
    return () => clearTimeout(timer);
  }, [reduce]);

  const showVideo = !failed && !reduce;

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-hairline bg-offwhite shadow-card',
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          poster={poster ? asset(poster) : undefined}
          muted
          playsInline
          preload="auto"
          // No autoplay — the scroll gesture is the transport.
          onLoadedMetadata={() => setReady(true)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          {webmSrc && <source src={asset(webmSrc)} type="video/webm" />}
          <source src={asset(src)} type="video/mp4" />
        </video>
      ) : (
        fallback?.(scrollYProgress)
      )}

      {label && (
        <div className="pointer-events-none absolute left-4 top-4 z-10 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
          {label}
        </div>
      )}

      {/* Scroll affordance — shown whenever a scroll gesture animates the frame
          (real video or the schematic fallback), hidden under reduced motion. */}
      {!reduce && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-hairline bg-surface/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted backdrop-blur">
          Scroll to rotate ↑ ↓
        </div>
      )}
    </div>
  );
}
