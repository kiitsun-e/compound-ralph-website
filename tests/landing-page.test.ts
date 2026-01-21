import { test, expect, describe } from "bun:test";
import { readFileSync } from "fs";
import { join } from "path";

describe("Landing Page", () => {
	const landingPagePath = join(import.meta.dir, "../src/pages/index.astro");
	const content = readFileSync(landingPagePath, "utf-8");

	test("landing page file exists", () => {
		expect(content).toBeTruthy();
	});

	test("has hero title with Ralph Borg", () => {
		expect(content).toContain("Ralph Borg");
	});

	test("has hero tagline about fire-and-forget", () => {
		expect(content).toContain("Fire-and-forget");
	});

	test("has Get Started link", () => {
		expect(content).toContain('href="/getting-started"');
		expect(content).toContain("Get Started");
	});

	test("has GitHub link", () => {
		expect(content).toContain("github.com");
		expect(content).toContain("GitHub");
	});

	test("has three feature sections", () => {
		// Check for the three feature titles
		expect(content).toContain("Rich Planning");
		expect(content).toContain("Autonomous Building");
		expect(content).toContain("Compounding Learnings");
	});

	test("uses custom CSS variables", () => {
		expect(content).toContain("--landing-bg");
		expect(content).toContain("--landing-accent");
	});

	test("has proper meta tags", () => {
		expect(content).toContain('name="description"');
		expect(content).toContain('name="viewport"');
	});
});
