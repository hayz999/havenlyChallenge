const todoList = document.querySelector(".todo__list");
const todoForm = document.querySelector(".todo__add");

class TodoObj{
    constructor(title = "", done = false) {
      this.title = title;
      this.done = false;
    }
    setTitle(title) {
      this.title = title;
    }
    getTitle() {
      return this.title;
    }
    setDone(done) {
      this.done = !this.done;
    }
    isDone() {
      return this.done;
    }
};
// let listHolder = [];
// An initial list of dummy to-do items
let items = [
    new TodoObj("Learn CSS Grid Layout", true),
    new TodoObj("Feed the cat"),
    new TodoObj("Learn how to code good"),
];

// A function to add a new To-Do item
const submitTodo = e => {
  e.preventDefault();
  let newTodo = document.querySelector('input').value
  items.push(new TodoObj(newTodo))
  // items = items.concat(listHolder);
  
  console.log(items);
  
  // listHolder.push(new TodoObj);
  saveList(items);
  document.querySelector(".todo__add").reset();
};

// const captureTodo = e => {
//   e.preventDefault();
//   const lastInd = listHolder.length - 1;
//   console.log(lastInd);
  
//   let title = listHolder[lastInd].getTitle();
//   console.log(title);
  
//   listHolder[lastInd].setTitle(title += e);
// }

// A function to create the To-Do list from the items array
const createList = (list = [], listTarget) => {
  listTarget.innerHTML = list
    .map(
      (item, i) => `
        <li class="todo__item">
          <input type="checkbox" id="todo${i}" data-index="${i}" ${item.isDone()
        ? "checked"
        : ""} />
          <label for="todo${i}">
            <img src="./img/check.svg" class="todo__done" data-index="${i}" />
            <div name='text' class="todo__text">${item.getTitle()}</div>
            <span class="todo__delete" data-index="${i}">Delete</span>
          </label>
        </li>
      `
    )
    .join("");
};



// a function to mark a single task as complete
const toggleDone = e => {
  const el = e.target;
  
  if (!el.classList.contains("todo__done")) return;
  const index = el.dataset.index;
  items[index].setDone(!items[index].isDone());
  let todos = document.querySelectorAll('.todo__text')
  if(items[index].done) {
    todos[index].classList.toggle( 'done')
  } else {
    todos[index].className = 'todo__text'
  }
  // saveList(items);
};

// a function to delete a single task
const removeSingle = e => {
  const el = e.target;
  if (!el.classList.contains("todo__delete")) return;
  const index = el.dataset.index;
  spliceItem(index);
};

// a fuction to remove a specific item from a list
const spliceItem = index => {
  items.splice(index, 1);
  saveList(items);
};

// function to save list
const saveList = (items) => {
  createList(items, todoList);
};

const initialize = () => {
  // listHolder.push(new TodoObj);
  // set up event listeners
  todoList.addEventListener("click", toggleDone);
  todoList.addEventListener("click", removeSingle);
  todoForm.addEventListener("submit", submitTodo);
  // todoForm.addEventListener("keyup", captureTodo);
  console.log(items);
  createList(items, todoList);
}

initialize();
