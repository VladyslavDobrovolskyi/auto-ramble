import { $ } from '@wdio/globals'
import Page from './page.js'

class BasicAuthPage extends Page {
	public open() {
		return super.open('basic_auth')
	}
	public openWithCredentials(login: string, pass: string) {
		return browser.url(`https://${login}:${pass}@the-internet.herokuapp.com/basic_auth`)
	}
	public get getMessage() {
		return $('p')
	}
}

export default new BasicAuthPage()
