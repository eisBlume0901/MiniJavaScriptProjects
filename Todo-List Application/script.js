
const taskInput = document.getElementById('task-input');
const morningButton = document.getElementById('morning-button');
const afternoonButton = document.getElementById('afternoon-button');
const eveningButton = document.getElementById('evening-button');
const taskList = document.getElementById('task-list');
function sanitizeStringInput(str) {
    const regex = /[|&;$%@"<>()+,]/g;
    return str.replace(regex, '');
}

function addTask(timeOfDay) {
    const task = sanitizeStringInput(taskInput['value']);

    if (timeOfDay === "morning") {
        const morningTask = document.getElementById("morning-task-list");
        morningTask.innerHTML += String(task);
    }
    if (timeOfDay === "afternoon") {
        const afternoonTask = document.getElementById("afternoon-task-list");
        afternoonTask.innerHTML += String(task);
    }
    if (timeOfDay === "evening") {
        const eveningTask = document.getElementById("evening-task-list");
        eveningTask.innerHTML += String(task);
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