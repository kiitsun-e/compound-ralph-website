# Ralph Borg - Comprehensive Documentation Reference

> Autonomous Feature Implementation System combining compound-engineering's rich planning with the Ralph Loop technique for iterative, self-correcting code generation.

---

## Table of Contents

1. [Overview](#overview)
2. [Philosophy](#philosophy)
3. [Commands Reference](#commands-reference)
4. [Key Concepts](#key-concepts)
5. [File Structures](#file-structures)
6. [Technical Architecture](#technical-architecture)
7. [Dependencies and Requirements](#dependencies-and-requirements)
8. [Environment Variables](#environment-variables)
9. [Existing Documentation Analysis](#existing-documentation-analysis)

---

## Overview

**Ralph Borg** is a bash-based autonomous feature implementation system (version 2.0.0) that enables "fire-and-forget" software development workflows. It combines:

- **Rich, human-guided planning** using compound-engineering workflows
- **Autonomous implementation** using the Ralph Loop technique
- **Continuous backpressure** (tests, lint, type checking) for self-correction
- **Context preservation** across iterations and sessions

**Source file:** `/Users/marcus/Desktop/coding-projects/ralph-borg/borg` (approximately 3,300 lines of bash)

---

## Philosophy

The core philosophy is expressed in two key principles:

> **Planning is human-guided and rich. Implementation is autonomous and focused.**

> **Each iteration: fresh context + file-based state = no degradation.**

The system achieves compounding value through:

1. **Rich Planning Phase** - Human + AI collaboration to create deeply researched specs
2. **Autonomous Building Phase** - Loop executes one task per iteration with fresh context
3. **Continuous Backpressure** - Tests, lint, types run every iteration for self-correction
4. **Compounding Learnings** - Notes and patterns accumulate across iterations

---

## Commands Reference

### `borg init [path]`

**Purpose:** Initialize a project for Ralph Borg

**What it does:**
- Creates `specs/` and `plans/` directories
- Generates `AGENTS.md` with auto-detected build/test commands
- Initializes `.borg/context.yaml` for context preservation
- Discovers project configuration and saves to `.borg/project.json`
- Adds `specs/.history/` to `.gitignore`

**Supported project types:** bun, npm, yarn, pnpm, rails, python, go, rust

**Example:**
```bash
borg init                    # Current directory
borg init ~/projects/myapp   # Specific path
```

---

### `borg plan <description>`

**Purpose:** Create and enrich a feature plan using compound-engineering workflows

**What it does:**
- Runs `/workflows:plan` to create structured plan
- Enables running `/deepen-plan` to enrich with 40+ parallel research agents
- Outputs to `plans/<feature-name>.md`

**Mode:** Interactive (human answers questions, refines scope)

**Example:**
```bash
borg plan "add dark mode toggle with system preference detection"
```

---

### `borg spec <plan-file>`

**Purpose:** Convert a plan to the SPEC.md format for autonomous implementation

**What it does:**
- Creates `specs/<feature>/` directory
- Generates `SPEC.md` (state file) and `PROMPT.md` (iteration instructions)
- Auto-detects quality gates based on project type
- Injects accumulated context from `.borg/context.yaml`

**Example:**
```bash
borg spec plans/add-dark-mode-toggle.md
```

---

### `borg implement [spec-dir]`

**Purpose:** Start the autonomous implementation loop

**What it does:**
- Reads SPEC.md as single source of truth
- Executes one task per iteration
- Runs all quality gates (backpressure) each iteration
- Updates state and commits progress
- Continues until completion or max iterations

**Priority order for spec discovery:**
1. Fix specs with `building` status
2. Fix specs with `pending` status
3. Regular specs with `building` status
4. Regular specs with `pending` status

**Mode:** Autonomous (walk away, check back later)

**Examples:**
```bash
borg implement                        # Auto-find active spec
borg implement specs/dark-mode/       # Specific spec
MAX_ITERATIONS=100 borg implement     # Override max iterations
```

---

### `borg review [spec] [options]`

**Purpose:** Run comprehensive code and/or design review

**Options:**
- `--design` - Include design review (requires dev server)
- `--design-only` - Only run design review
- `--url URL` - Specify dev server URL for design review

**Output:**
- Code findings saved to: `specs/<feature>/todos/code/`
- Design findings saved to: `specs/<feature>/todos/design/`

**Example:**
```bash
borg review specs/my-feature/
borg review --design --url http://localhost:3000
borg review --design-only
```

---

### `borg fix [type] [spec]`

**Purpose:** Convert review todos into fix specs for autonomous implementation

**Arguments:**
- `code` - Fix code review issues only
- `design` - Fix design review issues only
- (no argument) - Fix all issues

**Output:**
- Creates `specs/<feature>/fixes/code/SPEC.md`
- Creates `specs/<feature>/fixes/design/SPEC.md`

**Example:**
```bash
borg fix code                # Fix code issues
borg fix design              # Fix design issues
borg fix                     # Fix all issues
```

---

### `borg design [url] [iterations]`

**Purpose:** Proactive design improvement loop using /frontend-design skill

**Arguments:**
- `url` - Dev server URL (auto-detected if not provided)
- `iterations` - Number of improvement iterations (default: 5)

**What it does:**
- Takes screenshots of current UI
- Applies /frontend-design skill for distinctive design
- Iterates to refine until design is polished
- Saves screenshots to `design-iterations/`

**Example:**
```bash
borg design                        # Auto-detect server
borg design http://localhost:3000  # Specific URL
borg design http://localhost:5173 10  # 10 iterations
```

---

### `borg status`

**Purpose:** Show progress of all specs

**Output:**
```
Spec                          Status      Iterations  Tasks
----                          ------      ----------  -----
dark-mode                     building    5           3/7
user-auth                     complete    12          8/8
payment-flow                  pending     0           0/5
```

---

### `borg learnings [category] [limit]`

**Purpose:** View project learnings from `.borg/learnings.json`

**Categories:** environment, pattern, gotcha, fix, discovery, iteration_failure

**Example:**
```bash
borg learnings                    # All learnings (last 20)
borg learnings pattern 10         # Pattern learnings (last 10)
```

---

### `borg help`

**Purpose:** Show help documentation

---

## Key Concepts

### Backpressure

**Definition:** Automated feedback mechanisms that let agents self-correct without human intervention.

> "Instead of telling the agent what to do, you engineer an environment where wrong outputs get rejected automatically."

#### Types of Backpressure

**Hard Gates (Deterministic)** - Binary pass/fail with no ambiguity:

| Gate | What it catches | Example |
|------|-----------------|---------|
| Tests | Logic errors, regressions | `bun test` |
| Type checker | Interface mismatches | `bun run typecheck` |
| Linter | Style violations, common bugs | `bun run lint` |
| Build | Syntax errors, missing deps | `bun run build` |
| Security scanner | Known vulnerabilities | `bun run audit` |

**Soft Gates (Heuristic)** - Require interpretation but still automated:

| Gate | What it catches | Implementation |
|------|-----------------|----------------|
| Coverage threshold | Missing tests | `bun test --coverage` + check percentage |
| Bundle size | Bloat | `bun run analyze` + size check |
| Screenshot comparison | Visual regressions | agent-browser + image diff |
| Performance benchmark | Speed regressions | Lighthouse CI, k6 |

**LLM-as-Judge (Subjective)** - For criteria that need reasoning:
- Code review quality checks
- UX review for intuitiveness

#### Enforced Backpressure Patterns (v1.3.0+)

1. **Dependencies First** - Task 1 is ALWAYS "Install dependencies"
2. **Tests With Code** - Each implementation task specifies its test file, created in same iteration
3. **Visual Verification for UI** - UI tasks require agent-browser screenshots
4. **Validate Per-Task** - Quality gates run after each task, not deferred to end

**Documentation:** `/Users/marcus/Desktop/coding-projects/ralph-borg/docs/backpressure.md`

---

### The Ralph Loop / Iteration Loop

The core autonomous execution cycle. Each iteration follows these phases:

```
Phase 0: Discovery/Orient
  - Load borg context (.borg/project.json, .borg/learnings.json)
  - Read SPEC.md (source of truth)
  - Read plan file
  - Check iteration log for learnings
  - Study key files
  - Gap analysis (what SPEC says vs reality)

Phase 1: Environment Setup
  - Install dependencies
  - Start services (Docker, databases)
  - Set up environment variables
  - Run database migrations
  - Verify environment works

Phase 2: Orient (if already running)
  - Load fresh context from SPEC.md
  - Read AGENTS.md for commands
  - Check recent git history

Phase 3: Select Task
  - Continue "In Progress" if exists
  - Otherwise pick highest priority "Pending"
  - Move to "In Progress" BEFORE starting
  - ONE TASK PER ITERATION

Phase 4: Investigate (MANDATORY)
  - Search codebase for existing implementations
  - Check if task is partially done
  - Update notes with discoveries
  - DON'T ASSUME NOT IMPLEMENTED

Phase 5: Implement
  - Execute the task
  - Follow patterns from Context section
  - Write tests alongside (not after)
  - Source file + Test file in SAME iteration

Phase 6: Validate
  - Run all quality gates (backpressure)
  - Fix issues before continuing
  - Per-task gates + Full iteration gates

Phase 7: Integration Verification
  - Verify services work
  - Test API endpoints respond
  - Screenshot UI to verify rendering

Phase 8: Update State
  - Move task to "Completed"
  - Add learnings to Notes
  - Update iteration count
  - Add to Iteration Log
  - Update .borg/learnings.json

Phase 9: Commit
  - git commit meaningful progress

Phase 10: Check Exit Criteria
  - All tasks complete?
  - All requirements met?
  - All quality gates pass?
  - If ALL met: output <loop-complete>
  - If not: next iteration continues
```

**Completion Signal:**
```
<loop-complete>Feature complete. All exit criteria met.</loop-complete>
```

---

### SPEC.md Format

The **single source of truth** for feature implementation state.

#### Frontmatter (YAML)

```yaml
---
name: feature-name
status: pending | building | complete | blocked
created: YYYY-MM-DD
plan_file: plans/feature-name.md
iteration_count: 0
project_type: bun
---
```

#### Sections

1. **Overview** - 2-3 sentence description
2. **Requirements** - Checkboxes (don't change during implementation)
3. **Tasks**
   - Pending (organized by phases)
   - In Progress (only ONE at a time)
   - Completed (with iteration numbers)
   - Blocked (with references to blockers)
4. **Quality Gates**
   - Per-Task Gates
   - Full Gates (per iteration)
   - Visual Gates (for UI changes)
5. **Exit Criteria** - All must be true to complete
6. **Context**
   - Key Files (source file | test file | visual check)
   - Patterns to Follow
   - Notes (grows over time with learnings)
7. **Iteration Log** - History of what each iteration accomplished

#### Task Ordering Rules (Enforced)

1. Setup tasks MUST be first (dependencies, config)
2. Each implementation task MUST specify its test file
3. UI tasks MUST specify visual verification
4. NEVER create "run tests" as a separate task at the end

**Template:** `/Users/marcus/Desktop/coding-projects/ralph-borg/templates/SPEC-template.md`

---

### PROMPT.md Format

Instructions for each iteration of the autonomous loop.

**Template location:** `/Users/marcus/Desktop/coding-projects/ralph-borg/templates/PROMPT-template.md`

Contains:
- Phase-by-phase instructions (0-10)
- Accumulated context injection point (`{{ACCUMULATED_CONTEXT}}`)
- Hard rules that must never be violated
- Common scenario handling (empty repo, existing repo, broken env, flaky tests)

---

### AGENTS.md Structure

Operational commands file. Should be kept under 60 lines.

```markdown
## Build
bun install && bun run build

## Test
bun test

## Lint
bun run lint && bun run typecheck

## Learnings
- Use `bun test --watch` for faster iteration
- Types are in `src/types/` not `types/`
```

---

### Context Preservation

Files in `.borg/` directory that persist across iterations and sessions:

#### `.borg/project.json`

Discovered project configuration:
```json
{
  "discovered": "2026-01-21T...",
  "package_manager": "bun",
  "commands": {
    "test": "bun test --run",
    "test_e2e": "bun run test:e2e",
    "build": "bun run build",
    "db": "bun run db:push",
    "dev": "bun run dev"
  },
  "paths": {
    "e2e_dir": "e2e"
  },
  "mtimes": {
    "package_json": "...",
    "lockfile": "..."
  }
}
```

#### `.borg/context.yaml`

Accumulated learnings that survive across fresh Claude instances:
```yaml
learnings:
  - "Discovery from iteration 3"
errors_fixed:
  - error: "Type error in utils.ts"
    fix: "Added missing generic parameter"
patterns_discovered:
  - "Use $state() rune for reactivity in Svelte 5"
```

#### `.borg/learnings.json`

Machine-readable learnings for current session:
- Categories: environment, pattern, gotcha, fix, discovery, iteration_failure

---

### Self-Healing

Automatic recovery from transient errors without human intervention.

**Recoverable errors (retried):**
- Network issues (ECONNRESET, ETIMEDOUT, ENOTFOUND, socket hang up)
- Rate limiting (429, rate limit messages)
- Server errors (502, 503, overloaded)
- Empty responses ("No messages returned")
- Timeouts

**Unfixable errors (stop immediately):**
- API key issues
- Authentication failures
- Permission denied
- Disk full / out of memory
- SIGKILL
- Network errors (Unable to connect)

**Retry behavior:**
- Initial delay: `RETRY_DELAY` (default 5s)
- Exponential backoff: 5s -> 10s -> 20s
- Max retries: `MAX_RETRIES` (default 3)
- After max retries: skip to next iteration

**Self-healing context injection:**
When an iteration fails, error context is appended to PROMPT.md for the next attempt.

---

### Prompting Patterns

Specific language patterns that improve agent behavior:

| Pattern | Example | Purpose |
|---------|---------|---------|
| "study" not "read" | "Study the SPEC.md file" | Implies deeper analysis |
| "don't assume not implemented" | Search first, then implement | Prevents duplicate code |
| "ultrathink" | "Before this decision, ultrathink" | Triggers deeper reasoning |
| "capture the why" | "Update notes and capture the why" | Documents reasoning |
| "one task per loop" | "Select ONE task" | Enforces focus |
| "parallel subagents" | "Use up to 10 parallel subagents" | Enables parallelization |
| "only 1 subagent for build/tests" | For backpressure control | Prevents confusing output |

**Prompt structure (0-9-999 pattern):**
- 0a-0d: Orientation (load context, read files)
- 1-8: Main instructions (what to do this iteration)
- 99+: Guardrails (what NOT to do, safety rails)

**Documentation:** `/Users/marcus/Desktop/coding-projects/ralph-borg/docs/prompting-patterns.md`

---

## File Structures

### Project Structure After Initialization

```
your-project/
├── .borg/
│   ├── project.json          # Discovered commands and config
│   ├── context.yaml          # Accumulated learnings (persists)
│   └── learnings.json        # Machine-readable learnings
├── AGENTS.md                 # Build/test/lint commands
├── plans/
│   └── feature-name.md       # Rich plans from /workflows:plan
└── specs/
    ├── SPEC-template.md      # Template for reference
    └── feature-name/
        ├── SPEC.md           # State file (single source of truth)
        ├── PROMPT.md         # Iteration instructions
        ├── .history/         # Logs from each iteration
        │   ├── 001-20260121-143022.md
        │   └── 002-20260121-143145.md
        ├── todos/            # After borg review
        │   ├── code/         # Code review findings
        │   │   └── 001-p1-issue.md
        │   └── design/       # Design review findings
        │       └── 001-p2-issue.md
        └── fixes/            # After borg fix
            ├── code/
            │   ├── SPEC.md
            │   └── PROMPT.md
            └── design/
                ├── SPEC.md
                └── PROMPT.md
```

### Ralph Borg Installation Structure

```
ralph-borg/
├── borg                      # Main executable (bash script, ~3300 lines)
├── README.md                 # Project documentation
├── docs/
│   ├── backpressure.md       # Backpressure concept documentation
│   ├── prompting-patterns.md # Prompting best practices
│   └── workflow-example.md   # Complete workflow walkthrough
├── templates/
│   ├── SPEC-template.md      # SPEC.md template
│   └── PROMPT-template.md    # PROMPT.md template (iteration instructions)
├── plans/
│   └── feat-production-grade-autonomous-loop.md  # Internal feature plan
└── scripts/                  # (empty in current state)
```

---

## Technical Architecture

### Core Functions in `borg` Script

**Utility Functions:**
- `log_info()`, `log_success()`, `log_warn()`, `log_error()`, `log_step()` - Colored output
- `run_claude_with_retry()` - Runs Claude with timeout and retry logic
- `check_prerequisites()` - Verifies claude and git are available

**Project Discovery:**
- `detect_project_type()` - Identifies project type from lockfiles/config
- `discover_project()` - Creates .borg/project.json with commands
- `get_project_config()` - Reads values from .borg/project.json
- `check_config_changed()` - Detects if rediscovery is needed

**Context Management:**
- `init_context()` - Creates .borg/context.yaml
- `add_context_learning()` - Adds learning to context
- `add_context_error_fix()` - Records error/fix pair
- `add_context_pattern()` - Records discovered pattern
- `prune_context()` - Keeps context bounded
- `get_context_for_prompt()` - Formats context for injection

**Learnings (JSON):**
- `add_learning()` - Adds to .borg/learnings.json
- `get_learnings_summary()` - Retrieves formatted learnings

**Self-Healing:**
- `is_unfixable_error()` - Determines if error needs human intervention
- `add_error_to_prompt()` - Injects error context for retry
- `record_successful_fix()` - Records fix for future learning
- `record_blocked_iteration()` - Handles blocked state

**Quality Gates:**
- `discover_quality_commands()` - Auto-detects quality commands by stack
- `run_quality_gates()` - Executes all discovered gates
- `run_iteration_checks()` - Lightweight per-iteration checks
- `verify_integration()` - Verifies services, API, UI work

**Commands:**
- `cmd_init()` - Initialize project
- `cmd_plan()` - Create/deepen plan
- `cmd_spec()` - Convert plan to SPEC
- `cmd_implement()` - Run autonomous loop
- `cmd_review()` - Run code/design review
- `cmd_fix()` - Create fix specs from todos
- `cmd_design()` - Design improvement loop
- `cmd_status()` - Show all specs status
- `cmd_learnings()` - View learnings
- `cmd_help()` - Show help

**Graceful Shutdown:**
- `cleanup_and_exit()` - Handles Ctrl+C gracefully
- Tracks child PIDs for clean termination

---

## Dependencies and Requirements

### Required

1. **Claude Code CLI** - [Install from claude.ai](https://claude.ai/code)
2. **git** - Version control

### Optional (for enhanced features)

1. **ralph-wiggum plugin** - For internal loop mode
   ```bash
   claude "/plugin install ralph-wiggum@claude-plugins-official"
   ```

2. **compound-engineering plugin** - For rich planning
   ```bash
   claude "/plugin install compound-engineering"
   ```

3. **yq** - YAML processor for context management (fallback exists without it)

4. **jq** - JSON processor for project config parsing (fallback exists without it)

### Supported Project Types

| Project Type | Detection | Quality Gates |
|-------------|-----------|---------------|
| Bun | `bun.lockb` or `bun.lock` | `bun test`, `bun run lint`, `bun run typecheck`, `bun run build` |
| npm | `package-lock.json` | `npm run test`, `npm run lint`, `npx tsc --noEmit` |
| yarn | `yarn.lock` | `yarn test`, `yarn lint` |
| pnpm | `pnpm-lock.yaml` | `pnpm run test`, `pnpm run lint` |
| Rails | `Gemfile` + `bin/rails` | `bin/rails test`, `bundle exec rubocop`, `bundle exec brakeman` |
| Python | `pyproject.toml` or `requirements.txt` | `pytest`, `ruff check .`, `mypy .` |
| Go | `go.mod` | `go test ./...`, `golangci-lint run` |
| Rust | `Cargo.toml` | `cargo test`, `cargo clippy -- -D warnings` |

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `MAX_ITERATIONS` | 50 | Maximum iterations before stopping |
| `ITERATION_DELAY` | 3 | Seconds between iterations |
| `MAX_RETRIES` | 3 | Retries per iteration on transient errors |
| `RETRY_DELAY` | 5 | Initial retry delay (doubles with each retry) |
| `ITERATION_TIMEOUT` | 600 | Max seconds per iteration before timeout |
| `MAX_CONSECUTIVE_FAILURES` | 3 | Stop after N consecutive failures |
| `MAX_SELF_HEAL_ATTEMPTS` | 3 | Attempts to self-heal from errors |

**Context pruning limits:**
- `CONTEXT_MAX_LEARNINGS` = 50
- `CONTEXT_MAX_ERRORS` = 20
- `CONTEXT_MAX_PATTERNS` = 30

**Example usage:**
```bash
MAX_ITERATIONS=100 ITERATION_DELAY=5 borg implement
MAX_RETRIES=5 RETRY_DELAY=10 borg implement  # More aggressive retries
```

---

## Existing Documentation Analysis

### Current Documentation Files

| File | Content | Lines |
|------|---------|-------|
| `/Users/marcus/Desktop/coding-projects/ralph-borg/README.md` | Main project documentation | 406 |
| `/Users/marcus/Desktop/coding-projects/ralph-borg/docs/backpressure.md` | Backpressure concept deep-dive | 241 |
| `/Users/marcus/Desktop/coding-projects/ralph-borg/docs/prompting-patterns.md` | Effective prompting techniques | 268 |
| `/Users/marcus/Desktop/coding-projects/ralph-borg/docs/workflow-example.md` | Complete dark mode toggle example | 440 |

### Documentation Patterns Observed

1. **Header style:** H1 for title, H2 for major sections, H3 for subsections
2. **Code blocks:** Triple backticks with language specification
3. **Tables:** Markdown tables for comparisons and references
4. **Admonitions:** Block quotes for important notes/philosophy statements
5. **Examples:** Extensive real-world examples with expected output
6. **ASCII diagrams:** Box diagrams for iteration loops and architecture
7. **Checkboxes:** Used in SPEC templates for task tracking

### Topics Needing Documentation

Based on analysis, these could benefit from dedicated documentation pages:

1. **Getting Started / Quick Start Guide** - Installation + first feature
2. **CLI Reference** - All commands with full options
3. **SPEC.md Reference** - Complete format specification
4. **Iteration Loop Deep Dive** - Detailed phase breakdown
5. **Self-Healing & Error Recovery** - How automatic recovery works
6. **Context Preservation** - How learnings persist
7. **Project Type Configuration** - How auto-detection works
8. **Troubleshooting Guide** - Common issues and solutions
9. **Best Practices** - Task granularity, planning tips
10. **Architecture Overview** - How all pieces fit together

---

## Sources and Attribution

Original concepts from:
- [Geoffrey Huntley's Ralph Wiggum Technique](https://ghuntley.com/ralph/)
- [Backpressure in AI Workflows](https://ghuntley.com/pressure/)
- [The Ralph Wiggum Playbook](https://paddo.dev/blog/ralph-wiggum-playbook/)
- [Official Anthropic Ralph Wiggum Plugin](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum)
- [frankbria's Enhanced Implementation](https://github.com/frankbria/ralph-claude-code)
- [Don't Waste Your Backpressure](https://banay.me/dont-waste-your-backpressure/)

---

## Appendix: Complete Workflow Example

See `/Users/marcus/Desktop/coding-projects/ralph-borg/docs/workflow-example.md` for a complete walkthrough implementing a dark mode toggle feature, including:

1. Project initialization
2. AGENTS.md review
3. Rich plan creation
4. SPEC conversion and refinement
5. Autonomous implementation (8 iterations)
6. Progress monitoring
7. Post-completion review
8. Final SPEC state
