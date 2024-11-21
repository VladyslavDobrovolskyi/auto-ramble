import { $ } from '@wdio/globals'
import Page from './page.js'

class AddRemoveElementsPage extends Page {
	public get addElementButton() {
		return $('button[onClick="addElement()"]')
	}
	public get removeElementButton() {
		return $('button[onClick="removeElement()"]')
	}
	public get elementsContainer() {
		return $('#elements')
	}

	public open() {
		return super.open('add_remove_elements')
	}

	public get do() {
		return browser
	}
}

export default new AddRemoveElementsPage()
