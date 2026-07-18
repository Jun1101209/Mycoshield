# Image slots

Drop your field photography here using the **exact filenames** below. Each slot is
rendered inside an aspect-ratio-locked container with a gradient placeholder, so the
layout is identical whether or not the file is present (zero layout shift). Until a
file exists, the placeholder + a small `filename` label is shown.

| Filename            | Used in                        | Aspect ratio | Recommended size | Suggested subject                          |
| ------------------- | ------------------------------ | ------------ | ---------------- | ------------------------------------------ |
| `hero-field.jpg`    | Hero (right visual)            | 4 : 5        | 1200 × 1500 px   | Farmer in a conical hat in a bright cornfield |
| `tea-hills.jpg`     | Contact CTA band (background)  | 16 : 9       | 2000 × 1125 px   | Tea-plantation hills with pickers          |
| `peanut-field.jpg`  | *(optional, spare)*            | 4 : 3        | 1600 × 1200 px   | Green peanut/legume field rows             |
| `rice-terraces.jpg` | *(optional, spare)*            | 21 : 9       | 2000 × 860 px    | Golden terraced rice fields                |
| `corn-farmer.jpg`   | *(optional, spare)*            | 3 : 4        | 1200 × 1600 px   | Close portrait of farmer among corn        |

## Guidance

- Use bright, naturally lit, high-resolution photography — no clip-art or cartoon
  illustration (keeps the enterprise aesthetic intact).
- Export as optimized JPG (quality ~80), ideally < 400 KB each for fast loads.
- Filenames are referenced in:
  - `components/sections/Hero.tsx` → `hero-field.jpg`
  - `components/sections/Contact.tsx` → `tea-hills.jpg`
- To wire an optional/spare image into a section, add an `<ImageSlot src="/images/…" />`
  where you want it (see `components/ui/ImageSlot.tsx`).
