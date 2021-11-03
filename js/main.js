window.onload = function () {
  let startPageContainer = document.createElement("div");
  startPageContainer.id = "startPageContainer";
  document.body.appendChild(startPageContainer);

  myToDoList();

  start();

  //övning 2 - print to innerHTML, bygga på en lista här?
  function start() {
    let calculateButton = document.getElementById("buttonToCalculate");
    calculateButton.addEventListener("click", handleCalculation);
  }
  function handleCalculation() {
    numberTwo = document.getElementById("secondNumberInput").value;
    result = document.getElementById("result").innerHTML = numberTwo;
    document.getElementById("result").innerHTML;
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
      let span = document.createElement("span");
      let txt = document.createTextNode("\u00D7");
      span.className = "closeButton";
      span.appendChild(txt);
      removeFromList[i].appendChild(span);
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
