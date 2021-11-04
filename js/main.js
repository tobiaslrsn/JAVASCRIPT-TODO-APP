window.onload = function () {
  let toDoListContainer = document.createElement("div");
  toDoListContainer.id = "startPageContainer";
  document.body.appendChild(toDoListContainer);

  handleAddToList();
  theBeautifulToDoList();

  function handleAddToList() {
    let addInputValueToListButton = document.getElementById("toDo_add-btn");
    addInputValueToListButton.addEventListener("click", handleAddToList);

    let addInputValueToList = document.getElementById("toDo_inputField").value;
    let whatsBeenAddedToList = (document.getElementById("addedToDo").innerHTML =
      addInputValueToList);

    document.getElementById("addedToDo").innerHTML;
    console.log(whatsBeenAddedToList);
  }

  function handleAddToList(addListItems) {
    let getInputValue = document.getElementById("toDo_inputField");
    let getInputButton = document.getElementById("toDo_add-btn");

    getInputButton.addEventListener("click", () => {
      let myNewValue = getInputValue.value;
      addListItems.innerHTML = myNewValue;

      theBeautifulToDoList();
      console.log(addListItems);
    });
  }

  //hårdkodad lista
  function theBeautifulToDoList() {
    let addListItems = [
      "list_item1",
      "lo",
      "list_ifasgjdjs ddjjdd dddjjdjd agjsjgbdugsdg gsdgjsdj djdjtem3",
      "list_item4",
      "list_item5",
    ];
    handleAddToList(addListItems);

    //tryck ut hårdkodade listan
    let listContainerUl = document.createElement("ul");
    listContainerUl.className = "listSection";

    for (let i = 0; i < addListItems.length; i++) {
      let listContainerContentLi = document.createElement("li");
      listContainerContentLi.className = "theList";
      listContainerContentLi.innerHTML = addListItems[i];
      listContainerUl.appendChild(listContainerContentLi);
    }
    document.getElementById("startPageContainer").appendChild(listContainerUl);

    //Ta bort från listan
    let removeListItems = document.getElementsByTagName("li");

    for (i = 0; i < removeListItems.length; i++) {
      let closeButton = document.createElement("div");
      let clickSectionToRemoveListItems = document.createElement("p");
      clickSectionToRemoveListItems.innerHTML = "DONE";
      closeButton.className = "closeButton";

      closeButton.appendChild(clickSectionToRemoveListItems);
      removeListItems[i].appendChild(closeButton);
    }

    let onClickRemove = document.getElementsByClassName("closeButton");
    for (i = 0; i < onClickRemove.length; i++) {
      onClickRemove[i].onclick = function () {
        let closeButton = this.parentElement;
        closeButton.style.display = "none";

        console.log("Task is done and gone.");
      };
    }
  }
  //Skriv om på Mitt sätt:
};
