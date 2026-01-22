# Compound Ralph Documentation

Documentation website for [Compound Ralph](https://github.com/kiitsun-e/compound-ralph) — an autonomous feature implementation system.

## What is Compound Ralph?

Compound Ralph combines human-guided planning with autonomous code generation. You describe features, it builds them — with continuous backpressure (tests, lint, types) for self-correction.

```
cr plan "add user authentication"  # Rich, interactive planning
cr spec plans/add-user-auth.md     # Convert to implementation spec
cr implement                        # Fire and forget
```

## Running Locally

```bash
bun install
bun dev
```

Open [localhost:4321](http://localhost:4321).

## Project Structure

```
src/content/docs/
├── index.mdx              # Docs home
├── getting-started.mdx    # Installation & first feature
├── commands/              # CLI reference (init, plan, spec, implement, etc.)
└── concepts/              # Core concepts (backpressure, ralph-loop)
```

## Building

```bash
bun build      # Output to ./dist/
bun preview    # Preview production build
```

## Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- Custom dark terminal theme
- Bun for tooling
