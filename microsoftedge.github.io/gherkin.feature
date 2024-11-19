Feature: Todo application functionality

  Scenario: The site is available
    Given I open the TODO page
    Then the URL should be correct

  Scenario: Verify the title
    Given I open the TODO page
    Then the title should be TODO app

  Scenario: Add a task
    Given I open the TODO page
    When I add a task with the text "Buy a milk"
    Then the task should exist in the list

  Scenario: Complete a task
    Given I open the TODO page
    When I add a task with the text "Buy a pen"
    And I complete the task
    Then the task should be marked as completed

  Scenario: Move task from "Completed" to "To do"
    Given I open the TODO page
    When I add a task with the text "Buy a pen"
    And I complete the task
    And I uncomplete the task
    Then the task should be marked as not completed

  Scenario: Remove a non-completed task
    Given I open the TODO page
    When I add a task with the text "Buy a pen"
    And I remove the task
    Then the task should not exist in the list

  Scenario: Remove a completed task by using delete button
    Given I open the TODO page
    When I add a task with the text "Buy a pen"
    And I complete the task
    And I remove the task using the delete button
    Then the task should not exist in the list

  Scenario: Remove a completed task by clicking on the task
    Given I open the TODO page
    When I add a task with the text "Buy a pen"
    And I complete the task
    And I remove the task by clicking on it
    Then the task should not exist in the list

  Scenario: Add a task with empty label
    Given I open the TODO page
    When I add a task with an empty label
    Then the task should not exist in the list

  Scenario: Check "No tasks defined" when tasks are completed
    Given I open the TODO page
    When I add a task with the text "Buy a milk"
    And I complete the task with the text "Buy a milk"
    Then I should see the "No tasks defined" message

  Scenario: Check "No tasks defined" when no task is created
    Given I open the TODO page
    Then I should see the "No tasks defined" message

  Scenario: Check the background color of Dark Theme
    Given I open the TODO page
    When I switch to dark theme
    Then the background color should be "rgb(34, 34, 34)"

  Scenario: Check the background color of Light Theme
    Given I open the TODO page
    When I switch to light theme
    Then the background color should be "rgb(94, 114, 193)"
