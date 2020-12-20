const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const todo = document.querySelector('.add-todo');


btn.addEventListener("click", addTodoList);
todo.addEventListener("click", removeAddTodo);


function addTodoList (e) {
    e.preventDefault();
    const createDiv = document.createElement('div');
    createDiv.classList.add("create-div");
    const createLi = document.createElement('li');
    createLi.classList.add("create-li");
    createLi.innerHTML = input.value;
    createDiv.appendChild(createLi);
    const createBtnOne = document.createElement('button');
    createBtnOne.classList.add('btn-one');
    createBtnOne.innerHTML = '+';
    createDiv.appendChild(createBtnOne);
    const createBtnTwo = document.createElement('button');
    createBtnTwo.classList.add('btn-two');
    createBtnTwo.innerHTML = '-';
    createDiv.appendChild(createBtnTwo);
    todo.appendChild(createDiv);
    input.value = "";
}

function removeAddTodo (e) {
    const target = e.target;
    if (target.classList[0] === "btn-two"){
        const item = target.parentElement;
        item.remove();
    }
    if (target.classList[0] === "btn-one"){
        const item = target.parentElement;
        item.classList.toggle("task-complete");
    }
}


