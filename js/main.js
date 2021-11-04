window.onload = function () {
  let startPageContainer = document.createElement("div");
  startPageContainer.id = "startPageContainer";
  document.body.appendChild(startPageContainer);

  start();
  myToDoList();

  //övning 2 - print to innerHTML, bygga på en lista här?
  function start() {
    let calculateButton = document.getElementById("toDo_add-btn");
    calculateButton.addEventListener("click", handleCalculation);
  }
  function handleCalculation() {
    let addInputToList = document.getElementById("toDo_inputField").value;
    let personsAddedToDo = (document.getElementById("addedToDo").innerHTML =
      addInputToList);
    document.getElementById("addedToDo").innerHTML;
    console.log(personsAddedToDo);
  }

  //hårdkodad lista
  function myToDoList() {
    let myListOfTodos = [
      "list_item1",
      "list_item2",
      "list_item3",
      "list_item4",
      "list_item5",
    ];
    //tryck ut hårdkodade listan
    let myToDoListUl = document.createElement("ul");
    myToDoListUl.className = "listSection";

    for (let i = 0; i < myListOfTodos.length; i++) {
      let myToDoListLi = document.createElement("li");
      myToDoListLi.className = "theList";
      myToDoListLi.innerHTML = myListOfTodos[i];
      myToDoListUl.appendChild(myToDoListLi);
    }

    document.getElementById("startPageContainer").appendChild(myToDoListUl);
    let removeFromList = document.getElementsByTagName("li");

    for (i = 0; i < removeFromList.length; i++) {
      let div = document.createElement("div");
      let deleteToDoSymbol = document.createTextNode("\u00D7");
      div.className = "closeButton";
      div.appendChild(deleteToDoSymbol);
      removeFromList[i].appendChild(div);
    }

    let closeButton = document.getElementsByClassName("closeButton");
    for (i = 0; i < closeButton.length; i++) {
      closeButton[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";

        console.log("Task is done and gone.");
      };
    }
  }
};
