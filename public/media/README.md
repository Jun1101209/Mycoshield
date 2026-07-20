# Myco-Pellet 3D turntable video

The "Anatomy of a Pellet" panel (`components/sections/PelletShowcase.tsx`) shows a
**scroll-scrubbed** render of the pellet: scrolling **down** rotates it forward,
scrolling **up** rewinds it. It's a video, not a live 3D scene, so the page stays
light and never drops frames.

Drop your files here with these **exact names**:

| File                       | Required?  | What it is                                            |
| -------------------------- | ---------- | ----------------------------------------------------- |
| `myco-pellet.mp4`          | **yes**    | H.264, **all-keyframe** turntable (see below)         |
| `myco-pellet.webm`         | optional   | VP9 version — smaller, tried first when present        |
| `myco-pellet-poster.jpg`   | optional   | First frame, shown while the video decodes             |

Until `myco-pellet.mp4` exists, the panel falls back to the cross-section
schematic — which also turns with the same scroll gesture, so the interaction is
already live. As soon as the file is here, the video takes over automatically.
No code changes needed.

---

## 1 · Render the turntable in Blender

Your model: `AgriculturalPlug7.blend`.

1. **Make it spin.** Select the pellet, add an **Empty** at its center, parent the
   pellet to the Empty (`Ctrl+P` → *Object*). Select the Empty and keyframe a full
   turn:
   - Frame **1**: `Z` rotation = `0°` → `I` → *Rotation*
   - Frame **120**: `Z` rotation = `360°` → `I` → *Rotation*
   - In the Graph Editor set the interpolation to **Linear** (`T` → *Linear*) so
     the spin is perfectly even — important, because scroll maps linearly to time.
2. **Frame range:** Output Properties → *Frame Start* `1`, *End* `120`.
   (120 frames ≈ a smooth turn. More frames = smoother scrub but a bigger file.)
3. **Square format:** Resolution **1080 × 1080**, 100%.
4. **Background:** either
   - a solid **`#F8F9FA`** world (matches the section's off-white and fills the
     frame — the video is shown `object-cover`), **or**
   - **transparent** (Render Properties → *Film* → **Transparent**) and export a
     `.webm` with alpha; keep the `.mp4` on the off-white color as the fallback.
5. Even, soft studio lighting reads best against the light UI.

## 2 · Export an all-keyframe MP4 (the one detail that matters)

Smooth scrubbing needs **every frame to be a keyframe**, otherwise seeking stutters.

**Option A — straight from Blender (no extra tools):**
Output Properties → *File Format* = **FFmpeg Video** →
- *Container*: **MPEG-4**
- *Video Codec*: **H.264**
- *Output Quality*: **High**
- *Encoding Speed*: **Good**
- **Keyframe Interval / GOP Size: `1`**  ← makes every frame a keyframe
- *Max B-frames*: `0`

Render the animation (`Ctrl+F12`), then rename the output to `myco-pellet.mp4`
and put it in this folder.

**Option B — render a PNG sequence, then encode with ffmpeg (best quality):**
Render as a **PNG** image sequence into a folder, then:

```bash
# All-keyframe H.264 MP4 (the required file)
ffmpeg -framerate 60 -i frame_%04d.png \
  -c:v libx264 -pix_fmt yuv420p -g 1 -x264-params keyint=1 \
  -movflags +faststart -crf 18 myco-pellet.mp4

# Optional smaller VP9/WebM (transparent if you rendered with alpha)
ffmpeg -framerate 60 -i frame_%04d.png \
  -c:v libvpx-vp9 -pix_fmt yuva420p -g 1 -crf 30 -b:v 0 myco-pellet.webm

# Optional poster (first frame)
ffmpeg -i myco-pellet.mp4 -frames:v 1 -q:v 3 myco-pellet-poster.jpg
```

## 3 · Keep it small

Aim for **≤ 5 MB**. Levers: fewer frames (90–120), CRF 18–24, 1080 px is plenty.
All-keyframe files are larger than normal video — that's expected and required.

## 4 · Check it

```bash
npm run dev
```

Open the site, go to the **Myco-Pellet → Anatomy of a Pellet** tab, and scroll
through the section: the pellet should rotate with your scroll and rewind when you
scroll back up.

---

### Tuning (optional, in `components/sections/PelletShowcase.tsx`)

- **Aspect ratio:** pass `ratio="4 / 3"` (etc.) to `<ScrollScrubVideo>` for a
  non-square frame; render Blender at the matching resolution.
- **Fit:** the video is `object-cover` (fills, may crop edges). For a model that
  must never be cropped, render on the off-white background so the extra space is
  invisible, or switch the class to `object-contain` in `ScrollScrubVideo.tsx`.
- **Scrub feel:** the easing factor (`0.16`) in `ScrollScrubVideo.tsx` controls how
  tightly the playhead follows scroll — higher snaps faster, lower glides more.
