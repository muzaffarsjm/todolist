# Simple To-Do List with Delete and Date Picker

## Overview

This project is a basic yet functional to-do list application built using HTML, CSS, and JavaScript. It allows users to add tasks, mark them as complete, delete individual tasks, and associate a due date with each task using a date picker. The to-do list and associated due dates are stored in the browser's `localStorage`, ensuring persistence across sessions.

## Technologies Used

* **HTML5:** Semantic HTML elements are used to structure the to-do list interface, including input fields for adding tasks, buttons for actions, and a list to display the tasks.
* **CSS3:** Custom styling provides a clean and user-friendly visual appearance for the to-do list.
* **JavaScript (ES6+):** JavaScript handles the core functionality of the to-do list:
    * Adding new tasks to the list.
    * Deleting individual tasks from the list and `localStorage`.
    * Implementing the date picker functionality to select due dates for tasks.
    * Saving and loading tasks and their due dates from `localStorage`.
* **`localStorage`:** The browser's `localStorage` is used to persistently store the to-do items and their corresponding due dates, ensuring data is retained even after the browser is closed.
* **Date Picker (Native):** This project utilizes either the browser's native `<input type="date">` element

## Key Features

* **Add New Tasks:** Easily add new items to your to-do list via an input field and button.
* **Delete Tasks:** Remove individual tasks from the list with a dedicated "Delete" button next to each item.
* **Due Date Picker:** Assign a specific due date to each task using an integrated date picker.
* **Persistent Storage:** Your to-do list and due dates are saved in your browser's `localStorage` and automatically loaded when you return to the page.
* **Clear User Interface:** A simple and intuitive design for easy task management.

