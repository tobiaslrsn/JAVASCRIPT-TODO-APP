/*
Fråga och fixa:
console.log vid borttagande av todo skriver ut den senaste inskrivna. 
Lägga till todo anger undefined.
bocka av todo - Den ändrar dem hårdkordade, men inte undefined när man ska lägga till?
Göra så att "stryk över" samtidigt ändras till "ångra" och tillbaka. if/else?

Styling-fixes

*/
//ANDRA ( CLASS OBJECTS)
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
  todos.push(myNewValue);

  if (myNewValue === "") todos.push(myNewValue);
  {
  }
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

    let removeTToDo = document.createElement("div");
    removeTToDo.className = "doneButton";

    let removeTListItem = document.createElement("p");
    removeTListItem.innerHTML = "STRYK ÖVER";

    unorderedListContainer.appendChild(listItems);
    removeTToDo.appendChild(removeTListItem);
    listItems.appendChild(listItemParagraph);

    removeTToDo.addEventListener("click", () => {
      todos[i].done = true;

      theBeautifulToDoList();

      console.log(
        `${
          document.getElementById("toDo_inputField").value
        } är avbockad, bra jobbat!`
      );
    });

    listItems.appendChild(removeTToDo);
    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);

    //Markerar li som done i domen och stryker över ALLT!?
    //Fixa så den bara stryker över texten samt går att ändra tillbaka, göra paragraph?
    if (todos[i].done === true) {
      listItems.className = "theList done";
    }
    let overlineTodo = document.createElement("div");
    overlineTodo.className = "closeButton";
    let overlin = document.createElement("p");
    overlin.innerHTML = "TA BORT";

    unorderedListContainer.appendChild(listItems);
    overlineTodo.appendChild(overlin);

    overlineTodo.addEventListener("click", () => {
      todos.splice(i, 1);

      theBeautifulToDoList();

      console.log(
        `${
          document.getElementById("toDo_inputField").value
        } är borttagen, bra jobbat!`
      );
    });
    listItems.appendChild(overlineTodo);
    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);
  }
  console.log("Saker att bocka av:" + " " + todos);
}

//FÖRSTA ( UL LI )
/* window.onload = () => {
  let todoListContainer = document.createElement("div");
  todoListContainer.id = "startPageContainer";
  document.body.appendChild(todoListContainer);

  theBeautifulToDoList();

  let addInputValueToListButton = document.getElementById("toDo_add-btn");
  addInputValueToListButton.addEventListener("click", handleAddToList);

  let addInputValueToList = document.getElementById("toDo_inputField").value;
  let whatsBeenAddedToList = document.getElementById("toDo_inputField"); // Hitta element för att SEN ändra elementet
  whatsBeenAddedToList.innerHTML = addInputValueToList;
};

function handleAddToList() {
  let getInputValue = document.getElementById("toDo_inputField"); //hitta input
  let myNewValue = getInputValue.value; //hitta texten i input
  addListItems.push(myNewValue); //lägg till

  if (myNewValue === "") addListItems.pop(myNewValue);
  {
  }
  theBeautifulToDoList();
  console.log(addListItems);
}

//hårdkodad lista ( LISTOR SKA ALLTID VARA I ROTEN AV FILEN.)
let addListItems = ["list_item_1", "list_item_2", "list_item_3"];

function theBeautifulToDoList() {
  //tryck ut hårdkodade listan
  let unorderedListContainer = document.createElement("ul");
  unorderedListContainer.className = "listSection";
  document.getElementById("startPageContainer").innerHTML = ""; //tömmer i containern

  for (let i = 0; i < addListItems.length; i++) {
    let listItems = document.createElement("li");
    listItems.className = "theList";
    listItems.innerHTML = addListItems[i];

    let overlineTodo = document.createElement("div");
    overlineTodo.className = "closeButton";

    let overlin = document.createElement("p");
    overlin.innerHTML = "KLAR";

    unorderedListContainer.appendChild(listItems);
    overlineTodo.appendChild(overlin);

    overlineTodo.addEventListener("click", () => {
      addListItems.splice(i, 1);
      theBeautifulToDoList();

      console.log(
        `${
          document.getElementById("toDo_inputField").value
        } är avbockad, bra jobbat!`
      );
    });

    listItems.appendChild(overlineTodo);

    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);
  }
  console.log("Saker att bocka av:" + " " + addListItems);
} */
