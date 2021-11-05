/*
Frågor:
Ul-Li loopproblemet få ny input att hamna överst
*/

window.onload = function () {
  let toDoListContainer = document.createElement("div");
  toDoListContainer.id = "startPageContainer";
  document.body.appendChild(toDoListContainer);

  theBeautifulToDoList();

  let addInputValueToListButton = document.getElementById("toDo_add-btn");
  addInputValueToListButton.addEventListener("click", handleAddToList);

  let addInputValueToList = document.getElementById("toDo_inputField").value;
  let whatsBeenAddedToList = (document.getElementById(
    "toDo_inputField"
  ).innerHTML = addInputValueToList);

  document.getElementById("toDo_inputField");
  console.log(whatsBeenAddedToList);
};

function handleAddToList() {
  let getInputValue = document.getElementById("toDo_inputField"); //hitta input
  let myNewValue = getInputValue.value; //hitta texten i input
  addListItems.push(myNewValue); //lägg till

  theBeautifulToDoList();
  console.log(addListItems);
  // });
}

//hårdkodad lista ( LISTOR SKA ALLTID VARA I ROTEN AV FILEN.)
let addListItems = [
  /*   "list_item1",
  "list_item_2",
  "list_ithahaha hahahah ashahhfahg aghahhah ahahaha ahahahhaem_3",
  "list_item_4",
  "list_item_5", */
];

function theBeautifulToDoList() {
  //tryck ut hårdkodade listan
  let listContainerUl = document.createElement("ul");
  listContainerUl.className = "listSection";
  document.getElementById("startPageContainer").innerHTML = ""; //tömmer containern

  for (let i = 0; i < addListItems.length; i++) {
    let listContainerContentLi = document.createElement("li");
    listContainerContentLi.className = "theList";
    listContainerContentLi.innerHTML = addListItems[i];
    listContainerUl.appendChild(listContainerContentLi);

    let closeButton = document.createElement("div");
    let clickSectionToRemoveListItems = document.createElement("p");
    clickSectionToRemoveListItems.innerHTML = "DONE";
    closeButton.className = "closeButton";
    closeButton.appendChild(clickSectionToRemoveListItems);

    closeButton.addEventListener("click", () => {});

    listContainerContentLi.appendChild(closeButton);
  }
  document.getElementById("startPageContainer").appendChild(listContainerUl);

  //Ta bort från listan
  // let removeListItems = document.getElementsByTagName("li");

  // for (i = 0; i < removeListItems.length; i++) {
  //   let closeButton = document.createElement("div");
  //   let clickSectionToRemoveListItems = document.createElement("p");
  //   clickSectionToRemoveListItems.innerHTML = "DONE";
  //   closeButton.className = "closeButton";

  //   closeButton.appendChild(clickSectionToRemoveListItems);
  //   removeListItems[i].appendChild(closeButton);
  // }

  let onClickRemove = document.getElementsByClassName("closeButton");
  for (i = 0; i < onClickRemove.length; i++) {
    onClickRemove[i].onclick = function () {
      let closeButton = this.parentElement;
      closeButton.style.display = "none";

      console.log("Task is done and gone."); //
    };
  }

  //Skriv om ovan på Mitt sätt:
}
