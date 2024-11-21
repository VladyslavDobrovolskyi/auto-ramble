import { $ } from '@wdio/globals'
import Page from './page.js'

class ChallengingDOMPage extends Page {
	public open() {
		return super.open('challenging_dom')
	}

	public get getButton() {
		return $('.button')
	}
	public get getAlertButton() {
		return $('.button.alert')
	}
	public get getSuccessButton() {
		return $('.button.success')
	}
	public async getAnswer() {
		const answer = await browser.execute(() => {
			const script = document.querySelector('div script').innerHTML
			const match = String(script).match(/Answer:\s*(\d+)/)
			return match[1]
		})
		return answer
	}
}

export default new ChallengingDOMPage()
