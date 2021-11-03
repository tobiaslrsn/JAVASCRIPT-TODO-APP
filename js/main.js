window.onload = function () {
  let startPageContainer = document.createElement("div");
  startPageContainer.id = "startPageContainer";
  document.body.appendChild(startPageContainer);

  myToDoList();

  function myToDoList() {
    let listHeader = "En todo-lista";
    let listHeaderH1 = document.createElement("h1");
    listHeaderH1.className = "listHeaderH1";
    listHeaderH1.innerHTML = listHeader;

    let myListOfTodos = [
      "list_item1",
      "list_item2",
      "list_item3",
      "list_item4",
      "list_item5",
    ];

    let myToDoListUl = document.createElement("ul");
    myToDoListUl.className = "listSection";

    for (let i = 0; i < myListOfTodos.length; i++) {
      let myToDoListLi = document.createElement("li");
      myToDoListLi.className = "theList";
      myToDoListLi.innerHTML = myListOfTodos[i];

      myToDoListUl.appendChild(myToDoListLi);
    }

    document.getElementById("startPageContainer").appendChild(listHeaderH1);
    document.getElementById("startPageContainer").appendChild(myToDoListUl);
  }
};
