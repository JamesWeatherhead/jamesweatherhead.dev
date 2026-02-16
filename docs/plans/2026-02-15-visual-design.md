# Visual Design: "The Toggle Is the Statement"

**Concept:** The theme toggle is not cosmetic; it is the artistic statement. Light mode presents "The Doctor" (clinical precision, academic credibility). Dark mode reveals "The Architect" (experimental frontier, contemplative agent work). Same content, two visual worlds.

## Light Mode: "The Doctor"

| Element | Value |
|---------|-------|
| Background | #FAFAF9 (warm off-white) |
| Primary text | #1a1a1a |
| Secondary text | #6b6b6b |
| Accent | #0F6B8A (deep teal) |
| Heading font | Inter |
| Body font | Georgia (system serif) |
| Code font | JetBrains Mono |
| Content max-width | 720px |

- 8-column grid, generous whitespace, left-aligned
- Cards: clean borders, subtle shadow on hover, muted status badges
- Navigation: fixed top bar, name left, links right, thin bottom border
- No animations. Precision and clarity.
- Feel: a well-designed academic paper meets a clean developer portfolio

## Dark Mode: "The Architect"

| Element | Value |
|---------|-------|
| Background | #0a0a12 (Jiro near-black) |
| Primary text | rgba(255,255,255,0.85) |
| Secondary text | rgba(255,255,255,0.5) |
| Accent | rgba(74,158,255,1) (Jiro ethereal blue) |
| Heading letter-spacing | 2px (wider than light mode) |
| Body text opacity | 0.85 |

- Same grid, but the background is alive
- Interactive canvas background: particle system with slow-drifting particles connected by faint lines when proximate. Mouse movement creates gentle repulsion. Organic, contemplative.
- Cards: subtle glow borders on hover (Jiro blue), no shadow
- Navigation: same structure, text at lower opacity, accent glow on active link
- Typography shifts: wider letter-spacing on headings, lower opacity body text
- Feel: you have stepped behind the curtain. The experimental layer. Contemplative. Alive.

## The Toggle

- Not a sun/moon icon
- Light mode shows: a clean clinical mark or the text "clinical"
- Dark mode shows: an orbital/node mark or the text "frontier"
- Transition: 300ms crossfade. Particles fade in (not snap). Typography spacing animates.
- The toggle feels like a mode shift, not a repaint

## Landing Page

### Light mode:
- "James Weatherhead" in large Inter
- "MD/PhD student. I build AI agents for medicine and for thinking."
- 3 featured project cards
- Latest 2 blog posts
- Social links: GitHub, X, LinkedIn, Kaggle, email

### Dark mode:
- Same content; particle field behind everything
- Name gets wider letter-spacing
- Featured projects glow on hover
- Subtitle fades in with 200ms delay

## Pages

All pages follow the duality:
- **Projects:** Grid of cards. Light = clean borders. Dark = glow borders over particle field.
- **Blog:** Clean reading layout. Light = academic. Dark = text floats over living background.
- **About:** Personal, human. Photo. Background story.
- **Publications:** Citation-style list with links.

## Links to Include

- GitHub: https://github.com/JamesWeatherhead
- LinkedIn: https://www.linkedin.com/in/james-weatherhead-7ab4b9321/
- Kaggle: https://www.kaggle.com/competitions/gemini-3/writeups/new-writeup-1765065566929
- Mendeley: https://data.mendeley.com/datasets/csz5dzp7nx/1
- Email: jamescharlweatherhead@gmail.com
