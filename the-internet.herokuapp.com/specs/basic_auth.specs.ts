import { expect } from '@wdio/globals'
import BasicAuthPage from '../utils/poms/basic_auth.page'

describe('Check the functionality of the basic_auth page', async () => {
	it('Authenticate with the valid credentials', async () => {
		const login = 'admin'
		const password = 'admin'
		await BasicAuthPage.openWithCredentials(login, password)
		const authMessage = await BasicAuthPage.getMessage.getText()
		await expect(authMessage).toContain('Congratulations! You must have the proper credentials.')
	})
	it('Authenticate with the invalid login', async () => {
		const login = 'invalid'
		const password = 'admin'
		try {
			await BasicAuthPage.openWithCredentials(login, password)
			const authMessage = await BasicAuthPage.getMessage.getText()
			await expect(authMessage).not.toContain('Congratulations! You must have the proper credentials.')
		} catch (error) {
			expect(error.message).toContain('net::ERR_INVALID_AUTH_CREDENTIALS')
		}
	})
	it('Authenticate with the invalid password', async () => {
		const login = 'admin'
		const password = 'invalid'
		try {
			await BasicAuthPage.openWithCredentials(login, password)
			const authMessage = await BasicAuthPage.getMessage.getText()
			await expect(authMessage).not.toContain('Congratulations! You must have the proper credentials.')
		} catch (error) {
			expect(error.message).toContain('net::ERR_INVALID_AUTH_CREDENTIALS')
		}
	})
})
