/*
Frågor:
*/

window.onload = () => {
  // varför funkar detta istället för function? vad ska användas? vad är bäst?
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
  }

  theBeautifulToDoList();
  console.log("Saker att bocka av:" + " " + addListItems); // ligger fortfarande kvar i console
  // });
}

//hårdkodad lista ( LISTOR SKA ALLTID VARA I ROTEN AV FILEN.)
let addListItems = [
  "list_item_1",
  "list_item_2",
  "list_item_3",
  "list_item_4",
  "list_item_5",
];

function theBeautifulToDoList() {
  //tryck ut hårdkodade listan
  let unorderedListContainer = document.createElement("ul");
  unorderedListContainer.className = "listSection";
  document.getElementById("startPageContainer").innerHTML = ""; //tömmer i containern

  for (let i = 0; i < addListItems.length; i++) {
    let listItems = document.createElement("li");
    listItems.className = "theList";
    listItems.innerHTML = addListItems[i];
    console.log("Saker att bocka av:" + " " + addListItems[i]);

    unorderedListContainer.appendChild(listItems);

    let removeToDo = document.createElement("div");
    let removeListItem = document.createElement("p");
    removeListItem.innerHTML = "KLAR";
    removeToDo.className = "closeButton";
    removeToDo.appendChild(removeListItem);

    removeToDo.addEventListener("click", () => {});

    listItems.appendChild(removeToDo);

    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);

    removeToDo = document.getElementsByTagName("ul");
    var r;
    for (r = 0; r < removeToDo.length; r++) {
      removeToDo[r].appendChild(listItems);
    }
  }

  let onClickRemove = document.getElementsByClassName("closeButton");
  for (i = 0; i < onClickRemove.length; i++) {
    onClickRemove[i].onclick = function () {
      let removeToDo = this.parentElement;
      removeToDo.remove();

      //Nedan ändrade... allt till "Ångrat dig?" hur får jag att det bara blir den jag klickar på?

      console.log(
        `${
          document.getElementById("toDo_inputField").value
        } är avbockad, bra jobbat!`
        /*  document.getElementById("toDo_inputField").value +
          " " +
          "är avbockad, bra jobbat!"
      );*/
      ); //upprepar bara tidigare i consol.log lös detta.
    };
  }
}
