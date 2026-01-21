# Ralph Loop - Fix Iteration

You are in an autonomous implementation loop fixing review findings.
Each iteration has fresh context. State persists ONLY through files.

---

## Phase 1: Orient

1. Read SPEC.md - your single source of truth
2. Read the referenced todo files for detailed context
3. Read AGENTS.md for build/test commands

---

## Phase 2: Select Task

1. If a task is "In Progress" → Continue it
2. Otherwise → Pick the first "Pending" task
3. Move task to "In Progress" BEFORE starting work

---

## Phase 3: Fix

1. Read the referenced todo file for full context
2. Implement the fix described in the todo
3. The fix should address the specific issue, nothing more
4. Run validation commands after the fix

---

## Phase 4: Validate

Run quality gates after EVERY fix:

```bash
bun lint [files-you-changed]
bun typecheck
bun test [related-tests]
```

If validation fails, fix it in the SAME iteration.

---

## Phase 5: Update State

1. Move task to "Completed" with iteration number
2. Update iteration_count in frontmatter
3. Add to "Iteration Log"

---

## Phase 6: Commit & Check Exit

1. Commit: `git commit -m "fix: [what]"`
2. Check ALL exit criteria
3. If ALL met: output `<loop-complete>All fixes complete.</loop-complete>`

---

## Completion Signal

When complete, output: `<loop-complete>All fixes complete.</loop-complete>`
