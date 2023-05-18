const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
});

// let btn = document.querySelector('.btnAddTask');
// btn.addEventListener('click', function() {
//     
// });
// btn.addEventListener('mouseover', function() {
//     this.style.color = 'blue';
//     this.style.cursor = 'pointer';
// });
// btn.addEventListener('mouseout', function() {
//     this.style.color = 'black';
// });
let list = document.querySelector('.todo-list');
let newItemTask = document.querySelector('.add-task');
let newItemTitle = newItemTask.querySelector('.add-task-input');
let taskTemplate = document.getElementById('task-template').content;
let newItemTemplate = taskTemplate.querySelector('.todo-list-item');

let addCheckHandler = function (item) {
    let checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        // item.style.textDecoration = 'line-through';
        item.classList.toggle('line-through');
    });
};

newItemTask.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let taskText = newItemTitle.value;
    let task = newItemTemplate.cloneNode(true);
    let taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;
    addCheckHandler(task);
    list.appendChild(task);
    newItemTitle.value = '';
});