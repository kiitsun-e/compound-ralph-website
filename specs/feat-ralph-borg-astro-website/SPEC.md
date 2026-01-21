---
name: feat-ralph-borg-astro-website
status: building
created: 2026-01-21
plan_file: plans/feat-ralph-borg-astro-website.md
iteration_count: 10
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

- [x] Task 5: Write Getting Started guide - Iteration 5
  - File: `src/content/docs/getting-started.mdx`
  - Test: `tests/docs.test.ts` (7 tests passing)
  - Content: Prerequisites (Claude CLI, git), installation, first feature walkthrough (init, plan, spec, implement, status)
  - Uses Starlight components (Steps, Aside)
  - Verified: `bun run build` succeeds

- [x] Task 6: Write init command reference - Iteration 6
  - File: `src/content/docs/commands/init.mdx`
  - Test: `tests/docs.test.ts` (8 new tests passing, 23 total)
  - Content: Usage, arguments table, what it creates, auto-detection table, examples, related commands
  - Verified: `bun run build` succeeds (8 pages built)

- [x] Task 7: Write plan command reference - Iteration 7
  - File: `src/content/docs/commands/plan.mdx`
  - Test: `tests/docs.test.ts` (8 new tests passing, 31 total)
  - Content: Usage, arguments table, what it does, interactive mode, examples, what happens next, related commands
  - Verified: `bun run build` succeeds (9 pages built)

- [x] Task 8: Write spec command reference - Iteration 8
  - File: `src/content/docs/commands/spec.mdx`
  - Test: `tests/docs.test.ts` (8 new tests passing, 39 total)
  - Content: Usage, arguments table, what it does, SPEC.md structure table, examples, quality gate auto-detection, related commands
  - Verified: `bun run build` succeeds (10 pages built)

- [x] Task 9: Write implement command reference - Iteration 9
  - File: `src/content/docs/commands/implement.mdx`
  - Test: `tests/docs.test.ts` (8 new tests passing, 47 total)
  - Content: Usage, arguments table, Ralph Loop explanation, auto-detection, failure handling, examples, related commands
  - Verified: `bun run build` succeeds (11 pages built)

- [x] Task 10: Write review command reference - Iteration 10
  - File: `src/content/docs/commands/review.mdx`
  - Test: `tests/docs.test.ts` (8 new tests passing, 55 total)
  - Content: Usage, arguments table, options (--design, --design-only, --url), output structure with todos directories, priority levels table, design review focus, examples, related commands
  - Verified: `bun run build` succeeds (12 pages built)

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

### Iteration 5 (2026-01-21 22:25)
**Task:** Task 5 - Write Getting Started guide
**Files Modified:** src/content/docs/getting-started.mdx
**Files Created:** tests/docs.test.ts
**Tests:** 7 tests passing (file exists, frontmatter, prerequisites, installation, first feature walkthrough, Starlight components, next steps links)
**Integration:** `bun run build` succeeds
**Result:** success
**Learnings:** Starlight components (Steps, Aside) can be imported from '@astrojs/starlight/components' for enhanced documentation formatting

### Iteration 6 (2026-01-21 22:27)
**Task:** Task 6 - Write init command reference
**Files Created:** src/content/docs/commands/init.mdx
**Files Modified:** tests/docs.test.ts
**Tests:** 8 new tests added (23 total passing)
**Integration:** `bun run build` succeeds (8 pages built)
**Result:** success
**Learnings:** Command reference pages follow pattern: Usage, Arguments/Options table, What It Does, Examples, Related Commands

### Iteration 7 (2026-01-21 22:29)
**Task:** Task 7 - Write plan command reference
**Files Created:** src/content/docs/commands/plan.mdx
**Files Modified:** tests/docs.test.ts
**Tests:** 8 new tests added (31 total passing)
**Integration:** `bun run build` succeeds (9 pages built)
**Result:** success
**Learnings:** Plan command is interactive (human-guided), unlike implement which is autonomous. Documented the interactive workflow including /workflows:plan and /deepen-plan integration

### Iteration 8 (2026-01-21 22:32)
**Task:** Task 8 - Write spec command reference
**Files Created:** src/content/docs/commands/spec.mdx
**Files Modified:** tests/docs.test.ts
**Tests:** 8 new tests added (39 total passing)
**Integration:** `bun run build` succeeds (10 pages built)
**Result:** success
**Learnings:** Spec command transforms plans into SPEC.md (state file) and PROMPT.md (iteration instructions). Auto-detects quality gates by project type. Documented the complete SPEC.md structure table for reference.

### Iteration 9 (2026-01-21 22:35)
**Task:** Task 9 - Write implement command reference
**Files Created:** src/content/docs/commands/implement.mdx
**Files Modified:** tests/docs.test.ts
**Tests:** 8 new tests added (47 total passing)
**Integration:** `bun run build` succeeds (11 pages built)
**Result:** success
**Learnings:** Implement is the core autonomous command—runs the Ralph Loop. Key concepts: fresh context each iteration, backpressure via quality gates, auto-detection of pending specs. Documented failure handling scenarios (test failures, consecutive failures, Ctrl+C, API errors).

### Iteration 10 (2026-01-21 22:37)
**Task:** Task 10 - Write review command reference
**Files Created:** src/content/docs/commands/review.mdx
**Files Modified:** tests/docs.test.ts
**Tests:** 8 new tests added (55 total passing)
**Integration:** `bun run build` succeeds (12 pages built)
**Result:** success
**Learnings:** Review command has two modes: code review and design review. Code review outputs to todos/code/, design review to todos/design/. Priority levels (P1/P2/P3) indicate urgency. The --url option allows specifying design review target when auto-detection fails.
