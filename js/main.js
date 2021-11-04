window.onload = function () {
  let startPageContainer = document.createElement("div");
  startPageContainer.id = "startPageContainer";
  document.body.appendChild(startPageContainer);

  handleCalculation();
  myToDoList();

  //övning 2 - print to innerHTML, bygga på en lista här?
  /*   function start() {
    
  } */
  /* function handleCalculation() {
    let calculateButton = document.getElementById("toDo_add-btn");
    calculateButton.addEventListener("click", handleCalculation);

    let addInputToList = document.getElementById("toDo_inputField").value;
    let personsAddedToDo = (document.getElementById("addedToDo").innerHTML =
      addInputToList);
    document.getElementById("addedToDo").innerHTML;
    console.log(personsAddedToDo);
  } */

  function handleCalculation(myListOfTodos) {
    let getInputValue = document.getElementById("toDo_inputField");
    let getInputButton = document.getElementById("toDo_add-btn");

    getInputButton.addEventListener("click", () => {
      let myNewValue = getInputValue.value;
      myListOfTodos.push(myNewValue);
      myToDoList();
      console.log(myListOfTodos);
    });
  }
  //hårdkodad lista
  function myToDoList() {
    let myListOfTodos = [
      "list_item1",
      "lo",
      "list_ifasgjdjs ddjjdd dddjjdjd djdjdj asgjajgjag agjsjgbdugsdg gsdgjsdj djdjtem3",
      "list_item4",
      "list_item5",
    ];
    handleCalculation(myListOfTodos);
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
      let deleteSymbol = document.createElement("p");
      deleteSymbol.innerHTML = "DONE";
      div.className = "closeButton";
      div.appendChild(deleteSymbol);
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

    //Skriv om på Mitt sätt:
  }
};
