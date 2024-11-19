import { Locator, Page, expect } from '@playwright/test'

export class TODO {
	public url = 'https://microsoftedge.github.io/Demos/demo-to-do/'
	public title = 'TODO app'

	readonly page: Page

	protected $inputField: Locator
	protected $addTaskButton: Locator
	protected $completedTasks: Locator
	protected $taskList: Locator
	protected $noTaskDefined: Locator

	constructor(page: Page) {
		this.page = page
		this.$inputField = page.locator('input#new-task')
		this.$addTaskButton = page.getByRole('button', { name: '➡️' })
		this.$completedTasks = page.getByLabel('Completed task')
		this.$taskList = page.locator('#tasks')
		this.$noTaskDefined = page.locator('.divider')
	}

	async getTask(taskText: string) {
		const taskLocator = this.page.locator('li.task', { hasText: taskText })
		const taskExists = (await taskLocator.count()) > 0
		return taskExists ? taskLocator : false
	}

	async addTask(taskText: string) {
		await this.$inputField.fill(taskText)
		await this.$addTaskButton.click()
		const task = this.$taskList.locator('li.task', { hasText: taskText })
		return task ? task : false
	}
	async removeTask(task: Locator) {
		await task.hover()
		const deleteButton = task.locator('button.delete')
		await expect(deleteButton).toBeVisible()
		await deleteButton.click()
	}

	async isTaskExist(task: Locator): Promise<boolean> {
		return await task.isVisible({ timeout: 2000 })
	}
	async isTaskCompleted(task: Locator): Promise<boolean> {
		const classes = await task.getAttribute('class')
		return classes?.includes('completed') ? true : false
	}

	async verifyUrl() {
		await expect(this.page).toHaveURL(this.url)
	}
	async verifyTitle() {
		expect(await this.page.title()).toEqual(this.title)
	}

	async goto() {
		await this.page.goto(this.url)
		await this.page.waitForLoadState('load')
	}

	async find(selector: string, text: string = '') {
		if (!text) {
			return this.page.locator(selector)
		}
		return this.page.locator(selector, { hasText: `${text}` })
	}
}
