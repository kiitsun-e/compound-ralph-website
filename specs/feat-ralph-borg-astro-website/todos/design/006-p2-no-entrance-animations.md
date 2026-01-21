---
priority: p2
tags: [design, ui, frontend-design, motion]
spec: feat-ralph-borg-astro-website
type: design
---
# No Entrance Animations or Motion Design

## Problem Statement
The landing page loads as a static wall of content with no motion. There's no:
- Staggered reveal of hero elements
- Fade-in or slide-in animations
- Any indication that this is a dynamic, modern product

This violates /frontend-design principles:
- "Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions"
- "Use animations for effects and micro-interactions"

For a tool called "Ralph Borg" that's about autonomous AI agents, the landing should feel alive and dynamic.

## Findings
- File: `src/pages/index.astro:54-185` (all styles)
- No @keyframes defined
- No animation properties
- No animation-delay for staggered effects
- Only transition exists: button hover (transform 0.15s)
- Principle violated: "well-orchestrated page load with staggered reveals"

## Recommended Action
Add entrance animations that feel smooth and intentional.

**Hero staggered reveal:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.hero-tagline {
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: 0.15s;
  opacity: 0;
}

.hero-buttons {
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}
```

**Feature cards cascade:**
```css
.feature {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.feature:nth-child(1) { animation-delay: 0.45s; }
.feature:nth-child(2) { animation-delay: 0.55s; }
.feature:nth-child(3) { animation-delay: 0.65s; }
```

**Optional: subtle pulse on title gradient**
```css
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-name {
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}
```

**Respect motion preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Acceptance Criteria
- [ ] Hero elements animate in with staggered timing
- [ ] Feature cards have entrance animation
- [ ] Animations feel smooth and polished (not jarring)
- [ ] `prefers-reduced-motion` is respected
- [ ] Page feels dynamic and alive on load
