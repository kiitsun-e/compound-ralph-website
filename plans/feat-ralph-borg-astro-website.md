# feat: Ralph-Borg Documentation Website

> A simple Astro Starlight documentation site for ralph-borg.

---

## Overview

Build a documentation website for ralph-borg using Astro Starlight with a custom landing page. Ship fast, add features when users ask.

**Note:** This project uses Astro (which requires Vite) as an exception to the CLAUDE.md guidelines. Astro is the standard for documentation sites and Starlight provides built-in search, navigation, and accessibility.

---

## Site Structure

```
ralph-borg.dev/
├── /                    # Landing page
├── /docs/               # Documentation home
│   ├── getting-started  # Install + first feature walkthrough
│   ├── commands/        # 9 command reference pages
│   └── concepts/        # Backpressure + Ralph Loop
```

That's it. No tutorials section, no examples section, no changelog page. Link to the GitHub repo for anything else.

---

## Project Structure

```
src/
├── assets/
│   ├── logo.svg
│   └── ralph-loop.png      # Static diagram (not animated)
├── content/
│   └── docs/
│       ├── index.mdx
│       ├── getting-started.mdx
│       ├── commands/
│       │   ├── init.mdx
│       │   ├── plan.mdx
│       │   ├── spec.mdx
│       │   ├── implement.mdx
│       │   ├── review.mdx
│       │   ├── fix.mdx
│       │   ├── design.mdx
│       │   ├── status.mdx
│       │   └── learnings.mdx
│       └── concepts/
│           ├── backpressure.mdx
│           └── ralph-loop.mdx
├── pages/
│   └── index.astro         # Landing page
└── styles/
    └── custom.css          # Minimal overrides
```

---

## Implementation

### Phase 1: Ship It

**Setup (30 min):**

- [ ] Initialize Astro with Starlight
  ```bash
  bunx create-astro@latest ralph-borg-site --template starlight
  cd ralph-borg-site
  bun install
  ```
  - `astro.config.mjs`

- [ ] Configure site with sidebar
  - `astro.config.mjs`

- [ ] Add accent color override (green/cyan theme)
  - `src/styles/custom.css`
  ```css
  :root {
    --sl-color-accent: #00e5ff;
    --sl-color-accent-low: rgba(0, 229, 255, 0.15);
    --sl-color-accent-high: #00ff9f;
  }
  ```

- [ ] Create landing page
  - `src/pages/index.astro`
  - Hero with tagline: "Planning is human. Implementation is autonomous."
  - 3-4 bullet features
  - "Get Started" button linking to /docs/getting-started
  - "View on GitHub" button

**Documentation (2-3 hours):**

- [ ] Write Getting Started guide
  - `src/content/docs/getting-started.mdx`
  - Prerequisites (Claude Code CLI, git)
  - Installation (`PATH` setup)
  - First project: `borg init` → `borg plan` → `borg spec` → `borg implement`

- [ ] Write Command Reference (9 pages)
  - `src/content/docs/commands/*.mdx`
  - Each page: description, usage, options table, 1-2 examples
  - Source content from `/Users/marcus/Desktop/coding-projects/ralph-borg/borg` help text

- [ ] Write Concepts (2 pages)
  - `src/content/docs/concepts/backpressure.mdx` - What it is, why it matters, gate types
  - `src/content/docs/concepts/ralph-loop.mdx` - The 8 phases, static diagram

- [ ] Create static Ralph Loop diagram
  - `src/assets/ralph-loop.png`
  - Simple circular diagram showing phases
  - Can be hand-drawn, Excalidraw, or Mermaid-generated

**Deploy (15 min):**

- [ ] Deploy to Cloudflare Pages
  - Connect GitHub repo
  - Build command: `bun run build`
  - Output directory: `dist`

**Quality Gate:**
- Site builds: `bun run build`
- All pages render
- Links work
- Lighthouse accessibility > 90

---

### Phase 2: Polish (After Launch)

Only do these if users ask or metrics show need:

- [ ] Add OpenGraph image for social sharing
- [ ] Add Plausible analytics (if you want metrics)
- [ ] Improve diagrams based on feedback
- [ ] Add more examples to command pages
- [ ] Custom 404 page

---

## Acceptance Criteria

- [ ] Landing page explains what ralph-borg does
- [ ] Getting Started guide walks through first feature
- [ ] All 9 commands documented with usage examples
- [ ] Backpressure and Ralph Loop concepts explained
- [ ] Site deployed and accessible
- [ ] Dark theme with cyan/green accents

---

## What We're NOT Building (YAGNI)

Removed from original plan based on reviewer feedback:

| Cut | Reason |
|-----|--------|
| Animated SVG diagrams | Static images communicate the same info |
| Hexagonal pattern backgrounds | Visual flair, not essential |
| Tutorials section (3 pages) | Getting Started is enough |
| Examples section | Link to repo instead |
| Print stylesheet | Nobody prints docs |
| Analytics | Add later if needed |
| ERD for content collections | Over-engineering |
| Success metrics | Pre-optimization |
| Internationalization | No international users yet |
| Blog/changelog pages | Link to GitHub releases |
| Interactive playground | Massive complexity |
| Custom components | Use Starlight built-ins |

---

## Config Files

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ralph-borg.dev',
  integrations: [
    starlight({
      title: 'Ralph Borg',
      social: {
        github: 'https://github.com/yourusername/ralph-borg',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Getting Started', slug: 'getting-started' },
        {
          label: 'Commands',
          autogenerate: { directory: 'commands' },
        },
        {
          label: 'Concepts',
          items: [
            'concepts/backpressure',
            'concepts/ralph-loop',
          ],
        },
      ],
    }),
  ],
});
```

### src/pages/index.astro

```astro
---
import { getEntry } from 'astro:content';
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ralph Borg - Autonomous Feature Implementation</title>
  <style>
    :root {
      --bg: #0a0f0d;
      --text: #e0f2e9;
      --accent: #00e5ff;
      --muted: #6b8f7a;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }
    h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 1rem; }
    .tagline { color: var(--accent); font-size: 1.25rem; margin-bottom: 2rem; }
    .features {
      list-style: none;
      margin-bottom: 2rem;
      color: var(--muted);
    }
    .features li { margin: 0.5rem 0; }
    .buttons { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
    }
    .btn-primary { background: var(--accent); color: var(--bg); }
    .btn-secondary { border: 1px solid var(--muted); color: var(--text); }
    .btn:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <h1>Ralph Borg</h1>
  <p class="tagline">Planning is human. Implementation is autonomous.</p>

  <ul class="features">
    <li>Rich, researched specs through human + AI collaboration</li>
    <li>Autonomous implementation with backpressure self-correction</li>
    <li>Context that accumulates and improves across iterations</li>
  </ul>

  <div class="buttons">
    <a href="/docs/getting-started" class="btn btn-primary">Get Started</a>
    <a href="https://github.com/yourusername/ralph-borg" class="btn btn-secondary">GitHub</a>
  </div>
</body>
</html>
```

### src/content/docs/commands/implement.mdx

```mdx
---
title: borg implement
description: Start the autonomous implementation loop
---

Start the autonomous implementation loop to execute tasks from a SPEC.md file.

## Usage

```bash
borg implement [spec-dir]
```

## Options

| Option | Description | Default |
|--------|-------------|---------|
| `--max-iterations` | Maximum loop iterations | 50 |
| `--timeout` | Seconds per iteration | 600 |
| `--dry-run` | Preview without executing | false |

## Example

```bash
# Run in current spec directory
borg implement

# Run with custom limits
borg implement specs/auth-feature --max-iterations 20
```

## What Happens

1. Loads SPEC.md from the spec directory
2. Enters the Ralph Loop (see [Ralph Loop](/docs/concepts/ralph-loop))
3. Each iteration: orient → select task → investigate → implement → validate → commit
4. Exits when all tasks complete or max iterations reached

## Related

- [borg spec](/docs/commands/spec) - Create the SPEC.md file
- [borg status](/docs/commands/status) - Monitor progress
```

---

## Timeline

| Task | Estimate |
|------|----------|
| Setup + config | 30 min |
| Landing page | 30 min |
| Getting Started | 45 min |
| 9 Command pages | 2 hours |
| 2 Concept pages | 1 hour |
| Static diagram | 30 min |
| Deploy | 15 min |
| **Total** | **~5-6 hours** |

Ship today, improve tomorrow.

---

*Revised based on DHH, Kieran, and Simplicity reviewer feedback - 2026-01-21*
