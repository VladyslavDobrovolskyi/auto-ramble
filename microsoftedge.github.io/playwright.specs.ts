import { test, expect } from './utils/base.ts'

test.beforeEach('Open TODO page', async ({ TODO }) => {
	await TODO.goto()
})

test('The site is available.', async ({ TODO }) => {
	await TODO.verifyUrl()
})

test('Verify the title ', async ({ TODO }) => {
	await TODO.verifyTitle()
})

test('Add a task', async ({ TODO }) => {
	const taskText = 'Buy a milk.'
	const createdTask = await TODO.addTask(taskText)

	if (createdTask) {
		const isTaskExist = await TODO.isTaskExist(createdTask)
		expect(isTaskExist).toBeTruthy()
	}
})

test('Complete a task', async ({ TODO }) => {
	const taskText = 'Buy a pen.'
	const createdTask = await TODO.addTask(taskText)
	if (createdTask) {
		await createdTask.click()
		const isTaskCompleted = await TODO.isTaskCompleted(createdTask)
		expect(isTaskCompleted).toBeTruthy()
	}
})
test('Move task from "Completed to "To do"', async ({ TODO }) => {
	const taskText = 'Buy a pen.'
	const createdTask = await TODO.addTask(taskText)
	if (createdTask) {
		await createdTask.click()
		let isTaskCompleted = await TODO.isTaskCompleted(createdTask)
		expect(isTaskCompleted).toBeTruthy()
		await createdTask.click()
		isTaskCompleted = await TODO.isTaskCompleted(createdTask)
		expect(isTaskCompleted).toBeFalsy()
	}
})

test('Remove a non-completed task', async ({ TODO }) => {
	const taskText = 'Buy a pen.'
	const createdTask = await TODO.addTask(taskText)
	if (createdTask) {
		await TODO.removeTask(createdTask)
		const isTaskExist = await TODO.isTaskExist(createdTask)
		expect(isTaskExist).toBeFalsy()
	}
})

test('Remove a completed task by using delete button', async ({ TODO }) => {
	const taskText = 'Buy a pen.'
	const createdTask = await TODO.addTask(taskText)
	if (createdTask) {
		await createdTask.click()
		await TODO.isTaskCompleted(createdTask)
		await TODO.removeTask(createdTask)
		const isTaskExist = await TODO.isTaskExist(createdTask)
		expect(isTaskExist).toBeFalsy()
	}
})

test('Remove a completed task by clicking on the task', async ({ TODO }) => {
	const taskText = 'Buy a pen.'
	const createdTask = await TODO.addTask(taskText)
	if (createdTask) {
		await createdTask.click()
		await TODO.isTaskCompleted(createdTask)
		await TODO.removeTask(createdTask)
		const isTaskExist = await TODO.isTaskExist(createdTask)
		expect(isTaskExist).toBeFalsy()
	}
})
test('Add a task with empty label', async ({ TODO }) => {
	const taskText = ''
	const createdTask = await TODO.addTask(taskText)

	if (createdTask) {
		const isTaskExist = await TODO.isTaskExist(createdTask)
		expect(isTaskExist).toBeFalsy()
	}
})

test('Check The "No task defined" when tasks completed', async ({ TODO }) => {
	const taskText = ' Buy a milk.'
	const createdTask = await TODO.addTask(taskText)

	if (createdTask) {
		const isTaskExist = await TODO.isTaskExist(createdTask)
		expect(isTaskExist).toBeTruthy()

		await createdTask.click()
		const element = await TODO.find('.divider', 'No tasks defined')
		expect(await element.innerHTML()).toEqual('No tasks defined')
	}
})

test('Check The "No task defined" when task is not created', async ({ TODO }) => {
	const element = await TODO.find('.divider', 'No tasks defined')
	expect(await element.innerHTML()).toEqual('No tasks defined')
})

test('Check the background of Dark Theme', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'dark' })
	const bgColor = await page.evaluate(() => {
		const htmlElement = document.querySelector('body')
		if (htmlElement) {
			return window.getComputedStyle(htmlElement).backgroundColor
		}
		return null
	})
	expect(bgColor).toBe('rgb(34, 34, 34)')
})

test('Check the background of Light Theme', async ({ TODO, page }) => {
	page.emulateMedia({ colorScheme: 'light' })
	const bgColor = await page.evaluate(() => {
		const htmlElement = document.querySelector('body')
		if (htmlElement) {
			return window.getComputedStyle(htmlElement).backgroundColor
		}
		return null
	})
	expect(bgColor).toBe('rgb(94, 114, 193)')
})
