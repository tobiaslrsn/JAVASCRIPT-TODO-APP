class Todo {
  constructor(todoItem) {
    this.listItem = todoItem;
    this.done = false;
  }
}

let todo1 = new Todo(
  "Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter)."
);
let todo2 = new Todo(
  "Presentera denna på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista."
);
let todo3 = new Todo(
  "Implementera klickhändelse för att hantera borttagandet av en todo. "
);
let todo4 = new Todo(
  "Todo tas bort från skärmen och markeras som klar i listan."
);
let todo5 = new Todo(
  "Implementera ett valfritt grafiskt ramverk till din todolista,t.ex. bootstrap, flexeller liknande."
);
let todo6 = new Todo(
  "Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen."
);
let todo7 = new Todo(
  "Skapa ett formulär som tillåter att en användare skapar nya todos efterhand."
);
let todo8 = new Todo("Kunna sortera ordningen på dina todos.");

let todos = [todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8];

window.onload = () => {
  let todoListContainer = document.createElement("div");
  todoListContainer.id = "startPageContainer";
  document.body.appendChild(todoListContainer);

  let addInputValueToListButton = document.getElementById("toDo_add-btn");
  addInputValueToListButton.addEventListener("click", handleAddToList);

  sortAbc();
  myTodoList();
};

function handleAddToList() {
  let getInputValue = document.getElementById("toDo_inputField");
  let myNewValue = getInputValue.value;
  let userTodo = new Todo(myNewValue);
  todos.push(userTodo);

  myTodoList();
}

function myTodoList() {
  let unorderedListContainer = document.createElement("ul");
  unorderedListContainer.className = "listSection";
  document.getElementById("startPageContainer").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let listItems = document.createElement("li");
    let listItemParagraph = document.createElement("p");

    listItems.className = "todo-task";
    listItemParagraph.className = "listParagraph";
    listItemParagraph.innerHTML = todos[i].listItem;

    let checkTodo = document.createElement("div");
    checkTodo.className = "doneButton";

    let checkedItem = document.createElement("p");
    checkedItem.innerHTML = "✓";

    unorderedListContainer.appendChild(listItems);
    checkTodo.appendChild(checkedItem);
    listItems.appendChild(listItemParagraph);

    checkTodo.addEventListener("click", () => {
      todos[i].done = !todos[i].done;

      myTodoList();
    });

    listItems.appendChild(checkTodo);
    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);

    if (todos[i].done === true) {
      listItems.className = "todo-task done";
    }

    let removeTodo = document.createElement("div");
    removeTodo.className = "closeButton";
    let removedItem = document.createElement("p");
    removedItem.innerHTML = "X";

    unorderedListContainer.appendChild(listItems);
    removeTodo.appendChild(removedItem);

    removeTodo.addEventListener("click", () => {
      todos.splice(i, 1);

      myTodoList();
    });

    listItems.appendChild(removeTodo);
    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);
  }
}

function sortAbc() {
  let sortAbcButton = document.getElementById("sort-abc-button");
  sortAbcButton.addEventListener("click", () => {
    todos.sort((a, b) => {
      if (a.listItem.toLowerCase() > b.listItem.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
    myTodoList();
  });
}
