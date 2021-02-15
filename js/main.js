let $toDoInput; // place where user input text task
let $alertInfo; // info about no tasks / need for add text
let $addBtn; // button ADD - add new elements to list
let $ulList; // ours task list, tags <ul></ul>
let $newTask; // new added li, new task
let toolsPanel; // panel with check, edit and delete buttons

let $popup; // popup getter
let $popupInfo; // alert in popup, when add empty string
let $editedTodo; // edited ToDo
let $popupInput; // tekst added to input in popup
let $addPopupBtn; // button "accept" in popup
let $closeTodoBtn; // button to exit popup
let $idNumber = 0;

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
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
};

// broadcasting listener
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
};

const addNewTask = () => {
    if ($toDoInput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $toDoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`)
        $ulList.appendChild($newTask);

        $toDoInput.value = '';
        $alertInfo.innerText = '';
        cerateToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadanie!';
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

// manage clicks and buttons
const checkClick = (event) => {
    if (event.target.closest('button').classList.contains('complete')) {
        event.target.closest('li').classList.toggle('completed');
        event.target.closest('button').classList.toggle('completed');
    } else if (event.target.closest('button').className === 'edit') {
        editTask(event);
    } else if (event.target.closest('button').className === 'delete') {
        console.log('delete');
    }
};

// editing tasks
const editTask = (event) => {
    const oldTodo = event.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;

    $popup.style.display = 'flex';
};

const changeTodo = () => {
    if ($popupInput.value !== '') {
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = '';
    } else {
        $popupInfo.innerText = 'Musisz podać jakąś treść!';
    }
};

// closing popup
const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText = '';
}

document.addEventListener('DOMContentLoaded', main);