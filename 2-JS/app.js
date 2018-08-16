const todoList = document.querySelector(".todo__list")
const todoForm = document.querySelector(".todo__add")

class TodoObj{
    constructor(title = "", done = false) {
      this.title = title
      this.done = false
    }
    setTitle(title) {
      this.title = title
    }
    getTitle() {
      return this.title
    }
    setDone(done) {
      this.done = !this.done
    }
    isDone() {
      return this.done
    }
}

let items = [
    new TodoObj("Learn CSS Grid Layout", true),
    new TodoObj("Feed the cat"),
    new TodoObj("Learn how to code good"),
]


const submitTodo = e => {
  e.preventDefault()
  let newTodo = document.querySelector('input').value
  items.push(new TodoObj(newTodo))
  saveList(items)
  document.querySelector(".todo__add").reset()
}

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
    .join("")
}

const toggleDone = e => {
  const el = e.target
  if (!el.classList.contains("todo__done")) return
  const index = el.dataset.index
  items[index].setDone(!items[index].isDone())
  let todos = document.querySelectorAll('.todo__text')
  if(items[index].done) {
    todos[index].classList.toggle( 'done')
  } else {
    todos[index].className = 'todo__text'
  }
}

const removeSingle = e => {
  const el = e.target
  const index = el.dataset.index
  if (!el.classList.contains("todo__delete") || !items[index].done) return
  spliceItem(index)
}

const spliceItem = index => {
  items.splice(index, 1)
  saveList(items)
}

const saveList = (items) => {
  createList(items, todoList)
}

const initialize = () => {
  todoList.addEventListener("click", toggleDone)
  todoList.addEventListener("click", removeSingle)
  todoForm.addEventListener("submit", submitTodo)
  console.log(items)
  createList(items, todoList)
}

initialize()
