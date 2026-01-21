import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const DOCS_DIR = join(import.meta.dir, "../src/content/docs");

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
