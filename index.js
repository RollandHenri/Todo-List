/*** Variables ***/

const form = document.querySelector("form");

const list = document.getElementById("list");
console.log(list);

/*** Function ***/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li> ${text.value} </li> `;
  text.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-check1")) {
    e.target.remove();
  } else {
    e.target.classList.add("list-check1");
  }
});
