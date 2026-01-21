---
name: feat-ralph-borg-astro-website
status: building
created: 2026-01-21
plan_file: plans/feat-ralph-borg-astro-website.md
iteration_count: 4
project_type: astro
---

# Feature: Ralph-Borg Documentation Website

## Overview

Build a documentation website for ralph-borg using Astro Starlight with a custom landing page. The site will include a getting started guide, command reference for all 9 commands, and concept explanations for backpressure and the Ralph Loop. Ship fast, add features when users ask.

**Note:** This project uses Astro (which requires Vite) as an exception to the CLAUDE.md guidelines. Astro is the standard for documentation sites and Starlight provides built-in search, navigation, and accessibility.

## Requirements

- [ ] Landing page explains what ralph-borg does
- [ ] Getting Started guide walks through first feature
- [ ] All 9 commands documented with usage examples
- [ ] Backpressure and Ralph Loop concepts explained
- [ ] Site deployed and accessible
- [ ] Dark theme with cyan/green accents

## Tasks

<!--
TASK ORDERING RULES (ENFORCED):
1. Setup tasks MUST be first (dependencies, config)
2. Each implementation task MUST specify its test file
3. UI tasks MUST specify visual verification
4. NEVER create 'run tests' as a separate task at the end
-->

### Pending

#### Phase 3: Implementation - Documentation Pages

- [ ] Task 5: Write Getting Started guide
  - File: `src/content/docs/getting-started.mdx`
  - Content: Prerequisites, installation, first project walkthrough
  - Test: `tests/docs.test.ts` (verify frontmatter, content structure)
  - Validate: `bun run build` succeeds

- [ ] Task 6: Write init command reference
  - File: `src/content/docs/commands/init.mdx`
  - Content: Description, usage, options table, examples
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 7: Write plan command reference
  - File: `src/content/docs/commands/plan.mdx`
  - Content: Description, usage, options table, examples
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 8: Write spec command reference
  - File: `src/content/docs/commands/spec.mdx`
  - Content: Description, usage, options table, examples
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 9: Write implement command reference
  - File: `src/content/docs/commands/implement.mdx`
  - Content: Description, usage, options table, examples (use plan example as template)
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 10: Write review command reference
  - File: `src/content/docs/commands/review.mdx`
  - Content: Description, usage, options table, examples
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 11: Write fix command reference
  - File: `src/content/docs/commands/fix.mdx`
  - Content: Description, usage, options table, examples
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 12: Write design command reference
  - File: `src/content/docs/commands/design.mdx`
  - Content: Description, usage, options table, examples
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 13: Write status command reference
  - File: `src/content/docs/commands/status.mdx`
  - Content: Description, usage, options table, examples
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 14: Write learnings command reference
  - File: `src/content/docs/commands/learnings.mdx`
  - Content: Description, usage, options table, examples
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 15: Write backpressure concept page
  - File: `src/content/docs/concepts/backpressure.mdx`
  - Content: What it is, why it matters, gate types
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 16: Write ralph-loop concept page with diagram reference
  - File: `src/content/docs/concepts/ralph-loop.mdx`
  - Content: The 8 phases, reference to static diagram
  - Test: Add to `tests/docs.test.ts`
  - Validate: `bun run build` succeeds

- [ ] Task 17: Create static Ralph Loop diagram
  - File: `src/assets/ralph-loop.png`
  - Content: Simple circular diagram showing 8 phases (Mermaid or Excalidraw export)
  - Validate: File exists and is referenced in ralph-loop.mdx

#### Phase 4: Integration and Visual Verification

- [ ] Task 18: Run full build and verify all pages render
  - Run: `bun run build`
  - Run: Full test suite with `bun test`
  - Visual: `agent-browser screenshot localhost:4321/docs/getting-started`
  - Visual: `agent-browser screenshot localhost:4321/docs/commands/implement`
  - Visual: `agent-browser screenshot localhost:4321/docs/concepts/ralph-loop`

- [ ] Task 19: Deploy to Cloudflare Pages
  - Connect GitHub repo to Cloudflare Pages
  - Build command: `bun run build`
  - Output directory: `dist`
  - Validate: Site accessible at deployed URL

### In Progress

### Completed

- [x] Task 1: Initialize Astro with Starlight template - Iteration 1
  - Files: package.json, astro.config.mjs, src/content/docs/*, tsconfig.json
  - Verified: `bun run build` succeeds (with expected warnings)

- [x] Task 2: Configure astro.config.mjs with site settings and sidebar - Iteration 2
  - Files: astro.config.mjs, src/styles/custom.css (placeholder), src/content/docs/*.mdx (placeholders)
  - Configured: site URL (ralph-borg.dev), GitHub social link, sidebar with Getting Started, Commands, Concepts
  - Verified: `bun run build` succeeds, visual screenshots captured showing sidebar structure

- [x] Task 3: Add custom CSS with cyan/green accent theme - Iteration 3
  - File: `src/styles/custom.css`
  - Added: Starlight theme variables (--sl-color-accent, --sl-color-accent-low, --sl-color-accent-high)
  - Added: Landing page color variables for Task 4
  - Verified: `bun run build` succeeds

- [x] Task 4: Create custom landing page - Iteration 4
  - File: `src/pages/index.astro`
  - Test: `tests/landing-page.test.ts` (8 tests passing)
  - Content: Hero with gradient title, tagline, Get Started/GitHub buttons, 3 feature cards
  - Visual: Screenshot captured - dark theme with cyan/green accents renders correctly
  - Verified: `bun run build` succeeds

### Blocked

## Quality Gates

<!--
BACKPRESSURE RULES (ENFORCED):
- Run after EVERY task completion, not just at the end
- If a gate fails, fix it in the SAME iteration
- If dependencies aren't installed, STOP and install them first
-->

### Per-Task Gates (run after each task)
- [ ] Build passes on changed files: `bun run build`
- [ ] Related tests pass: `bun test`

### Full Gates (run after each iteration)
- [ ] Build succeeds: `bun run build`
- [ ] Tests pass: `bun test`
- [ ] All pages render without errors

### Visual Gates (run after UI changes)
- [ ] Screenshot captured with agent-browser
- [ ] Landing page renders correctly
- [ ] Documentation pages render with proper styling
- [ ] Lighthouse accessibility > 90

## Exit Criteria

- [ ] All requirements checked off
- [ ] All quality gates pass (not 'will pass later')
- [ ] All tasks completed
- [ ] Site builds successfully with no errors
- [ ] All internal links work
- [ ] Code committed with meaningful messages
- [ ] Site deployed to Cloudflare Pages
- [ ] Ready for PR/review

## Context

### Key Files

| Source File | Test File | Visual Check |
|-------------|-----------|--------------|
| `astro.config.mjs` | N/A (config) | No |
| `src/styles/custom.css` | N/A (styles) | Yes - theme colors |
| `src/pages/index.astro` | `tests/landing-page.test.ts` | Yes - hero layout |
| `src/content/docs/getting-started.mdx` | `tests/docs.test.ts` | Yes |
| `src/content/docs/commands/*.mdx` (9 files) | `tests/docs.test.ts` | Yes |
| `src/content/docs/concepts/*.mdx` (2 files) | `tests/docs.test.ts` | Yes |
| `src/assets/ralph-loop.png` | N/A (asset) | Yes - diagram |

### Patterns to Follow

**Astro Config Structure:**
```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ralph-borg.dev',
  integrations: [
    starlight({
      title: 'Ralph Borg',
      social: { github: 'https://github.com/yourusername/ralph-borg' },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Getting Started', slug: 'getting-started' },
        { label: 'Commands', autogenerate: { directory: 'commands' } },
        { label: 'Concepts', items: ['concepts/backpressure', 'concepts/ralph-loop'] },
      ],
    }),
  ],
});
```

**CSS Theme Variables:**
```css
:root {
  --sl-color-accent: #00e5ff;
  --sl-color-accent-low: rgba(0, 229, 255, 0.15);
  --sl-color-accent-high: #00ff9f;
}
```

**Landing Page Colors:**
```css
--bg: #0a0f0d;
--text: #e0f2e9;
--accent: #00e5ff;
--muted: #6b8f7a;
```

**Command Page Structure:**
- Title and description in frontmatter
- Usage section with code block
- Options table (Option | Description | Default)
- 1-2 examples with code blocks
- Related commands section

### Notes

- This project uses Astro/Vite as an exception to CLAUDE.md Bun-only guidelines
- Starlight provides built-in search, navigation, and accessibility
- Phase 2 polish items (OpenGraph, analytics, improved diagrams) are YAGNI - only implement if users request
- Link to GitHub for changelog, examples, and anything not in core docs
- Source command help text from `/Users/marcus/Desktop/coding-projects/ralph-borg/borg`

### YAGNI - Explicitly Out of Scope

| Cut Item | Reason |
|----------|--------|
| Animated SVG diagrams | Static images communicate same info |
| Hexagonal pattern backgrounds | Visual flair, not essential |
| Tutorials section | Getting Started is enough |
| Examples section | Link to repo instead |
| Print stylesheet | Nobody prints docs |
| Analytics | Add later if needed |
| Internationalization | No international users yet |
| Blog/changelog pages | Link to GitHub releases |
| Interactive playground | Massive complexity |
| Custom components | Use Starlight built-ins |

## Iteration Log

<!-- Each iteration gets logged here with: iteration number, tasks attempted, tasks completed, blockers encountered -->

### Iteration 1 (2026-01-21 22:01)
**Task:** Task 1 - Initialize Astro with Starlight template
**Files Created:** package.json, astro.config.mjs, src/content/docs/*, tsconfig.json, bun.lock, public/*, src/assets/*
**Tests:** N/A (setup task)
**Integration:** `bun run build` succeeds with expected warnings
**Result:** success
**Learnings:** create-astro creates a subdirectory when the target directory is not empty; needed to move files to root

### Iteration 2 (2026-01-21 22:03)
**Task:** Task 2 - Configure astro.config.mjs with site settings and sidebar
**Files Modified:** astro.config.mjs
**Files Created:** src/styles/custom.css (placeholder), src/content/docs/getting-started.mdx (placeholder), src/content/docs/concepts/backpressure.mdx (placeholder), src/content/docs/concepts/ralph-loop.mdx (placeholder)
**Tests:** N/A (config task)
**Integration:** `bun run build` succeeds, sidebar renders correctly with all three sections
**Visual:** Screenshots captured showing "Ralph Borg" title, GitHub link, and sidebar structure
**Result:** success
**Learnings:** Created placeholder content files to ensure sidebar works before actual content is written

### Iteration 3 (2026-01-21 22:13)
**Task:** Task 3 - Add custom CSS with cyan/green accent theme
**Files Modified:** src/styles/custom.css
**Tests:** N/A (styling task - visual verification needed)
**Integration:** `bun run build` succeeds
**Result:** success
**Learnings:** Starlight uses --sl-color-accent, --sl-color-accent-low, --sl-color-accent-high for theming; also added landing page CSS variables for the custom landing page (Task 4)

### Iteration 4 (2026-01-21 22:16)
**Task:** Task 4 - Create custom landing page
**Files Created:** src/pages/index.astro, tests/landing-page.test.ts
**Tests:** 8 tests passing (file exists, hero title, tagline, Get Started link, GitHub link, 3 features, CSS variables, meta tags)
**Integration:** `bun run build` succeeds (7 pages built)
**Visual:** Screenshot captured - landing page renders with dark theme, cyan/green gradient title, feature cards
**Result:** success
**Learnings:** Custom Astro pages outside Starlight's content system need to import CSS manually; scoped styles in .astro files work well with CSS custom properties
