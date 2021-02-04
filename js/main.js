let $toDoInput; // place where user input text task
let $alertInfo; // info about no tasks / need for add text
let $addBtn; // button ADD - add new elements to list
let $ulList; // ours task list, tags <ul></ul>
let $newTask; // new added li, new task

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
};

const addNewTask = () => {
    if ($toDoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.innerText = $toDoInput.value;
        $ulList.appendChild($newTask);

        $toDoInput.value = '';
        $alertInfo.innerText = '';
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!';
    }
}

document.addEventListener('DOMContentLoaded', main);