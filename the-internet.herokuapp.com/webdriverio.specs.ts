import { expect } from '@wdio/globals'
import LoginPage from './utils/poms/login.page.ts'
import SecurePage from './utils/poms/secure.page.ts'

describe('My Login application', () => {
	it('should login with valid credentials', async () => {
		await LoginPage.open()

		await LoginPage.login('tomsmith', 'SuperSecretPassword!')
		await expect(SecurePage.flashAlert).toBeExisting()
		await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
	})
})
