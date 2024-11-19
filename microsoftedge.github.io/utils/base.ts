import { test as base } from '@playwright/test'
import { TODO } from './pom.ts'
type MyFixtures = {
	TODO: TODO
}

export const test = base.extend<MyFixtures>({
	TODO: async ({ page }, use) => {
		await use(new TODO(page))
	},
})

export { expect } from '@playwright/test'
