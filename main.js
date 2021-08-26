//get the elements

let input = document.getElementById(`input-text`);
let buttons = document.querySelectorAll(`.buttons span`);
let result = document.querySelector(`.results`);

buttons.forEach((item) => {
  item.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`check-item`)) {
      checkItem();
    }
    if (e.target.classList.contains(`add-item`)) {
      addItem();
    }
    if (e.target.classList.contains(`delete-item`)) {
      deleteItem();
    }
    if (e.target.classList.contains(`show-item`)) {
      showItem();
    }
  })
});

function checkItem() {
  if (input.value !== "") {

    if (localStorage.getItem(input.value)) {
      result.innerHTML = `Found the Item Called <span>${input.value}</span>`;
    }
    else {
      result.textContent = `Didn't Found the Item`;
    }

  }
  else {
    result.textContent = `Input can't be empty`;
  }

}
function addItem() {
  if (input.value !== "") {

    localStorage.setItem(input.value, "value");
    result.innerHTML = `Added New Item Called <span>${input.value}</span>`;
    input.value = "";

  }
  else {
    result.textContent = `Input can't be empty`;
  }
}
function deleteItem() {
  if (input.value !== "") {

    if (localStorage.getItem(input.value)) {

      localStorage.removeItem(input.value)
      result.innerHTML = `Deleted the Item Called <span>${input.value}</span>`;
      input.value = "";

    }
    else {
      result.textContent = `Didn't Found the Item`;
    }

  }
  else {
    result.textContent = `Input can't be empty`;
  }
}
function showItem() {

  if (localStorage.length) {

    result.innerHTML = "";
    let ul = document.createElement("ul");
    result.append(ul);

    console.log(localStorage.length);
    for (let [key, value] of Object.entries(localStorage)) {
      
      ul.innerHTML += `<li class="keys">${key}</li>`;
    }

  }
  else {
    result.textContent = `Local Storage is Empty`;
  }
}