import { Before, After, Given, When, Then, AfterAll } from '@cucumber/cucumber'
import { expect, chromium, Page, Browser } from '@playwright/test'
import { TODO } from './utils/pom.ts'
let browser: Browser
let page: Page
let todo: TODO

Before(async () => {
	browser = await chromium.launch({ headless: true })
	page = await browser.newPage()
	todo = new TODO(page)
})

After(async () => {
	await page.close()
})

AfterAll(async () => {
	await browser.close()
})

Given('I open the TODO page', async function () {
	await todo.goto()
})

When('I navigate to the TODO page', async function () {
	await todo.goto()
})

Then('the URL should be correct', async function () {
	await todo.verifyUrl()
})

When('I check the title of the TODO page', async function () {
	this.pageTitle = await todo.page.title()
})

Then('the title should be TODO app', async function () {
	await todo.verifyTitle()
})

When('I add a task with the text {string}', async function (taskText: string) {
	this.createdTask = await todo.addTask(taskText)
})

Then('the task {string} should exist in the list', async function (taskText: string) {
	const task = await todo.isTaskExist(this.createdTask)
	expect(task).not.toBe(false)
})

When('I complete the task', async function () {
	await this.createdTask.click()
})

When('I complete the task with the text {string}', async function (taskText: string) {
	const task = await todo.getTask(taskText)
	if (task) {
		await task.click()
	} else {
		throw new Error(`Task with text "${taskText}" not found.`)
	}
})

Then('the task should exist in the list', async function () {
	const text = await this.createdTask.locator('.text').innerHTML()
	const task = await todo.getTask(text)
	expect(task).toBeTruthy()
})
Then('the task should be marked as completed', async function () {
	const isTaskCompleted = await todo.isTaskCompleted(this.createdTask)
	expect(isTaskCompleted).toBeTruthy()
})

Then('the task with the text {string} should be marked as completed', async function (taskText: string) {
	const task = await todo.getTask(taskText)
	task && expect(await todo.isTaskCompleted(task)).toBeTruthy()
})

When('I uncomplete the task with the text {string}', async function (taskText: string) {
	const task = await todo.getTask(taskText)
	if (task) {
		await task.click()
	} else {
		throw new Error(`Task with text "${taskText}" not found.`)
	}
})

Then('the task with the text {string} should be marked as not completed', async function (taskText: string) {
	const task = await todo.getTask(taskText)
	task && expect(await todo.isTaskCompleted(task)).toBeFalsy()
})

When('I remove the task with the text {string}', async function (taskText: string) {
	const task = await todo.getTask(taskText)
	if (task) {
		await todo.removeTask(task)
	} else {
		throw new Error(`Task with text "${taskText}" not found.`)
	}
})
When('I remove the task by clicking on it', async function () {
	await this.createdTask.click()
})

Then('the task with the text {string} should not appear in the list', async function (taskText: string) {
	const task = await todo.getTask(taskText)
	expect(task).toBe(false)
})

When('I add a task with an empty label', async function () {
	this.createdTask = await todo.addTask('')
})

Then('the task should not exist in the list', async function () {
	const task = await todo.getTask(this.createdTask)
	expect(task).toBe(false)
})
When('I remove the task using the delete button', async function () {
	await todo.removeTask(this.createdTask)
})
When('I remove the task', async function () {
	await todo.removeTask(this.createdTask)
})
When('I uncomplete the task', async function () {
	await this.createdTask.click()
})
Then('the task should be marked as not completed', async function () {
	const isTaskCompleted = await todo.isTaskCompleted(this.createdTask)
	expect(isTaskCompleted).toBeFalsy()
})

Then('the task {string} should exist in the list', async function (taskText: string) {
	const task = await todo.getTask(taskText)
	expect(task).not.toBe(false)
})

Then('I should see the "No tasks defined" message', async function () {
	const element = await todo.find('.divider', 'No tasks defined')
	expect(await element.innerHTML()).toEqual('No tasks defined')
})

When('I switch to dark theme', async function () {
	await page.emulateMedia({ colorScheme: 'dark' })
})

Then('the background color should be {string}', async function (color: string) {
	const bgColor = await page.evaluate(() => {
		const htmlElement = document.querySelector('body')
		if (htmlElement) {
			return window.getComputedStyle(htmlElement).backgroundColor
		}
		return null
	})
	expect(bgColor).toBe(color)
})

When('I switch to light theme', async function () {
	await page.emulateMedia({ colorScheme: 'light' })
})

Then('the background color should be "rgb(94, 114, 193)"', async function () {
	const bgColor = await page.evaluate(() => {
		const htmlElement = document.querySelector('body')
		if (htmlElement) {
			return window.getComputedStyle(htmlElement).backgroundColor
		}
		return null
	})
	expect(bgColor).toBe('rgb(94, 114, 193)')
})
