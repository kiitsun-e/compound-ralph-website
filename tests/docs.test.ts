import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const DOCS_DIR = join(import.meta.dir, "../src/content/docs");
const COMMANDS_DIR = join(DOCS_DIR, "commands");

// Helper to read MDX file content
function readDoc(relativePath: string): string {
  const fullPath = join(DOCS_DIR, relativePath);
  if (!existsSync(fullPath)) {
    throw new Error(`Doc file not found: ${fullPath}`);
  }
  return readFileSync(fullPath, "utf-8");
}

// Helper to extract frontmatter
function extractFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const frontmatter: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      frontmatter[key.trim()] = valueParts.join(":").trim();
    }
  });
  return frontmatter;
}

describe("Getting Started Guide", () => {
  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, "getting-started.mdx"));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc("getting-started.mdx");
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("Getting Started");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes prerequisites section", () => {
    const content = readDoc("getting-started.mdx");
    expect(content).toContain("## Prerequisites");
    expect(content).toContain("Claude Code CLI");
    expect(content).toContain("git");
  });

  test("includes installation section", () => {
    const content = readDoc("getting-started.mdx");
    expect(content).toContain("## Installation");
  });

  test("includes first feature walkthrough", () => {
    const content = readDoc("getting-started.mdx");
    expect(content).toContain("## Your First Feature");
    expect(content).toContain("borg init");
    expect(content).toContain("borg plan");
    expect(content).toContain("borg spec");
    expect(content).toContain("borg implement");
  });

  test("uses Starlight components", () => {
    const content = readDoc("getting-started.mdx");
    expect(content).toContain("import { Steps");
    expect(content).toContain("<Steps>");
  });

  test("includes next steps section with links", () => {
    const content = readDoc("getting-started.mdx");
    expect(content).toContain("## Next Steps");
    expect(content).toContain("/docs/commands/init");
    expect(content).toContain("/docs/concepts/backpressure");
    expect(content).toContain("/docs/concepts/ralph-loop");
  });
});

describe("Command: plan", () => {
  const commandPath = "commands/plan.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg plan");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg plan");
  });

  test("includes arguments table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Arguments");
    expect(content).toContain("| Argument |");
    expect(content).toContain("description");
  });

  test("explains interactive mode", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Interactive");
    expect(content).toContain("/workflows:plan");
    expect(content).toContain("/deepen-plan");
  });

  test("includes examples section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg plan");
  });

  test("includes what happens next section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("What Happens Next");
    expect(content).toContain("borg spec");
    expect(content).toContain("borg implement");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/spec");
    expect(content).toContain("/docs/commands/implement");
  });
});

describe("Command: spec", () => {
  const commandPath = "commands/spec.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg spec");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg spec");
  });

  test("includes arguments table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Arguments");
    expect(content).toContain("| Argument |");
    expect(content).toContain("plan-file");
  });

  test("explains what it does", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## What It Does");
    expect(content).toContain("SPEC.md");
    expect(content).toContain("PROMPT.md");
  });

  test("includes SPEC.md structure table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("SPEC.md Structure");
    expect(content).toContain("| Section |");
    expect(content).toContain("Frontmatter");
    expect(content).toContain("Requirements");
    expect(content).toContain("Quality Gates");
  });

  test("includes examples section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg spec plans/");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/plan");
    expect(content).toContain("/docs/commands/implement");
  });
});

describe("Command: implement", () => {
  const commandPath = "commands/implement.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg implement");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg implement");
  });

  test("includes arguments table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Arguments");
    expect(content).toContain("| Argument |");
    expect(content).toContain("spec-dir");
  });

  test("explains the Ralph Loop", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Ralph Loop");
    expect(content).toContain("autonomous");
    expect(content).toContain("backpressure");
  });

  test("includes auto-detection section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Auto-Detection");
    expect(content).toContain("status: building");
  });

  test("includes examples section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg implement specs/");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/spec");
    expect(content).toContain("/docs/commands/status");
    expect(content).toContain("/docs/commands/review");
  });
});

describe("Command: review", () => {
  const commandPath = "commands/review.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg review");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg review");
  });

  test("includes options table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Options");
    expect(content).toContain("| Option |");
    expect(content).toContain("--design");
    expect(content).toContain("--design-only");
    expect(content).toContain("--url");
  });

  test("explains output structure with todos directories", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Output Structure");
    expect(content).toContain("todos/");
    expect(content).toContain("code/");
    expect(content).toContain("design/");
  });

  test("includes priority levels table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Priority Levels");
    expect(content).toContain("| Priority |");
    expect(content).toContain("P1");
    expect(content).toContain("P2");
    expect(content).toContain("P3");
  });

  test("includes examples section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg review specs/");
    expect(content).toContain("--design");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/implement");
    expect(content).toContain("/docs/commands/fix");
    expect(content).toContain("/docs/commands/status");
  });
});

describe("Command: init", () => {
  const commandPath = "commands/init.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg init");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg init");
  });

  test("includes arguments table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Arguments");
    expect(content).toContain("| Argument |");
    expect(content).toContain("`path`");
  });

  test("explains what it creates", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## What It Creates");
    expect(content).toContain("specs/");
    expect(content).toContain("plans/");
    expect(content).toContain("AGENTS.md");
  });

  test("includes auto-detection table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Auto-Detection");
    expect(content).toContain("| Project Type |");
    expect(content).toContain("Bun");
    expect(content).toContain("npm");
    expect(content).toContain("Rails");
  });

  test("includes examples section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg init");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/plan");
  });
});

describe("Command: design", () => {
  const commandPath = "commands/design.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg design");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg design");
  });

  test("includes arguments table with url and iterations", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Arguments");
    expect(content).toContain("| Argument |");
    expect(content).toContain("`url`");
    expect(content).toContain("`iterations`");
  });

  test("explains what it does including screenshot and analyze steps", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## What It Does");
    expect(content).toContain("Screenshot");
    expect(content).toContain("Analyze");
    expect(content).toContain("frontend-design");
  });

  test("includes auto-detection section with common ports", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Auto-Detection");
    expect(content).toContain("3000");
    expect(content).toContain("4321");
    expect(content).toContain("5173");
  });

  test("includes examples section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg design");
    expect(content).toContain("localhost");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/implement");
    expect(content).toContain("/docs/commands/review");
    expect(content).toContain("/docs/commands/fix");
  });
});

describe("Command: status", () => {
  const commandPath = "commands/status.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg status");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg status");
  });

  test("explains what it shows with table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## What It Shows");
    expect(content).toContain("| Column |");
    expect(content).toContain("Name");
    expect(content).toContain("Status");
    expect(content).toContain("Iterations");
  });

  test("documents status states with colors", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Status States");
    expect(content).toContain("pending");
    expect(content).toContain("building");
    expect(content).toContain("complete");
    expect(content).toContain("blocked");
  });

  test("includes output example", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Output Example");
    expect(content).toContain("Ralph Borg Status");
  });

  test("includes examples section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg status");
    expect(content).toContain("borg implement");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/implement");
    expect(content).toContain("/docs/commands/review");
    expect(content).toContain("/docs/commands/learnings");
  });
});

describe("Command: fix", () => {
  const commandPath = "commands/fix.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg fix");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg fix");
  });

  test("includes arguments table with code and design options", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Arguments");
    expect(content).toContain("| Argument |");
    expect(content).toContain("`code`");
    expect(content).toContain("`design`");
    expect(content).toContain("`spec-dir`");
  });

  test("explains output structure with fixes directory", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Output Structure");
    expect(content).toContain("fixes/");
    expect(content).toContain("SPEC.md");
    expect(content).toContain("PROMPT.md");
  });

  test("documents task ordering by priority", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("Task Ordering");
    expect(content).toContain("P1");
    expect(content).toContain("P2");
    expect(content).toContain("P3");
  });

  test("includes examples section with complete workflow", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg fix");
    expect(content).toContain("Complete fix workflow");
    expect(content).toContain("borg review");
    expect(content).toContain("borg implement");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/review");
    expect(content).toContain("/docs/commands/implement");
    expect(content).toContain("/docs/commands/status");
  });
});

describe("Command: learnings", () => {
  const commandPath = "commands/learnings.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, commandPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(commandPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("borg learnings");
    expect(frontmatter.description).toBeDefined();
  });

  test("includes usage section with code block", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Usage");
    expect(content).toContain("```bash");
    expect(content).toContain("borg learnings");
  });

  test("includes arguments table with category and limit", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Arguments");
    expect(content).toContain("| Argument |");
    expect(content).toContain("`category`");
    expect(content).toContain("`limit`");
  });

  test("documents categories table", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Categories");
    expect(content).toContain("environment");
    expect(content).toContain("pattern");
    expect(content).toContain("gotcha");
    expect(content).toContain("fix");
    expect(content).toContain("discovery");
    expect(content).toContain("iteration_failure");
  });

  test("explains storage format with learnings.json", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Storage");
    expect(content).toContain(".borg/learnings.json");
    expect(content).toContain('"learnings"');
  });

  test("includes examples section with filtering", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Examples");
    expect(content).toContain("borg learnings");
    expect(content).toContain("borg learnings fix");
    expect(content).toContain("borg learnings pattern");
  });

  test("includes related commands section", () => {
    const content = readDoc(commandPath);
    expect(content).toContain("## Related Commands");
    expect(content).toContain("/docs/commands/implement");
    expect(content).toContain("/docs/commands/status");
    expect(content).toContain("/docs/commands/init");
  });
});

describe("Concept: backpressure", () => {
  const conceptPath = "concepts/backpressure.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, conceptPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(conceptPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("Backpressure");
    expect(frontmatter.description).toBeDefined();
  });

  test("explains what backpressure is", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## What is Backpressure");
    expect(content).toContain("self-correct");
    expect(content).toContain("automated feedback");
  });

  test("documents hard gates with examples", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## Types of Gates");
    expect(content).toContain("Hard Gates");
    expect(content).toContain("| Gate |");
    expect(content).toContain("Tests");
    expect(content).toContain("Type checker");
    expect(content).toContain("Linter");
    expect(content).toContain("Build");
  });

  test("documents soft gates", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("Soft Gates");
    expect(content).toContain("Coverage threshold");
    expect(content).toContain("Screenshot comparison");
  });

  test("includes project type examples", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("TypeScript/Bun");
    expect(content).toContain("Rails");
    expect(content).toContain("Python");
    expect(content).toContain("bun test");
    expect(content).toContain("pytest");
  });

  test("documents enforced patterns", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("Enforced Patterns");
    expect(content).toContain("Dependencies First");
    expect(content).toContain("Tests With Code");
    expect(content).toContain("Visual Verification");
  });

  test("includes failure handling table", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("Failure Handling");
    expect(content).toContain("| Failure Type |");
    expect(content).toContain("Quick fix");
    expect(content).toContain("Blocker");
  });

  test("includes related links section", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## Related");
    expect(content).toContain("/docs/concepts/ralph-loop");
    expect(content).toContain("/docs/commands/implement");
  });
});

describe("Concept: Ralph Loop", () => {
  const conceptPath = "concepts/ralph-loop.mdx";

  test("file exists", () => {
    const exists = existsSync(join(DOCS_DIR, conceptPath));
    expect(exists).toBe(true);
  });

  test("has valid frontmatter with title and description", () => {
    const content = readDoc(conceptPath);
    const frontmatter = extractFrontmatter(content);
    expect(frontmatter.title).toBe("Ralph Loop");
    expect(frontmatter.description).toBeDefined();
    expect(frontmatter.description).toContain("autonomous");
  });

  test("explains how the loop works", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## How It Works");
    expect(content).toContain("iterations");
    expect(content).toContain("fresh context");
    expect(content).toContain("one task");
  });

  test("documents all 8 phases", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## The 8 Phases");
    expect(content).toContain("### Phase 0: Discovery");
    expect(content).toContain("### Phase 1: Environment Setup");
    expect(content).toContain("### Phase 2: Orient");
    expect(content).toContain("### Phase 3: Select Task");
    expect(content).toContain("### Phase 4: Investigate");
    expect(content).toContain("### Phase 5: Implement");
    expect(content).toContain("### Phase 6: Validate");
    expect(content).toContain("### Phase 7: Integration Verification");
    expect(content).toContain("### Phase 8: Update State");
  });

  test("includes hard rules table", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## Hard Rules");
    expect(content).toContain("| Rule | Wrong | Right |");
    expect(content).toContain("Environment First");
    expect(content).toContain("Tests With Code");
    expect(content).toContain("One Task Per Iteration");
  });

  test("documents state files", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## State Files");
    expect(content).toContain("SPEC.md");
    expect(content).toContain(".borg/project.json");
    expect(content).toContain(".borg/learnings.json");
    expect(content).toContain("Git commits");
  });

  test("references the diagram", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## Visual Overview");
    expect(content).toContain("![Ralph Loop Diagram]");
    expect(content).toContain("ralph-loop.svg");
  });

  test("uses Starlight Aside components", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("import { Aside");
    expect(content).toContain("<Aside type=");
  });

  test("includes related links section", () => {
    const content = readDoc(conceptPath);
    expect(content).toContain("## Related");
    expect(content).toContain("/docs/concepts/backpressure");
    expect(content).toContain("/docs/commands/implement");
    expect(content).toContain("/docs/commands/learnings");
  });
});
