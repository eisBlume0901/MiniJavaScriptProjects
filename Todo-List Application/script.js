
const taskInput = document.getElementById('task-input');
const morningButton = document.getElementById('morning-button');
const afternoonButton = document.getElementById('afternoon-button');
const eveningButton = document.getElementById('evening-button');
const taskList = document.getElementById('task-list');
function sanitizeStringInput(str) {
    const regex = /[|&;$%@"<>()+,]/g;
    return str.replace(regex, '');
}

function isInputEmpty(str) {
    if (str !== "") {
        return false;
    }
    return true;
}
function addTask(timeOfDay) {
    if (isInputEmpty(taskInput['value']))
    {
        alert("Please enter a task.")
    }
    else
    {
        const task = sanitizeStringInput(taskInput['value']);
        const HTMLString = `<li> ${task} <button class="delete-button">Delete Task</button> </li>`;

        if (timeOfDay === "morning") {
            const morningTask = document.querySelector("#morning-task-list ol");
            morningTask.innerHTML += HTMLString;

            /*
            The for loop traverse through the NodeList of delete buttons (e.g., sample array would be [button.delete-button, button.delete-button, button.delete-button])
            and adds an event listener to each button. The event listener is a function that removes the parent element (i.e., the list item) of the button that was clicked.
             */
            for (const button of document.querySelectorAll('.delete-button')) {
                button.addEventListener('click', function() {
                    button.parentElement.remove();
                });
            }
        }
        if (timeOfDay === "afternoon") {
            const afternoonTask = document.querySelector("#afternoon-task-list ol");
            afternoonTask.innerHTML += HTMLString;
        }
        if (timeOfDay === "evening") {
            const eveningTask = document.getElementById("#evening-task-list ol");
            eveningTask.innerHTML += HTMLString;
        }
    }

}

/*
Anonymous function that is called when the user clicks the "Add Task" button.
 */

morningButton.addEventListener("click", function() {
    addTask("morning");
});

afternoonButton.addEventListener("click", function() {
    addTask("afternoon");
});

eveningButton.addEventListener("click", function() {
    addTask("evening");
});