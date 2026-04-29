// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
	site: 'https://connor12858-site.github.io',
	base: isGitHubActions && repoName ? `/${repoName}` : '/',
	integrations: [
		starlight({
			title: 'FGov P2P Network',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/connor12858-site/P2PNetwork' }],
			sidebar: [
				{
					label: 'Downloads',
					autogenerate: { directory: 'downloads' },
				},
				{
					label: 'How to Use',
					autogenerate: { directory: 'how-to-use' },
				},
				{
					label: 'Services',
					autogenerate: { directory: 'services' },
				},
			],
		}),
	],
});
