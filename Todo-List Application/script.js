
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
        const HTMLString = "<li>" + task + "</li>";
        const deleteButton = document.createElement("button");

        if (timeOfDay === "morning") {
            const morningTask = document.querySelector("#morning-task-list ol");
            morningTask.innerHTML += HTMLString;
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

function deleteTask() {

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