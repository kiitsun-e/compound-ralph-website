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
