let todoList = [{
  name: 'Check email',
  dueDate: '2025-03-6'
}];

//renders on the page
render();

function render(){
  //accumulator pattern vaiable
  let todoListHTML = '';

  for (let i = 0; i< todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button onclick ="todoList.splice(${i}, 1);
      render();"
      class = "delete-todo-button">Delete</button>
    `;
    todoListHTML += html;

  }

  document.querySelector('.todo-container').innerHTML = todoListHTML;
}
//newtodo adder function
function addTodo(){
  let inputElement = document.querySelector('.js-input');
  let name = inputElement.value;

  const dateInput = document.querySelector('.js-date');
  const dueDate = dateInput.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  console.log(todoList)
  inputElement.value = '';
  render(); 
};