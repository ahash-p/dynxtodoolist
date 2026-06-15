let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {

    let input = document.getElementById("taskInput");

    if(input.value == ""){
        return;
    }

    tasks.push({
        text: input.value,
        done: false
    });

    saveTasks();
    displayTasks();

    input.value = "";
}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for(let i=0;i<tasks.length;i++){

        let status = tasks[i].done ? "✔️" : "";

        list.innerHTML += `
        <li>
            ${status} ${tasks[i].text}
            <button onclick="completeTask(${i})">Done</button>
            <button onclick="editTask(${i})">Edit</button>
            <button onclick="deleteTask(${i})">Delete</button>
        </li>`;
    }
}

function completeTask(i){

    tasks[i].done = !tasks[i].done;

    saveTasks();
    displayTasks();
}

function editTask(i){

    let newTask = prompt("Edit Task", tasks[i].text);

    if(newTask != null){

        tasks[i].text = newTask;

        saveTasks();
        displayTasks();
    }
}

function deleteTask(i){

    tasks.splice(i,1);

    saveTasks();
    displayTasks();
}

function showCompleted(){

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for(let i=0;i<tasks.length;i++){

        if(tasks[i].done){

            list.innerHTML += `
            <li>${tasks[i].text}</li>`;
        }
    }
}

function showPending(){

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for(let i=0;i<tasks.length;i++){

        if(!tasks[i].done){

            list.innerHTML += `
            <li>${tasks[i].text}</li>`;
        }
    }
}

displayTasks();