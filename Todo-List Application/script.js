
const taskInput = document.getElementById('task-input');
const morningButton = document.getElementById('morning-button');
const afternoonButton = document.getElementById('afternoon-button');
const eveningButton = document.getElementById('evening-button');
function sanitizeStringInput(str) {
    const regex = /[|&;$%@"<>()+,]/g;
    return str.replace(regex, '');
}

function isInputEmpty(str) {
    return str === "";
}

function addTask(timeOfDay) {
    if (isInputEmpty(taskInput['value'])) {
        alert("Please enter a task.")
    }
    else
    {
        const taskValue = sanitizeStringInput(taskInput['value'].toString());
        const HTMLString = `<li> ${taskValue} <span class="delete-button-for-task"><button class="delete-button">Delete Task</button> </span></li>`;

        const timeSpecificTask = document.querySelector(`#${timeOfDay}-task-list`);
        timeSpecificTask.innerHTML += HTMLString;
        deleteTask(document.querySelectorAll('.delete-button-for-task'));
    }
}

function deleteTask(querySelector) {
    /*
    The for loop traverse through the NodeList of delete buttons
    (e.g., sample array would be delete-button-for-task: NodeList(3) [span.delete-button-for-task, span.delete-button-for-task, span.delete-button-for-task]
    and adds an event listener to each button. The event listener is a function that removes the parent element (i.e., the list item) of the button that was clicked.
     */

    for (const button of querySelector) {
        button.addEventListener('click', function() {
            button.parentElement.remove();
        });

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