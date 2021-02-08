let $toDoInput; // place where user input text task
let $alertInfo; // info about no tasks / need for add text
let $addBtn; // button ADD - add new elements to list
let $ulList; // ours task list, tags <ul></ul>
let $newTask; // new added li, new task
let toolsPanel;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

// get ours elements
const prepareDOMElements = () => {
    $toDoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
};

// broadcasting listener
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
};

const addNewTask = () => {
    if ($toDoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.innerText = $toDoInput.value;
        $ulList.appendChild($newTask);

        $toDoInput.value = '';
        $alertInfo.innerText = '';
        cerateToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!';
    }
}

const cerateToolsArea = () => {
    toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools')
    $newTask.appendChild(toolsPanel);

    let completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    toolsPanel.appendChild(completeBtn);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'EDIT';
    toolsPanel.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    toolsPanel.appendChild(deleteBtn);
}

const checkClick = (event) => {
    if(event.target.closest('button').classList.contains('complete')){
        console.log(event.target);
    }
};

document.addEventListener('DOMContentLoaded', main);