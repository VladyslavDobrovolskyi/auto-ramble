import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
	testMatch: '**/*.{spec,specs,test,tests}.ts',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	use: {
		trace: 'on-first-retry',
	},

	projects: [
		{
			name: 'microsoftedge.github.io',
			use: {
				...devices['Desktop Chrome'],
				baseURL: 'https://microsoftedge.github.io/Demos/demo-to-do/',
				viewport: { width: 1024, height: 768 },
			},
			testDir: './microsoftedge.github.io',
		},
	],
})
