# James Weatherhead Personal Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and deploy a unique, distinctive personal website for James Weatherhead that reflects his dual identity as a clinical AI hacker and autonomous agent architect.

**Architecture:** Astro 5 static site with Tailwind 4 and React islands for interactivity, deployed to Vercel. Pagefind for static search. Satori for OG image generation. Dark/light mode. Mobile-responsive. SEO-optimized.

**Tech Stack:** Astro 5, Tailwind 4, React 19, TypeScript, Pagefind, Vercel, MDX for blog posts

**Design Direction:** The site should feel like visiting something at the intersection of a hospital and an autonomous agent research lab. Clean, precise typography with subtle generative/interactive elements. Not dark-mode-only goth. Not sterile clinical white. A distinctive palette and layout that nobody else has.

---

### Task 1: Upgrade Astro and Dependencies

**Files:**
- Modify: `/Users/jacweath/blog/package.json`
- Modify: `/Users/jacweath/blog/astro.config.mjs`

**Step 1: Upgrade Astro 4 to Astro 5 and Tailwind 3 to Tailwind 4**

Run:
```bash
cd /Users/jacweath/blog
npm install astro@latest @astrojs/tailwind@latest tailwindcss@latest @astrojs/react@latest react@latest react-dom@latest
```

**Step 2: Verify the dev server starts**

Run: `cd /Users/jacweath/blog && npm run dev`
Expected: Dev server starts without errors on localhost

**Step 3: Commit**

```bash
cd /Users/jacweath/blog
git add package.json package-lock.json astro.config.mjs
git commit -m "chore: upgrade to Astro 5 and Tailwind 4"
```

---

### Task 2: Define Site Configuration and Branding

**Files:**
- Modify: `/Users/jacweath/blog/src/consts.ts` (or create if doesn't exist)
- Modify: `/Users/jacweath/blog/astro.config.mjs`

**Step 1: Create site constants file**

```typescript
// src/consts.ts
export const SITE_TITLE = "James Weatherhead";
export const SITE_DESCRIPTION = "MD/PhD student building AI agents for medicine and for thinking.";
export const SITE_URL = "https://jamesweatherhead.com"; // placeholder until domain decided
export const SOCIAL_LINKS = {
  github: "https://github.com/JamesWeatherhead",
  twitter: "https://x.com/TODO", // to be created
  linkedin: "https://linkedin.com/in/james-weatherhead-7ab4b9321",
  email: "jamescharlweatherhead@gmail.com",
};
export const PROJECTS = [
  {
    name: "receipts",
    description: "Automated citation verification for Claude Code. Checks if your references actually say what you claim.",
    url: "https://github.com/JamesWeatherhead/receipts",
    status: "active",
    tags: ["claude-code", "citations", "npm"],
  },
  {
    name: "ehrsh",
    description: "Replace 47 clicks with one command. Natural language CLI for FHIR-based EHR workflows.",
    url: "https://github.com/JamesWeatherhead/ehrsh",
    status: "active",
    tags: ["ehr", "fhir", "cli"],
  },
  {
    name: "VibeRad",
    description: "AI Studio DICOM app powered by Gemini 3 Pro for exploring radiology.",
    url: "https://github.com/JamesWeatherhead/VibeRad",
    status: "competition",
    tags: ["dicom", "radiology", "gemini"],
  },
  {
    name: "ASQ-PHI",
    description: "1,051 PHI-annotated clinical queries for testing HIPAA de-identification. Published in Data in Brief.",
    url: "https://github.com/JamesWeatherhead/asq-phi",
    status: "published",
    tags: ["hipaa", "phi", "benchmark", "dataset"],
  },
  {
    name: "Jiro Watanabe",
    description: "Autonomous AI researcher. #1 on clawXiv with 134 upvotes across 3 philosophy of mind papers.",
    url: "https://clawxiv.org",
    status: "active",
    tags: ["agents", "philosophy", "clawxiv"],
  },
  {
    name: "k-anonymity-decay",
    description: "Measuring k-anonymity decay in multi-turn clinical LLM conversations.",
    url: "https://github.com/JamesWeatherhead/k-anonymity-decay",
    status: "active",
    tags: ["privacy", "llm", "k-anonymity"],
  },
  {
    name: "local-phi-scrubber",
    description: "Chrome extension that redacts PHI using Phi-3 Mini via Ollama. All processing local.",
    url: "https://github.com/JamesWeatherhead/local-phi-scrubber",
    status: "active",
    tags: ["chrome-extension", "phi", "local-llm"],
  },
];
```

**Step 2: Update astro.config with site URL and integrations**

**Step 3: Commit**

```bash
git add src/consts.ts astro.config.mjs
git commit -m "feat: add site configuration and project data"
```

---

### Task 3: Design and Build the Layout Shell

**Files:**
- Modify: `/Users/jacweath/blog/src/layouts/BaseLayout.astro` (or MainLayout.astro, whatever exists)
- Create: `/Users/jacweath/blog/src/components/Header.astro`
- Create: `/Users/jacweath/blog/src/components/Footer.astro`
- Create: `/Users/jacweath/blog/src/components/ThemeToggle.tsx` (React island)

**Step 1: Design the layout shell with distinctive navigation**

The header should have:
- Name "James Weatherhead" on the left
- Nav links: Projects, Blog, Publications, About
- Theme toggle (dark/light) on the right
- A subtle animated accent element that reflects the clinical-meets-agent identity

**Step 2: Build the footer**

Minimal: social links, copyright, "MD/PhD Student @ UTMB"

**Step 3: Implement dark/light mode with FOUC prevention**

Use a script in the head that reads localStorage before paint.

**Step 4: Verify layout renders correctly in dev**

Run: `npm run dev`
Check: header, footer, theme toggle work

**Step 5: Commit**

```bash
git add src/layouts/ src/components/Header.astro src/components/Footer.astro src/components/ThemeToggle.tsx
git commit -m "feat: layout shell with header, footer, and theme toggle"
```

---

### Task 4: Build the Landing Page

**Files:**
- Modify: `/Users/jacweath/blog/src/pages/index.astro`

**Step 1: Design and implement the landing page**

This is the most important page. It must be distinctive and memorable. Key elements:
- Hero section with James's name and one-liner: "MD/PhD student. I build AI agents for medicine and for thinking."
- A subtle interactive or generative visual element (canvas animation, SVG pattern, or similar) that hints at the duality of clinical precision and agent experimentation
- Featured projects (3-4 cards linking to full projects page)
- Latest blog posts (2-3 entries)
- Social links (GitHub, Twitter, LinkedIn, email)
- Call to action to explore projects or read blog

This page should NOT look like a standard developer portfolio. It should feel distinctive.

**Step 2: Verify in browser**

Run: `npm run dev`
Check: page renders, interactive elements work, responsive on mobile

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: landing page with hero and featured content"
```

---

### Task 5: Build the Projects Page

**Files:**
- Create: `/Users/jacweath/blog/src/pages/projects.astro`
- Create: `/Users/jacweath/blog/src/components/ProjectCard.astro`

**Step 1: Build the projects page**

Display all projects from PROJECTS constant in consts.ts. Each card shows:
- Project name
- One-sentence description
- Status badge (active / published / competition)
- Tags
- Link to repo or site

Use a grid layout. Make cards interactive (hover effects).

**Step 2: Verify in browser**

**Step 3: Commit**

```bash
git add src/pages/projects.astro src/components/ProjectCard.astro
git commit -m "feat: projects page with card grid"
```

---

### Task 6: Build the Blog Infrastructure

**Files:**
- Modify: `/Users/jacweath/blog/src/content/config.ts`
- Modify: `/Users/jacweath/blog/src/pages/blog/index.astro`
- Modify: `/Users/jacweath/blog/src/pages/blog/[...slug].astro`
- Create: `/Users/jacweath/blog/src/components/BlogPostCard.astro`

**Step 1: Update content collection schema for blog posts**

Schema should include: title, description, pubDate, tags, draft, heroImage (optional)

**Step 2: Update blog listing page**

Show posts sorted by date, with tag filtering

**Step 3: Update individual post layout**

Clean reading experience with table of contents, estimated read time, share links

**Step 4: Remove placeholder blog posts**

Delete the generic tutorial posts currently in /src/content/blog/

**Step 5: Verify blog infrastructure works with a test post**

**Step 6: Commit**

```bash
git add src/content/ src/pages/blog/ src/components/BlogPostCard.astro
git commit -m "feat: blog infrastructure with content collections"
```

---

### Task 7: Build the About Page

**Files:**
- Create: `/Users/jacweath/blog/src/pages/about.astro`

**Step 1: Build the about page**

Content sections:
- Brief intro: who James is
- Current work: UTMB, PhD research (HSV-Alzheimer's), clinical AI tools
- Background: St. Mary's University, tennis, research history
- What drives him: agents for everyone, clinical AI, open source
- Contact information

Keep it human. Not a resume dump.

**Step 2: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: about page"
```

---

### Task 8: Build the Publications Page

**Files:**
- Create: `/Users/jacweath/blog/src/pages/publications.astro`

**Step 1: Build publications page**

List published and upcoming papers:
- ASQ-PHI (ScienceDirect, accepted)
- DPA Conference presentation (October 2025)
- Any other publications

Format: citation style with links to papers/preprints

**Step 2: Commit**

---

### Task 9: Add SEO, Sitemap, RSS, and OG Images

**Files:**
- Create: `/Users/jacweath/blog/src/components/SEO.astro`
- Modify: `astro.config.mjs`

**Step 1: Install sitemap and RSS integrations**

```bash
npm install @astrojs/sitemap
```

**Step 2: Create SEO component with meta tags and structured data**

**Step 3: Set up OG image generation using Satori**

**Step 4: Add RSS feed**

**Step 5: Commit**

---

### Task 10: Add Pagefind Search

**Step 1: Install and configure Pagefind**

```bash
npm install pagefind
```

**Step 2: Create search component**

**Step 3: Commit**

---

### Task 11: Deploy to Vercel

**Step 1: Install Vercel adapter**

```bash
npm install @astrojs/vercel
```

**Step 2: Configure for Vercel deployment**

**Step 3: Create Vercel project and deploy**

```bash
npx vercel
```

**Step 4: Verify live site**

**Step 5: Commit deployment config**

---

### Task 12: Write First Blog Post

**Files:**
- Create: `/Users/jacweath/blog/src/content/blog/how-i-built-receipts.md`

**Step 1: Write the blog post "How I Built Receipts: Citation Verification Inside Claude Code"**

Structure:
- The problem: hallucinated and misrepresented citations in academic writing
- The solution: receipts reads your manuscript, reads your sources, shows mismatches
- How it works: technical walkthrough
- What I learned
- Link to GitHub repo and npm package

**Step 2: Verify post renders correctly**

**Step 3: Commit and deploy**
