const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const clearButton = document.querySelector(".btn-clear");

nameInput.addEventListener("input", (event) => {
  let inputText = event.currentTarget.value.trim();
  if (inputText === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputText;
  }
});
nameInput.addEventListener("blur", () => {
  nameInput.value = "";
});
nameInput.addEventListener("focus", () => {
  if (nameOutput.textContent != "Anonymous") {
    nameInput.value = nameOutput.textContent;
  }
});

clearButton.addEventListener("click", () => {
  nameOutput.textContent = "Anonymous";
});
