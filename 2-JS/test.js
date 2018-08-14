const todoList = document.querySelector(".todo__list");
const todoForm = document.querySelector(".todo__add");

class TodoObj {
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
    this.done = done;
  }
  isDone() {
    return this.done;
  }
};

let items = [
  new TodoObj("Learn CSS Grid Layout", true),
  new TodoObj("Feed the cat"),
  new TodoObj("Learn how to code good"),
];

function createList(items) {
  console.log(items);
  let itemsList = items.map(
    (item, i) => {
      return (`
        <li class="todo__item">
          <input type="checkbox" id="todo${i}" data-index="${i}" ${item.isDone()
        ? "checked"
        : ""} />
          <label for="todo${i}">
            <img src="./img/check.svg" class="todo__done" data-index="${i}" />
            <div class="todo__text">${item.getTitle()}</div>
            <span class="todo__delete" data-index="${i}">Delete</span>
          </label>
        </li>
      `)
    }
  ).join("");
  todoList.innerHTML = itemsList 
}
createList(items);

let submit = document.querySelector("form")
submit.addEventListener('submit', addNewItem)

function addNewItem(event) {
  event.preventDefault()
  let newTodo = document.querySelector('input').value
  console.log(newTodo);
  items.push(new TodoObj(newTodo))
  document.querySelector(".todo__add").reset();
  createList(items)
}

let deleteBtns = document.querySelectorAll('span')

deleteBtns.forEach(btn => btn.addEventListener('click', deleteItem))

function deleteItem(event) {
  event.preventDefault()
  let index = event.target.dataset.index
  items.splice(index, 1)
  createList(items)
  console.log(items);
}