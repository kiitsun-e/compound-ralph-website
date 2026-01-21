---
priority: p3
tags: [design, ui, frontend-design, typography]
spec: feat-ralph-borg-astro-website
type: design
---
# Weak Typographic Hierarchy

## Problem Statement
The typographic scale is too compressed and lacks dramatic contrast:
- Hero title: 3.5rem (desktop: 4.5rem)
- Hero tagline: 1.25rem (desktop: 1.375rem)
- Feature title: 1.125rem
- Feature description: 0.9375rem

The ratio between hero title and feature title is only ~3x (4.5/1.125). This creates a weak hierarchy where nothing truly dominates the page.

The feature titles at 1.125rem are almost the same size as the body text (0.9375rem) - only 1.2x larger.

## Findings
- File: `src/pages/index.astro:78-80` (hero title size)
- File: `src/pages/index.astro:153-157` (feature title size)
- Hero: 4.5rem → 72px
- Feature title: 1.125rem → 18px
- Feature desc: 0.9375rem → 15px
- Contrast ratios are too subtle
- Principle violated: Needs stronger hierarchy between elements

## Recommended Action
Create dramatic hierarchy with bolder size contrasts.

**Enhanced type scale:**
```css
.hero-title {
  font-size: clamp(3rem, 8vw, 6rem); /* Bigger, more dramatic */
  font-weight: 800; /* Bolder */
  letter-spacing: -0.03em; /* Tighter tracking */
  line-height: 1;
}

.hero-tagline {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.5;
  max-width: 32ch; /* Better line length */
}

.feature-title {
  font-size: 1.375rem; /* Bump up */
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
}

.feature-desc {
  font-size: 1rem;
  line-height: 1.65;
}
```

**Add visual hierarchy cues:**
- Make hero title significantly larger
- Use different font weights for hierarchy
- Consider uppercase for feature titles to differentiate from body
- Add subtle color differentiation between heading levels

## Acceptance Criteria
- [ ] Hero title commands visual attention (significantly larger than other text)
- [ ] Clear size distinction between feature titles and descriptions
- [ ] Type scale creates obvious visual hierarchy
- [ ] Line heights and spacing feel intentional, not default
