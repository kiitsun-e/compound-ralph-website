// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ralph-borg.dev',
	integrations: [
		starlight({
			title: 'Ralph Borg',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/yourusername/ralph-borg' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
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
