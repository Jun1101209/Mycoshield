# Myco-Pellet 3D turntable video

The "Anatomy of a Pellet" panel (`components/sections/PelletShowcase.tsx`) shows a
**scroll-scrubbed** render of the pellet: scrolling **down** rotates it forward,
scrolling **up** rewinds it. It's a video, not a live 3D scene, so the page stays
light and never drops frames.

## What's here

| File                       | Status     | What it is                                              |
| -------------------------- | ---------- | ------------------------------------------------------- |
| `myco-pellet.mp4`          | **shipped**| H.264, **all-keyframe** turntable, 1080×1350 (4:5), 3.5 MB |
| `myco-pellet-poster.jpg`   | **shipped**| First frame, shown while the video decodes              |

`myco-pellet.mp4` is H.264/MP4, which every current browser (Chrome, Safari,
Firefox, Edge) decodes — so no WebM copy is needed. The frame is displayed at its
native 4:5 ratio (`ratio="4 / 5"` on `<ScrollScrubVideo>`), edge-to-edge, no crop.

If the video ever fails to load (or the visitor prefers reduced motion), the panel
falls back to the cross-section schematic, which also tilts with the same scroll
gesture — so the interaction degrades gracefully.

## Replacing the video (re-render)

1. **In Blender**, animate a full turn (parent the pellet to an Empty, keyframe its
   Z-rotation `0° → 360°`, set Graph Editor interpolation to **Linear** so scroll
   maps evenly). Render **square or 4:5** (match the `ratio` prop), even lighting.
2. **Export** — the one detail that matters for smooth scrubbing is that **every
   frame is a keyframe**. From a source render, re-encode with ffmpeg:

   ```bash
   # All-keyframe H.264 MP4 (this is exactly how the shipped file was made)
   ffmpeg -i your-render.mov -an \
     -c:v libx264 -pix_fmt yuv420p -profile:v high -preset slow -crf 26 \
     -g 1 -x264-params "keyint=1:min-keyint=1:scenecut=0" \
     -movflags +faststart myco-pellet.mp4

   # Poster = first frame
   ffmpeg -i myco-pellet.mp4 -frames:v 1 -q:v 3 myco-pellet-poster.jpg
   ```

   Or straight from Blender: Output → *FFmpeg Video, MPEG-4, H.264*, and set
   **Keyframe Interval / GOP Size = 1**.
3. Keep the **exact filename** `myco-pellet.mp4` (+ `myco-pellet-poster.jpg`) and
   drop them here. Verify it's all-keyframe:

   ```bash
   # keyframe count should equal total frame count
   ffmpeg -i myco-pellet.mp4 -an -vf "select=eq(pict_type\,I)" -f null -
   ```

4. If you change the render's aspect ratio, update `ratio="4 / 5"` in
   `components/sections/PelletShowcase.tsx` to match.

## Tuning (optional, in `components/sections/PelletShowcase.tsx`)

- **Fit:** the video is `object-cover`. With `ratio` matching the render, that's
  edge-to-edge with no crop. For a model that must never be cropped at any ratio,
  switch the class to `object-contain` in `ScrollScrubVideo.tsx`.
- **Scrub feel:** the easing factor (`0.16`) in `ScrollScrubVideo.tsx` controls how
  tightly the playhead follows scroll — higher snaps faster, lower glides more.
- **File size:** raise `-crf` (26 → 30) or downscale for a smaller file;
  all-keyframe video is inherently larger than normal video (that's expected).
