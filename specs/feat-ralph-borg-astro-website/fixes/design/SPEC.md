---
name: feat-ralph-borg-astro-website-fixes-design
status: complete
created: 2026-01-21
parent_spec: feat-ralph-borg-astro-website
fix_type: design
todo_count: 8
iteration_count: 7
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
- [x] Background has visual atmosphere and depth beyond solid color
- [x] Page has entrance animations with staggered reveals
- [x] Typography has dramatic hierarchy with clear size distinctions
- [x] Landing page has distinct visual identity unique to Ralph Borg

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

- [x] Task 6: Add visual atmosphere and depth to background (completed: iteration 5)
  - File: `src/pages/index.astro:57-61`
  - Reference: `todos/design/005-p2-no-visual-atmosphere.md`
  - Acceptance:
    - [x] Background has visual depth beyond solid color
    - [x] Atmosphere matches the "autonomous AI" theme
    - [x] Visual elements don't distract from content
    - [x] Page feels crafted and intentional, not flat
    - [x] Works well in both light and dark modes (if applicable)

- [x] Task 7: Add entrance animations and motion design (completed: iteration 6)
  - File: `src/pages/index.astro:54-185`
  - Reference: `todos/design/006-p2-no-entrance-animations.md`
  - Acceptance:
    - [x] Hero elements animate in with staggered timing
    - [x] Feature cards have entrance animation
    - [x] Animations feel smooth and polished (not jarring)
    - [x] `prefers-reduced-motion` is respected
    - [x] Page feels dynamic and alive on load

- [x] Task 8: Strengthen typographic hierarchy (completed: iteration 7)
  - File: `src/pages/index.astro:78-80` (hero title)
  - File: `src/pages/index.astro:153-157` (feature title)
  - Reference: `todos/design/007-p3-weak-typographic-hierarchy.md`
  - Acceptance:
    - [x] Hero title commands visual attention (significantly larger than other text)
    - [x] Clear size distinction between feature titles and descriptions
    - [x] Type scale creates obvious visual hierarchy
    - [x] Line heights and spacing feel intentional, not default

- [x] Task 9: Add distinct personality and visual identity (completed: iteration 7)
  - File: `src/pages/index.astro` (entire landing page)
  - Reference: `todos/design/008-p3-no-personality-identity.md`
  - Acceptance:
    - [x] Landing page has a visual element unique to Ralph Borg
    - [x] Design communicates "autonomous AI agent" concept visually
    - [x] Someone could remember and describe this page to others
    - [x] Visual identity is cohesive with the product's purpose
    - [x] Design has a clear point of view, not generic tech aesthetic

#### Phase 3: Verification
- [x] Task 10: Run full test suite and verify all fixes work (completed: iteration 7)
  - Run: Full test suite
  - Validate: All quality gates pass

### In Progress

### Completed

### Blocked

## Quality Gates

### Per-Task Gates
- [x] Lint passes on changed files
- [x] Types check on changed files
- [x] Related tests pass

### Full Gates
- [x] Types check: `bunx tsc --noEmit`

## Exit Criteria

- [x] All requirements checked off
- [x] All quality gates pass
- [x] All tasks completed
- [x] Code committed with meaningful messages

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

### Iteration 5
- Completed Task 6: Add visual atmosphere and depth to background
- Added multi-layer gradient mesh with three radial gradients for ambient glow
- Cyan glow at top-left (15% 20%), green glow at bottom-right (85% 75%), subtle cyan at center-right (60% 40%)
- Added SVG noise texture overlay with fractal noise filter at 2.5% opacity for depth
- Noise overlay uses fixed positioning with pointer-events: none to not interfere with content
- Main content positioned above overlay with z-index: 1
- Works well in dark mode (the current theme), subtle enough to not distract

### Iteration 6
- Completed Task 7: Add entrance animations and motion design
- Added @keyframes: fadeInUp, fadeInScale, orbitSpin, gradientShift
- Hero title: fadeInUp 0.6s with no delay
- Hero tagline: fadeInUp 0.6s with 0.15s delay
- Hero buttons: fadeInUp 0.6s with 0.3s delay
- Hero visual: fadeInScale 0.8s with 0.2s delay
- Hero orbit: slow continuous 30s spin animation
- Hero name gradient: subtle 8s gradient shift animation for life
- Feature cards: fadeInUp with staggered delays (0.45s, 0.55s, 0.65s)
- Added prefers-reduced-motion media query to respect accessibility preferences

### Iteration 7
- Completed Task 8: Strengthen typographic hierarchy
- Hero title: 4rem (mobile) → 5.5rem (768px) → 6.5rem (1024px) for commanding presence
- Tighter letter-spacing on hero (-0.03em to -0.045em) for visual weight
- Hero line-height: 1.05 for tight, impactful display text
- Hero tagline: 1.375rem (mobile) → 1.5rem (desktop) with 1.5 line-height
- Feature titles: 1.375rem base with primary at 1.5rem (1.625rem on desktop)
- Feature descriptions: 1rem with 1.65 line-height for readability
- Added letter-spacing to feature titles (-0.01em) for polish
- Clear size ratio: hero (6.5rem) : feature title (1.625rem) : description (1rem) = ~6:1.6:1

- Completed Task 9: Add distinct personality and visual identity
- Added terminal window element with "$ borg implement" command - signature Ralph Borg visual
- Terminal has macOS-style traffic light dots (red/yellow/green) for recognition
- Added blinking cursor animation to suggest active/waiting state
- Added pulsing status indicator on glyph showing "agent is alive"
- Green pulse animation (2s cycle) communicates autonomous operation
- Visual elements tell a story: terminal (command) + loop glyph (processing) + status (alive)
- Memorable description: "the page with the terminal and glowing loop symbol"

- Completed Task 10: Run full test suite and verify all fixes work
- TypeScript check passes: `bunx tsc --noEmit`
- All 8 design requirements now complete
- All commits made with meaningful messages
