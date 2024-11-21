import { expect } from '@wdio/globals'
import AddRemoveElementsPage from '../utils/poms/add_remove_elements.page.ts'

describe('Check the functionality of the add_remove_elements_page', async () => {
	it('Add the element on the page by clicking the "Add element" button ', async () => {
		//@testID: 001
		await AddRemoveElementsPage.open()
		await AddRemoveElementsPage.addElementButton.click()
		const appearedButton = AddRemoveElementsPage.do.$('button[onClick="deleteElement()"]')
		await expect(appearedButton).toBeDisplayed()
	})
	it('Remove the appeared element by clicking on him ', async () => {
		//@testID: 002
		await AddRemoveElementsPage.open()
		await AddRemoveElementsPage.addElementButton.click()
		const appearedButton = AddRemoveElementsPage.do.$('button[onClick="deleteElement()"]')
		await expect(appearedButton).toBeDisplayed()
		await appearedButton.click()
		await expect(await appearedButton.isExisting()).toBeFalsy()
	})

	it('Add many elements on the page by clicking the "Add element" button ', async () => {
		//@testID: 003
		await AddRemoveElementsPage.open()
		const count = 12
		for (let i = 0; i < count; i++) {
			await AddRemoveElementsPage.addElementButton.click()
		}
		await AddRemoveElementsPage.do.pause(500)
		const appearedButton = await $$('button[onClick="deleteElement()"]')
		expect(appearedButton).toHaveLength(count)
	})

	it('Remove many elements on the page', async () => {
		//@testID: 004
		await AddRemoveElementsPage.open()
		const count = 20
		for (let i = 0; i < count; i++) {
			await AddRemoveElementsPage.addElementButton.click()
		}

		let appearedButtons
		while (true) {
			appearedButtons = await $$('button[onclick="deleteElement()"]')
			if (appearedButtons.length === 0) break
			await appearedButtons[0].click()
		}

		expect(appearedButtons).toHaveLength(0)
	})
	it('Remove all the appeared elements and then create new one ', async () => {
		//@testID: 005
		await AddRemoveElementsPage.open()
		await AddRemoveElementsPage.addElementButton.click()
		const appearedButton = AddRemoveElementsPage.do.$('button[onClick="deleteElement()"]')
		await expect(appearedButton).toBeDisplayed()
		await appearedButton.click()
		await expect(await appearedButton.isExisting()).toBeFalsy()
		await AddRemoveElementsPage.addElementButton.click()
		await expect(await appearedButton.isExisting()).toBeTruthy()
	})
})
