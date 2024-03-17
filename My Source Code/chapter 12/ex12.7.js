
    //Select all the page elements as JavaScript objects
    const newItemInput = document.getElementById('newItemInput');
    const addItemButton = document.getElementById('addItemButton');
    const taskList = document.getElementById('taskList');
    
    //Retrieve tasks array from local storage or initialize an empty array
    let tasks = JSON.parse(localStorage.getItem('taskList')) || [];

    //Function to build task item and add it to the page
    function buildTask(task) {
        const li = document.createElement('li');
        const textNode = document.createTextNode(task.name);
        li.appendChild(textNode);
        taskList.appendChild(li);
        if (task.checked) {
            li.classList.add('ready');
        }
        li.addEventListener('click', function() {
            li.classList.toggle('ready');
            task.checked = !task.checked;
            saveTasks();
        });
    }

    //Function to rebuild tasks array from visual data
    function buildTasksArray() {
        tasks = [];
        const listItems = document.querySelectorAll('#taskList li');
        listItems.forEach(item => {
            const task = {
                name: item.textContent,
                checked: item.classList.contains('ready')
            };
            tasks.push(task);
        });
        saveTasks();
    }

    //Function to save tasks array in local storage
    function saveTasks() {
        localStorage.setItem('taskList', JSON.stringify(tasks));
    }

    //Load tasks from local storage and display
    tasks.forEach(buildTask);

    //Event listener to add new task
    addItemButton.addEventListener('click', function() {
        const newItem = newItemInput.value.trim();
        if (newItem !== '') {
            const task = { name: newItem, checked: false };
            tasks.push(task);
            buildTask(task);
            newItemInput.value = '';
            saveTasks();
        }
    });

    //Toggle ready class and update tasks array
    taskList.addEventListener('click', buildTasksArray);
