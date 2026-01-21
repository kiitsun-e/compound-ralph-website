---
priority: p2
tags: [design, ui, frontend-design, typography]
spec: feat-ralph-borg-astro-website
type: design
---
# Landing Page Uses Generic System Fonts

## Problem Statement
The landing page uses `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` - the most generic font stack possible. This violates the /frontend-design principle: "Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter."

System fonts are the #1 indicator of AI-generated, low-effort design. They communicate "this was made by a machine that doesn't care about aesthetics."

## Findings
- File: `src/pages/index.astro:62`
- Current: `font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
- Principle violated: "Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics"

## Recommended Action
Choose a distinctive font pairing that matches the "autonomous AI agent" personality of Ralph Borg. Options that would work:

**Option A - Monospace + Geometric (Technical/Precise feel)**
- Headlines: `JetBrains Mono` or `Space Mono` - reinforces the code/CLI nature
- Body: `Outfit` or `Sora` - modern geometric sans that pairs well

**Option B - Sharp + Clean (Futuristic/Sophisticated)**
- Headlines: `Clash Display` or `Satoshi` - sharp, distinctive character
- Body: `Inter` is acceptable for body only if headline is distinctive

**Option C - Bold + Character (Playful/Memorable)**
- Headlines: `Bricolage Grotesque` or `Unbounded` - has personality
- Body: `DM Sans` or `Work Sans`

Add via Google Fonts or self-hosted WOFF2 files. Example implementation:
```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600;700&family=Outfit:wght@400;500&display=swap');

.landing {
  font-family: 'Outfit', sans-serif;
}

.hero-title, .feature-title {
  font-family: 'JetBrains Mono', monospace;
}
```

## Acceptance Criteria
- [ ] Landing page uses a distinctive display font for headlines (not system fonts)
- [ ] Body text uses an intentional font choice that pairs well with headlines
- [ ] Font choice reflects the "autonomous AI agent" personality
- [ ] Fonts are properly loaded (web fonts or self-hosted)
- [ ] No system font fallbacks visible in the hero section
