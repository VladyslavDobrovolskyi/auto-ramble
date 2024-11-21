import { expect } from '@wdio/globals'
import ChallengingDOMPage from '../utils/poms/challenging_dom.page'

describe('Check if answer change after clicking on the buttons', async () => {
	it.only('The buttons check', async () => {
		ChallengingDOMPage.open()
		await ChallengingDOMPage.do.pause(2000) //Wait for script selector
		const initialAnswerNumber = await ChallengingDOMPage.getAnswer()

		async function testButton(button) {
			await button.click()
			const answer = await ChallengingDOMPage.getAnswer()
			return answer
		}

		const buttonAnswer = await testButton(ChallengingDOMPage.getButton)
		const successButtonAnswer = await testButton(ChallengingDOMPage.getSuccessButton)
		const alertButtonAnswer = await testButton(ChallengingDOMPage.getAlertButton)

		expect(buttonAnswer).not.toEqual(initialAnswerNumber)
		expect(successButtonAnswer).not.toEqual(buttonAnswer)
		expect(alertButtonAnswer).not.toEqual(successButtonAnswer)
	})
})
