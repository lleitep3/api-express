
function renderTodoList (todoList) {
  for (const todo of todoList) {
    renderTodo(todo)
  }
}

function renderTodo(todo) {
  const olElement = document.querySelector('.todo-box ol')
  olElement.innerHTML += `<li>${todo.text}</li>`
}

async function loadTodoList() {
  const url = 'http://localhost:3000/api/todo/'

  const todoList = await fetch(url).then((retorno) => retorno.json())

  renderTodoList(todoList)
}

/* async function loadTodoList() {
  fetch('http://localhost:3000/api/todo/').then((retorno) => {
    retorno.json().then((todoList) =>  {

      console.log(todoList)

    })
  })
}
 */

// const resultado = fetch('http://localhost:3000/api/todo/')

// resultado.then((response) => {
//   response.json().then((dados) => {
//     console.log(dados)
//   })
// })


function init() {

  loadTodoList()
}

init()