---
priority: p2
tags: [design, ui, frontend-design, layout]
spec: feat-ralph-borg-astro-website
type: design
---
# Cookie-Cutter Centered Hero Layout

## Problem Statement
The landing page uses the most predictable layout possible: centered hero with title, tagline, two buttons, and three equal-width cards below. This is the default structure of every SaaS landing page template and every AI-generated design.

This violates /frontend-design principles:
- "Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements."
- "NEVER use generic AI-generated aesthetics... predictable layouts and component patterns"

The current layout has:
- Perfect center alignment (boring)
- Equal spacing everywhere (no rhythm)
- Three identical cards in a row (template-like)
- No visual tension or surprise

## Findings
- File: `src/pages/index.astro:18-50` (HTML structure)
- File: `src/pages/index.astro:72-75` (hero CSS - text-align: center)
- File: `src/pages/index.astro:141-144` (features grid - equal columns)
- Principle violated: "Unexpected layouts. Asymmetry. Overlap."

## Recommended Action
Break the grid. Create visual interest through asymmetry and unexpected positioning.

**Option A - Asymmetric Hero**
- Title on left, decorative element on right
- Feature cards with varied sizes (one large, two small)
- Off-center alignment with generous whitespace

**Option B - Diagonal Flow**
- Hero content positioned at an angle
- Features cascade down with staggered positioning
- Creates visual movement and energy

**Option C - Overlap & Depth**
- Title overlaps with decorative background shapes
- Feature cards stack with subtle overlap
- Creates depth and visual hierarchy

Example CSS for asymmetric hero:
```css
.hero {
  text-align: left;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  gap: 4rem;
}

.features {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
}

.feature:first-child {
  grid-row: span 2;
}
```

Add visual elements:
- Background gradient mesh or geometric shapes
- Decorative lines or borders that break the grid
- Subtle rotation on elements

## Acceptance Criteria
- [ ] Hero layout breaks the centered symmetry pattern
- [ ] Feature cards have varied visual weight (not three identical boxes)
- [ ] Layout has visual tension or unexpected elements
- [ ] Design feels intentional and distinctive, not templated
- [ ] Layout still works on mobile (can be simpler/centered on small screens)
