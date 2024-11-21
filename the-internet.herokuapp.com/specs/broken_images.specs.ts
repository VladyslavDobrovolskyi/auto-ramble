import { expect } from '@wdio/globals'
import BrokenImagesPage from '../utils/poms/broken_images.page'

describe('Check the functionality of the broken_images page', async () => {
	it.only('Find images on the page and log their states', async () => {
		await BrokenImagesPage.open()

		const images = await BrokenImagesPage.getImages

		//@ts-expect-error
		for (const image of images) {
			const src = await image.getAttribute('src')
			console.log(`Checking image: ${src}`)

			const responseStatus = await browser.execute(async url => {
				try {
					const response = await fetch(url)
					return response.status
				} catch (error) {
					return null
				}
			}, src)

			if (responseStatus === 200) {
				console.log(`Image is fine: ${src}`)
				expect(responseStatus).toBe(200)
			} else {
				console.log(`Broken image found: ${src} (Status: ${responseStatus || 'Fetch failed'})`)
				expect(responseStatus).toBe(404)
			}
		}
	})
})
