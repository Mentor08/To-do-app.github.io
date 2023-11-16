const inputBox = document.querySelector(".input");
const addBtn = document.querySelector(".addbtn");
const listWrapper = document.querySelector(".list_wrapper");

addBtn.addEventListener("click", function () {
  if (inputBox.value !== "") {
    let list = document.createElement("div");

    let li = document.createElement("li");
    li.innerHTML = `${inputBox.value.trim()}`;

    let span = document.createElement("span");
    span.classList = "del";
    span.innerHTML = "X";

    list.appendChild(li);
    list.appendChild(span);

    listWrapper.appendChild(list);
    inputBox.value = "";
    inputBox.focus();

    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    span.addEventListener("click", () => {
      list.remove();
    });
  } else {
    alert("Please, enter a task");
  }
});
