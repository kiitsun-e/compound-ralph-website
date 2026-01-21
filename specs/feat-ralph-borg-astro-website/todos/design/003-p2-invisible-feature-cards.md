---
priority: p2
tags: [design, ui, frontend-design, components]
spec: feat-ralph-borg-astro-website
type: design
---
# Feature Cards Are Barely Visible

## Problem Statement
The feature cards use `background: rgba(255, 255, 255, 0.03)` and `border: 1px solid rgba(255, 255, 255, 0.06)` - making them almost invisible against the dark background. This timid approach screams "I was afraid to commit to a design decision."

The description text uses `color: var(--landing-muted, #6b8f7a)` which is low contrast and hard to read.

This violates /frontend-design principles:
- "Dominant colors with sharp accents outperform timid, evenly-distributed palettes"
- "Create atmosphere and depth rather than defaulting to solid colors"

## Findings
- File: `src/pages/index.astro:146-151` (feature card styles)
- Current background: `rgba(255, 255, 255, 0.03)` - essentially invisible
- Current border: `rgba(255, 255, 255, 0.06)` - essentially invisible
- Current description color: `#6b8f7a` - low contrast gray-green
- Principle violated: "Dominant colors with sharp accents"

## Recommended Action
Make the cards visually present. They should feel like distinct elements, not ghost placeholders.

**Option A - Glassmorphism with substance**
```css
.feature {
  background: rgba(0, 229, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 229, 255, 0.15);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
```

**Option B - Solid with accent borders**
```css
.feature {
  background: rgba(10, 20, 16, 0.8);
  border-left: 3px solid var(--landing-accent);
  border-radius: 0;
}
```

**Option C - Gradient backgrounds**
```css
.feature {
  background: linear-gradient(
    135deg,
    rgba(0, 229, 255, 0.08) 0%,
    rgba(0, 255, 159, 0.04) 100%
  );
  border: 1px solid rgba(0, 229, 255, 0.2);
}
```

For the description text:
```css
.feature-desc {
  color: rgba(224, 242, 233, 0.85); /* Higher contrast */
}
```

## Acceptance Criteria
- [ ] Feature cards are clearly visible against the background
- [ ] Cards have visual presence (shadows, borders, or backgrounds that stand out)
- [ ] Description text has sufficient contrast (WCAG AA minimum)
- [ ] Cards feel like distinct UI elements, not afterthoughts
- [ ] Hover states are visible and feel intentional
