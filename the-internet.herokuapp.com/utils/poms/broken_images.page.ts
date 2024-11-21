import { $ } from '@wdio/globals'
import Page from './page.js'

class BrokenImagesPage extends Page {
	public open() {
		return super.open('broken_images')
	}
	public get getImages() {
		return $('div.example').$$('img')
	}
}

export default new BrokenImagesPage()
