# Andromedus Maximus Landing Pad

A cinematic single-page front-end prototype for the `Andromedus Maximus` chandelier, built with React, Vite, TypeScript, and GSAP ScrollTrigger.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build For Production

```bash
npm run build
```

## Project Notes

- Main app shell: `src/App.tsx`
- Scene content and timing: `src/data/siteContent.ts`
- Timeline helpers: `src/data/timeline.ts`
- Scroll pinning hook: `src/hooks/useScrollTimeline.ts`
- Global styling tokens and shared button styles: `src/styles/globals.css`

## Replace Video Assets

1. Drop final video files into `public/videos/`.
2. Update the centralized `videoAssets` object in `src/data/siteContent.ts`.
3. Keep or replace the scene poster images in `public/images/` for loading and error fallback states.

Example:

```ts
export const videoAssets = {
  heroSequence: {
    desktopSrc: '/videos/hero-desktop.mp4',
    mobileSrc: '/videos/hero-mobile.mp4',
    preload: 'metadata',
  },
}
```

Each scene references a shared asset id, so you can swap the actual files in one place without editing component code.

## Edit Scene Timing

Update the `start` and `end` values for:

- `scenes` in `src/data/siteContent.ts`
- `overlayBeats` in `src/data/siteContent.ts`

All timing uses a normalized `0` to `1` timeline so you can add scenes later without rewriting the scroll logic.

## Tune Scroll Scrub Feel

The cinematic video scrub is driven by:

- `CINEMATIC_SCROLL_LENGTH_VH` in `src/components/CinematicScrollSection/CinematicScrollSection.tsx`
- `scrub` in the `useScrollTimeline(...)` call in `src/components/CinematicScrollSection/CinematicScrollSection.tsx`
- `easing` and `endOffsetSeconds` in `src/hooks/useScrollScrubVideo.ts`

Use these controls to make the sequence feel longer, smoother, or more direct:

- Increase `CINEMATIC_SCROLL_LENGTH_VH` for a more dramatic, slower scroll journey
- Lower `scrub` for tighter scroll response, or raise it for softer smoothing
- Adjust `easing` if you want the video time to catch up faster or more gently

## Edit CTA Links

Update the `ctaButtons` array in `src/data/siteContent.ts`.

Those links feed:

- the top navigation button
- the hero CTAs
- the end-of-sequence overlay CTA
- the closing CTA section

## Placeholder Assets

- Poster placeholders live in `public/images/`
- Future cinematic videos should live in `public/videos/`

The current prototype uses image placeholders and ambient CSS treatment until final motion assets are ready.
