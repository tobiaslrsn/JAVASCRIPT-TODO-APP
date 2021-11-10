/*
Fråga och fixa:
console.log vid borttagande av todo skriver ut den senaste inskrivna. 
Styling-fixes:
todo och knappar ska ligga snyggare.
*/
class Todo {
  constructor(todoItem) {
    this.listItem = todoItem;
    this.done = false;
  }
}

let todo1 = new Todo("Handla");
let todo2 = new Todo("Laga mat");
let todos = [todo1, todo2];

window.onload = () => {
  let todoListContainer = document.createElement("div");
  todoListContainer.id = "startPageContainer";
  document.body.appendChild(todoListContainer);

  theBeautifulToDoList();

  let addInputValueToListButton = document.getElementById("toDo_add-btn");
  addInputValueToListButton.addEventListener("click", handleAddToList);
};

function handleAddToList() {
  let getInputValue = document.getElementById("toDo_inputField");
  let myNewValue = getInputValue.value;
  let userTodo = new Todo(myNewValue);

  todos.push(userTodo);

  theBeautifulToDoList();
  console.log(todos);
}

function theBeautifulToDoList() {
  let unorderedListContainer = document.createElement("ul");
  unorderedListContainer.className = "listSection";
  document.getElementById("startPageContainer").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let listItems = document.createElement("li");
    let listItemParagraph = document.createElement("p");

    listItems.className = "theList";
    listItemParagraph.className = "listParagraph";
    listItemParagraph.innerHTML = todos[i].listItem;
    //__________________________________________________________
    //Tar bort från skärmen nedan (saker behöver döpas om)

    let checkTodo = document.createElement("div");
    checkTodo.className = "doneButton";

    let checkedItem = document.createElement("p");
    checkedItem.innerHTML = "✓"; // BOCKA AV OCH PÅ

    unorderedListContainer.appendChild(listItems);
    checkTodo.appendChild(checkedItem);
    listItems.appendChild(listItemParagraph);

    checkTodo.addEventListener("click", () => {
      todos[i].done = !todos[i].done; //true/false clickevent

      theBeautifulToDoList();
    });

    listItems.appendChild(checkTodo);
    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);

    if (todos[i].done === true) {
      listItems.className = "theList done";
    }
    let removeTodo = document.createElement("div");
    removeTodo.className = "closeButton";
    let removedItem = document.createElement("p");
    removedItem.innerHTML = "X";

    unorderedListContainer.appendChild(listItems);
    removeTodo.appendChild(removedItem);

    removeTodo.addEventListener("click", () => {
      todos.splice(i, 1);

      theBeautifulToDoList();

      console.log(
        `${
          document.getElementById("toDo_inputField").value
        } är borttagen, bra jobbat!`
      );
    });
    listItems.appendChild(removeTodo);
    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);
  }
  console.log("Saker att bocka av:" + " " + todos);
}
