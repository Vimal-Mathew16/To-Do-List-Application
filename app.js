document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button>Delete</button>
        `;

        li.querySelector('span').addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.querySelector('button').addEventListener('click', function() {
            tasksList.removeChild(li);
        });

        tasksList.appendChild(li);
    }
});
