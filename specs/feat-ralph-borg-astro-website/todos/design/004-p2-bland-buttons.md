---
priority: p2
tags: [design, ui, frontend-design, components]
spec: feat-ralph-borg-astro-website
type: design
---
# Buttons Lack Polish and Character

## Problem Statement
The buttons are functional but generic. They have:
- Standard `border-radius: 6px` (the most common button radius)
- Basic solid fill with no texture
- Minimal hover effect (just translateY and shadow)
- No distinctive character

This violates /frontend-design principles:
- "Use animations for effects and micro-interactions"
- "Creative forms like gradient meshes, noise textures, geometric patterns"

The secondary button is especially weak - a gray border on a dark background with no fill makes it look disabled or unfinished.

## Findings
- File: `src/pages/index.astro:106-138` (button styles)
- Primary: Solid cyan fill, black text - functional but plain
- Secondary: Transparent with gray border - looks disabled/incomplete
- Hover: Simple translateY(-2px) - minimal interaction feedback
- Principle violated: "Use animations for effects and micro-interactions"

## Recommended Action
Make buttons feel crafted and responsive. They're call-to-action elements and should command attention.

**Primary button enhancements:**
```css
.btn-primary {
  background: linear-gradient(
    135deg,
    var(--landing-accent) 0%,
    var(--landing-accent-green) 100%
  );
  color: var(--landing-bg);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.btn-primary:hover::before {
  left: 100%;
}
```

**Secondary button enhancements:**
```css
.btn-secondary {
  background: rgba(0, 229, 255, 0.1);
  color: var(--landing-accent);
  border: 1px solid var(--landing-accent);
}

.btn-secondary:hover {
  background: rgba(0, 229, 255, 0.2);
}
```

**Better hover interactions:**
```css
.btn {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.2s ease,
              background 0.2s ease;
}

.btn:hover {
  transform: translateY(-3px) scale(1.02);
}

.btn:active {
  transform: translateY(0) scale(0.98);
}
```

## Acceptance Criteria
- [ ] Primary button has visual interest (gradient, shine, or texture)
- [ ] Secondary button doesn't look disabled (has visible fill or stronger border)
- [ ] Hover states are satisfying and feel responsive
- [ ] Active/click states provide feedback
- [ ] Buttons feel polished and intentional
