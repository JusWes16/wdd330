let task_bin = document.querySelector('.task_list');
let task_input = document.querySelector('.task_input');
let add_task = document.querySelector('.add_task');

add_task.addEventListener('click', () =>{
    if (JSON.parse(localStorage.getItem('todo')) !== null){
        var tasks = JSON.parse(localStorage.getItem('todo'));
    } else {
        var tasks = [];
    }
    let task = {};
    let new_task = task_input.value;

    task['id'] = Date.now();
    task['content'] = new_task;
    task['completed'] = false;

    tasks.push(task);

    localStorage.setItem('todo', JSON.stringify(tasks));
    // console.log(localStorage);

    task_input.value = '';
    displayTasks();
})

const displayTasks = () => {
    clearBox();
    if(JSON.parse(localStorage.getItem('todo')) === null) {
        return
    }
    let index = 1;
    JSON.parse(localStorage.getItem('todo')).forEach(task => {
        let div = document.createElement('div');
        let input = document.createElement('input');
        let p = document.createElement('p');
        let delete_button = document.createElement('input');

        if(task.completed){
            input.setAttribute('value', 'X');
            p.classList.add('strike_through');
        } else {
            input.setAttribute('value', '');
        }

        div.setAttribute('class', 'task');
        input.setAttribute('type', 'button');
        input.setAttribute('class', 'checkbox');
        input.setAttribute('id', task.id);
        delete_button.setAttribute('class', 'delete_task');
        delete_button.setAttribute('id', task.id);
        delete_button.setAttribute('type', 'button');
        delete_button.setAttribute('value', 'x');

        p.textContent = task.content;
        
        div.appendChild(input);
        div.appendChild(p);
        div.appendChild(delete_button);

        task_bin.appendChild(div);

        index += 1;
    });
    document.getElementById('all').classList.add('active');
    document.getElementById('completed').classList.remove('active');
    document.getElementById('active').classList.remove('active');
    deleteTask();
    checkBox();
    numTasksLeft();
}

const clearBox = () => {
    while(task_bin.firstChild) {
        task_bin.removeChild(task_bin.firstChild);
    }
}

const deleteTask = () => {
    let delete_buttons = document.getElementsByClassName('delete_task');
    let tasks = JSON.parse(localStorage.getItem('todo'));
        
    for (const delete_button of delete_buttons){
        delete_button.addEventListener('click', (e) =>{
            var target_id = e.target.id;

            for (var i = 0; i < tasks.length; i++){
                if(target_id == tasks[i].id){
                    tasks.splice(i, 1);
                    localStorage['todo'] = JSON.stringify(tasks);
                    displayTasks()
                }
            };
        });
    };
}

const checkBox = () => {
    let checkbox_buttons = document.getElementsByClassName('checkbox');
    var tasks = JSON.parse(localStorage.getItem('todo'));

    console.log(checkbox_buttons);
    for(const checkbox_button of checkbox_buttons){
        checkbox_button.addEventListener('click', (e) =>{
            var target_id = e.target.id;

            if(e.target.value == ''){
                e.target.value = 'X';
                for (var i = 0; i < tasks.length; i++){
                    if(target_id == tasks[i].id){
                        tasks[i].completed = true;
                        localStorage['todo'] = JSON.stringify(tasks);
                        numTasksLeft();
                        displayTasks();
                    }
                };
            } else {
                e.target.value = '';
                for (var i = 0; i < tasks.length; i++){
                    if(target_id == tasks[i].id){
                        tasks[i].completed = false;
                        localStorage['todo'] = JSON.stringify(tasks);
                        numTasksLeft();
                        displayTasks();
                    }
                };
            }
        })
    }
}

const displayActive = () => {
    clearBox();
    if(JSON.parse(localStorage.getItem('todo')) === null) {
        return
    }
    let index = 1;
    JSON.parse(localStorage.getItem('todo')).forEach(task => {
        if(task.completed){
            return
        } else {
            let div = document.createElement('div');
            let input = document.createElement('input');
            let p = document.createElement('p');
            let delete_button = document.createElement('input');

            div.setAttribute('class', 'task');
            input.setAttribute('type', 'button');
            input.setAttribute('class', 'checkbox');
            input.setAttribute('id', task.id);
            delete_button.setAttribute('class', 'delete_task');
            delete_button.setAttribute('id', task.id);
            delete_button.setAttribute('type', 'button');
            delete_button.setAttribute('value', 'x');

            p.textContent = task.content;
            
            div.appendChild(input);
            div.appendChild(p);
            div.appendChild(delete_button);

            task_bin.appendChild(div);

            index += 1;
        }
    });
    document.getElementById('active').classList.add('active');
    document.getElementById('completed').classList.remove('active');
    document.getElementById('all').classList.remove('active');
    deleteTask();
    deleteTask();
    checkBox();
    numTasksLeft();
}

const displayCompleted = () => {
    clearBox();
    if(JSON.parse(localStorage.getItem('todo')) === null) {
        return
    }
    let index = 1;
    JSON.parse(localStorage.getItem('todo')).forEach(task => {
        if(task.completed){
            let div = document.createElement('div');
            let input = document.createElement('input');
            let p = document.createElement('p');
            let delete_button = document.createElement('input');

            if(task.completed){
                input.setAttribute('value', 'X');
            } else {
                input.setAttribute('value', '');
            }

            div.setAttribute('class', 'task');
            input.setAttribute('type', 'button');
            input.setAttribute('class', 'checkbox');
            input.setAttribute('id', task.id);
            delete_button.setAttribute('class', 'delete_task');
            delete_button.setAttribute('id', task.id);
            delete_button.setAttribute('type', 'button');
            delete_button.setAttribute('value', 'x');
            p.classList.add('strike_through');

            p.textContent = task.content;
            
            div.appendChild(input);
            div.appendChild(p);
            div.appendChild(delete_button);

            task_bin.appendChild(div);

            index += 1;
        }
    });
    document.getElementById('completed').classList.add('active');
    document.getElementById('active').classList.remove('active');
    document.getElementById('all').classList.remove('active');
    deleteTask();
    checkBox();
    numTasksLeft();
}

const numTasksLeft = () =>{
    let tasks = JSON.parse(localStorage.getItem('todo'));
    let tasksLeft = 0;

    tasks.forEach(task => {
        if(task.completed){
            return;
        } else {
            tasksLeft += 1;
        }
    });

    document.getElementById('tasks_left').value = `${tasksLeft} tasks left`
}

window.addEventListener('load', displayTasks());

