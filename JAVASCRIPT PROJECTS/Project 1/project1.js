//load tasks from local storage
document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        li.onclick = removeTask;
        todoList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.textContent = task;
        li.onclick = removeTask;
        todoList.appendChild(li);
        saveTask(task);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function removeTask(event) {
    const task = event.target.textContent;
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    event.target.remove();
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}