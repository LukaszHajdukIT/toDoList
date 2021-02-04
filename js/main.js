let $toDoInput; // place where user input text task
let $alertInfo; // info about no tasks / need for add text
let $addBtn; // button ADD - add new elements to list
let $ulList; // ours task list, tags <ul></ul>

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

// get ours elements
const prepareDOMElements = () => {
    $toDoInput = document.querySelector('.toDoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.toDoList ul');
};

// broadcasting listener
const prepareDOMEvents = () => {};






document.addEventListener('DOMContentLoaded', main);