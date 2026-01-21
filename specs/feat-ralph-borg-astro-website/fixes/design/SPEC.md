---
name: feat-ralph-borg-astro-website-fixes-design
status: building
created: 2026-01-21
parent_spec: feat-ralph-borg-astro-website
fix_type: design
todo_count: 8
iteration_count: 4
project_type: bun
---

# Fix: feat-ralph-borg-astro-website (design)

## Overview

This spec addresses 8 design findings from review of feat-ralph-borg-astro-website.

## Requirements

- [x] Landing page uses distinctive fonts instead of generic system fonts
- [x] Hero layout breaks the centered symmetry pattern with asymmetry or unexpected elements
- [x] Feature cards are clearly visible with proper contrast and visual presence
- [x] Buttons have polish, character, and satisfying interactions
- [ ] Background has visual atmosphere and depth beyond solid color
- [ ] Page has entrance animations with staggered reveals
- [ ] Typography has dramatic hierarchy with clear size distinctions
- [ ] Landing page has distinct visual identity unique to Ralph Borg

## Tasks

### Pending

#### Phase 1: Setup
- [x] Task 1: Verify dependencies and quality gates work (completed: iteration 1)
  - Run: Install any missing dependencies
  - Verify: All lint/test commands execute

#### Phase 2: Fixes (ordered by priority - P1 first, then P2, then P3)

- [x] Task 2: Replace generic system fonts with distinctive typography (completed: iteration 1)
  - File: `src/pages/index.astro:62`
  - Reference: `todos/design/001-p2-generic-system-fonts.md`
  - Acceptance:
    - [x] Landing page uses a distinctive display font for headlines (not system fonts)
    - [x] Body text uses an intentional font choice that pairs well with headlines
    - [x] Font choice reflects the "autonomous AI agent" personality
    - [x] Fonts are properly loaded (web fonts or self-hosted)
    - [x] No system font fallbacks visible in the hero section

- [x] Task 3: Break the cookie-cutter centered hero layout (completed: iteration 2)
  - File: `src/pages/index.astro:18-50` (HTML structure)
  - File: `src/pages/index.astro:72-75` (hero CSS)
  - File: `src/pages/index.astro:141-144` (features grid)
  - Reference: `todos/design/002-p2-cookie-cutter-hero-layout.md`
  - Acceptance:
    - [x] Hero layout breaks the centered symmetry pattern
    - [x] Feature cards have varied visual weight (not three identical boxes)
    - [x] Layout has visual tension or unexpected elements
    - [x] Design feels intentional and distinctive, not templated
    - [x] Layout still works on mobile (can be simpler/centered on small screens)

- [x] Task 4: Make feature cards visible and impactful (completed: iteration 3)
  - File: `src/pages/index.astro:146-151`
  - Reference: `todos/design/003-p2-invisible-feature-cards.md`
  - Acceptance:
    - [x] Feature cards are clearly visible against the background
    - [x] Cards have visual presence (shadows, borders, or backgrounds that stand out)
    - [x] Description text has sufficient contrast (WCAG AA minimum)
    - [x] Cards feel like distinct UI elements, not afterthoughts
    - [x] Hover states are visible and feel intentional

- [x] Task 5: Add polish and character to buttons (completed: iteration 4)
  - File: `src/pages/index.astro:106-138`
  - Reference: `todos/design/004-p2-bland-buttons.md`
  - Acceptance:
    - [x] Primary button has visual interest (gradient, shine, or texture)
    - [x] Secondary button doesn't look disabled (has visible fill or stronger border)
    - [x] Hover states are satisfying and feel responsive
    - [x] Active/click states provide feedback
    - [x] Buttons feel polished and intentional

- [ ] Task 6: Add visual atmosphere and depth to background
  - File: `src/pages/index.astro:57-61`
  - Reference: `todos/design/005-p2-no-visual-atmosphere.md`
  - Acceptance:
    - [ ] Background has visual depth beyond solid color
    - [ ] Atmosphere matches the "autonomous AI" theme
    - [ ] Visual elements don't distract from content
    - [ ] Page feels crafted and intentional, not flat
    - [ ] Works well in both light and dark modes (if applicable)

- [ ] Task 7: Add entrance animations and motion design
  - File: `src/pages/index.astro:54-185`
  - Reference: `todos/design/006-p2-no-entrance-animations.md`
  - Acceptance:
    - [ ] Hero elements animate in with staggered timing
    - [ ] Feature cards have entrance animation
    - [ ] Animations feel smooth and polished (not jarring)
    - [ ] `prefers-reduced-motion` is respected
    - [ ] Page feels dynamic and alive on load

- [ ] Task 8: Strengthen typographic hierarchy
  - File: `src/pages/index.astro:78-80` (hero title)
  - File: `src/pages/index.astro:153-157` (feature title)
  - Reference: `todos/design/007-p3-weak-typographic-hierarchy.md`
  - Acceptance:
    - [ ] Hero title commands visual attention (significantly larger than other text)
    - [ ] Clear size distinction between feature titles and descriptions
    - [ ] Type scale creates obvious visual hierarchy
    - [ ] Line heights and spacing feel intentional, not default

- [ ] Task 9: Add distinct personality and visual identity
  - File: `src/pages/index.astro` (entire landing page)
  - Reference: `todos/design/008-p3-no-personality-identity.md`
  - Acceptance:
    - [ ] Landing page has a visual element unique to Ralph Borg
    - [ ] Design communicates "autonomous AI agent" concept visually
    - [ ] Someone could remember and describe this page to others
    - [ ] Visual identity is cohesive with the product's purpose
    - [ ] Design has a clear point of view, not generic tech aesthetic

#### Phase 3: Verification
- [ ] Task 10: Run full test suite and verify all fixes work
  - Run: Full test suite
  - Validate: All quality gates pass

### In Progress

### Completed

### Blocked

## Quality Gates

### Per-Task Gates
- [ ] Lint passes on changed files
- [ ] Types check on changed files
- [ ] Related tests pass

### Full Gates
- [ ] Types check: `bunx tsc --noEmit`

## Exit Criteria

- [ ] All requirements checked off
- [ ] All quality gates pass
- [ ] All tasks completed
- [ ] Code committed with meaningful messages

## Context

### Parent Spec
feat-ralph-borg-astro-website

### Source Todos

| Priority | Todo File | Issue |
|----------|-----------|-------|
| P2 | `todos/design/001-p2-generic-system-fonts.md` | Landing page uses generic system fonts instead of distinctive typography |
| P2 | `todos/design/002-p2-cookie-cutter-hero-layout.md` | Cookie-cutter centered hero layout lacks asymmetry and visual interest |
| P2 | `todos/design/003-p2-invisible-feature-cards.md` | Feature cards are barely visible with low contrast |
| P2 | `todos/design/004-p2-bland-buttons.md` | Buttons lack polish, character, and satisfying interactions |
| P2 | `todos/design/005-p2-no-visual-atmosphere.md` | No visual atmosphere or depth, just flat solid background |
| P2 | `todos/design/006-p2-no-entrance-animations.md` | No entrance animations or motion design |
| P3 | `todos/design/007-p3-weak-typographic-hierarchy.md` | Weak typographic hierarchy with compressed scale |
| P3 | `todos/design/008-p3-no-personality-identity.md` | No distinct personality or visual identity |

### Notes

These fixes originated from design review of feat-ralph-borg-astro-website.
Re-run `borg review` after fixes to verify issues are resolved.

## Iteration Log

### Iteration 1
- Completed Task 1: Verified dependencies and quality gates
- Added bun-types to fix TypeScript errors in test files
- Configured tsconfig.json with bun-types
- TypeScript check passes, build succeeds
- Completed Task 2: Replaced generic system fonts with distinctive typography
- Added JetBrains Mono for headlines (technical/CLI feel)
- Added Outfit for body text (modern geometric pairing)
- Fonts loaded via Google Fonts with preconnect for performance

### Iteration 2
- Completed Task 3: Break the cookie-cutter centered hero layout
- Added asymmetric hero grid (1.4fr 1fr on desktop) with left-aligned text
- Added hero visual element with loop glyph [⟳] and orbital ring
- Created asymmetric feature grid with primary card spanning 2 rows
- Added feature numbers (01, 02, 03) for visual rhythm
- Tertiary feature offset with margin for visual tension
- Mobile-first design: stacked/centered on small screens, asymmetric on desktop

### Iteration 3
- Completed Task 4: Make feature cards visible and impactful
- Added gradient backgrounds with cyan-to-green for visual presence
- Increased border opacity from 0.06 to 0.15/0.25 for visibility
- Added multi-layer box shadows for depth and dimension
- Updated description text from #6b8f7a to rgba(224,242,233,0.85) for WCAG AA contrast
- Added hover states with lift effect, glow, and intensified shadows
- Primary feature card has enhanced emphasis with stronger gradients

### Iteration 4
- Completed Task 5: Add polish and character to buttons
- Primary button: cyan-to-green gradient with animated shine sweep effect
- Secondary button: subtle cyan fill (8% opacity) with stronger border (1.5px, 40% opacity)
- Added JetBrains Mono font family for technical feel
- Smooth cubic-bezier transitions for springy hover lift
- Active/click states with scale(0.98) and inset shadows for tactile feedback
- Multi-layer box shadows for depth on both button states
