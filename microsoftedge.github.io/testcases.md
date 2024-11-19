# Test Cases for TODO Application

## 1. The site is available

### Description:

Verify that the TODO page is available and accessible.

### Steps:

1. Open the TODO page.
2. Verify the URL.

### Expected Result:

-   The TODO page URL should be correct.

---

## 2. Verify the title

### Description:

Verify that the title of the page is correct.

### Steps:

1. Open the TODO page.
2. Verify the page title.

### Expected Result:

-   The page title should be as expected.

---

## 3. Add a task

### Description:

Verify that a task can be added to the TODO list.

### Steps:

1. Add a task with the text "Buy a milk."
2. Check if the task is present in the task list.

### Expected Result:

-   The task "Buy a milk" should exist in the list.

---

## 4. Complete a task

### Description:

Verify that a task can be marked as completed.

### Steps:

1. Add a task with the text "Buy a pen."
2. Click on the task to mark it as completed.
3. Verify that the task is completed.

### Expected Result:

-   The task should be marked as completed.

---

## 5. Move task from "Completed" to "To do"

### Description:

Verify that a task can be moved back from "Completed" to "To do."

### Steps:

1. Add a task with the text "Buy a pen."
2. Click the task to mark it as completed.
3. Click the task again to move it back to "To do."
4. Verify that the task is not completed anymore.

### Expected Result:

-   The task should no longer be marked as completed.

---

## 6. Remove a non-completed task

### Description:

Verify that a non-completed task can be removed from the list.

### Steps:

1. Add a task with the text "Buy a pen."
2. Remove the task.
3. Verify that the task no longer exists in the list.

### Expected Result:

-   The task should be removed from the list.

---

## 7. Remove a completed task by using delete button

### Description:

Verify that a completed task can be removed using the delete button.

### Steps:

1. Add a task with the text "Buy a pen."
2. Mark the task as completed.
3. Use the delete button to remove the task.
4. Verify that the task no longer exists in the list.

### Expected Result:

-   The task should be removed from the list.

---

## 8. Remove a completed task by clicking on the task

### Description:

Verify that a completed task can be removed by clicking on the task itself.

### Steps:

1. Add a task with the text "Buy a pen."
2. Mark the task as completed.
3. Click on the task to remove it.
4. Verify that the task no longer exists in the list.

### Expected Result:

-   The task should be removed from the list.

---

## 9. Add a task with empty label

### Description:

Verify that a task with an empty label cannot be added.

### Steps:

1. Try to add a task with an empty label.
2. Verify that the task does not exist in the list.

### Expected Result:

-   No task should be added, and the task list should remain empty.

---

## 10. Check "No tasks defined" when tasks are completed

### Description:

Verify that the message "No tasks defined" appears when all tasks are completed.

### Steps:

1. Add a task with the text "Buy a milk."
2. Mark the task as completed.
3. Verify that the "No tasks defined" message is displayed.

### Expected Result:

-   The message "No tasks defined" should be visible when no tasks are active.

---

## 11. Check "No tasks defined" when no task is created

### Description:

Verify that the message "No tasks defined" appears when no tasks are created.

### Steps:

1. Verify that the "No tasks defined" message is displayed when no tasks are created.

### Expected Result:

-   The message "No tasks defined" should be visible when no tasks exist.

---

## 12. Check the background of Dark Theme

### Description:

Verify the background color when the dark theme is enabled.

### Steps:

1. Enable the dark theme using `page.emulateMedia({ colorScheme: 'dark' })`.
2. Check the background color.

### Expected Result:

-   The background color should be `rgb(34, 34, 34)`.

---

## 13. Check the background of Light Theme

### Description:

Verify the background color when the light theme is enabled.

### Steps:

1. Enable the light theme using `page.emulateMedia({ colorScheme: 'light' })`.
2. Check the background color.

### Expected Result:

-   The background color should be `rgb(94, 114, 193)`.

---

## Conclusion

These tests ensure the basic functionality and user interactions on the TODO application, including task addition, completion, removal, and theme validation.
