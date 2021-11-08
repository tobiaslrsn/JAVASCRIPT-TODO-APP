/*
Frågor:
*/

window.onload = () => {
  // varför funkar detta istället för function? vad ska användas?
  let toDoListContainer = document.createElement("div");
  toDoListContainer.id = "startPageContainer";
  document.body.appendChild(toDoListContainer);

  theBeautifulToDoList();

  let addInputValueToListButton = document.getElementById("toDo_add-btn");
  addInputValueToListButton.addEventListener("click", handleAddToList);

  let addInputValueToList = document.getElementById("toDo_inputField").value;
  let whatsBeenAddedToList = document.getElementById("toDo_inputField"); // Hitta element för att SEN ändra elementet
  whatsBeenAddedToList.innerHTML = addInputValueToList;

  document.getElementById("toDo_inputField");
};

function handleAddToList() {
  let getInputValue = document.getElementById("toDo_inputField"); //hitta input
  let myNewValue = getInputValue.value; //hitta texten i input
  addListItems.push(myNewValue); //lägg till
  if (myNewValue === "") addListItems.pop(myNewValue);
  {
    alert("Ingen behöver göra ingenting, fyll i listan");
  }

  theBeautifulToDoList();
  console.log("Saker att bocka av:" + " " + addListItems);
  // });
}

//hårdkodad lista ( LISTOR SKA ALLTID VARA I ROTEN AV FILEN.)
// Dessa vill jag att det ska stå vilken man bockar av i consolen, nu är det tomt.
let addListItems = [
  "list_item1",
  "list_item_2",
  "list_ithahaha hahahah ashahhfahg aghahhah ahahaha ahahahhaem_3",
  "list_item_4",
  "list_item_5",
];
console.log("Saker att bocka av:" + " " + addListItems);

function theBeautifulToDoList() {
  //tryck ut hårdkodade listan
  let listContainerUl = document.createElement("ul");
  listContainerUl.className = "listSection";
  document.getElementById("startPageContainer").innerHTML = ""; //tömmer i containern

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
      closeButton.remove("li");

      //Nedan ändrar allt till "Ångrat dig?" hur får jag att det bara blir den jag klickar på?
      /* 
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
        clickSectionToRemoveListItems.innerHTML = "Ångrat dig?";
        closeButton.className = "closeButton";
        closeButton.appendChild(clickSectionToRemoveListItems);

        closeButton.addEventListener("click", () => {});

        listContainerContentLi.appendChild(closeButton);
      } */

      console.log(
        document.getElementById("toDo_inputField").value +
          " " +
          "är avbockad, bra jobbat!"
      ); //upprepar bara tidigare i consol.log lös detta.
    };
  }
}
