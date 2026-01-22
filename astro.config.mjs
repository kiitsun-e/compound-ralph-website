// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://compound-ralph.dev',
	integrations: [
		starlight({
			title: 'Compound Ralph',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/yourusername/compound-ralph' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{ label: 'Case Study', slug: 'case-study' },
				{
					label: 'Commands',
					autogenerate: { directory: 'commands' },
				},
				{
					label: 'Concepts',
					items: [
						{ label: 'Backpressure', slug: 'concepts/backpressure' },
						{ label: 'Ralph Loop', slug: 'concepts/ralph-loop' },
					],
				},
			],
		}),
	],
});
